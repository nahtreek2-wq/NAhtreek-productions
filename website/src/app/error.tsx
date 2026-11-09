"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="empty-page">
      <div className="container">
        <span className="eyebrow">Something went wrong</span>
        <h1>We couldn’t load this page.</h1>
        <p>
          Please try again. If the problem continues, contact
          nahtreek2@gmail.com.
        </p>
        <button className="button primary" onClick={reset}>
          Try again
        </button>
      </div>
    </section>
  );
}
