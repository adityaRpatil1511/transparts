export const categories = [
  { id: 'all', name: 'All Components' },
  { id: 'powertrain', name: 'Powertrain & Transmission' },
  { id: 'hydraulics', name: 'Hydraulic Systems' },
  { id: 'braking', name: 'Braking & Suspensions' },
  { id: 'electrical', name: 'Electrical & Sensors' },
  { id: 'engine', name: 'Engine & Turbochargers' }
];

export const partsCatalog = [
  {
    id: 'TP-8921',
    name: 'Heavy Duty 18-Speed Transmission Gearbox',
    category: 'powertrain',
    partNumber: 'TP-TX-9948',
    compatibility: 'Volvo, Scania, MAN, Freightliner',
    stock: 'In Stock (42 units)',
    price: '$4,250',
    rating: 4.9,
    description: 'Triple-countershaft 18-speed manual transmission engineered for extreme torque industrial heavy haulers.',
    specs: {
      'Torque Capacity': '2250 lb-ft',
      'Weight': '320 kg',
      'Warranty': '3 Years OEM',
      'Certification': 'ISO 9001:2015'
    },
    featured: true
  },
  {
    id: 'TP-4032',
    name: 'High-Pressure Hydraulic Piston Pump',
    category: 'hydraulics',
    partNumber: 'TP-HYD-503',
    compatibility: 'CAT, Komatsu, JCB, Liebherr',
    stock: 'In Stock (18 units)',
    price: '$1,890',
    rating: 4.8,
    description: 'Variable displacement axial piston pump delivering ultra-precise flow control under max pressure (350 bar).',
    specs: {
      'Max Pressure': '350 Bar',
      'Displacement': '130 cc/rev',
      'Warranty': '2 Years',
      'Certification': 'CE / DIN Standards'
    },
    featured: true
  },
  {
    id: 'TP-7104',
    name: 'Pneumatic Disc Brake Assembly Kit',
    category: 'braking',
    partNumber: 'TP-BRK-771',
    compatibility: 'Mercedes-Benz Actros, DAF, Iveco',
    stock: 'In Stock (65 units)',
    price: '$850',
    rating: 5.0,
    description: 'High-friction thermal-resistant air disc brake set built to endure heavy gradient braking load test cycles.',
    specs: {
      'Rotor Diameter': '432 mm',
      'Friction Rating': 'Grade A Heavy Duty',
      'Warranty': '2 Years OEM',
      'Certification': 'ECE R90'
    },
    featured: true
  },
  {
    id: 'TP-1120',
    name: 'Intelligent ECU Powertrain Controller Module',
    category: 'electrical',
    partNumber: 'TP-EL-309',
    compatibility: 'Universal CAN-Bus 24V Systems',
    stock: 'In Stock (30 units)',
    price: '$1,120',
    rating: 4.7,
    description: 'Micro-processor controlled engine and transmission management system with active telemetry reporting.',
    specs: {
      'Voltage': '24V DC',
      'Interface': 'Dual CAN-Bus 2.0B',
      'Protection': 'IP68 Weatherproof',
      'Warranty': '3 Years'
    },
    featured: false
  },
  {
    id: 'TP-6091',
    name: 'Twin-Turbocharger High Output Assembly',
    category: 'engine',
    partNumber: 'TP-TURBO-881',
    compatibility: 'Cummins ISX15, Detroit DD15',
    stock: 'Limited Stock (8 units)',
    price: '$2,450',
    rating: 4.9,
    description: 'Precision balanced ceramic ball-bearing twin turbocharger designed for maximum fuel efficiency and boosted airflow.',
    specs: {
      'Boost Pressure': '45 PSI',
      'Housing': 'Inconel Superalloy',
      'Warranty': '2 Years OEM',
      'Certification': 'TS 16949'
    },
    featured: true
  },
  {
    id: 'TP-3341',
    name: 'Planetary Final Drive Axle Hub Assembly',
    category: 'powertrain',
    partNumber: 'TP-AX-102',
    compatibility: 'CAT 777, Terex Haulers',
    stock: 'In Stock (12 units)',
    price: '$3,800',
    rating: 4.8,
    description: 'Extreme-duty planetary gear hub engineered for heavy mining haul trucks and earthmoving machinery.',
    specs: {
      'Ratio': '6.45:1',
      'Load Capacity': '45 Tons',
      'Warranty': '3 Years',
      'Certification': 'AGMA Grade 12'
    },
    featured: false
  }
];

export const companyStats = [
  { label: 'OEM Parts Catalog', value: '45,000+' },
  { label: 'Global Distribution Hubs', value: '28 Countries' },
  { label: 'On-Time Dispatch Rate', value: '99.4%' },
  { label: 'Certified Clients', value: '1,200+' }
];

export const testimonials = [
  {
    quote: "Transparts supplied our entire fleet of 140 heavy haulers with OEM transmission assemblies within 48 hours. Zero downtime achieved.",
    author: "Marcus Vance",
    role: "Fleet Operations Director, Apex Logistics",
    company: "Apex Global Logistics"
  },
  {
    quote: "The durability of Transparts hydraulic pumps exceeded our expectations in harsh mining conditions in Western Australia.",
    author: "Elena Rostova",
    role: "Chief Engineer",
    company: "Titan Mining Corp"
  }
];
