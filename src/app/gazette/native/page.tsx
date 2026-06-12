import { articles } from "@/lib/articles";
import Link from "next/link";
import { S } from "@/lib/styles";

export default function NativeGazette() {
  const dispatches = articles.filter((a) => a.tag === "Native Rights");
  return (
    <div className="relative z-10" style={{ maxWidth: "1140px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <Link href="/gazette" style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass)", textDecoration: "none" }}>← All Dispatches</Link>
      </div>
      <div style={{ textAlign: "center", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "3px double var(--color-walnut)" }}>
        <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sage)", marginBottom: "0.3rem" }}>Native American Archive</p>
        <h1 style={{ ...S.sectionTitle, fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>Native American Dispatches</h1>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
        {dispatches.map((a, i) => {
          const col = i % 3;
          return (
            <div key={a.slug} style={{
              padding: "1.25rem",
              paddingLeft: col === 0 ? 0 : "1.25rem",
              paddingRight: col === 2 ? 0 : "1.25rem",
              borderRight: col < 2 ? "1px solid var(--color-parchment-dk)" : "none",
              borderBottom: "1px solid var(--color-parchment-dk)",
            }}>
              <span style={{ ...S.monoLabel, fontSize: "0.52rem", color: "var(--color-sage)", display: "block", marginBottom: "0.25rem" }}>{a.date}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 700, color: "var(--color-walnut)", lineHeight: 1.2, marginBottom: "0.4rem" }}>{a.title}</h3>
              <p style={{ ...S.bodyText, fontSize: "0.8rem" }}>{a.lede}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}