import { articles } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

const S = {
  monoLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
  },
  bodyText: {
    fontFamily: "var(--font-body)",
    color: "var(--color-sepia)",
    lineHeight: 1.85,
    fontSize: "1.05rem",
  },
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug && a.tag === article.tag).slice(0, 2);

  const movementHref = article.tag === "Abolition" ? "/abolitionist" : article.tag === "Native Rights" ? "/native" : "/gazette";
  const movementLabel = article.tag === "Abolition" ? "Abolitionist Movement" : article.tag === "Native Rights" ? "Native American Advocacy" : "The Gazette";

  return (
    <div className="relative z-10" style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem" }}>

      {/* Breadcrumb */}
      <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", marginBottom: "2rem" }}>
        <Link href="/" style={{ color: "var(--color-brass)", textDecoration: "none" }}>Home</Link>
        <span style={{ margin: "0 0.5rem", opacity: 0.5 }}>·</span>
        <Link href={movementHref} style={{ color: "var(--color-brass)", textDecoration: "none" }}>{movementLabel}</Link>
        <span style={{ margin: "0 0.5rem", opacity: 0.5 }}>·</span>
        <span style={{ color: "var(--color-sepia)" }}>Dispatch</span>
      </p>

      {/* Tag + date */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span style={{
          ...S.monoLabel, fontSize: "0.58rem",
          color: article.tagColor,
          border: `1px solid ${article.tagColor}`,
          padding: "0.1rem 0.6rem",
        }}>
          {article.tag}
        </span>
        <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", opacity: 0.7 }}>
          {article.date}
        </span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
        fontWeight: 900,
        color: "var(--color-walnut)",
        lineHeight: 1.15,
        marginBottom: "1.25rem",
      }}>
        {article.title}
      </h1>

      {/* Rule */}
      <div style={{ borderTop: "3px double var(--color-walnut)", marginBottom: "1.5rem" }} />

      {/* Lede */}
      <p style={{
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "1.15rem",
        color: "var(--color-walnut)",
        lineHeight: 1.55,
        marginBottom: "2rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid var(--color-parchment-dk)",
      }}>
        {article.lede}
      </p>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
        {article.body.map((para, i) => (
          <p key={i} style={S.bodyText}>{para}</p>
        ))}
      </div>

      {/* Filed under */}
      <div style={{
        borderTop: "1px solid var(--color-parchment-dk)",
        paddingTop: "1.5rem",
        marginBottom: "2.5rem",
        display: "flex",
        gap: "0.75rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}>
        <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)" }}>Filed under:</span>
        <Link href={movementHref} style={{
          ...S.monoLabel, fontSize: "0.58rem",
          color: article.tagColor,
          border: `1px solid ${article.tagColor}`,
          padding: "0.15rem 0.6rem",
          textDecoration: "none",
        }}>
          {movementLabel}
        </Link>
        <Link href="/gazette" style={{
          ...S.monoLabel, fontSize: "0.58rem",
          color: "var(--color-brass)",
          border: "1px solid var(--color-brass)",
          padding: "0.15rem 0.6rem",
          textDecoration: "none",
        }}>
          The Gazette
        </Link>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <Link href="/gazette" style={{
          ...S.monoLabel,
          fontSize: "0.6rem",
          color: "var(--color-brass)",
          textDecoration: "none",
        }}>
          ← Return to the Gazette
        </Link>
      </div>

    </div>
  );
}