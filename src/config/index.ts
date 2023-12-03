export const PRODUCT_CATEGORIES = [
  {
    label: 'Knitting Patterns',
    value: 'knitting_patterns' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=knitting_patterns`,
        imageSrc: '',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=knitting_patterns&sort=desc',
        imageSrc: '',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=knitting_patterns',
        imageSrc: '',
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
        imageSrc: '',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=crochet_patterns&sort=desc',
        imageSrc: '',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=crochet_patterns',
        imageSrc: '',
      },
    ],
  },
]
