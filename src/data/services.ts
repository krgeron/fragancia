export interface Service {
  id: string;
  name: string;
  description: string;
  // TODO: confirm real prices and durations with the shop.
  price: number;
  duration: string;
  featured?: boolean;
}

export const currency = '$';

export const services: Service[] = [
  {
    id: 'classic-cut',
    name: 'Classic Haircut',
    description: 'A timeless, tailored cut finished with a clean neck and edge line-up.',
    price: 25,
    duration: '30 min',
    featured: true,
  },
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    description: 'Precision fade blended from the skin up — low, mid, or high to your taste.',
    price: 30,
    duration: '40 min',
    featured: true,
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Shape',
    description: 'Beard sculpted, lined, and conditioned for a crisp, defined finish.',
    price: 15,
    duration: '20 min',
    featured: true,
  },
  {
    id: 'cut-beard',
    name: 'Haircut + Beard',
    description: 'The full reset — a fresh cut paired with a sharp beard line-up.',
    price: 40,
    duration: '50 min',
    featured: true,
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    description: 'Traditional straight-razor shave with hot towels and a smooth finish.',
    price: 25,
    duration: '30 min',
  },
  {
    id: 'line-up',
    name: 'Line-Up / Edge-Up',
    description: 'Sharp hairline and edge detailing to keep your look crisp between cuts.',
    price: 12,
    duration: '15 min',
  },
  {
    id: 'kids-cut',
    name: 'Kids Cut (12 & under)',
    description: 'Patient, friendly cuts for the little ones in the chair.',
    price: 18,
    duration: '25 min',
  },
  {
    id: 'design',
    name: 'Hair Design / Part',
    description: 'Custom razor parts and freestyle designs added to any cut.',
    price: 10,
    duration: '15 min',
  },
];
