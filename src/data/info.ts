// Central business info. TODO markers flag details the owner still needs to provide.
export const business = {
  name: 'Fragancia Dominican Barbershop',
  shortName: 'Fragancia',
  tagline: 'Classic Dominican Barbering, Modern Precision',
  description:
    'Fragancia Dominican Barbershop delivers sharp fades, clean line-ups, beard sculpting, and classic cuts in a warm, old-school chair. Walk in for a fresh look, walk out feeling brand new.',

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
