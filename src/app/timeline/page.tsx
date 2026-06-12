"use client";
import { useState, useEffect, useCallback } from "react";

const S = {
  monoLabel: { fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase" as const },
  sectionTitle: { fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-walnut)", lineHeight: 1.15 },
  bodyText: { fontFamily: "var(--font-body)", color: "var(--color-sepia)", lineHeight: 1.75 },
};

type TimelineEntry = { year: string; event: string; tag: "Abolition" | "Native Rights" | "Both" };

const entries: TimelineEntry[] = [
  { year: "~10,000 BCE", event: "Indigenous peoples establish complex, sovereign societies across the North American continent.", tag: "Native Rights" },
  { year: "1492", event: "European contact begins. Disease and colonization initiate catastrophic population collapse among Indigenous nations.", tag: "Native Rights" },
  { year: "1619", event: "First enslaved Africans arrive in English North America at Point Comfort, Virginia.", tag: "Abolition" },
  { year: "1675–1676", event: "Bacon's Rebellion leads colonial planters to harden racial slavery.", tag: "Both" },
  { year: "1688", event: "Germantown Quaker Petition — the first formal protest against slavery in the American colonies.", tag: "Abolition" },
  { year: "1739", event: "Stono Rebellion — one of the largest slave uprisings in colonial America.", tag: "Abolition" },
  { year: "1775–1783", event: "American Revolution. The Declaration of Independence asserts that 'all men are created equal' — a promise not extended to the enslaved or to Native nations.", tag: "Both" },
  { year: "1808", event: "International slave trade officially banned in the United States. Domestic trade continues and expands.", tag: "Abolition" },
  { year: "1820", event: "Missouri Compromise — Missouri admitted as a slave state, Maine as free; slavery barred north of 36°30′ in the Louisiana Territory.", tag: "Abolition" },
  { year: "1827", event: "Cherokee Nation adopts a written constitution. The Cherokee Phoenix newspaper begins publication.", tag: "Native Rights" },
  { year: "1830", event: "Indian Removal Act signed by President Jackson. William Lloyd Garrison launches The Liberator.", tag: "Both" },
  { year: "1831", event: "Nat Turner's Rebellion in Virginia — the deadliest slave uprising in American history.", tag: "Abolition" },
  { year: "1832", event: "Worcester v. Georgia — Supreme Court rules in favor of Cherokee sovereignty. Jackson defies the ruling.", tag: "Native Rights" },
  { year: "1838–1839", event: "Trail of Tears. Approximately 4,000 Cherokee die during the forced removal westward.", tag: "Native Rights" },
  { year: "1838", event: "Frederick Douglass escapes slavery in Maryland and arrives in New York.", tag: "Abolition" },
  { year: "1845", event: "Douglass publishes his Narrative of the Life of Frederick Douglass.", tag: "Abolition" },
  { year: "1848", event: "Seneca Falls Convention issues the Declaration of Sentiments, demanding equal rights for women — drafted with deep ties to the abolitionist movement.", tag: "Abolition" },
  { year: "1850", event: "Compromise of 1850 — California admitted as free, but a strengthened Fugitive Slave Act requires Northern compliance with Southern slavery, radicalizing many.", tag: "Abolition" },
  { year: "1852", event: "Harriet Beecher Stowe publishes Uncle Tom's Cabin, selling 300,000 copies in its first year.", tag: "Abolition" },
  { year: "1854", event: "Kansas-Nebraska Act repeals the Missouri Compromise, allowing settlers to vote on slavery in new territories. 'Bleeding Kansas' violence follows. The Republican Party is founded in opposition.", tag: "Abolition" },
  { year: "1857", event: "Dred Scott decision — Chief Justice Taney rules enslaved people are property, not citizens, and Congress cannot ban slavery in territories. Shock waves across the North.", tag: "Abolition" },
  { year: "1859", event: "John Brown's raid on Harpers Ferry federal arsenal — an attempt to spark a slave rebellion. He is captured, tried for treason, and hanged.", tag: "Abolition" },
  { year: "1860", event: "Abraham Lincoln elected president on a platform opposing the expansion of slavery. Southern states begin seceding.", tag: "Abolition" },
  { year: "1861", event: "Confederate States of America formed. Civil War begins with the bombardment of Fort Sumter, April 12.", tag: "Abolition" },
  { year: "1863", event: "Emancipation Proclamation, January 1 — Lincoln declares enslaved people in Confederate states free, transforming the war's moral purpose.", tag: "Abolition" },
  { year: "1863", event: "Gettysburg Address, November 19 — Lincoln reframes the war as a test of whether a nation 'conceived in liberty' can endure, binding union and emancipation together.", tag: "Abolition" },
  { year: "1865", event: "Thirteenth Amendment ratified — slavery abolished throughout the United States. Confederate surrender at Appomattox, April 9.", tag: "Abolition" },
  { year: "1865–1866", event: "Southern states pass Black Codes — laws restricting movement, labor, and rights of freedpeople, effectively reimposing conditions of servitude.", tag: "Abolition" },
  { year: "1866", event: "Fourteenth Amendment proposed — defines citizenship and guarantees equal protection of the laws to all persons born or naturalized in the United States.", tag: "Abolition" },
  { year: "1867", event: "Reconstruction Acts divide the South into military districts, requiring new state constitutions and Black male suffrage as conditions for readmission.", tag: "Abolition" },
  { year: "1868", event: "Fourteenth Amendment ratified. Second Fort Laramie Treaty guarantees the Black Hills to the Lakota — violated within six years when gold is discovered.", tag: "Both" },
  { year: "1868–1871", event: "Ku Klux Klan terror campaign against Black voters, officeholders, and Republican leaders across the South. Congress passes the Enforcement Acts to combat it.", tag: "Abolition" },
  { year: "1870", event: "Fifteenth Amendment ratified — prohibits denial of the vote on grounds of race, color, or previous condition of servitude.", tag: "Abolition" },
  { year: "1876–1877", event: "Disputed presidential election settled by the Compromise of 1877 — Hayes becomes president; federal troops are withdrawn from the South, ending Reconstruction and leaving freedpeople without protection.", tag: "Abolition" },
  { year: "1877–1900s", event: "Jim Crow laws enacted across Southern states — mandating racial segregation in schools, transportation, public life, and disenfranchising Black voters through poll taxes, literacy tests, and grandfather clauses.", tag: "Abolition" },
];

const tagColor: Record<TimelineEntry["tag"], string> = {
  "Abolition": "var(--color-rust)",
  "Native Rights": "var(--color-sage)",
  "Both": "var(--color-brass)",
};

const tagLabel: Record<TimelineEntry["tag"], string> = {
  "Abolition": "Abolition",
  "Native Rights": "Native Rights",
  "Both": "Both Movements",
};

export default function TimelinePage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [filter, setFilter] = useState<"All" | TimelineEntry["tag"]>("All");

  const filtered = filter === "All" ? entries : entries.filter((e) => e.tag === filter || e.tag === "Both");

  const go = useCallback((idx: number, dir: "next" | "prev") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 220);
  }, [animating]);

  const prev = () => go(current === 0 ? filtered.length - 1 : current - 1, "prev");
  const next = () => go(current === filtered.length - 1 ? 0 : current + 1, "next");

  // Reset to 0 when filter changes
  useEffect(() => { setCurrent(0); }, [filter]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const entry = filtered[current];

  return (
    <div className="relative z-10" style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "3px double var(--color-walnut)" }}>
        <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass)", marginBottom: "0.5rem" }}>A Shared Century of Struggle</p>
        <h1 style={{ ...S.sectionTitle, fontSize: "clamp(2rem, 5vw, 3rem)" }}>Combined Timeline</h1>
        <p style={{ ...S.bodyText, fontStyle: "italic", fontSize: "0.95rem", maxWidth: "500px", margin: "0.75rem auto 0" }}>
          The abolitionist movement and Native American advocacy ran parallel across the same decades — two struggles over the same questions of freedom and American identity.
        </p>

        {/* Legend */}
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", marginTop: "1.5rem", flexWrap: "wrap" }}>
          {(["Abolition", "Native Rights", "Both"] as const).map((tag) => (
            <span key={tag} style={{ display: "flex", alignItems: "center", gap: "0.4rem", ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)" }}>
              <span style={{ display: "inline-block", width: 10, height: 10, background: tagColor[tag], borderRadius: "50%" }} />
              {tagLabel[tag]}
            </span>
          ))}
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0", marginBottom: "2.5rem", borderBottom: "1px solid var(--color-parchment-dk)", borderTop: "1px solid var(--color-parchment-dk)" }}>
        {(["All", "Abolition", "Native Rights", "Both"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...S.monoLabel,
              fontSize: "0.56rem",
              padding: "0.55rem 1rem",
              border: "none",
              borderRight: "1px solid var(--color-parchment-dk)",
              background: filter === f ? "var(--color-walnut)" : "transparent",
              color: filter === f ? "var(--color-parchment)" : "var(--color-sepia)",
              cursor: "pointer",
              transition: "background 0.18s, color 0.18s",
            }}
          >
            {f === "Both" ? "Both Movements" : f}
          </button>
        ))}
      </div>

      {/* Slide card */}
      <div style={{ position: "relative", minHeight: "320px" }}>
        <div
          style={{
            border: "1px solid var(--color-parchment-dk)",
            background: "var(--color-parchment-lt)",
            padding: "2.5rem 2.5rem 2rem",
            position: "relative",
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "next" ? "-28px" : "28px"})`
              : "translateX(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
          }}
        >
          {/* Ornamental corner */}
          <span aria-hidden style={{ position: "absolute", top: 10, left: 14, fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-brass)", opacity: 0.4, lineHeight: 1 }}>❧</span>
          <span aria-hidden style={{ position: "absolute", top: 10, right: 14, fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--color-brass)", opacity: 0.4, lineHeight: 1, transform: "scaleX(-1)", display: "inline-block" }}>❧</span>

          {/* Tag chip */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: tagColor[entry.tag], display: "inline-block", flexShrink: 0 }} />
            <span style={{ ...S.monoLabel, fontSize: "0.56rem", color: tagColor[entry.tag] }}>{tagLabel[entry.tag]}</span>
          </div>

          {/* Year */}
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 6vw, 3.5rem)", fontWeight: 900, color: "var(--color-walnut)", lineHeight: 1, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
            {entry.year}
          </p>

          {/* Event text */}
          <p style={{ ...S.bodyText, fontSize: "1.05rem", color: "var(--color-ink)", lineHeight: 1.7 }}>
            {entry.event}
          </p>

          {/* Counter */}
          <p style={{ ...S.monoLabel, fontSize: "0.52rem", color: "var(--color-sepia)", opacity: 0.5, marginTop: "1.75rem", textAlign: "right" }}>
            {current + 1} / {filtered.length}
          </p>
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.25rem" }}>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "none",
              border: "1px solid var(--color-walnut)",
              color: "var(--color-walnut)",
              padding: "0.5rem 1.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ← Prev
          </button>

          {/* Dot scrubber */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "center", maxWidth: "340px" }}>
            {filtered.map((e, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? "next" : "prev")}
                aria-label={`Go to ${e.year}`}
                style={{
                  width: i === current ? 10 : 7,
                  height: i === current ? 10 : 7,
                  borderRadius: "50%",
                  background: i === current ? tagColor[filtered[current].tag] : "var(--color-parchment-dk)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.18s",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "none",
              border: "1px solid var(--color-walnut)",
              color: "var(--color-walnut)",
              padding: "0.5rem 1.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            Next →
          </button>
        </div>

        {/* Keyboard hint */}
        <p style={{ ...S.monoLabel, fontSize: "0.5rem", color: "var(--color-sepia)", opacity: 0.45, textAlign: "center", marginTop: "1rem" }}>
          ← → Arrow keys also navigate
        </p>
      </div>

      {/* All-entries mini list below */}
      <div style={{ marginTop: "4rem", borderTop: "2px solid var(--color-walnut)", paddingTop: "2rem" }}>
        <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass)", marginBottom: "1.5rem" }}>All Entries — Quick Reference</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {filtered.map((e, i) => (
            <button
              key={i}
              onClick={() => go(i, i > current ? "next" : "prev")}
              style={{
                display: "grid",
                gridTemplateColumns: "96px 12px 1fr",
                gap: "1rem",
                padding: "0.75rem 0",
                borderBottom: "1px dashed rgba(107,76,48,0.15)",
                background: i === current ? "rgba(154,112,32,0.06)" : "transparent",
                border: "none",
                borderBottom: "1px dashed rgba(107,76,48,0.15)",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              <span style={{ ...S.monoLabel, fontSize: "0.62rem", color: "var(--color-brass)", textAlign: "right", paddingTop: "0.1rem" }}>{e.year}</span>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "0.2rem" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: tagColor[e.tag], flexShrink: 0 }} />
                <div style={{ flex: 1, width: 1, background: "rgba(107,76,48,0.15)", marginTop: "0.2rem" }} />
              </div>
              <p style={{ ...S.bodyText, fontSize: "0.82rem", color: i === current ? "var(--color-walnut)" : "var(--color-ink)", margin: 0, fontWeight: i === current ? 600 : 400 }}>{e.event}</p>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
