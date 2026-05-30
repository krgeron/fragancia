export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/',         label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/contact',  label: 'Contact' },
];

export const footerLinks = {
  explore: [
    { href: '/services', label: 'Services & Pricing' },
    { href: '/gallery',  label: 'Gallery' },
    { href: '/contact',  label: 'Contact' },
  ],
};
