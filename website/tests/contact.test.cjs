const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const test = require('node:test');
const ts = require('typescript');

// Load the real TypeScript modules without adding a test-runner dependency.
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const resolve = (name) => name.startsWith('@/')
    ? load('src/' + name.slice(2) + '.ts')
    : name.startsWith('.')
      ? load(path.resolve(path.dirname(file), name) + '.ts')
      : require(name);
  vm.runInThisContext('(function(require,module,exports){' + code + '\n})', { filename: file })(resolve, module, module.exports);
  return module.exports;
}

test('enquiry validation, request boundaries and delivery outcomes', async () => {
  const originalFetch = global.fetch;
  const previousEnv = { ...process.env };
  try {
    delete process.env.VERCEL;
    delete process.env.CONTACT_PROVIDER;
    delete process.env.RESEND_API_KEY;
    const { validateEnquiry } = load('src/lib/contact-validation.ts');
    const data = {
      name: 'Website QA', email: 'qa@example.com', phone: '+91 90000 00000',
      userType: 'client', subject: 'Local automated test',
      message: 'This is an automated local test. No actual email is sent.', consent: true,
    };
    assert.deepEqual(validateEnquiry(data).errors, {});
    assert.equal(Object.keys(validateEnquiry({}).errors).length, 7);
    assert.ok(validateEnquiry({ ...data, email: 'bad-address' }).errors.email);
    assert.ok(validateEnquiry({ ...data, phone: '123' }).errors.phone);
    assert.ok(validateEnquiry({ ...data, subject: 'Hello\r\nBcc: injected' }).errors.subject);
    assert.ok(validateEnquiry({ ...data, message: 'x'.repeat(4001) }).errors.message);
    const { POST } = load('src/app/api/contact/route.ts');
    let sequence = 0;
    const request = (body = data, origin = 'http://127.0.0.1:3000', ip) => new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { origin, 'content-type': 'application/json', 'x-vercel-forwarded-for': ip || String(sequence++) },
      body: JSON.stringify({ ...body, requestId: '12345678-1234-1234-1234-123456789abc' }),
    });
    assert.equal((await POST(request(data, 'https://untrusted.invalid'))).status, 403);
    assert.equal((await POST(request({ ...data, consent: false }))).status, 422);
    assert.equal((await POST(request({ ...data, website: 'spam' }))).status, 400);
    assert.equal((await POST(request({ ...data, message: 'x'.repeat(21000) }))).status, 413);
    assert.equal((await POST(request())).status, 503);
    process.env.CONTACT_PROVIDER = 'resend';
    process.env.RESEND_API_KEY = 'local-test-only';
    process.env.CONTACT_FROM_EMAIL = 'test@example.com';
    let calls = 0;
    global.fetch = async (url, options) => {
      calls++;
      assert.equal(url, 'https://api.resend.com/emails');
      const body = JSON.parse(options.body);
      assert.deepEqual(body.to, ['nahtreek2@gmail.com']);
      assert.equal(body.reply_to, data.email);
      assert.match(options.headers['Idempotency-Key'], /^enquiry\//);
      return Response.json({ id: 'mock-accepted' });
    };
    const responses = await Promise.all([POST(request()), POST(request())]);
    assert.ok(responses.every(response => response.status === 200));
    assert.equal(calls, 1, 'concurrent duplicate requests must share a single delivery');
    global.fetch = async () => new Response('', { status: 500 });
    assert.equal((await POST(request())).status, 502);
    global.fetch = async () => { throw new Error('Network failure'); };
    assert.equal((await POST(request())).status, 502);
    for (let i = 0; i < 5; i++) await POST(request({}, undefined, 'rate-limit-test'));
    assert.equal((await POST(request({}, undefined, 'rate-limit-test'))).status, 429);
  } finally {
    global.fetch = originalFetch;
    for (const key of Object.keys(process.env)) if (!(key in previousEnv)) delete process.env[key];
    Object.assign(process.env, previousEnv);
  }
});
