import { S } from "@/lib/styles";

const sources = [
  {
    id: "peoples-declaration",
    tag: "Primary Source · Unit 2",
    citation: (
      <>
        &ldquo;A Peoples Declaration.&rdquo; 1676. Course handout for Unit 2, Lesson 11:{" "}
        <em>Bacon&rsquo;s Rebellion</em>, taught by Mr. Conry, 2026.
      </>
    ),
  },
  {
    id: "columbus-diary",
    tag: "Primary Source · Unit 1",
    citation: (
      <>
        Columbus, Christopher. <em>Diary of the First Voyage</em>. Course resource for Unit 1, Lesson
        10, taught by Mr. Conry, 2026. Google Classroom,{" "}
        <a
          href="https://classroom.google.com/u/1/c/Nzc0OTI2MDY0NDA1/a/ODE0MzYxNTY5MjI3/detail"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-brass)", textDecoration: "underline" }}
        >
          classroom.google.com
        </a>
        .
      </>
    ),
  },
  {
    id: "declaration-sentiments",
    tag: "Primary Source · Unit 6",
    citation: (
      <>
        &ldquo;Declaration of Sentiments.&rdquo; Seneca Falls Convention, 1848. Course handout for
        Unit 6, Lesson 10: <em>Declaration of Sentiments Primary Source Analysis</em>, taught by Mr.
        Conry, 2026.
      </>
    ),
  },
  {
    id: "de-las-casas",
    tag: "Primary Source · Unit 1",
    citation: (
      <>
        De las Casas, Bartolomé. <em>Defense of the Indians</em>. 1552. Course handout for Unit 1,
        Lessons 12 &amp; 13:{" "}
        <em>
          Close Readings: The Encomienda System&mdash;Bartolome De Las Casas vs. Juan Sepulveda
        </em>
        , taught by Mr. Conry, 2026.
      </>
    ),
  },
  {
    id: "education-reform",
    tag: "Secondary Source · Unit 6",
    citation: (
      <>
        &ldquo;Education Reform in Antebellum America.&rdquo; Gilder Lehrman Institute of American
        History. Course resource for Unit 6: <em>Era of Reform</em>, taught by Mr. Conry, 2026.
      </>
    ),
  },
  {
    id: "garrison-liberator",
    tag: "Primary Source · Unit 6",
    citation: (
      <>
        Garrison, William Lloyd. &ldquo;Inaugural Editorial.&rdquo; <em>The Liberator</em>, 1831.
        Course handout for Unit 6, Lesson 7: <em>Abolitionists</em>, taught by Mr. Conry, 2026.
      </>
    ),
  },
  {
    id: "hirschfelder-molin",
    tag: "Secondary Source · Unit 1",
    citation: (
      <>
        Hirschfelder, Arlene, and Paulette F. Molin. <em>Stereotyping Native Americans</em>. Course
        resource for Unit 1: <em>Early Stereotypes of Native Americans</em>, taught by Mr. Conry,
        2026. PDF Handout.
      </>
    ),
  },
  {
    id: "khan-academy",
    tag: "Web · U.S. History",
    citation: (
      <>
        Khan Academy. &ldquo;The Early Republic (1800&ndash;1848).&rdquo;{" "}
        <em>U.S. History</em>, 2024. Web.
      </>
    ),
  },
  {
    id: "library-of-congress",
    tag: "Web · Primary Sources",
    citation: (
      <>
        Library of Congress. &ldquo;U.S. History Primary Source Timeline.&rdquo;{" "}
        <em>LOC.gov</em>, 2024. Web.
      </>
    ),
  },
  {
    id: "mary-prince",
    tag: "Primary Source · Unit 2",
    citation: (
      <>
        Prince, Mary.{" "}
        <em>
          The History of Mary Prince, a West Indian Slave. Related by Herself. With a Supplement by
          the Editor. To Which Is Added, the Narrative of Asa-Asa, a Captured African.
        </em>{" "}
        3rd ed., London, 1831. Course resource for Unit 2, Lesson 24 Part II:{" "}
        <em>Personal Narratives of the Slave Trade [Racial Slavery]</em>, taught by Mr. Conry, 2026.
      </>
    ),
  },
  {
    id: "pueblo-revolt",
    tag: "Secondary Source · Unit 2",
    citation: (
      <>
        &ldquo;Pueblo Revolt (1680): An Entire Frontier in Flames: The Regional Implications of the
        Pueblo Revolt (1680&ndash;1696).&rdquo; Course resource for Unit 2, taught by Mr. Conry, 2026.
      </>
    ),
  },
];

export default function SourcesPage() {
  return (
    <main style={{ background: "var(--color-parchment)", minHeight: "100vh" }}>

      {/* HERO */}
      <section
        style={{
          background: "var(--color-walnut)",
          borderBottom: "3px double var(--color-brass)",
          padding: "3.5rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <span style={S.eyebrow}>The Freedom Courier</span>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "var(--color-parchment)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Works Cited
        </h1>
        <div
          style={{
            borderTop: "1px solid rgba(154,112,32,0.4)",
            width: "50%",
            margin: "0 auto 1rem",
          }}
        />
        <p
          style={{
            ...S.bodyText,
            color: "rgba(226,208,176,0.7)",
            fontStyle: "italic",
            fontSize: "0.9rem",
          }}
        >
          All sources consulted in the preparation of this publication, formatted in MLA style.
        </p>
      </section>

      {/* CITATION LIST */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>

        <p
          style={{
            ...S.monoLabel,
            fontSize: "0.55rem",
            color: "var(--color-brass)",
            marginBottom: "2.5rem",
            borderBottom: "1px solid var(--color-parchment-dk)",
            paddingBottom: "1rem",
          }}
        >
          {sources.length} sources &nbsp;·&nbsp; MLA 9th Edition
        </p>

        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {sources.map((source, i) => (
            <li
              key={source.id}
              style={{
                display: "flex",
                gap: "1.5rem",
                padding: "1.5rem 0",
                borderBottom: "1px solid var(--color-parchment-dk)",
                alignItems: "flex-start",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--color-brass)",
                  letterSpacing: "0.1em",
                  minWidth: "2rem",
                  paddingTop: "0.15rem",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    ...S.monoLabel,
                    fontSize: "0.5rem",
                    color: "var(--color-brass)",
                    display: "block",
                    marginBottom: "0.5rem",
                    opacity: 0.8,
                  }}
                >
                  {source.tag}
                </span>
                <p
                  style={{
                    ...S.bodyText,
                    fontSize: "0.95rem",
                    lineHeight: 1.75,
                    margin: 0,
                    paddingLeft: "1.5rem",
                    textIndent: "-1.5rem",
                  }}
                >
                  {source.citation}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* FOOTER NOTE */}
        <p
          style={{
            ...S.monoLabel,
            fontSize: "0.5rem",
            color: "var(--color-sepia)",
            opacity: 0.6,
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
        </p>
      </div>
    </main>
  );
}