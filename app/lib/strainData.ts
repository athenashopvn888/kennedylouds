/* Auto-generated strain display helpers */

interface StrainEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

const INDICA_EFFECTS = [
  { emoji: "INFO", label: "Indica" },
  { emoji: "MENU", label: "Menu Details" },
  { emoji: "19+", label: "Adult Use" },
];

const SATIVA_EFFECTS = [
  { emoji: "INFO", label: "Sativa" },
  { emoji: "MENU", label: "Menu Details" },
  { emoji: "19+", label: "Adult Use" },
];

const HYBRID_EFFECTS = [
  { emoji: "INFO", label: "Hybrid" },
  { emoji: "MENU", label: "Menu Details" },
  { emoji: "19+", label: "Adult Use" },
];

const TIER_DESCRIPTIONS: Record<string, string> = {
  EXOTIC: "Exotic flower tier",
  PREMIUM: "Premium flower tier",
  "AAA+": "AAA+ flower tier",
  AA: "AA flower tier",
  BUDGET: "Budget flower tier",
};

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  thc: string
): StrainEffects {
  const typeLabel =
    type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierDesc = TIER_DESCRIPTIONS[tier] || `${tier} flower tier`;
  const effects =
    type === "indica"
      ? INDICA_EFFECTS
      : type === "sativa"
      ? SATIVA_EFFECTS
      : HYBRID_EFFECTS;

  const description = `${name} is listed as a ${tierDesc} ${typeLabel} flower option${
    thc ? ` with a posted THC value of ${thc}` : ""
  }. Product details, pricing, and availability can change, so confirm the current menu before visiting Kennedy Loud Cannabis in Brampton.`;

  const metaDescription = `${name} - ${tierDesc} ${typeLabel}${
    thc ? ` with posted ${thc} THC` : ""
  }. Confirm current menu details before visiting Kennedy Loud Cannabis Brampton.`;

  return { effects, description, metaDescription };
}
