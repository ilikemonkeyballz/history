import Link from "next/link";
import { articles } from "@/lib/articles";

const S = {
  eyebrow: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.28em",
    textTransform: "uppercase" as const,
    color: "var(--color-brass)",
    display: "block",
    marginBottom: "0.4rem",
  },
  sectionTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    color: "var(--color-walnut)",
    lineHeight: 1.15,
  },
  bodyText: {
    fontFamily: "var(--font-body)",
    color: "var(--color-sepia)",
    lineHeight: 1.75,
  },
  monoLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
  },
};

const sidebarEvents = [
  { date: "July 4, 1852", title: "Douglass Addresses Rochester — 'What to the Slave is the Fourth of July?'", href: "/abolitionist" },
  { date: "May 28, 1830", title: "Indian Removal Act Signed Into Law", href: "/native" },
  { date: "Oct 16, 1859", title: "John Brown's Raid on Harpers Ferry", href: "/abolitionist" },
  { date: "March 26, 1838", title: "Cherokee Nation Petitions Congress Against Removal", href: "/native" },
];

const movements = [
  {
    num: "I",
    href: "/abolitionist",
    accentColor: "var(--color-rust)",
    label: "The Abolitionist Movement",
    period: "c. 1830s – 1865",
    desc: "Pamphlets, newspapers, safe passages, and moral argument — a coalition dismantling slavery and redefining what freedom means in a nation built on its denial.",
  },
  {
    num: "II",
    href: "/native",
    accentColor: "var(--color-sage)",
    label: "Native American Advocacy",
    period: "c. 1820s – 1890s",
    desc: "Tribal nations, Native writers, and a handful of allies fighting forced removal and treaty violations — asserting sovereignty and the right to exist on ancestral lands.",
  },
];

export default function Home() {
  const dispatches = articles.slice(0, 3);

  return (
    <div className="relative z-10">

      {/* HERO */}
      <section style={{
        background: "var(--color-parchment-lt)",
        borderBottom: "1px solid var(--color-parchment-dk)",
        textAlign: "center",
        padding: "3.5rem 1.5rem 3rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <span aria-hidden style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%) rotate(-6deg)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(5rem, 20vw, 16rem)",
          fontWeight: 900,
          color: "var(--color-parchment-dk)",
          opacity: 0.18,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          lineHeight: 1,
          userSelect: "none",
        }}>
          REFORM
        </span>

        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ ...S.eyebrow, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--color-parchment-dk)" }} />
            Special Edition · Era of Reform
            <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--color-parchment-dk)" }} />
          </p>

          <div style={{ borderTop: "3px double var(--color-walnut)", width: "75%", margin: "0 auto 1.25rem" }} />

          <h2 style={{ ...S.sectionTitle, fontSize: "clamp(1.8rem, 5vw, 3.2rem)", marginBottom: "1rem" }}>
            A Nation at War With Itself
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-brass)", fontSize: "0.72em" }}>
              And the Voices Demanding Change
            </em>
          </h2>

          <div style={{ borderTop: "1px solid var(--color-walnut)", width: "75%", margin: "0 auto 1rem" }} />

          <p style={{ ...S.bodyText, fontSize: "1.05rem", fontStyle: "italic", marginBottom: "2rem" }}>
            From the cotton fields of the South to the ancestral lands of the Cherokee Nation,
            two great causes have risen to confront America&rsquo;s oldest contradictions.
            This Courier is their gathering place.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/abolitionist" style={{
              background: "var(--color-walnut)",
              color: "var(--color-parchment)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.8rem 1.75rem",
              textDecoration: "none",
            }}>
              Abolitionist Movement
            </Link>
            <Link href="/native" style={{
              border: "1px solid var(--color-walnut)",
              color: "var(--color-walnut)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.8rem 1.75rem",
              textDecoration: "none",
            }}>
              Native American Advocacy
            </Link>
          </div>
        </div>
      </section>

      <div style={{ width: "100%", maxHeight: "340px", overflow: "hidden", position: "relative", borderBottom: "3px double var(--color-walnut)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-reform-meeting.jpg"
          alt="Abolitionist meeting, engraving, c. 1850s"
          style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(42,26,13,0.45))" }} />
        <p style={{
          position: "absolute", bottom: "0.75rem", right: "1rem",
          fontFamily: "var(--font-mono)", fontSize: "0.5rem",
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "rgba(226,208,176,0.7)",
        }}>
          Anti-Slavery Meeting, lithograph, c. 1850 · Library of Congress
        </p>
      </div>

      {/* MAIN GRID */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.9fr) minmax(0,1fr)", gap: "2.5rem" }}>

          {/* LEFT */}
          <div>
            <div style={{
              display: "flex", alignItems: "baseline", gap: "1rem",
              borderBottom: "2px solid var(--color-walnut)",
              paddingBottom: "0.5rem", marginBottom: "1.75rem",
            }}>
              <h2 style={{ ...S.sectionTitle, fontSize: "1.5rem" }}>Latest Dispatches</h2>
              <span style={{ ...S.monoLabel, color: "var(--color-sepia)", fontSize: "0.58rem" }}>From Our Correspondents</span>
            </div>

            {dispatches.map((d) => (
              <article key={d.slug} style={{
                padding: "1.5rem 0",
                borderBottom: "1px solid var(--color-parchment-dk)",
                display: "grid",
                gridTemplateColumns: "3px 1fr",
                gap: "1.25rem",
              }}>
                <div style={{ background: d.tagColor, borderRadius: "1px" }} />
                <div>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                    <span style={{
                      ...S.monoLabel, fontSize: "0.58rem",
                      color: d.tagColor,
                      border: `1px solid ${d.tagColor}`,
                      padding: "0.1rem 0.5rem",
                    }}>
                      {d.tag}
                    </span>
                    <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", opacity: 0.7 }}>
                      {d.date}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem", fontWeight: 700,
                    color: "var(--color-walnut)",
                    lineHeight: 1.25, marginBottom: "0.6rem",
                  }}>
                    {d.title}
                  </h3>
                  <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "0.75rem" }}>
                    {d.lede}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

            <div style={{ borderTop: "3px solid var(--color-rust)", paddingTop: "1rem" }}>
              <h3 style={{
                ...S.sectionTitle, fontSize: "1rem",
                borderBottom: "1px solid var(--color-parchment-dk)",
                paddingBottom: "0.4rem", marginBottom: "1rem",
              }}>
                Rallies & Assemblies
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {sidebarEvents.map((e, i) => (
                  <li key={i} style={{ padding: "0.75rem 0", borderBottom: "1px dashed rgba(107,76,48,0.25)" }}>
                    <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-rust)", marginBottom: "0.2rem" }}>{e.date}</p>
                    <Link href={e.href} style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--color-ink)",
                      textDecoration: "none",
                      lineHeight: 1.4,
                    }}>
                      {e.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "var(--color-walnut)", padding: "1.5rem" }}>
              <span aria-hidden style={{
                fontFamily: "var(--font-display)",
                fontSize: "4rem",
                color: "var(--color-brass)",
                opacity: 0.4,
                lineHeight: 0.7,
                display: "block",
                marginBottom: "0.5rem",
              }}>
                &ldquo;
              </span>
              <blockquote style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "var(--color-parchment)",
                lineHeight: 1.55,
                margin: "0 0 0.75rem",
              }}>
                Power concedes nothing without a demand. It never did and it never will.
              </blockquote>
              <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass-lt)" }}>
                — Frederick Douglass, 1857
              </p>
            </div>

            <div style={{
              border: "1px solid var(--color-parchment-dk)",
              background: "var(--color-parchment-lt)",
              padding: "1.25rem",
              textAlign: "center",
            }}>
              <p style={{ ...S.eyebrow, textAlign: "center", marginBottom: "0.5rem" }}>Join the Cause</p>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                color: "var(--color-walnut)",
                marginBottom: "1rem",
                lineHeight: 1.4,
              }}>
                Receive our dispatches and stand with the forces of liberty and justice.
              </p>
              <Link href="/gazette" style={{
                background: "var(--color-rust)",
                color: "var(--color-parchment)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "0.65rem 1.25rem",
                textDecoration: "none",
                display: "inline-block",
              }}>
                Read the Full Gazette
              </Link>
            </div>

          </aside>
        </div>

        {/* MOVEMENTS */}
        <div style={{ marginTop: "3.5rem" }}>
          <div style={{
            display: "flex", alignItems: "baseline", gap: "1rem",
            borderBottom: "2px solid var(--color-walnut)",
            paddingBottom: "0.5rem", marginBottom: "2rem",
          }}>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.5rem" }}>The Great Movements</h2>
            <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)" }}>Enter the Archives</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            {movements.map((m, i) => (
              <Link key={i} href={m.href} style={{
                display: "block",
                textDecoration: "none",
                padding: "2.25rem",
                borderTop: `4px solid ${m.accentColor}`,
                borderRight: i === 0 ? "1px solid var(--color-parchment-dk)" : "none",
                borderBottom: "1px solid var(--color-parchment-dk)",
                background: "var(--color-parchment-lt)",
                transition: "background 0.2s",
              }}
              className="hover:bg-[var(--color-parchment)]"
              >
                <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: m.accentColor, marginBottom: "0.75rem", display: "block" }}>
                  Movement {m.num}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.35rem", fontWeight: 700,
                  color: "var(--color-walnut)",
                  marginBottom: "0.35rem", lineHeight: 1.2,
                }}>
                  {m.label}
                </h3>
                <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", marginBottom: "0.9rem" }}>
                  {m.period}
                </p>
                <p style={{ ...S.bodyText, fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                  {m.desc}
                </p>
                <span style={{ ...S.monoLabel, fontSize: "0.6rem", color: m.accentColor }}>
                  Enter the Archive →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* BOTTOM PULL QUOTE */}
        <div style={{
          margin: "3.5rem 0",
          textAlign: "center",
          borderTop: "1px solid var(--color-parchment-dk)",
          borderBottom: "1px solid var(--color-parchment-dk)",
          padding: "2.5rem 1.5rem",
        }}>
          <blockquote style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.15rem, 3vw, 1.7rem)",
            color: "var(--color-walnut)",
            lineHeight: 1.45,
            maxWidth: "680px",
            margin: "0 auto 1rem",
          }}>
            We ask nothing of you but justice — the fulfillment of what you yourselves have promised.
          </blockquote>
          <p style={{ ...S.monoLabel, fontSize: "0.6rem", color: "var(--color-brass)" }}>
            — Cherokee Nation Petition to Congress, 1830
          </p>
        </div>

      </div>
    </div>
  );
}