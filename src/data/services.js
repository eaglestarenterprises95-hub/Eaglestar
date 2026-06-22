export const SERVICES = [
  {
    title: 'Hot & Cold Thermal Insulation',
    description:
      'Hot and cold thermal insulations (lagging and cladding) for pipelines, vessels, equipment, and storage tanks across refineries, petrochemical, and power plants.',
    gradient: 'linear-gradient(135deg,#0f2540,#1b3d6e)',
    iconPath: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
    image: '/services/service1.png',
  },
  {
    title: 'Industrial Pipeline Fabrication & Erection',
    description:
      'All kinds of industrial pipeline fabrication, design routing, structural support integration, and on-site erection for process plants.',
    gradient: 'linear-gradient(135deg,#112233,#224466)',
    iconPath: 'M19 15c0-2.21-1.79-4-4-4h-3V8h3c1.1 0 2-.9 2-2s-.9-2-2-2H9C7.9 4 7 4.9 7 6s.9 2 2 2h3v3H9c-2.21 0-4 1.79-4 4v5h14v-5zm-2 3H7v-3c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v3z',
    image: '/services/service2.png',
  },
  {
    title: 'Firebrickworks',
    description:
      'Expert execution of firebrick lining, acid-resistant tiling, and refractory brick installations for industrial furnaces, boilers, and chimneys.',
    gradient: 'linear-gradient(135deg,#3d120a,#7a2410)',
    iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 16H5v-4h6v4zm0-6H5V9h6v4zm8 6h-6v-4h6v4zm0-6h-6V9h6v4zm0-6H5V5h14v2z',
    image: '/services/service3.png',
  },
  {
    title: 'Building Insulation',
    description:
      'Thermal and acoustic insulation solutions for commercial buildings, warehouses, and industrial facilities for energy efficiency.',
    gradient: 'linear-gradient(135deg,#1a3020,#2a5030)',
    iconPath: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    image: '/services/service4.png',
  },
  {
    title: 'Pre-Engineered Buildings',
    description:
      'Design, supply, and erection of PEB structures — factories, warehouses, aircraft hangars, and large-span industrial buildings.',
    gradient: 'linear-gradient(135deg,#2a1a0a,#5a3010)',
    iconPath: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z',
    image: '/services/service5.png',
  },
  {
    title: 'Cold Storage Systems',
    description:
      'Turnkey cold storage and controlled atmosphere systems for food processing, pharmaceuticals, and logistics sectors.',
    gradient: 'linear-gradient(135deg,#0a2030,#1a4060)',
    iconPath: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3z',
    image: '/services/service6.png',
  },
  {
    title: 'Fire Protection',
    description:
      'Active and passive fire protection systems including fireproofing, suppression, and intumescent coating for industrial assets.',
    gradient: 'linear-gradient(135deg,#1a0a2a,#3a1a50)',
    iconPath: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    image: '/services/service7.png',
  },
  {
    title: 'Energy Audit',
    description:
      'Comprehensive energy audits and heat loss analysis to identify efficiency opportunities and reduce operational costs.',
    gradient: 'linear-gradient(135deg,#1a1a0a,#404010)',
    iconPath: 'M7 2v11h3v9l7-12h-4l4-8z',
    image: '/services/service8.png',
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title).concat(['Other']);
