import { Container, Action } from "@/components/marketing/Primitives";
export default function NotFound() {
  return (
    <section className="empty-page">
      <Container>
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>
          This address may have changed, or the page is no longer available.
          Let’s get you back to a useful starting point.
        </p>
        <div className="actions">
          <Action href="/">Return home</Action>
          <Action href="/services" variant="outline">
            Explore services
          </Action>
        </div>
      </Container>
    </section>
  );
}
