export const CONTAINER_DESICCANTS_DATA = [
  { slug: 'standard', name: 'Standard' },
  { slug: 'heavy', name: 'Heavy' },
  { slug: 'special', name: 'Special' },
];

export const CONTAINER_DATA = [

  /* ================= STANDARD ================= */
  {
    slug: 'standard', // ✅ lowercase (IMPORTANT)
    name: 'Standard',
    images: ['/silica250g.png', '/silica1.png', '/silica500.png'],

    description1:
      'VTC desiccants are manufactured using high-purity calcium chloride combined with a specially developed natural organic gelling agent. Calcium chloride is a highly hygroscopic material capable of attracting and binding large amounts of moisture.',

    description2:
      'As moisture is absorbed, the calcium chloride reacts with the organic gelling agent and converts the absorbed moisture into a stable, leak-free gel, eliminating the risk of leakage.',

    features: [
      'High moisture absorption capacity',
      'Prevents container rain and condensation',
      'Leak-proof gel formation',
      'Durable outer packaging',
      'Easy installation'
    ],

    applications: [
      'Export cargo containers',
      'Electronics',
      'Machinery',
      'Textiles',
      'Metal components'
    ],

    products: [
      {
        slug: 'vtc-250g',
        name: 'VTC 250G',
        gram: 'VTC 250G',
        images: ['/silica250g.png']
      },
      {
        slug: 'vtc-250g-sticker',
        name: 'VTC 250G Sticker',
        gram: 'VTC 250G Sticker',
        images: ['/silica1.png']
      },
      {
        slug: 'vtc-500g',
        name: 'VTC 500G',
        gram: 'VTC 500G',
        images: ['/silica500.png']
      }
    ]
  },

  /* ================= HEAVY ================= */
  {
    slug: 'heavy',
    name: 'Heavy',
    images: ['/vtc1000g.png'],

    description1:
      'VTC heavy-duty container desiccants are designed for extreme humidity conditions and long sea routes where moisture protection is critical.',

    description2:
      'They convert absorbed moisture into a stable gel, ensuring zero leakage and maximum cargo safety during transit.',

    features: [
      'Ultra-high moisture absorption',
      'Heavy-duty leak-proof design',
      'Ideal for long sea shipments'
    ],

    applications: [
      'Ocean freight containers',
      'Steel coils',
      'Heavy machinery'
    ],

    products: [
      {
        slug: 'vtc-1000g',
        name: 'VTC 1000G',
        gram: 'VTC 1000G',
        images: ['/vtc1000g.png']
      }
    ]
  },

  /* ================= SPECIAL ================= */
  {
    slug: 'special',
    name: 'Special',
    images: ['/sq1000g.png', '/tp1200g.png', '/db1000g.png'],

    description1:
      'VTC special container desiccants are space-optimized solutions designed for flexible placement inside containers.',

    description2:
      'They are ideal for narrow gaps, overhead container roofs, and flat cargo surfaces where standard desiccants cannot be installed easily.',

    features: [
      'Slim and flexible designs',
      'High moisture absorption',
      'Ideal for limited-space containers'
    ],

    applications: [
      'Garments',
      'Furniture',
      'Palletized cargo'
    ],

    products: [
      {
        slug: 'vtc-1000g-special',
        name: 'VTC 1000G',
        gram: 'VTC 1000G',
        images: ['/vtc1000g.png']
      },
      {
        slug: 'vtc-1200g',
        name: 'VTC 1200G',
        gram: 'VTC 1200G',
        images: ['/vtc1200g.png']
      }
    ]
  }
];
