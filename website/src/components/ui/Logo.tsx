import Link from "next/link";
import Image from "next/image";
export function Logo({
  showText = true,
  showSlogan = true,
  className = "",
  link = true,
  href = "/",
  size = "md",
}: {
  showText?: boolean;
  showSlogan?: boolean;
  className?: string;
  link?: boolean;
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const content = (
    <>
      <Image
        className="brand-mark"
        src="/images/nahtreek-logo.png"
        width={58}
        height={58}
        alt=""
        unoptimized
      />
      {showText && (
        <span>
          <span className="brand-name">NAHTREEK</span>
          {showSlogan && (
            <span className="brand-tagline">FROM PLOT TO HOME</span>
          )}
        </span>
      )}
    </>
  );
  return link ? (
    <Link
      href={href}
      aria-label="NAHTREEK home"
      className={`brand ${className}`}
      data-size={size}
    >
      {content}
    </Link>
  ) : (
    <span className={`brand ${className}`} aria-label="NAHTREEK">
      {content}
    </span>
  );
}
