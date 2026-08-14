export interface ProductItem {
  id: string;
  nameKey: string;
  descKey: string;
  image: string;
  category: 'all' | 'halves' | 'pieces' | 'amber' | 'industrial' | 'inshell';
  specs: {
    grade?: string;
    moisture?: string;
    packaging?: string;
    origin?: string;
  };
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'light-halves-80-90',
    nameKey: 'products_catalog.p1_name',
    descKey: 'products_catalog.p1_desc',
    image: 'https://www.novanut.md/upfiles/gallery/1bcc475b5abba9d45d9bb4c9568f2b9c33271689.jpg',
    category: 'halves',
    specs: {
      grade: '80-90% Halves',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-halves-mix',
    nameKey: 'products_catalog.p2_name',
    descKey: 'products_catalog.p2_desc',
    image: 'https://www.novanut.md/upfiles/gallery/943c78af69b2ee1c20684b1fd1556dc524897622.jpg',
    category: 'halves',
    specs: {
      grade: '20-70% Halves + Pieces',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-quarters-pieces',
    nameKey: 'products_catalog.p3_name',
    descKey: 'products_catalog.p3_desc',
    image: 'https://www.novanut.md/upfiles/gallery/1d1ec02a6749d23181563944e4751a7e14836759.jpg',
    category: 'pieces',
    specs: {
      grade: 'Light Quarters & Large Pieces',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-pieces-15mm',
    nameKey: 'products_catalog.p4_name',
    descKey: 'products_catalog.p4_desc',
    image: 'https://www.novanut.md/upfiles/gallery/0b6987de037f30a21c5cb9f6b2ef69f131990225.jpg',
    category: 'pieces',
    specs: {
      grade: 'Calibrated 15mm Pieces',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-pieces-4-8mm',
    nameKey: 'products_catalog.p5_name',
    descKey: 'products_catalog.p5_desc',
    image: 'https://www.novanut.md/upfiles/gallery/842e3888348b0179b43176db699a63e257708924.jpg',
    category: 'pieces',
    specs: {
      grade: '4-8mm Fine Diced',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-amber-halves-80-90',
    nameKey: 'products_catalog.p6_name',
    descKey: 'products_catalog.p6_desc',
    image: 'https://www.novanut.md/upfiles/gallery/330081616c229a09da2160f2d3dee03621516766.jpg',
    category: 'amber',
    specs: {
      grade: '80-90% Amber Halves',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-amber-halves-mix',
    nameKey: 'products_catalog.p7_name',
    descKey: 'products_catalog.p7_desc',
    image: 'https://www.novanut.md/upfiles/gallery/dc7c1cbd457a37fc52dcef5a718392cc90943332.jpg',
    category: 'amber',
    specs: {
      grade: '20-70% Amber Halves + Pieces',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-amber-quarters-pieces',
    nameKey: 'products_catalog.p8_name',
    descKey: 'products_catalog.p8_desc',
    image: 'https://www.novanut.md/upfiles/gallery/b6d19ddf39d24504aa346e362084ca5768099904.jpg',
    category: 'amber',
    specs: {
      grade: 'Amber Quarters & Pieces',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'light-amber-pieces-15mm',
    nameKey: 'products_catalog.p9_name',
    descKey: 'products_catalog.p9_desc',
    image: 'https://www.novanut.md/upfiles/gallery/9be825f51165cece82cdb0120f7a535813050712.jpg',
    category: 'amber',
    specs: {
      grade: 'Calibrated 15mm Amber Pieces',
      moisture: 'Max 7.0%',
      packaging: '10kg / 12.5kg Carton Vacuum',
      origin: 'Moldova',
    },
  },
  {
    id: 'industrial-quality',
    nameKey: 'products_catalog.p10_name',
    descKey: 'products_catalog.p10_desc',
    image: 'https://www.novanut.md/upfiles/gallery/7eb736e72510e31f91cca243ecb6141561832579.jpg',
    category: 'industrial',
    specs: {
      grade: 'Industrial Grade / Processing',
      moisture: 'Max 7.5%',
      packaging: '10kg / 25kg Poly Bags or Cartons',
      origin: 'Moldova',
    },
  },
  {
    id: 'walnut-meal',
    nameKey: 'products_catalog.p11_name',
    descKey: 'products_catalog.p11_desc',
    image: 'https://www.novanut.md/upfiles/gallery/3ec1fd9014aa1f5061ce6630abb2947331886104.jpg',
    category: 'industrial',
    specs: {
      grade: '100% Pure Walnut Flour',
      moisture: 'Max 6.0%',
      packaging: '10kg / 20kg Vacuum Bags',
      origin: 'Moldova',
    },
  },
  {
    id: 'in-shell-walnuts',
    nameKey: 'products_catalog.p12_name',
    descKey: 'products_catalog.p12_desc',
    image: 'https://www.novanut.md/upfiles/gallery/d84eec134f47f3046dd4e7208dfd365151283935.jpg',
    category: 'inshell',
    specs: {
      grade: '28mm, 30mm, 32mm+ Caliber',
      moisture: 'Max 10.0%',
      packaging: '25kg Mesh / Jute Bags',
      origin: 'Moldova',
    },
  },
];

export interface HealthBenefit {
  icon: string;
  titleKey: string;
}

export const HEALTH_BENEFITS: HealthBenefit[] = [
  { icon: '🌿', titleKey: 'health_benefits.b1' },
  { icon: '🐟', titleKey: 'health_benefits.b2' },
  { icon: '🧠', titleKey: 'health_benefits.b3' },
  { icon: '❤️', titleKey: 'health_benefits.b4' },
  { icon: '🩺', titleKey: 'health_benefits.b5' },
  { icon: '🩸', titleKey: 'health_benefits.b6' },
  { icon: '🛡️', titleKey: 'health_benefits.b7' },
  { icon: '💡', titleKey: 'health_benefits.b8' },
  { icon: '⚖️', titleKey: 'health_benefits.b9' },
  { icon: '⚡', titleKey: 'health_benefits.b10' },
  { icon: '🦴', titleKey: 'health_benefits.b11' },
  { icon: '✨', titleKey: 'health_benefits.b12' },
];

export const COMPANY_CONTACT = {
  name: 'Nova Nut SRL',
  address: 'Satul Sireți, Raionul Strășeni, MD - 3731, Republica Moldova',
  phone: '+ 373 (69) 211 211',
  phoneClean: '+37369211211',
  fax1: '+373 (237) 722 21',
  fax2: '+373 (237) 722 20',
  email1: 'john_cuhal@yahoo.com',
  email2: 'export_novanut@yahoo.com',
  website: 'www.novanut.md',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1577.9804555659427!2d28.71795204796962!3d47.11963599527948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cbd1398a810355%3A0xd0a11059893d7047!2sNovanut!5e1!3m2!1sru!2s!4v1540978842677',
};
