export const PRODUCT_CATEGORIES = [
  {
    label: 'Knitting Patterns',
    value: 'knitting_patterns' as const,
    featured: [
      {
        name: 'Editor Picks',
        href: '/products?category=knitting_patterns',
        imageSrc: 'public/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=knitting_patterns&sort=desc',
        imageSrc: 'public/nav/icons/new.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=knitting_patterns&bestsellers=true',
        imageSrc: 'public/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Crochet Patterns',
    value: 'crochet_patterns' as const,
    featured: [
      {
        name: 'Editor Picks',
        href: '/products?category=crochet_patterns',
        imageSrc: 'public/nav/ui-kits/blue.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=crochet_patterns&sort=desc',
        imageSrc: 'public/nav/ui-kits/mixed.jpeg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=crochet_patterns&bestsellers=true',
        imageSrc: 'public/nav/ui-kits/purple.jpeg',
      },
    ],
  },
];
