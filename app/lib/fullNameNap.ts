/**
 * KLC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "KLC01",
  "fullName": "Kennedy Loud Cannabis Dispensary Weed Delivery",
  "street": "49 Hillcrest Ave, Unit 104",
  "city": "Brampton",
  "region": "ON",
  "postal": "L6W 1Y7",
  "phoneDisplay": "(289) 206-1181",
  "phoneTel": "tel:+12892061181",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJk4EH_lwVK4gR-Ag6p82yvFQ",
  "placeId": "ChIJk4EH_lwVK4gR-Ag6p82yvFQ",
  "neighbourhood": "Hillcrest Ave / Kennedy Road, Brampton",
  "intersection": "Hillcrest Ave & Kennedy Rd",
  "transit": "",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
