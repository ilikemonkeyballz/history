export type Article = {
  slug: string;
  tag: "Abolition" | "Native Rights" | "Reform";
  tagColor: string;
  date: string;
  title: string;
  lede: string;
  body: string[];
};

export const articles: Article[] = [
  // ── ABOLITION ──────────────────────────────────────────────────────────────
  {
    slug: "douglass-escapes-bondage",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "August 1, 1838",
    title: "Douglass Escapes Bondage — A Man Reclaims His Name",
    lede:
      "Frederick Douglass, formerly enslaved in Maryland, has arrived in New York a free man. His account of bondage and escape is already circulating among abolitionist societies.",
    body: [
      "The man who now calls himself Frederick Douglass arrived in the city of New York on the third day of September, having disguised himself as a sailor and boarded a train northward from Baltimore. He carried with him no property save the clothes upon his back and the resolve of a man who has looked upon his own bondage and determined it shall not endure.",
      "Word of his arrival spread quickly through the abolitionist community. David Ruggles, secretary of the New York Vigilance Committee, received him at his home on Lispenard Street and within days had arranged for Douglass to be joined by Anna Murray, a free Black woman from Baltimore to whom he had long been attached. They were married quietly before a justice of the peace.",
      "Garrison's Liberator, upon receiving an account of the escape, declared it the most powerful testimony yet against the institution of slavery — not the argument of the philosopher, but the living proof of the man who endured it. Douglass is expected to speak before abolitionist meetings in New England in the coming months, where his eloquence and his bearing are said to so confound audiences that some have doubted he could ever have been enslaved at all.",
      "This Courier will follow Mr. Douglass's story with the attention it deserves. A nation that claims liberty as its birthright cannot long endure the testimony of men such as this one.",
    ],
  },
  {
    slug: "garrison-launches-liberator",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "January 1, 1831",
    title: "Garrison Launches The Liberator — 'I Will Be Heard'",
    lede:
      "William Lloyd Garrison has published the first issue of a new abolitionist newspaper from a small office in Boston, declaring he will not equivocate, will not excuse, and will not retreat a single inch.",
    body: [
      "On the first day of the new year, a small newspaper printed on a hand press in Boston announced itself to the world with words that have not been heard in the American press before. William Lloyd Garrison, formerly an advocate of gradual emancipation and colonization, has recanted those positions and declared himself for immediate, unconditional abolition.",
      "The inaugural editorial of The Liberator invokes the Declaration of Independence — 'all men are created equal, and endowed by their Creator with certain inalienable rights' — and asks, with surgical precision, why those words have not been applied to the enslaved population of this republic. Garrison writes that he has previously urged moderation, and publicly asks forgiveness of God, his country, and the enslaved for having done so.",
      "The language is unlike anything this correspondent has encountered in the American press. 'I will be as harsh as truth, and as uncompromising as justice,' he writes. 'Tell a man whose house is on fire to give a moderate alarm; tell him to moderately rescue his wife from the hands of the ravisher; tell the mother to gradually extricate her babe from the fire into which it has fallen — but urge me not to use moderation in a cause like the present.'",
      "The paper is expected to circulate among free Black communities in the North and among the growing network of abolitionist societies. Whether the slaveholding states will permit its distribution remains to be seen. What is certain is that a new voice has entered the debate — and it does not intend to whisper.",
    ],
  },
  {
    slug: "equiano-narrative",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "March 15, 1789",
    title: "Equiano Publishes His Narrative — The Middle Passage in His Own Words",
    lede:
      "Olaudah Equiano, formerly enslaved and now a free man in London, has published an autobiography that puts the full horror of the transatlantic slave trade before the reading public in terms no pamphlet has yet achieved.",
    body: [
      "There are arguments against slavery, and there are witnesses to it. Olaudah Equiano is the latter. Born in the Kingdom of Benin — present-day Nigeria — he was kidnapped at the age of eleven, separated from his sister, and sold into the Atlantic slave trade. His autobiography, published this year in London under his own name, is the first account of the Middle Passage written by a man who survived it.",
      "The narrative describes his arrival at the coast: the slave ship riding at anchor, the furnace boiling on deck, the chained multitude below. 'I was soon put down under the decks,' he writes, 'and there I received such a salutation in my nostrils as I had never experienced in my life.' He wished for death. He was flogged when he refused to eat.",
      "Equiano eventually purchased his own freedom in 1766 after years of labor aboard trading vessels in the West Indies. He settled in London, joined the abolitionist movement, and has devoted his pen to the cause. His book is dedicated to the Parliament of Great Britain with a simple request: abolish the trade.",
      "This Courier observes that no man who reads Equiano's account with an honest heart can continue to speak of the slave trade as a matter of commerce, of policy, or of political calculation. It is a matter of human beings — and it has been made, by the greed and cruelty of this republic and its predecessors, into a matter of chains.",
    ],
  },
  {
    slug: "seneca-falls-declaration",
    tag: "Reform",
    tagColor: "var(--color-brass)",
    date: "July 19, 1848",
    title: "Seneca Falls Convention Issues Declaration of Sentiments",
    lede:
      "Three hundred delegates assembled in upstate New York to demand that the promises of the Declaration of Independence be extended to all persons regardless of sex.",
    body: [
      "The village of Seneca Falls, New York, will not soon be forgotten. On the nineteenth and twentieth of July, in the year of our Lord eighteen hundred and forty-eight, some three hundred men and women gathered at the Wesleyan Chapel to declare, in terms unmistakably borrowed from the founding document of this republic, that all men and women are created equal.",
      "The Declaration of Sentiments, drafted principally by Elizabeth Cady Stanton, catalogs with surgical precision the grievances of American women: denied the vote, denied property rights upon marriage, excluded from the universities, the professions, and the pulpit, subjected to laws they had no hand in making.",
      "Of all the resolutions passed at Seneca Falls, the most contentious was the ninth — calling for women's suffrage. It passed, but only narrowly, and only after an impassioned address by Frederick Douglass, who argued that the right to vote is the foundation upon which all other rights depend. That a man who has himself been denied that right should champion it so forcefully was not lost on those assembled.",
      "This Courier notes the irony that a nation which sent its sons to die for the proposition that governments derive their just powers from the consent of the governed should require three hundred citizens to convene in a chapel in upstate New York to make that proposition mean what it says.",
    ],
  },
  {
    slug: "bacons-rebellion-aftermath",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "October 18, 1676",
    title: "Bacon's Rebellion Crushed — But the Planter Class Has Not Forgotten Its Fear",
    lede:
      "The Virginia uprising that united poor white colonists and enslaved Black Virginians against the colonial government has been suppressed. What follows may prove more consequential than the rebellion itself.",
    body: [
      "The rebellion led by Nathaniel Bacon against Governor William Berkeley has ended with Bacon's death from illness and the hanging of his principal lieutenants. The governor has been recalled to England. On the surface, order has been restored to the Virginia colony.",
      "But those who govern Virginia are not at ease. The uprising revealed something that the planter class had feared and suppressed from conscious thought: that poor white servants and enslaved Black Virginians could make common cause. For several months they fought together, burned Jamestown together, and threatened to overturn a social order built on their combined labor.",
      "The legislative response is already underway. Colonial assemblies are extending new privileges to white indentured servants — land grants upon completion of service, the right to bear arms, protections against arbitrary punishment — while simultaneously tightening the legal codes governing enslaved Africans. Slavery is being written into law not merely as a labor arrangement but as a permanent, heritable, racial condition.",
      "This deliberate drawing of the color line — white above Black, regardless of poverty or status — is the planters' answer to the nightmare of 1676. Whether this bargain holds, whether poor white Virginians will accept its terms, and what it will mean for the hundreds of thousands of African people already in bondage or yet to come — these are the questions this century has bequeathed to the next.",
    ],
  },
  {
    slug: "mary-prince-petition",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "June 24, 1831",
    title: "Mary Prince Addresses Parliament — The First Black Woman to Do So",
    lede:
      "Mary Prince, born enslaved in Bermuda and now free in London, has submitted an anti-slavery petition to the British Parliament. Her autobiography, published this year, is the first by a Black woman in the English language.",
    body: [
      "Mary Prince was born in Bermuda in 1788 to an enslaved mother. She was sold at auction at the age of twelve — separated from her mother and sisters on a public street, examined by strange men who discussed her shape and size as a butcher might discuss a calf. She was sold for fifty-seven pounds.",
      "She labored in the salt ponds of Turks Island for nearly a decade, standing knee-deep in brine from before dawn until dark, her feet and legs eaten by salt sores. She was beaten routinely. She was sold again, and again. In 1828 she arrived in England with the family that then owned her, and she ran.",
      "Her autobiography, dictated to a white editor and published this year, ends with a direct address to the English people: 'How can slaves be happy when they have the halter round their neck and the whip upon their back? and are disgraced and thought no more of than beasts? — and are separated from their mothers, and husbands, and children, and sisters, just as cattle are sold and separated? This is slavery. I tell it, to let English people know the truth.'",
      "The Anti-Slavery Society, which assisted her after her escape, has carried her petition to Parliament. It is the first such petition submitted by a Black woman in the history of the British legislature. This Courier commends her courage to its readers, and her words to their consciences.",
    ],
  },
  {
    slug: "sojourner-truth-pleading",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "September 4, 1847",
    title: "Sojourner Truth Sings the Cause — A New Voice in Ohio",
    lede:
      "The abolitionist and women's rights advocate Sojourner Truth, born into slavery in New York, addressed an anti-slavery meeting in Ohio this week with a song that left the audience in silence.",
    body: [
      "There are orators who argue and there are witnesses who testify. Sojourner Truth does both at once, and she does it in song. At an anti-slavery meeting in Ohio this week, she rose and sang, to the tune of Auld Lang Syne, words that no one in the room will soon forget.",
      "Truth was born Isabella Baumfree, enslaved in New York. She escaped with her infant daughter in 1826, and later became the first Black woman in American history to successfully sue a white man for the return of a child — her son Peter, who had been illegally sold to Alabama. She changed her name to Sojourner Truth and began her life as an itinerant preacher and reformer.",
      "Her song at the Ohio meeting does not argue. It bears witness. She sings of mothers watching their children sold from the auction block. She sings of scars on her own body. She sings of those who labor in the fields and receive no reward. And then, with a precision that silences every critic who has ever accused the abolitionist movement of advocating violence, she sings: 'I want no carnal weapons, no enginery of death; for I love not to hear the sound of war's tempestuous breath.'",
      "To demand justice without demanding blood is a harder position than it sounds. Sojourner Truth holds it with both hands.",
    ],
  },
  {
    slug: "walker-appeal",
    tag: "Abolition",
    tagColor: "var(--color-rust)",
    date: "September 28, 1829",
    title: "Walker's Appeal Banned in the South — Too Dangerous to Permit",
    lede:
      "A pamphlet published in Boston by David Walker, the free-born son of an enslaved man, has been banned in North Carolina and is being seized at Southern ports. Authorities call it incendiary. Walker calls it the truth.",
    body: [
      "David Walker was born free in North Carolina, the son of an enslaved father and a free mother. He moved to Boston, where he became associated with the abolitionist community and, in 1829, published a pamphlet addressed directly to the enslaved people of the United States.",
      "The pamphlet's core argument is not complicated. Walker quotes the Declaration of Independence — 'that ALL MEN ARE CREATED EQUAL, that they are endowed by their Creator with certain unalienable rights; that among these are life, liberty, and the pursuit of happiness' — and then asks, with a controlled fury that is more devastating than any rage, how American slaveholders can read those words and not see themselves condemned by them.",
      "He compares American slavery to the slavery of ancient Egypt and finds it worse. He asks his readers to search the pages of historians and find any civilization that has treated a people as the white Americans have treated Black Americans. He finds none.",
      "The pamphlet has been banned in North Carolina, Georgia, Louisiana, and Virginia. It has been seized from ships in Southern ports. Georgia has offered a reward for Walker's capture, dead or alive. Walker remains in Boston. This Courier notes that a government which must ban a pamphlet to protect its institutions has already confessed that it cannot defend those institutions by argument.",
    ],
  },
  // ── NATIVE RIGHTS ──────────────────────────────────────────────────────────
  {
    slug: "cherokee-supreme-court",
    tag: "Native Rights",
    tagColor: "var(--color-sage)",
    date: "March 5, 1832",
    title: "Supreme Court Rules for the Cherokee — Jackson Defies the Law",
    lede:
      "In Worcester v. Georgia, Chief Justice Marshall declared the Cherokee Nation a distinct community in which the laws of Georgia can have no force. President Jackson is reported to have defied the ruling entirely.",
    body: [
      "The Supreme Court of the United States has spoken with unusual clarity: the Cherokee Nation is a distinct political community occupying its own territory in which the laws of the State of Georgia can have no force. Chief Justice John Marshall, writing for the majority in Worcester v. Georgia, declared that the relationship between the United States and the Cherokee is one of nation to nation — and that Georgia's repeated encroachments upon Cherokee land are without legal foundation.",
      "The decision was met with jubilation in the Cherokee capital of New Echota, where Principal Chief John Ross had long argued that his people's rights were secured by treaty and by the Constitution itself. Cherokee scholars and statesmen, many educated in the same institutions as their white counterparts, have produced memorials, petitions, and legal arguments that rival in sophistication anything produced in Washington.",
      "And yet the jubilation may be short-lived. President Andrew Jackson, who built his reputation upon the removal of Native peoples from their lands, is reported to have received the ruling with contempt. Those close to the President relay his words with alarm: 'Marshall has made his decision; now let him enforce it.'",
      "If the President of the United States will not execute the law of the land, then the question before this nation is not merely the fate of the Cherokee — it is whether the rule of law has any meaning at all when it stands between a powerful man and the land he covets.",
    ],
  },
  {
    slug: "indian-removal-act-signed",
    tag: "Native Rights",
    tagColor: "var(--color-sage)",
    date: "May 28, 1830",
    title: "Jackson Signs the Removal Act — A Nation Dispossessed by Law",
    lede:
      "President Andrew Jackson has signed the Indian Removal Act, authorizing the forced relocation of all Indigenous nations east of the Mississippi River. The Cherokee Nation has vowed to resist through every legal means available.",
    body: [
      "The Indian Removal Act, signed into law by President Jackson on the twenty-eighth of May, authorizes the federal government to negotiate treaties exchanging Native lands east of the Mississippi for territory to the west. The word 'negotiate' is doing considerable work in that sentence. The Cherokee, Creek, Choctaw, Chickasaw, and Seminole nations have not requested this exchange. They have not agreed to it. They have been told it is coming.",
      "Jackson's message to Congress frames the Act as a kindness — an act of benevolence toward peoples who, he claims, would otherwise face 'utter annihilation.' He asks what good man would prefer 'a country covered with forests and ranged by a few thousand savages' to the prosperous republic of twelve million. The answer, apparently, is the people who have lived in those forests for ten thousand years.",
      "The Cherokee Nation has responded through its newspaper, the Cherokee Phoenix, through petitions to Congress, and through the courts. Principal Chief John Ross has declared that the Cherokee will not remove. The nation has a written constitution, a syllabary devised by Sequoyah, thriving towns, and a Supreme Court ruling in their favor. None of this appears to matter to the President.",
      "Ralph Waldo Emerson, writing to President Van Buren in protest, asks the question directly: 'Will the American government steal? Will it lie? Will it kill?' This Courier awaits the answer with dread.",
    ],
  },
  {
    slug: "trail-of-tears",
    tag: "Native Rights",
    tagColor: "var(--color-sage)",
    date: "April 7, 1839",
    title: "The Trail Where They Cried — The Cherokee March Is Complete",
    lede:
      "The last detachment of Cherokee people has arrived in Indian Territory after a forced march of nearly eight hundred miles. Approximately four thousand did not survive the journey.",
    body: [
      "It is finished. The last detachment of the Cherokee Nation arrived in Indian Territory on the twenty-fourth of March, completing a forced removal that has occupied the better part of two years. The Cherokee call it Nunna daul Tsuny — the trail where they cried. History may simply call it what it was: a government-organized death march.",
      "The removal began in the summer of 1838, when United States Army soldiers and Georgia militia moved into Cherokee towns and forced men, women, and children into stockades at bayonet point. Some had time to gather their belongings. Most did not. Homes were looted behind them. Farms were seized. Graves of their ancestors remained behind, unreachable.",
      "The march westward began in October and continued through one of the harshest winters in memory. The Cherokee were inadequately clothed, inadequately fed, and driven at a pace that prevented the sick from recovering and the elderly from surviving. Estimates of the dead range from four to eight thousand people out of a nation of approximately sixteen thousand.",
      "Chief John Ross, who led a detachment of his own people through the winter, wrote to Congress upon arrival: we have been robbed of our country, our homes, our property, our lives. The government's response has been to remind the Cherokee of the annuity payments promised in the Treaty of New Echota — a treaty signed by a faction of fewer than one hundred men who had no authority to speak for the nation, and which the overwhelming majority of Cherokee people repudiated the moment they learned of it.",
    ],
  },
  {
    slug: "columbus-first-contact",
    tag: "Native Rights",
    tagColor: "var(--color-sage)",
    date: "October 15, 1492",
    title: "Columbus Makes Landfall — His Own Words Condemn Him",
    lede:
      "The journal of Christopher Columbus, recording his first contact with the Taíno people of the Caribbean, has reached European courts. Its most revealing passages concern not what Columbus discovered, but what he immediately planned to do with it.",
    body: [
      "Christopher Columbus arrived at the island he named San Salvador on the twelfth of October, 1492. The Taíno people who came to meet him on the shore were, by his own account, generous, beautiful, and peaceable. They swam out to the ships. They brought gifts. They exchanged what they had freely.",
      "Columbus's journal records all of this and then, in the same passage, draws the conclusion that would define five centuries of what followed: 'They should be good servants and intelligent, for I observed that they quickly took in what was said to them, and I believe that they would easily be made Christians, as it appeared to me that they had no religion.' The Admiral had been on the island for perhaps one afternoon.",
      "He noted that the Taíno carried no weapons — that when he showed them swords, they took the blades by the edge and cut themselves through ignorance. He noted this not with sorrow or shame but as a military assessment. His desire, he writes, was 'not to pass any island without taking possession.' One having been taken, the same may be said of all.",
      "When he departed, Columbus took six Taíno people with him by force, to bring before the Spanish sovereigns, that they might learn to speak. The Journal of the First Voyage is many things. It is not, whatever its author believed, the record of a discovery. It is the record of an opening move.",
    ],
  },
  {
    slug: "las-casas-vs-sepulveda",
    tag: "Native Rights",
    tagColor: "var(--color-sage)",
    date: "September 12, 1550",
    title: "The Debate at Valladolid — Two Visions of the Indian, One Will Prevail",
    lede:
      "The Spanish Crown has convened a formal debate to determine the moral and legal basis of its treatment of the Native peoples of the Americas. On one side: Juan Ginés de Sepúlveda. On the other: Bartolomé de las Casas. The outcome will shape a continent.",
    body: [
      "The Council of the Indies has assembled at Valladolid to hear a debate that cuts to the core of what European civilization believes about itself and about the peoples it has encountered in the New World. The question, stripped of its theological and philosophical dressing, is this: are the Native peoples of the Americas fully human, and if so, what follows from that fact?",
      "Juan Ginés de Sepúlveda argues that they are not — or rather, that they are so inferior in prudence, virtue, and humanity that they exist, by nature, in a condition of slavery. He compares them to children, to women, to apes. He argues that their conquest is not only justified but beneficial, a gift of civilization to peoples incapable of achieving it themselves.",
      "Bartolomé de las Casas, who has lived among the Indigenous peoples of the Caribbean and the Americas and who witnessed the full horror of what the Spanish conquest has meant in practice, argues the opposite. He cites the organized governments, the laws, the cities, the arts, and the learning of the peoples Sepúlveda dismisses as barbarians. He asks whether the Roman conquest of Spain was justified by the same logic — and whether, by that logic, the Spanish themselves were once the barbarians.",
      "Las Casas does not merely argue theology. He describes what he has seen. The Destruction of the Indies, which he has written and which circulates in manuscript, is a catalog of atrocity — of enslaved peoples worked to death in mines, of populations collapsed from millions to thousands in a generation. No debate at Valladolid will undo what has been done. But what is decided here will determine what continues to be done — and who will be permitted to call it by its right name.",
    ],
  },
  {
    slug: "cherokee-council-address",
    tag: "Native Rights",
    tagColor: "var(--color-sage)",
    date: "July 24, 1830",
    title: "Cherokee Council Addresses the United States — 'This Is Not the Land of Our Fathers'",
    lede:
      "A council of Cherokee leaders has issued a formal address to the United States government in response to the Indian Removal Act, declaring that not one adult person in the Cherokee Nation believes removal to be in their interest.",
    body: [
      "The Cherokee Council has spoken. In a formal address to the United States government, the council states flatly: 'We are aware that some persons suppose it will be for our advantage to remove beyond the Mississippi. We think otherwise. Our people universally think otherwise. There is probably not an adult person in the Cherokee Nation who would think it best to remove.'",
      "The address is remarkable for its directness, its dignity, and its patience with an argument the Cherokee have been made to hear for thirty years. The land to the west is unknown to them. It is already occupied by other nations who would regard the Cherokee as intruders. It does not contain the scenes of their childhood or the graves of their fathers. 'Were the country to which we are urged much better than it is represented to be,' the council writes, 'still it is not the land of our birth, nor of our affections.'",
      "The address appears in the Cherokee Phoenix — the newspaper published in both Cherokee and English, printed with the syllabary devised by Sequoyah — and is addressed to a government that has, for the most part, already made up its mind. Andrew Jackson has said that removal will happen. The Supreme Court has said it cannot. Congress has said it will.",
      "The Cherokee Nation has built courts, schools, a constitution, and a press. It has done everything that American civilization said it needed to do in order to be regarded as civilized. It has now been told that none of that matters. This Courier does not know what word to use for what is being done to the Cherokee, except the word that the Cherokee themselves have not yet used: betrayal.",
    ],
  },
];

export function getArticlesByTag(tag: Article["tag"]) {
  return articles.filter((a) => a.tag === tag);
}