import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { EMAIL } from "@/lib/site";
export function Footer() {
  const groups = [
    [
      "Product",
      ["Home app", "/for-clients"],
      ["Pro app", "/for-professionals"],
      ["AI project planner", "/for-clients#ai-planner"],
      ["Pricing", "/about#plans"],
    ],
    [
      "Explore",
      ["Services", "/services"],
      ["How it works", "/how-it-works"],
      ["About us", "/about"],
    ],
    [
      "Company",
      ["Contact", "/contact"],
      ["Privacy policy", "/privacy"],
      ["Terms of service", "/terms"],
    ],
  ] as const;
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Verified civil engineers and home-service professionals, planned
              with AI and tracked job by job.
            </p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          {groups.map(([title, ...links]) => (
            <nav key={title} aria-label={`Footer ${title}`}>
              <h2>{title}</h2>
              <ul>
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NAHTREEK. All rights reserved.</p>
          <span>
            Engineering decisions remain with qualified professionals.
          </span>
        </div>
      </div>
    </footer>
  );
}
