import Link from "next/link";
import { articles } from "@/lib/articles";
import { S, primarySource as PS } from "@/lib/styles";

const history = [
  {
    period: "Pre-contact",
    heading: "Sovereign Nations Before European Arrival",
    body: "For thousands of years before European contact, the continent now called North America was home to hundreds of distinct nations, each with its own governance, culture, language, and relationship to the land. The Haudenosaunee Confederacy had developed a sophisticated federal system of governance. The Cherokee, Creek, Choctaw, Chickasaw, and Seminole nations of the Southeast maintained complex agricultural societies, diplomatic networks, and legal traditions. Sovereignty was not a concept imported from Europe — it was the lived reality of peoples who had governed themselves on this land since time immemorial.",
  },
  {
    period: "1492–1700s",
    heading: "Contact, Colonization, and Population Collapse",
    body: "European arrival initiated a catastrophe whose scale is difficult to comprehend. Disease, warfare, displacement, and enslavement reduced Indigenous populations across the continent by an estimated fifty to ninety percent within a century of first contact. The doctrine of terra nullius — that lands not cultivated in the European manner were legally empty — erased Indigenous presence and title in European legal thought. Columbus arrived in 1492 and within days had identified the Taíno people of the Caribbean as potential servants and subjects for Christian conversion. His journal records first contact with a clarity that is damning: he saw generous, peaceful people, and his first instinct was possession.",
  },
  {
    period: "1778–1820s",
    heading: "Treaties and Their Betrayal",
    body: "The United States government negotiated hundreds of treaties with Indigenous nations between 1778 and 1871 — and violated nearly every one of them. The Cherokee Nation, which had adopted a written constitution, a syllabary devised by Sequoyah, a bilingual newspaper, and a settled agricultural lifestyle, found that no degree of accommodation was sufficient. What white Americans wanted was not coexistence but the land itself. The debate between those who justified conquest as civilizing mission and those who recognized it as theft had been ongoing since the Valladolid debates of 1550 — and the answer chosen, in practice if not in theory, had always been the same.",
  },
  {
    period: "1830–1839",
    heading: "The Indian Removal Act and the Trail of Tears",
    body: "In 1830, President Andrew Jackson signed the Indian Removal Act, authorizing the forced relocation of all Indigenous nations east of the Mississippi. The Cherokee fought removal through every available legal channel, winning a decisive victory in Worcester v. Georgia (1832) before Jackson rendered the ruling moot by refusing to enforce it. Between 1836 and 1839, the United States Army and Georgia militia forcibly removed the Cherokee people from their ancestral lands. Approximately 16,000 Cherokee were marched westward through the winter; an estimated 4,000 died along the route. The Cherokee called it Nunna daul Tsuny — the trail where they cried.",
  },
];

const timeline = [
  { year: "~10,000 BCE", event: "Indigenous peoples establish complex, sovereign societies across the North American continent." },
  { year: "1492", event: "Columbus arrives in the Caribbean. European contact begins a century of catastrophic population collapse." },
  { year: "1607–1700s", event: "English colonization of the Atlantic coast displaces coastal Algonquian nations." },
  { year: "1675", event: "King Philip's War in New England — one of the most devastating conflicts per capita in American history." },
  { year: "1778", event: "First treaty between the United States and an Indigenous nation — the Delaware." },
  { year: "1803", event: "Louisiana Purchase. Jefferson envisions the West as space for Native relocation." },
  { year: "1821", event: "Sequoyah completes the Cherokee syllabary, enabling widespread literacy within the nation." },
  { year: "1827", event: "Cherokee Nation adopts a written constitution modeled on the United States Constitution." },
  { year: "1828", event: "Andrew Jackson elected president. Cherokee Phoenix newspaper begins publication." },
  { year: "1830", event: "Indian Removal Act signed into law." },
  { year: "1831", event: "Cherokee Nation v. Georgia — Supreme Court declines jurisdiction." },
  { year: "1832", event: "Worcester v. Georgia — Supreme Court rules in favor of the Cherokee. Jackson defies the ruling." },
  { year: "1835", event: "Treaty of New Echota signed by a minority faction — used to justify forced removal." },
  { year: "1838–1839", event: "Trail of Tears. Approximately 4,000 Cherokee die on the forced march westward." },
  { year: "1864", event: "Sand Creek Massacre — Colorado militia kills approximately 150–200 Cheyenne and Arapaho." },
  { year: "1868", event: "Second Fort Laramie Treaty guarantees the Black Hills to the Lakota — violated six years later." },
  { year: "1887", event: "Dawes Act breaks up communal tribal lands, reducing Indigenous landholdings by ninety million acres." },
  { year: "1890", event: "Wounded Knee Massacre — U.S. Army kills approximately 250–300 Lakota Sioux." },
];

export default function NativePage() {
  const dispatches = articles.filter((a) => a.tag === "Native Rights").slice(0, 3);

  return (
    <div className="relative z-10">

      {/* HERO */}
      <section style={{ background: "var(--color-walnut)", padding: "4rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <span aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%) rotate(-5deg)", fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 14vw, 11rem)", fontWeight: 900, color: "rgba(107,124,95,0.12)", whiteSpace: "nowrap", pointerEvents: "none", lineHeight: 1 }}>
          SOVEREIGNTY
        </span>
        <div style={{ position: "relative", maxWidth: "680px", margin: "0 auto" }}>
          <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sage)", marginBottom: "0.75rem" }}>Movement II · Pre-contact – 1890s</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, color: "var(--color-parchment)", lineHeight: 1.1, marginBottom: "1rem" }}>
            Native American Advocacy
          </h1>
          <div style={{ borderTop: "1px solid rgba(107,124,95,0.5)", width: "60%", margin: "0 auto 1rem" }} />
          <p style={{ ...S.bodyText, color: "rgba(226,208,176,0.75)", fontStyle: "italic", fontSize: "1rem" }}>
            Nations that had governed themselves for millennia, asserting sovereignty and demanding the republic honor its own promises.
          </p>
        </div>
      </section>

      {/* PORTRAIT BAND */}
      <div style={{ display: "flex", borderBottom: "1px solid var(--color-parchment-dk)", background: "var(--color-parchment-lt)" }}>
        <div style={{ flex: 1, position: "relative", height: "260px", overflow: "hidden", background: "#c9b99a" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sequoyah-portrait.jpg"
            alt="Sequoyah, portrait, c. 1830s"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
          />
          <p style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(42,26,13,0.75)", margin: 0 }}>
            Sequoyah · Henry Inman after Charles Bird King, c. 1830
          </p>
        </div>
        <div style={{ flex: 1, position: "relative", height: "260px", overflow: "hidden", background: "#888" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/john-ross-portrait.png"
            alt="John Ross, Principal Chief of the Cherokee Nation, c. 1843"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
          />
          <p style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(42,26,13,0.75)", margin: 0 }}>
            John Ross, Principal Chief of the Cherokee Nation · c. 1843
          </p>
        </div>
        <div style={{ flex: 1, position: "relative", height: "260px", overflow: "hidden", background: "#d4c4a8" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sitting-bull-portrait.jpg"
            alt="Sitting Bull, photograph by David Frances Barry, 1885"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
          />
          <p style={{ position: "absolute", bottom: "0.5rem", left: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.48rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(42,26,13,0.75)", margin: 0 }}>
            Sitting Bull · David Frances Barry, photograph, 1885
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
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sage)", marginBottom: "0.3rem" }}>Origins & Context</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>The History of the Movement</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {history.map((h, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1.5rem" }}>
                <div style={{ paddingTop: "0.2rem" }}>
                  <span style={{ ...S.monoLabel, fontSize: "0.6rem", color: "var(--color-sage)", display: "block" }}>{h.period}</span>
                  <div style={{ width: "100%", height: "1px", background: "var(--color-sage)", opacity: 0.3, marginTop: "0.4rem" }} />
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
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sage)", marginBottom: "0.3rem" }}>Evidence from the Record</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>Primary Sources</h2>
          </div>

          {/* Source 1: Columbus */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              Columbus's Journal of the First Voyage (1492)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              The Journal of the First Voyage of Columbus, preserved through Bartolomé de las Casas's transcription, records Columbus's first contact with the Taíno people of the Caribbean on October 12, 1492. His own words reveal the ethnocentric assumptions that would define five centuries of European colonization: he saw a generous, peaceful people and immediately assessed them as candidates for servitude and Christian conversion.
            </p>

            {/* Columbus map image */}
            <div style={{ margin: "1.5rem 0", border: "1px solid var(--color-parchment-dk)", background: "var(--color-parchment-lt)" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "66%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/columbus-voyages-map.png"
                  alt="Map of the Four Voyages of Columbus, 1492–1505"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p style={{ ...S.monoLabel, fontSize: "0.52rem", color: "var(--color-sepia)", padding: "0.5rem 0.75rem" }}>
                Map of the Four Voyages of Columbus, 1492–1505 · American Journeys Collection, Wisconsin Historical Society
              </p>
            </div>

            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · Journal of the First Voyage, October 12, 1492</span>
              <span style={PS.quote}>
                "They neither carry nor know anything of arms, for I showed them swords, and they took them by the blade and cut themselves through ignorance… They should be good servants and intelligent, for I observed that they quickly took in what was said to them, and I believe that they would easily be made Christians, as it appeared to me that they had no religion."
              </span>
              <span style={PS.attribution}>— Christopher Columbus, Journal of the First Voyage, October 12, 1492. American Journeys Collection, Document AJ-062, Wisconsin Historical Society</span>
            </div>

            <div style={{ ...PS.wrapper, marginTop: "1.5rem" }}>
              <span style={PS.label}>Primary Source · Journal of the First Voyage, October 15, 1492</span>
              <span style={PS.quote}>
                "My desire was not to pass any island without taking possession, so that, one having been taken, the same may be said of all."
              </span>
              <span style={PS.attribution}>— Christopher Columbus, Journal of the First Voyage, October 15, 1492. American Journeys Collection, Document AJ-062, Wisconsin Historical Society</span>
            </div>
          </div>

          {/* Source 2: Sepulveda vs Las Casas */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              The Valladolid Debate — Sepúlveda vs. Las Casas (1550–1551)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              In 1550, the Spanish Crown convened a debate at Valladolid to determine the moral basis of Spanish treatment of the Indigenous peoples of the Americas. Juan Ginés de Sepúlveda argued that Native peoples were natural slaves, inferior by nature. Bartolomé de las Casas, who had lived among Indigenous peoples and witnessed the conquest firsthand, argued the opposite. Both excerpts appear below.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · Juan Ginés de Sepúlveda, The Second Democrates, 1547</span>
              <span style={PS.context}>
                Sepúlveda was a Renaissance scholar and theologian appointed by Emperor Charles V to argue the case for Spanish conquest. He relied on Aristotle's theory of natural slavery.
              </span>
              <span style={PS.quote}>
                "The Spanish have a perfect right to rule these barbarians of the New World… who in prudence, skill, virtues, and humanity are as inferior to the Spanish as children to adults, or women to men, for there exists between the two as great a difference as between savage and cruel races and the most merciful… and, I might even say, between apes and men."
              </span>
              <span style={PS.attribution}>— Juan Ginés de Sepúlveda, The Second Democrates, 1547</span>
            </div>
            <div style={{ ...PS.wrapper, marginTop: "1.5rem" }}>
              <span style={PS.label}>Primary Source · Bartolomé de las Casas, In Defense of the Indians, 1552</span>
              <span style={PS.context}>
                Las Casas was a Dominican friar who had sailed to the Caribbean in 1502 and witnessed the destruction of Indigenous populations firsthand. He became Bishop of Guatemala and devoted his life to reforming Spanish colonial policy. He was recognized as "Protector of the Indians."
              </span>
              <span style={PS.quote}>
                "From the fact that the Indians are barbarians it does not necessarily follow that they are incapable of government… they had properly organized states, wisely ordered by excellent laws, religion, and custom. They cultivated friendship and, bound together in common fellowship, lived in populous cities in which they wisely administered the affairs of both peace and war justly and equitably, truly governed by laws that at very many points surpass ours… The Indian race is not that barbaric, nor are they dull witted or stupid, but they are easy to teach and very talented in learning all the liberal arts."
              </span>
              <span style={PS.attribution}>— Bartolomé de las Casas, In Defense of the Indians, 1552</span>
            </div>
          </div>

          {/* Source 3: Andrew Jackson */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              Andrew Jackson's Message to Congress (1830)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              On December 6, 1830, President Andrew Jackson addressed Congress on the Indian Removal Act he had signed that May, framing the forced displacement of Indigenous nations as an act of benevolence. The language of his message reveals how the ideology of civilization was used to justify dispossession.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · Andrew Jackson, Message to Congress, December 6, 1830</span>
              <span style={PS.quote}>
                "It will place a dense and civilized population in large tracts of country now occupied by a few savage hunters… What good man would prefer a country covered with forests and ranged by a few thousand savages to our extensive Republic, studded with cities, towns, and prosperous farms… To save him from this alternative, or perhaps utter annihilation, the General Government kindly offers him a new home, and proposes to pay the whole expense of his removal and settlement."
              </span>
              <span style={PS.attribution}>— Andrew Jackson, Message to Congress, December 6, 1830</span>
            </div>
          </div>

          {/* Source 4: Worcester v. Georgia */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              Worcester v. Georgia — The Supreme Court Speaks (1832)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              In 1832, Chief Justice John Marshall delivered the opinion of the Supreme Court in Worcester v. Georgia, ruling that the Cherokee Nation was a distinct political community with sovereign rights over its own territory — and that the Indian Removal Act was therefore unconstitutional. President Jackson refused to enforce the ruling.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · Worcester v. Georgia, U.S. Supreme Court, 1832</span>
              <span style={PS.quote}>
                "The Cherokee Nation, then, is a distinct community, occupying its own territory, with boundaries accurately described, in which the laws of Georgia can have no force, and which the citizens of Georgia have no right to enter but with the permission of the Cherokees themselves… as such, this means that the Indian Removal Act is unconstitutional."
              </span>
              <span style={PS.attribution}>— Chief Justice John Marshall, Worcester v. Georgia, U.S. Supreme Court, 1832</span>
            </div>
          </div>

          {/* Source 5: Cherokee Council + Trail of Tears */}
          <div style={{ marginBottom: "3.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", marginBottom: "0.5rem" }}>
              Cherokee Council Address & The Trail of Tears (1830–1839)
            </h3>
            <p style={{ ...S.bodyText, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              In July 1830, a council of Cherokee leaders published a formal address to the United States government in the Cherokee Phoenix newspaper, declaring their opposition to removal in terms both dignified and direct. Eight years later, the removal happened anyway.
            </p>
            <div style={PS.wrapper}>
              <span style={PS.label}>Primary Source · Cherokee Council Address, Cherokee Phoenix, July 24, 1830</span>
              <span style={PS.quote}>
                "We wish to remain on the land of our fathers… there is probably not an adult person in the Cherokee nation, who would think it best to remove… it is not the land of our birth, nor of our affections. It contains neither the scenes of our childhood, nor the graves of our fathers."
              </span>
              <span style={PS.attribution}>— Cherokee National Council, Address to the United States, Cherokee Phoenix, Vol. 3, No. 14, July 24, 1830</span>
            </div>

            {/* Trail of Tears map */}
            <div style={{ margin: "2rem 0", border: "1px solid var(--color-parchment-dk)", background: "var(--color-parchment-lt)" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "75%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/trail-of-tears-map.png"
                  alt="Map of the Trail of Tears showing removal routes across 9 states"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", background: "var(--color-parchment-lt)" }}
                />
              </div>
              <p style={{ ...S.monoLabel, fontSize: "0.52rem", color: "var(--color-sepia)", padding: "0.5rem 0.75rem" }}>
                Trail of Tears — Routes of the Forced Removal, 1838–1839 · Source: National Park Service / Encyclopædia Britannica
              </p>
            </div>

            {/* Trail of Tears painting */}
            <div style={{ margin: "2rem 0", border: "1px solid var(--color-parchment-dk)", background: "var(--color-parchment-lt)" }}>
              <div style={{ position: "relative", width: "100%", paddingBottom: "56%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/trail-of-tears-painting.png"
                  alt="Trail of Tears, painting by Robert Lindeneux, 1942"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p style={{ ...S.monoLabel, fontSize: "0.52rem", color: "var(--color-sepia)", padding: "0.5rem 0.75rem" }}>
                Trail of Tears · Robert Lindeneux, oil on canvas, 1942 · Depicts the forced march of the Cherokee Nation, 1838–1839
              </p>
            </div>

            {/* Emerson */}
            <div style={{ ...PS.wrapper, marginTop: "1.5rem" }}>
              <span style={PS.label}>Primary Source · Ralph Waldo Emerson, Letter to President Van Buren, April 23, 1838</span>
              <span style={PS.context}>
                American author and philosopher Ralph Waldo Emerson wrote directly to President Martin Van Buren to protest the Cherokee removal, asking whether the United States government would steal, lie, and kill to take what did not belong to it.
              </span>
              <span style={PS.quote}>
                "Would we truly ask those who were there before us to move hundreds of miles without any legal cause simply because we want their lands? We seem to be committing a crime… a crime that deprives us as well as the Cherokees of a country… Will the American government steal? Will it lie? Will it kill?"
              </span>
              <span style={PS.attribution}>— Ralph Waldo Emerson, Letter to President Martin Van Buren, April 23, 1838</span>
            </div>
          </div>

          {/* Source 6: Chief Elias Johnson on stereotyping */}
          <div style={{ marginBottom: "3.5rem", borderLeft: "4px solid var(--color-sage)", paddingLeft: "1.75rem" }}>
            <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass)", display: "block", marginBottom: "1rem" }}>
              Primary Source · On the Misrepresentation of Native Peoples
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-walnut)", lineHeight: 1.65, marginBottom: "1.25rem", display: "block" }}>
              "Almost any portrait that we see of an Indian, he is represented with tomahawk and scalping knife in hand, as if they possessed no other but a barbarous nature. Christian nations might with equal justice be always represented with cannon and ball, swords and pistols."
            </span>
            <span style={{ ...S.monoLabel, fontSize: "0.6rem", color: "var(--color-sepia)", display: "block", marginTop: "0.75rem" }}>
              — Tuscarora Chief Elias Johnson, Legends, Traditions and Laws of the Iroquois, 1881
            </span>
          </div>

          {/* Source 7: Charlene Teters */}
          <div style={{ marginBottom: "1rem", borderLeft: "4px solid var(--color-sage)", paddingLeft: "1.75rem" }}>
            <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-brass)", display: "block", marginBottom: "1rem" }}>
              Testimony · U.S. Senate Committee on Indian Affairs, 2011
            </span>
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--color-walnut)", lineHeight: 1.65, marginBottom: "1.25rem", display: "block" }}>
              "These images are so powerful that many non-native people do not see us as modern people with a valued history, living culture, language or a future."
            </span>
            <span style={{ ...S.monoLabel, fontSize: "0.6rem", color: "var(--color-sepia)", display: "block", marginTop: "0.75rem" }}>
              — Charlene Teters, activist, Senate testimony on Stolen Identities, May 5, 2011
            </span>
          </div>

        </section>

        {/* TIMELINE */}
        <section id="timeline" style={{ marginBottom: "4rem" }}>
          <div style={{ borderBottom: "2px solid var(--color-walnut)", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sage)", marginBottom: "0.3rem" }}>Chronology</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>Timeline of Native American Advocacy</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "96px 1fr", gap: "1.25rem", padding: "0.85rem 0", borderBottom: "1px dashed rgba(107,76,48,0.2)" }}>
                <span style={{ ...S.monoLabel, fontSize: "0.62rem", color: "var(--color-sage)", paddingTop: "0.1rem" }}>{t.year}</span>
                <p style={{ ...S.bodyText, fontSize: "0.875rem", color: "var(--color-ink)" }}>{t.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DISPATCHES */}
        <section id="dispatches">
          <div style={{ borderBottom: "2px solid var(--color-walnut)", paddingBottom: "0.5rem", marginBottom: "2rem" }}>
            <p style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sage)", marginBottom: "0.3rem" }}>From Our Correspondents</p>
            <h2 style={{ ...S.sectionTitle, fontSize: "1.75rem" }}>Native American Dispatches</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {dispatches.map((a) => (
              <article key={a.slug} style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--color-parchment-dk)", display: "grid", gridTemplateColumns: "3px 1fr", gap: "1.25rem" }}>
                <div style={{ background: "var(--color-sage)" }} />
                <div>
                  <span style={{ ...S.monoLabel, fontSize: "0.58rem", color: "var(--color-sepia)", opacity: 0.7, display: "block", marginBottom: "0.35rem" }}>{a.date}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", fontWeight: 700, color: "var(--color-walnut)", lineHeight: 1.2, marginBottom: "0.5rem" }}>{a.title}</h3>
                  <p style={{ ...S.bodyText, fontSize: "0.875rem", marginBottom: 0 }}>{a.lede}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/gazette/native" style={{ ...S.monoLabel, fontSize: "0.6rem", color: "var(--color-brass)", textDecoration: "none" }}>View All Native American Dispatches →</Link>
          </div>
        </section>

      </div>
    </div>
  );
}