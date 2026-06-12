import { articles } from "@/lib/articles";
import Link from "next/link";
import { S } from "@/lib/styles";

export default function GazettePage() {
  return (
    <div className="relative z-10" style={{ maxWidth: "1140px", margin: "0 auto", padding: "2rem 1.5rem" }}>

      {/* Masthead */}
      <div style={{
        textAlign: "center",
        paddingBottom: "1rem",
        marginBottom: "1.25rem",
        borderBottom: "3px double var(--color-walnut)",
      }}>
        <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass)", marginBottom: "0.3rem" }}>
          Archive of All Dispatches
        </p>
        <h1 style={{ ...S.sectionTitle, fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>The Gazette</h1>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem", flexWrap: "wrap" }}>
          <Link href="/gazette/abolitionist" style={{ ...S.monoLabel, fontSize: "0.56rem", color: "var(--color-rust)", border: "1px solid var(--color-rust)", padding: "0.25rem 0.65rem", textDecoration: "none" }}>
            Abolitionist
          </Link>
          <Link href="/gazette/native" style={{ ...S.monoLabel, fontSize: "0.56rem", color: "var(--color-sage)", border: "1px solid var(--color-sage)", padding: "0.25rem 0.65rem", textDecoration: "none" }}>
            Native Rights
          </Link>
        </div>
      </div>

      {/* NYT-style grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0",
      }}>
        {/* Top featured row — first 2 articles large */}
        <div style={{
          gridColumn: "1 / 3",
          padding: "0 1.25rem 1.25rem 0",
          borderRight: "1px solid var(--color-parchment-dk)",
          borderBottom: "1px solid var(--color-parchment-dk)",
        }}>
          <span style={{ ...S.monoLabel, fontSize: "0.55rem", color: articles[0].tagColor, display: "block", marginBottom: "0.35rem" }}>
            {articles[0].tag}
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 700, color: "var(--color-walnut)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
            {articles[0].title}
          </h2>
          <p style={{ ...S.bodyText, fontSize: "0.875rem" }}>{articles[0].lede}</p>
          <span style={{ ...S.monoLabel, fontSize: "0.55rem", color: "var(--color-sepia)", opacity: 0.6, marginTop: "0.5rem", display: "block" }}>{articles[0].date}</span>
        </div>

        <div style={{
          padding: "0 0 1.25rem 1.25rem",
          borderBottom: "1px solid var(--color-parchment-dk)",
        }}>
          <span style={{ ...S.monoLabel, fontSize: "0.55rem", color: articles[1].tagColor, display: "block", marginBottom: "0.35rem" }}>
            {articles[1].tag}
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", lineHeight: 1.15, marginBottom: "0.5rem" }}>
            {articles[1].title}
          </h2>
          <p style={{ ...S.bodyText, fontSize: "0.8rem" }}>{articles[1].lede}</p>
          <span style={{ ...S.monoLabel, fontSize: "0.55rem", color: "var(--color-sepia)", opacity: 0.6, marginTop: "0.5rem", display: "block" }}>{articles[1].date}</span>
        </div>

        {/* Remaining articles — standard 3-col grid */}
        {articles.slice(2).map((a, i) => {
          const col = i % 3;
          return (
            <div
              key={a.slug}
              style={{
                padding: "1.25rem",
                paddingLeft: col === 0 ? 0 : "1.25rem",
                paddingRight: col === 2 ? 0 : "1.25rem",
                borderRight: col < 2 ? "1px solid var(--color-parchment-dk)" : "none",
                borderBottom: "1px solid var(--color-parchment-dk)",
              }}
            >
              <span style={{ ...S.monoLabel, fontSize: "0.52rem", color: a.tagColor, display: "block", marginBottom: "0.25rem" }}>
                {a.tag}
              </span>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--color-walnut)",
                lineHeight: 1.2,
                marginBottom: "0.4rem",
              }}>
                {a.title}
              </h3>
              <p style={{ ...S.bodyText, fontSize: "0.8rem", marginBottom: "0.4rem" }}>{a.lede}</p>
              <span style={{ ...S.monoLabel, fontSize: "0.52rem", color: "var(--color-sepia)", opacity: 0.6 }}>{a.date}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}