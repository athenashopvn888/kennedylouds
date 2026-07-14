export interface ItemEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
  consume: string;
}

export function getItemData(category: string, name: string): ItemEffects {
  const cat = category.toUpperCase();

  if (cat === "EDIBLES") {
    return {
      effects: [
        { emoji: "INFO", label: "Edibles" },
        { emoji: "MENU", label: "Menu Details" },
        { emoji: "19+", label: "Adult Use" },
      ],
      description: `${name} appears in the edibles category at Kennedy Loud Cannabis. Review current menu details before visiting, because product availability and potency can change.`,
      metaDescription: `Review ${name} edible information in Brampton at Kennedy Loud Cannabis. Confirm current menu details before visiting.`,
      consume: "Start low and go slow. Follow the package directions. Edibles can take 45 to 120 minutes to take full effect.",
    };
  }

  if (cat.includes("VAPE")) {
    return {
      effects: [
        { emoji: "INFO", label: "Vape" },
        { emoji: "MENU", label: "Menu Details" },
        { emoji: "19+", label: "Adult Use" },
      ],
      description: `${name} appears in the vape category at Kennedy Loud Cannabis. Review current menu details before visiting, because product formats, flavours, and availability can change.`,
      metaDescription: `Review ${name} vape information in Brampton at Kennedy Loud Cannabis. Confirm current menu details before visiting.`,
      consume: "Use as directed on the packaging. Start with a small amount and wait before using more.",
    };
  }

  if (cat === "CONCENTRATES") {
    return {
      effects: [
        { emoji: "INFO", label: "Concentrate" },
        { emoji: "MENU", label: "Menu Details" },
        { emoji: "19+", label: "Adult Use" },
      ],
      description: `${name} appears in the concentrates category at Kennedy Loud Cannabis. Confirm current product details, format, and availability before visiting.`,
      metaDescription: `Review ${name} concentrate information in Brampton at Kennedy Loud Cannabis. Confirm current menu details before visiting.`,
      consume: "Use as directed on the packaging. Concentrates can be high potency, so start with a very small amount.",
    };
  }

  if (cat === "PREROLLS") {
    return {
      effects: [
        { emoji: "INFO", label: "Pre-Roll" },
        { emoji: "MENU", label: "Menu Details" },
        { emoji: "19+", label: "Adult Use" },
      ],
      description: `${name} appears in the pre-roll category at Kennedy Loud Cannabis. Check current menu details before visiting, since strain, pack size, and availability can change.`,
      metaDescription: `Review ${name} pre-roll information in Brampton at Kennedy Loud Cannabis. Confirm current menu details before visiting.`,
      consume: "Use as directed on the packaging. Start with a small amount and wait before using more.",
    };
  }

  if (cat === "MAGIC & OTHERS") {
    return {
      effects: [
        { emoji: "INFO", label: "Specialty" },
        { emoji: "MENU", label: "Menu Details" },
        { emoji: "19+", label: "Adult Use" },
      ],
      description: `${name} appears in the specialty item category at Kennedy Loud Cannabis. Confirm current product details and availability before visiting.`,
      metaDescription: `Review ${name} specialty item information in Brampton at Kennedy Loud Cannabis. Confirm current menu details before visiting.`,
      consume: "Use as directed on the packaging.",
    };
  }

  return {
    effects: [
      { emoji: "INFO", label: "Product Info" },
      { emoji: "MENU", label: "Menu Details" },
    ],
    description: `${name} appears in the Kennedy Loud Cannabis menu. Confirm current product details and availability before visiting the Brampton store.`,
    metaDescription: `Review ${name} information in Brampton at Kennedy Loud Cannabis. Confirm current menu details before visiting.`,
    consume: "Use as directed on the packaging.",
  };
}
