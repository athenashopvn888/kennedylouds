import type { ResourceArticle } from "./resourceData";

const TITLE = "Hash Oil vs Cannabis Oil vs Distillate: The Label Words, Decoded";

export const HASH_OIL_LABELS_ARTICLE: ResourceArticle = {
  path: "/resources/hash-oil-vs-cannabis-oil-labels",
  slug: ["hash-oil-vs-cannabis-oil-labels"],
  title: TITLE,
  metaDescription:
    "Canadian law files almost all of it under a single class, and the words on the front are mostly trade vocabulary.",
  eyebrow: "Label words",
  summary:
    "Canadian law files almost all of it under a single class, and the words on the front are mostly trade vocabulary.",
  lastChecked: "October 21, 2026",
  datePublished: "2026-10-30",
  dateModified: "2026-10-30",
  omitBreadcrumbSchema: true,
  sections: [],
  quickLinks: [{ label: "Visit page", href: "/visit" }],
  blocks: [
    {
      type: "p",
      text: "New to this aisle? Welcome. Nobody's born knowing what any of these words mean, and the shelf doesn't make it easy. One product says hash oil, another says cannabis oil, a third says distillate, and you're left wondering whether those are three different things or one thing wearing three hats. Short answer: Canadian law files almost all of it under a single class, and the words on the front are mostly trade vocabulary.",
    },
    {
      type: "p",
      text: "Here's a friendly, no-pressure decoder from Kennedy Loud Cannabis in Brampton. It's for adults 19 and over. It won't name brands, rank anything or make claims about strength. It just explains the words, so the next label you pick up reads like plain English.",
    },
    { type: "h2", text: "Hash oil: a trade word, not a legal one" },
    {
      type: "p",
      text: 'Let\'s start with **hash oil**. You won\'t find it in the federal Cannabis Act or the Cannabis Regulations. Neither will you find "distillate." Those are words the trade uses.',
    },
    {
      type: "p",
      text: 'What the law uses instead is "cannabis extract." The Regulations define it as a substance made by putting cannabis through extraction processing, or by synthesizing a substance identical to a phytocannabinoid found in the plant. Anything that contains such a substance counts too. Two exclusions: edible cannabis and cannabis topicals are their own classes.',
    },
    {
      type: "p",
      text: 'So when a label\'s front says "hash oil," flip to the class line. If the product is an extract, the class line will say so, because section 123 of the Regulations requires every label to state the class of cannabis.',
    },
    { type: "h2", text: "Hash oil vs cannabis oil: one of them used to be a legal class" },
    { type: "p", text: "Here's a bit of history that clears up a lot of confusion." },
    {
      type: "p",
      text: '"Cannabis oil" was once an official class in the Cannabis Act\'s Schedule 4. Today that line reads "[Repealed, SOR/2019-207, s. 3]," and the matching definition in the Regulations is marked "[Repealed, SOR/2019-206, s. 1]." The 2019 changes folded oils into the newer classes. Since then, "cannabis oil" on a product is a description of what it looks like, not its legal category.',
    },
    {
      type: "p",
      text: "That leads to the twist most first-timers never hear: a product called cannabis oil can land in **either** of two classes, depending on how it's meant to be used.",
    },
    {
      type: "list",
      items: [
        "**If it's meant to be eaten like food, it's edible cannabis.** Health Canada's classification policy lists edible oils among food formats.",
        "**If it's built for measured use, it can be a cannabis extract.** In one of Health Canada's own examples, an oil in a small bottle with a restricting cap that only works with a syringe was assessed as an extract, because it couldn't be poured or drunk from the bottle.",
      ],
    },
    {
      type: "p",
      text: "Same word on the front, different rulebook behind it. The class line on the label tells you which rulebook applies.",
    },
    { type: "h2", text: "The decoder table" },
    {
      type: "table",
      headers: ["Word on the front", "Is it defined in federal law?", "Where it usually lands"],
      rows: [
        ["Hash oil", "No", "Cannabis extracts, if it's an extract"],
        ["Distillate", "No", "Whatever class the finished product belongs to: an extract on its own, an edible if it's in food"],
        ["Cannabis oil", "Not anymore (repealed in 2019)", "Cannabis extracts or edible cannabis, depending on format and intended use"],
        ["Hash", "No", "Cannabis extracts (Health Canada's label guide lists hash, kief, resin, rosin, wax and shatter as extracts)"],
      ],
    },
    {
      type: "p",
      text: '"Distillate" gets the most hand-waving, so here\'s the careful version: it\'s a trade word for an extract product, and the label never relies on it. The class line and the Total THC numbers do the work.',
    },
    { type: "h2", text: "Rules that ride along with the extract class" },
    {
      type: "p",
      text: "Once a product is a cannabis extract, a few federal rules come with it, regardless of the name on the front:",
    },
    {
      type: "ol",
      items: [
        "**A package ceiling.** Section 101.2 caps THC at 1,000 mg per immediate container, counting THCA that could convert.",
        "**No sweeteners.** Health Canada's classification policy says extracts can't contain sugars, sweeteners or sweetening agents.",
        "**Bottle controls for liquids.** A liquid extract container can hold no more than 90 mL and can't let the extract be easily poured or drunk. If it holds more than 10 mg of THC and isn't for inhalation, it needs a built-in dispenser releasing no more than 10 mg of THC per activation.",
        '**Clear numbers.** For extracts not in discrete units, the label shows "Total THC" and "Total CBD" in mg/g, plus a per-activation figure when the product comes with a dispensing mechanism.',
      ],
    },
    { type: "h2", text: "A first-timer's three-step check" },
    {
      type: "ol",
      items: [
        "**Find the class line.** Is it cannabis extracts or edible cannabis? Everything else follows from that.",
        "**Find the Total THC and Total CBD lines.** Note the unit: mg/g, per unit or per activation.",
        "**Treat the name on the front as a nickname.** Front-of-pack words describe; the class line decides.",
      ],
    },
    { type: "h2", text: "Hash oil questions? Bring them to Hillcrest Ave" },
    {
      type: "p",
      text: "Kennedy Loud Cannabis is on Hillcrest Ave in Brampton, near Kennedy Rd. Bring ID showing you're 19 or older and whatever label is puzzling you. Hash oil vs cannabis oil is a fair question, and there's no such thing as a silly one at our counter. Read the class line, read the numbers, and the mystery mostly solves itself. Plan your stop on the [visit page](/visit).",
    },
  ],
};
