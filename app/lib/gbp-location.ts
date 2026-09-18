export const NAP = {
  storeName: "Kennedy Loud Cannabis",
  streetAddress: "49 Hillcrest Ave Unit 104",
  city: "Brampton",
  province: "ON",
  postalCode: "L6W 1Y7",
  country: "CA",
  address: "49 Hillcrest Ave Unit 104, Brampton, ON L6W 1Y7",
  phone: "+1 (289) 206-1181",
  phoneIntl: "+12892061181",
  website: "https://kennedyloudcannabis.com/",
  hours: "Open 24 Hours",
} as const;

const mapsQuery = encodeURIComponent(NAP.address);

export const gbpLocation = {
  storeName: NAP.storeName,
  domain: "kennedyloudcannabis.com",
  city: NAP.city,
  province: NAP.province,
  country: NAP.country,
  slug: "weed-dispensary-brampton",
  address: NAP.address,
  streetAddress: NAP.streetAddress,
  postalCode: NAP.postalCode,
  phone: NAP.phone,
  phoneIntl: NAP.phoneIntl,
  websiteUrl: NAP.website,
  neighborhood: "Hillcrest Ave / Kennedy Road",
  nearbyAreas: [
    "Hillcrest Ave",
    "Kennedy Road",
    "Downtown Brampton",
    "Queen Street",
    "Main Street",
    "Bramalea",
    "Brampton Transit",
  ],
  products: [
    "Flower",
    "Pre-rolls",
    "Edibles",
    "THC vapes",
    "Concentrates",
    "Nic Vape",
    "Cigarettes",
    "Accessories",
  ],
  menuUrl: "/",
  directionsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapEmbedUrl: `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`,
  latitude: "43.6940006",
  longitude: "-79.7477885",
  hours: [NAP.hours],
  seoTitle: "Weed Dispensary Brampton | Open 24 Hours | Kennedy Loud",
  metaDescription:
    "Walk-in Brampton weed dispensary at 49 Hillcrest Ave Unit 104, near Kennedy Rd. Open 24 hours. Flower from $3/g. Call +1 (289) 206-1181. Adults 19+.",
  h1: "24 Hour Weed Dispensary in Brampton",
  localLandmarks: ["Kennedy Road", "Hillcrest Ave", "Downtown Brampton", "Queen Street"],
  introVariant:
    "Kennedy Loud Cannabis is a walk-in weed dispensary at 49 Hillcrest Ave Unit 104 in Brampton, on the Kennedy Road corridor. Open 24 hours for adults 19+. Confirm current menu details before you travel.",
  neighborhoodDescription:
    "Kennedy Loud Cannabis sits at 49 Hillcrest Ave Unit 104, a short local hop from Kennedy Road, with useful routes from Queen Street, Main Street, Downtown Brampton, and Bramalea.",
  parkingNote:
    "Check the current map listing, posted signs, or call the store for parking details before visiting",
  transitNote:
    "Use a live Brampton Transit or trip-planner app for current connections, then keep Unit 104 as the final pin",
  sectionTitle: "Brampton Weed Dispensary Near Hillcrest Ave and Kennedy Road",
  localGuides: [
    { href: "/visit", label: "How to find Unit 104" },
    { href: "/resources/hillcrest-ave-visit-guide", label: "Hillcrest Ave visit guide" },
    { href: "/resources/local-guides/queen-street-to-hillcrest-brampton", label: "Queen Street to Hillcrest" },
    { href: "/resources/local-guides/main-street-brampton-to-kennedy-loud", label: "Main Street to Unit 104" },
    { href: "/resources/local-guides/brampton-go-kennedy-loud", label: "Brampton GO route" },
    { href: "/resources/local-guides/zum-kennedy-dispensary", label: "Kennedy Road transit" },
    { href: "/info/weed-store-near-hillcrest-ave", label: "Weed store near Hillcrest Ave" },
  ],
};

export const categoryLinks: Record<string, string> = {
  Flower: "/resources/weed-flower-tier-guide",
  "Pre-rolls": "/items/prerolls",
  Edibles: "/items/edibles",
  "THC vapes": "/items/vape-disposables",
  Concentrates: "/items/concentrates",
  "Nic Vape": "/items/vapes",
  Cigarettes: "/items/cigarettes",
  Accessories: "/items/add-ons",
};
