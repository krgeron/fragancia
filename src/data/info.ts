// Central business info. TODO markers flag details the owner still needs to provide.
export const business = {
  name: 'FRAGANCIA Dominican Barbershop',
  shortName: 'FRAGANCIA',
  tagline: 'Classic Dominican Barbering, Modern Precision',
  description:
    'FRAGANCIA Dominican Barbershop on US-27 by Posner Park in Davenport, FL. Sharp fades, kids cuts, beard trims, dreads, and hot towel shaves. A top barbershop near me serving Davenport, Haines City, Lakeland, and Orlando.',

  phone: '+1 (863) 296-5122',
  phoneHref: 'tel:+18632965122',

  // TODO: replace with the real shop email if there is one.
  email: 'fraganciabarbershop@gmail.com',

  instagram: 'https://www.instagram.com/fraganciabarbershop',
  instagramHandle: '@fraganciabarbershop',

  address: {
    street: '43418 US-27',
    locality: 'Davenport',
    region: 'FL',
    postalCode: '33837',
    country: 'US',
  },
  // Landmark / shopping center for local search.
  neighborhood: 'Posner Park',
  // Approx. coordinates for the US-27 / Posner Park area (Davenport, FL) — refine if needed.
  geo: { lat: 28.2419, lng: -81.6573 },

  // Nearby cities the shop serves — powers local SEO (areaServed).
  areaServed: ['Davenport', 'Haines City', 'Lakeland', 'Orlando', 'Posner Park'],

  // Target search keywords.
  keywords: [
    'barber', 'barbershop', 'barbershop near me',
    'US 27', 'Posner Park', 'Davenport', 'Haines City', 'Lakeland', 'Orlando',
    'fade', 'faded haircut', 'kids haircut', 'cut hair', 'haircut',
    'grooming', 'beard trim', 'dreads', 'hot towel shave', 'Dominican barbershop',
  ],

  // Uses the shop's Plus Code for a precise map pin.
  mapEmbedUrl:
    'https://www.google.com/maps?q=69G3%2BF2+Davenport,+Florida&output=embed',
  mapLink: 'https://maps.google.com/?q=69G3%2BF2+Davenport,+Florida',

  // TODO: confirm the real opening hours.
  hours: [
    { day: 'Monday',    open: '9:00 AM', close: '7:00 PM' },
    { day: 'Tuesday',   open: '9:00 AM', close: '7:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '7:00 PM' },
    { day: 'Thursday',  open: '9:00 AM', close: '7:00 PM' },
    { day: 'Friday',    open: '9:00 AM', close: '8:00 PM' },
    { day: 'Saturday',  open: '8:00 AM', close: '8:00 PM' },
    { day: 'Sunday',    open: 'Closed',  close: '' },
  ],
} as const;
