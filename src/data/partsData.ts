export interface Category {
  id: string;
  name: string;
}

export interface PartSpec {
  [key: string]: string;
}

export interface Part {
  id: string;
  name: string;
  category: string;
  partNumber: string;
  compatibility: string;
  stock: string;
  price: string;
  rating: number;
  description: string;
  specs: PartSpec;
  featured: boolean;
}

export interface CompanyStat {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All Capabilities & Parts' },
  { id: 'cnc-turning', name: 'CNC Turned Components' },
  { id: 'honing', name: 'Honed Bores & Cylinders' },
  { id: 'powertrain', name: 'Powertrain & Shafts' },
  { id: 'custom', name: 'Custom OEM Machining' }
];

export const partsCatalog: Part[] = [
  {
    id: 'TP-CNC-01',
    name: 'Precision Stepped Gearbox Input Shaft',
    category: 'cnc-turning',
    partNumber: 'TP-SH-101',
    compatibility: 'Commercial Transmissions & Drives',
    stock: 'Made to Order / Custom Batches',
    price: 'Quote on Request',
    rating: 5.0,
    description: 'Precision turned stepped transmission shaft manufactured on LMW S Turn 1 CNC lathe with sub-micron bearing seat tolerances.',
    specs: {
      'Machining Center': 'LMW S Turn 1 CNC',
      'Tolerance': '±0.005 mm',
      'Material': 'EN24 / Case Hardened Alloy Steel',
      'Surface Finish': 'Ra 0.4 µm'
    },
    featured: true
  },
  {
    id: 'TP-HON-02',
    name: 'High-Pressure Hydraulic Cylinder Sleeve',
    category: 'honing',
    partNumber: 'TP-HN-202',
    compatibility: 'Hydraulic Pumps & Actuators',
    stock: 'Batch Production Available',
    price: 'Quote on Request',
    rating: 4.9,
    description: 'Horizontal honed cylinder bore featuring cross-hatch surface pattern for optimum oil retention and zero pressure loss.',
    specs: {
      'Honing Diameter': 'Ø 20mm to Ø 150mm',
      'Bore Surface Finish': 'Ra 0.2 µm',
      'Straightness': '< 0.003 mm',
      'Material': 'Seamless Honed Tube / Ductile Iron'
    },
    featured: true
  },
  {
    id: 'TP-FLG-03',
    name: 'Heavy Duty Axle Hub & Drive Flange',
    category: 'powertrain',
    partNumber: 'TP-FL-303',
    compatibility: 'Heavy Commercial Axles & Machinery',
    stock: 'In Batch Production',
    price: 'Quote on Request',
    rating: 5.0,
    description: 'Heavy duty CNC turned drive flange processed on Takisawa TC-2 lathe for high torque transmission loads.',
    specs: {
      'Machining Center': 'Takisawa TC-2 CNC',
      'Flange Diameter': 'Up to 300 mm',
      'Runout Tolerance': '0.01 mm TIR',
      'Quality Check': '100% CMM & Hardness Inspected'
    },
    featured: true
  },
  {
    id: 'TP-PIN-04',
    name: 'Hardened Precision Dowel & Pivot Pins',
    category: 'cnc-turning',
    partNumber: 'TP-PN-404',
    compatibility: 'Automotive & Industrial Assemblies',
    stock: 'Ready for Quick Batching',
    price: 'Quote on Request',
    rating: 4.8,
    description: 'Precision ground and CNC turned pin components for heavy transport linkage and pivot joints.',
    specs: {
      'Hardness': '58 - 62 HRC',
      'OD Tolerance': 'h6 Precision Fit',
      'Length Range': '20mm - 250mm',
      'Material': 'SAE 8620 / EN31'
    },
    featured: false
  },
  {
    id: 'TP-OEM-05',
    name: 'Custom OEM Machined Housing Assembly',
    category: 'custom',
    partNumber: 'TP-CUST-505',
    compatibility: 'As per Customer Engineering Drawing',
    stock: 'Custom Prototype to Volume',
    price: 'Quote on Request',
    rating: 5.0,
    description: 'Bespoke precision component manufactured strictly according to client-provided 2D/3D CAD drawings and metallurgical specs.',
    specs: {
      'Input Formats': 'STEP, IGES, DXF, PDF',
      'Lead Time': 'Fast Prototype turn-around',
      'Testing': 'Material Cert + Dimension Report',
      'Batch Size': '10 to 5,000+ Units'
    },
    featured: true
  }
];

export const companyStats: CompanyStat[] = [
  { label: 'CNC Machining Centers', value: 'Takisawa & LMW' },
  { label: 'Machining Precision', value: '< 5 Microns' },
  { label: 'RFQ Response Time', value: '< 2 Hours' },
  { label: 'Inspection Guarantee', value: '100% Quality Checked' }
];

export const testimonials: Testimonial[] = [
  {
    quote: "TransParts delivered our prototype gear shafts with exact tolerances well ahead of schedule. Outstanding quality from a Pune machining startup!",
    author: "Rahul Sharma",
    role: "Senior Engineering Manager",
    company: "Automotive Components Partner"
  },
  {
    quote: "The surface finish on their honed cylinder sleeves met our strict hydraulic testing standards on the first attempt.",
    author: "Amit Kulkarni",
    role: "Plant Operations Lead",
    company: "Industrial Hydraulics Manufacturer"
  }
];
