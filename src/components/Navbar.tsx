"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/abolitionist", label: "Abolitionist Movement" },
  { href: "/native", label: "Native American Advocacy" },
  { href: "/gazette", label: "The Gazette", isGazette: true },
  { href: "/timeline", label: "Timeline" },
  { href: "/sources", label: "Works Cited" },
];

const linkStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.62rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "var(--color-parchment-dk)",
  padding: "0.5rem 1.1rem",
  textDecoration: "none",
  borderRight: "1px solid rgba(154,112,32,0.2)",
  display: "inline-block",
  transition: "color 0.15s, background 0.15s",
  background: "none",
  border: "none",
  cursor: "pointer",
};

export default function Navbar() {
  const [gazetteOpen, setGazetteOpen] = useState(false);

  return (
    <header
      style={{ background: "var(--color-walnut)", borderBottom: "3px solid var(--color-brass)" }}
      className="relative z-50"
    >
      <div className="text-center py-6 px-4">
        <Link href="/" className="no-underline block">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 7vw, 5rem)",
              fontWeight: 900,
              color: "var(--color-parchment)",
              letterSpacing: "0.02em",
              lineHeight: 1,
              marginBottom: "0.4rem",
            }}
          >
            The Freedom Courier
          </h1>
        </Link>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "rgba(226,208,176,0.7)",
            fontStyle: "italic",
          }}
        >
          &ldquo;He is the freeman whom the truth makes free.&rdquo; &mdash; William Cowper
        </p>
      </div>

      <div style={{ borderTop: "3px double rgba(154,112,32,0.5)" }} className="mx-6" />

      <nav className="flex flex-wrap justify-center items-stretch py-1 px-4">
        {navLinks.map((link) =>
          link.isGazette ? (
            <div
              key={link.href}
              className="relative flex items-center"
              onMouseEnter={() => setGazetteOpen(true)}
              onMouseLeave={() => setGazetteOpen(false)}
            >
              <Link
                href={link.href}
                style={{ ...linkStyle, borderRight: "1px solid rgba(154,112,32,0.2)" }}
                className="hover:text-[var(--color-brass-lt)] hover:bg-[rgba(154,112,32,0.1)]"
              >
                {link.label} ▾
              </Link>
              {gazetteOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "var(--color-walnut)",
                    border: "1px solid var(--color-brass)",
                    borderTop: "2px solid var(--color-brass)",
                    minWidth: "220px",
                    zIndex: 100,
                  }}
                >
                  {[
                    { href: "/gazette", label: "View All" },
                    { href: "/gazette/abolitionist", label: "Abolitionist Dispatches" },
                    { href: "/gazette/native", label: "Native American Dispatches" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--color-parchment-dk)",
                        padding: "0.65rem 1.1rem",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(154,112,32,0.15)",
                      }}
                      className="hover:text-[var(--color-brass-lt)] hover:bg-[rgba(154,112,32,0.1)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.href}
              href={link.href!}
              style={linkStyle}
              className="hover:text-[var(--color-brass-lt)] hover:bg-[rgba(154,112,32,0.1)]"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}