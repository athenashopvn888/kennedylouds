import type { ResourceArticle } from "./resourceData";

const TITLE = "Infused Pre-Rolls and Moon Rocks: Two Menu Words, One Label That Tells the Truth";

const META =
  "Infused pre-rolls and moon rocks are formats, and the only reliable account of what's inside is printed on the package.";

export const INFUSED_PREROLLS_ARTICLE: ResourceArticle = {
  path: "/resources/infused-pre-rolls-and-moon-rocks",
  slug: ["infused-pre-rolls-and-moon-rocks"],
  title: TITLE,
  metaDescription: META,
  eyebrow: "Menu words",
  summary: META,
  lastChecked: "October 25, 2026",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  omitBreadcrumbSchema: true,
  sections: [],
  quickLinks: [{ label: "Visit page", href: "/visit" }],
  blocks: [
    {
      type: "p",
      text: "\"Infused.\" \"Moon rock.\" Menus love these words, and they're very good at catching your eye. What they're not good at is telling you what's actually in the pack.",
    },
    {
      type: "p",
      text: "Neither one is a legal category. Infused pre-rolls and moon rocks are formats, and the only reliable account of what's inside is printed on the package. Reading it doesn't need to feel like an exam, either. You just need to know which lines to hit first, and this walkthrough (adults 19+ only) gets you there one panel at a time.",
    },
    { type: "h2", text: "The 30-second version" },
    {
      type: "list",
      items: [
        "A **plain pre-roll** is dried cannabis rolled in paper. That's it.",
        "**An infused pre-roll** adds something else, usually an extract, kief or hash. It can go inside, onto the flower, or on the outside of the paper.",
        "A **moon rock** isn't a strain. It's a build: a dried bud coated with an extract or oil, then rolled in kief.",
        "**The class line** on the package tells you how the product is regulated. The menu word doesn't.",
      ],
    },
    { type: "h2", text: "What gets added, and where it ends up" },
    {
      type: "table",
      headers: ["Added material", "In plain terms", "Where it usually sits", "First label line to check"],
      rows: [
        [
          "Distillate",
          "A refined cannabis extract, usually a thick oil",
          "On the flower inside, or brushed along the outside of the paper",
          "Class line (*cannabis extract*?), then ingredients",
        ],
        [
          "Kief",
          "Fine, loose resin glands that fall away when dried flower is sifted",
          "Mixed into the ground flower, or rolled onto the outside, often over an oil coat",
          "Class line, then Total THC in mg/g",
        ],
        [
          "Hash",
          "Resin glands pressed together into a solid",
          "Crumbled into the flower, or laid inside as a thin strip",
          "Class line, then net weight per unit",
        ],
        [
          "Oil coating",
          "An extract layer that other material sticks to",
          "Outside of a bud or a pre-roll",
          "Ingredients list",
        ],
        [
          "Moon rock (format)",
          "A bud coated with extract or oil, then rolled in kief",
          "Sold loose or used in pre-rolls",
          "Class line and net weight",
        ],
      ],
    },
    {
      type: "p",
      text: "Two ground rules. \"Usually\" means usually, because products differ. And the table explains the format, not any particular package. Only the package can tell you that.",
    },
    { type: "h2", text: "Panel by panel: how to read a pack of infused pre-rolls" },
    { type: "h3", text: "Panel 1: the class line (yes, hash pre-rolls too)" },
    {
      type: "p",
      text: "Start here, always. Every cannabis label in Canada has to state the product's class from the federal list in the Cannabis Act's Schedule 4. Two classes matter for this topic: *dried cannabis* and *cannabis extracts*. The outer package can't hold more than one class, so a single box can't be half dried cannabis and half extract.",
    },
    {
      type: "p",
      text: "Here's the twist that catches people. The Cannabis Regulations' definition of a cannabis extract covers \"a substance or mixture of substances that contains or has on it\" a substance produced through extraction processing. So once distillate or an oil goes onto the flower, that definition can reach the whole product. Whether you're holding hash pre-rolls, a kief-rolled joint or something else, don't guess. The class printed on the box is the answer.",
    },
    { type: "h3", text: "Panel 2: weights and units" },
    {
      type: "p",
      text: "Pre-rolls usually come as separate units, and the label is built around that. For either class, when the product is meant for inhalation and packaged as discrete units, its label shows:",
    },
    {
      type: "list",
      items: [
        "the **total net weight** in grams",
        "the **number of units**",
        "how much **each unit weighs** (net)",
      ],
    },
    {
      type: "p",
      text: "Comparing two packs? This is your panel. A two-pack and a five-pack mean nothing side by side until you've checked the weight per unit.",
    },
    { type: "h3", text: "Panel 3: Total THC and Total CBD" },
    {
      type: "p",
      text: "Both label types give a **\"Total THC\"** and a **\"Total CBD\"** concentration in milligrams per gram. \"Total\" means it includes the THC that could form from THCA. It's a measurement. It's not a grade, and a bigger figure is not a quality score.",
    },
    {
      type: "p",
      text: "If the class is *cannabis extract*, one more rule kicks in: an extract's immediate container can't hold more than **1000 mg of THC**. Multiply the concentration by the net weight, and a legal extract label shouldn't come out above that.",
    },
    { type: "h3", text: "Panel 4: ingredients and allergens" },
    {
      type: "p",
      text: "This is the panel that splits the two classes. An extract label in discrete units has to list the **ingredients** and name any **food allergen** it contains, cross-contamination excepted. A dried-cannabis label doesn't carry those two lines. On anything infused, the ingredient list is the most direct look you'll get at what was added.",
    },
    { type: "h3", text: "Panel 5: intended use" },
    {
      type: "p",
      text: "Both label types state the product's intended use. For a pre-roll, that's inhalation.",
    },
    { type: "h2", text: "The 30-gram math" },
    {
      type: "p",
      text: "In Ontario, an adult's public limit is 30 grams, counted in dried-cannabis terms. The class line decides how your pack counts. Dried cannabis counts gram for gram. A concentrate, which federal rules define as more than 3% THC by weight, counts 0.25 g as the equivalent of 1 g of dried cannabis. Class line first, conversion second.",
    },
    { type: "h2", text: "Quick answers" },
    { type: "p", text: "**Does \"infused\" appear on the label?**" },
    {
      type: "p",
      text: "Maybe, in a product name. But the legal information lives in the class, weight, Total THC and ingredient lines, not the name.",
    },
    { type: "p", text: "**Are moon rocks the same thing as infused pre-rolls?**" },
    {
      type: "p",
      text: "Not quite. A moon rock is a coated, kief-rolled bud. An infused pre-roll is a rolled product with something added. Some pre-rolls use moon-rock-style material, which is why the two words keep turning up together on menus.",
    },
    { type: "p", text: "**Can I tell what's been added just by looking?**" },
    {
      type: "p",
      text: "Not reliably. Kief on the outside is easy to spot. Distillate on the inside isn't. On an extract-class product, the ingredient list is the honest answer.",
    },
    { type: "h2", text: "Come read the labels with us in Brampton" },
    {
      type: "p",
      text: "You'll find Kennedy Loud Cannabis on Hillcrest Ave in Brampton, near Kennedy Rd, and the [visit page](/visit) shows you how to find the door. Come by with your questions about infused pre-rolls and we'll go through the class line, the weights and the ingredient list with you, panel by panel. Ontario law sets the buying age for cannabis at 19. Staff ask for ID from anyone who looks under 25.",
    },
  ],
};
