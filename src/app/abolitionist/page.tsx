import Link from "next/link";
import { articles } from "@/lib/articles";
import { S, primarySource as PS } from "@/lib/styles";

const history = [
  {
    period: "1676",
    heading: "Bacon's Rebellion & the Drawing of the Color Line",
    body: "In 1676, Nathaniel Bacon led a coalition of poor white colonists, indentured servants, and enslaved Black Virginians against the colonial government of Virginia. The rebellion was crushed — but it terrified the planter class. Their response was deliberate and consequential: colonial legislatures began hardening the line between white and Black, extending new privileges to white servants while tightening the legal codes governing enslaved Africans. Slavery, previously a condition that overlapped with other forms of unfreedom, was now encoded as a permanent, heritable, racial institution. The color line drawn after Bacon's Rebellion would shape American life for centuries.",
  },
  {
    period: "1619–1750s",
    heading: "The Transatlantic Slave Trade",
    body: "The first enslaved Africans arrived in English North America in 1619 at Point Comfort, Virginia. Over the following century and a half, the transatlantic slave trade transported an estimated 400,000 Africans to the territory that would become the United States, and some twelve million across the wider Atlantic world. An estimated fifteen to twenty percent died during the Middle Passage. Those who survived were sold, scattered, stripped of language and family, and set to work on tobacco, rice, and indigo plantations. The wealth this labor produced underwrote the colonial economy — and much of the economic foundation upon which the republic itself would be built.",
  },
  {
    period: "1780s–1820s",
    heading: "The Early Abolitionist Movement",
    body: "Organized resistance to slavery in America predates the republic itself. Quakers in Pennsylvania were among the first to formally condemn the practice, and freed Black communities in northern cities built networks of mutual aid and advocacy from the earliest years of independence. The American Colonization Society, founded in 1816, proposed sending freed Black Americans to West Africa rather than integrating them as full citizens — a compromise that satisfied no one. It was against this backdrop that a more radical abolitionism began to take shape: one that demanded immediate emancipation, full citizenship, and an honest reckoning with the contradiction at the heart of the American experiment.",
  },
  {
    period: "1831–1865",
    heading: "Garrison, Douglass, and the Turn to Immediacy",
    body: "On January 1, 1831, William Lloyd Garrison published the first issue of The Liberator. 'I will be as harsh as truth, and as uncompromising as justice,' he wrote. His movement drew Black Americans to its center — Frederick Douglass, Sojourner Truth, David Walker — voices whose authority on the subject of slavery no white reformer could match. Douglass, who had escaped slavery in 1838 and taught himself to read, became the movement's most powerful orator and writer. His Narrative, published in 1845, confronted readers with a simple, devastating argument: here is a man who was enslaved; here is what was done to him; now explain to me how this republic calls itself free.",
  },
];

const timeline = [
  { year: "1619", event: "First enslaved Africans arrive in English North America at Point Comfort, Virginia." },
  { year: "1676", event: "Bacon's Rebellion. Planters respond by hardening racial distinctions and expanding race-based slavery." },
  { year: "1688", event: "Germantown Quaker Petition — the first formal protest against slavery in the American colonies." },
  { year: "1739", event: "Stono Rebellion in South Carolina — one of the largest slave uprisings in colonial America." },
  { year: "1793", event: "Fugitive Slave Act passed, requiring return of escaped enslaved persons." },
  { year: "1808", event: "International slave trade officially banned in the United States. Domestic trade continues." },
  { year: "1831", event: "Garrison launches The Liberator. Nat Turner's Rebellion in Virginia." },
  { year: "1838", event: "Frederick Douglass escapes slavery in Maryland and arrives in New York." },
  { year: "1845", event: "Douglass publishes his Narrative, becoming the movement's most powerful voice." },
  { year: "1848", event: "Seneca Falls Convention issues the Declaration of Sentiments." },
  { year: "1850", event: "Strengthened Fugitive Slave Act radicalizes many Northerners." },
  { year: "1852", event: "Harriet Beecher Stowe publishes Uncle Tom's Cabin." },
  { year: "1857", event: "Dred Scott decision — Supreme Court rules enslaved people are not citizens." },
  { year: "1859", event: "John Brown's raid on Harpers Ferry." },
  { year: "1863", event: "Emancipation Proclamation issued by President Lincoln." },
  { year: "1865", event: "Thirteenth Amendment ratified — slavery abolished throughout the United States." },
];

export default function AbolitionistPage() {
  const dispatches = articles.filter((a) => a.tag === "Abolition").slice(0, 3);

  return (
    <div className="relative z-10">

      {/* HERO */}
      <section style={{ background: "var(--color-walnut)", padding: "4rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <span aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-5deg)", fontFamily: "var(--font-display)", fontSize: "clamp(4rem, 18vw, 14rem)", fontWeight: 900, color: "rgba(139,58,26,0.15)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>
          ABOLITION
        </span>
        <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-rust)", marginBottom: "0.75rem" }}>Movement I · c. 1830s–1865</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, color: "var(--color-parchment)", lineHeight: 1.1, marginBottom: "1rem" }}>
            The Abolitionist Movement
          </h1>
          <div style={{ borderTop: "1px solid rgba(154,112,32,0.4)", width: "60%", margin: "0 auto 1rem" }} />
          <p style={{ ...S.bodyText, color: "rgba(226,208,176,0.75)", fontStyle: "italic", fontSize: "1rem" }}>
            A coalition that refused to let the republic ignore the gulf between its ideals and its practice.
          </p>
        </div>
      </section>
       {/* PORTRAIT BAND */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--color-parchment-dk)", background: "var(--color-parchment-lt)" }}>
        <div style={{ flex: 1, position: "relative", height: "260px", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/frederick-douglass-portrait.jpg"
            alt="Frederick Douglass, photograph by Samuel J. Miller, c. 1847–52"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top", display: "block" }}
          />
          <p style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(226,208,176,0.75)" }}>
            Frederick Douglass · Samuel J. Miller, c. 1847–52
          </p>
        </div>
        <div style={{ flex: 1, position: "relative", height: "260px", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/garrison-portrait.png"
            alt="William Lloyd Garrison, engraving, c. 1850s"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top", display: "block" }}
          />
          <p style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(226,208,176,0.75)" }}>
            William Lloyd Garrison · engraving, c. 1850s
          </p>
        </div>
        <div style={{ flex: 1, position: "relative", height: "260px", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sojourner-truth-portrait.png"
            alt="Sojourner Truth, photograph, c. 1864"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top", display: "block" }}
          />
          <p style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(226,208,176,0.75)" }}>
            Sojourner Truth · photograph, c. 1864
          </p>
        </div>
      </div>


      {/* SECTION NAV */}
      <div style={{ background: "var(--color-parchment-lt)", borderBottom: "1px solid var(--color-parchment-dk)", padding: "0.6rem 1.5rem", display: "flex", gap: "0", justifyContent: "center" }}>
        {[["#history", "History"], ["#sources", "Primary Sources"], ["#timeline", "Timeline"], ["#dispatches", "Dispatches"]].map(([href, label]) => (
          <a key={href} href={href} style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", padding: "0.4rem 1.25rem", textDecoration: "none", borderRight: "1px solid var(--color-parchment-dk)" }}
            className="hover:text-[var(--color-brass)] transition-colors">
            {label}
          </a>
        ))}
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>

        {/* HISTORY */}
        <section id="history" style={{ marginBottom: "4rem" }}>
          <div style={{ borderBottom: "2px solid var(--color-walnut)", paddingBottom: "0.5rem", marginBottom: "2.5rem" }}>
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-rust)", marginBottom: "0.3rem" }}>Origins & Context</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>The History of the Movement</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {history.map((h, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem" }}>
                <div style={{ paddingTop: "0.2rem" }}>
                  <span style={{ ...S.monoLabel, fontSize: "0.65rem", color: "var(--color-rust)", display: "block" }}>{h.period}</span>
                  <div style={{ width: "100%", height: "1px", background: "var(--color-rust)", opacity: 0.3, marginTop: "0.4rem" }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.6rem", lineHeight: 1.2 }}>{h.heading}</h3>
                  <p style={{ ...S.bodyText, fontSize: "0.95rem" }}>{h.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRIMARY SOURCES */}
        <section id="sources" style={{ marginBottom: "4rem" }}>
          <div style={{ borderBottom: "2px solid var(--color-walnut)", paddingBottom: "0.5rem", marginBottom: "2.5rem" }}>
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-rust)", marginBottom: "0.3rem" }}>Evidence from the Record</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>Primary Sources</h2>
          </div>

          {/* Source 1: Bacon's Rebellion */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              A People's Declaration — Bacon's Rebellion (1676)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              In 1676, Nathaniel Bacon and his followers — poor white colonists, indentured servants, and enslaved Virginians fighting side by side — drew up a formal list of grievances against Governor William Berkeley and the colonial government. The document reveals how economic oppression, not race, initially united the colony's poor. The planter class's response to this interracial alliance would be to invent the color line.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · A People's Declaration, 1676</span>
              <span style={PS.quote}>
                "For under the false pretenses of public works, raised unjust taxes upon the common citizens for advancing private interests and corrupt projects.... For assuming monopoly of the beaver trade, preventing the common man from participating and gain economic fortune… For not allowing us to defend ourselves and labelling us rebels… accusing us of treason… he is the true traitor, not us…"
              </span>
              <span style={PS.attribution}>— Bacon's Rebellion: A People's Declaration, Virginia, 1676</span>
            </div>
          </div>

          {/* Source 2: Equiano */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              Olaudah Equiano — The Middle Passage (1789)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              Olaudah Equiano was born in the Kingdom of Benin (present-day Nigeria) and kidnapped into slavery at age eleven. His 1789 autobiography was the first first-person account of the transatlantic slave trade written by a survivor. It became essential to the British abolitionist movement's case before Parliament.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · The Interesting Narrative of Olaudah Equiano, 1789</span>
              <span style={PS.quote}>
                "I was soon put down under the decks, and there I received such a salutation in my nostrils as I had never experienced in my life: so that, with the loathsomeness of the stench, and crying together, I became so sick and low that I was not able to eat, nor had I the least desire to taste any thing. I now wished for the last friend, death, to relieve me."
              </span>
              <span style={PS.attribution}>— Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, London, 1789</span>
            </div>
            <div style={{ ...PS.wrapper, marginTop: "1.5rem" }}>
              <span style={PS.label}>Primary Source · Mary Prince, The History of Mary Prince, 1831</span>
              <span style={PS.context}>
                Mary Prince was born enslaved in Bermuda in 1788, sold at auction at age twelve, and labored in the salt ponds of Turks Island for nearly a decade. Her autobiography — the first by a Black woman in the English language — was published in London in 1831 after she escaped her enslavers.
              </span>
              <span style={PS.quote}>
                "How can slaves be happy when they have the halter round their neck and the whip upon their back? and are disgraced and thought no more of than beasts? — and are separated from their mothers, and husbands, and children, and sisters, just as cattle are sold and separated? This is slavery. I tell it, to let English people know the truth."
              </span>
              <span style={PS.attribution}>— Mary Prince, The History of Mary Prince, a West Indian Slave, London, 1831</span>
            </div>
          </div>

          {/* Source 3: Garrison */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              William Lloyd Garrison — The Liberator, Inaugural Editorial (1831)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              On January 1, 1831, Garrison published the first issue of The Liberator from a small office in Boston, publicly recanting his earlier position in favor of gradual emancipation and declaring himself for immediate abolition. The language was unprecedented in the American press.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · The Liberator, Vol. I, No. 1, January 1, 1831</span>
              <span style={PS.quote}>
                "I am aware that many object to the severity of my language; but is there not cause for severity? I will be as harsh as truth, and as uncompromising as justice… I will not equivocate — I will not excuse — I will not retreat a single inch — AND I WILL BE HEARD."
              </span>
              <span style={PS.attribution}>— William Lloyd Garrison, The Liberator, Inaugural Editorial, Boston, January 1, 1831</span>
            </div>
          </div>

          {/* Source 4: Declaration of Sentiments */}
          <div style={{ marginBottom: "1rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              Declaration of Sentiments — Seneca Falls Convention (1848)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              The Declaration of Sentiments, drafted by Elizabeth Cady Stanton and presented at the Seneca Falls Convention in July 1848, adapted the language of the Declaration of Independence to demand equal rights for women. The document drew a direct line between the abolitionist movement and the women's rights movement — Frederick Douglass himself championed the suffrage resolution on the convention floor.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · Declaration of Sentiments, Seneca Falls, New York, 1848</span>
              <span style={PS.quote}>
                "We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty, and the pursuit of happiness… The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her."
              </span>
              <span style={PS.attribution}>— Declaration of Sentiments, Seneca Falls Convention, July 19–20, 1848</span>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" style={{ marginBottom: "4rem" }}>
          <div style={{ borderBottom: "2px solid var(--color-walnut)", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-rust)", marginBottom: "0.3rem" }}>Chronology</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>Timeline of Abolition</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "1.25rem", padding: "0.85rem 0", borderBottom: "1px dashed rgba(107,76,48,0.2)" }}>
                <span style={{ ...S.monoLabel, fontSize: "0.7rem", color: "var(--color-rust)", paddingTop: "0.1rem" }}>{t.year}</span>
                <p style={{ ...S.bodyText, fontSize: "0.875rem", color: "var(--color-ink)" }}>{t.event}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1rem", borderLeft: "4px solid var(--color-rust)", paddingLeft: "1.75rem" }}>
            <span style={{ fontFamily: "var(--font-mono)" as const, fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--color-brass)", display: "block" as const, marginBottom: "1rem" }}>
              Context · Education as Liberation
            </span>
            <span style={{ fontFamily: "var(--font-display)" as const, fontStyle: "italic" as const, fontSize: "1.05rem", color: "var(--color-walnut)", lineHeight: 1.65, marginBottom: "1.25rem", display: "block" as const }}>
              "Education… is the great equalizer of the conditions of men — the balance-wheel of the social machinery."
            </span>
            <span style={{ fontFamily: "var(--font-mono)" as const, fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--color-sepia)", display: "block" as const, marginTop: "0.75rem" }}>
              — Horace Mann, Twelfth Annual Report, Massachusetts Board of Education, 1848
            </span>
          </div>
        </section>

        {/* DISPATCHES */}
        <section id="dispatches">
          <div style={{ borderBottom: "2px solid var(--color-walnut)", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-rust)", marginBottom: "0.3rem" }}>From Our Correspondents</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>Abolitionist Dispatches</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {dispatches.map((a) => (
              <article key={a.slug} style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--color-parchment-dk)", display: "grid", gridTemplateColumns: "3px 1fr", gap: "1.25rem" }}>
                <div style={{ background: "var(--color-rust)" }} />
                <div>
                  <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", opacity: 0.7, display: "block", marginBottom: "0.35rem" }}>{a.date}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", lineHeight: 1.2, marginBottom: "0.5rem" }}>{a.title}</h3>
                  <p style={{ ...S.bodyText, fontSize: "0.875rem", marginBottom: "0" }}>{a.lede}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/gazette/abolitionist" style={{ ...S.monoLabel, fontSize: "0.6rem", color: "var(--color-brass)", textDecoration: "none" }}>View All Abolitionist Dispatches →</Link>
          </div>
        </section>

      </div>
    </div>
  );
}