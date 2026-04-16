
export type SystemCategory = 'Core Systems' | 'Domain Systems' | 'Scientific Systems' | 'Experimental Systems';

export interface System {
  id: string;
  category: SystemCategory;
  name: string;
  url: string;
  description: string;
  whatYouCanDo: string;
  whyItMatters: string;
  status: 'Active' | 'Experimental' | 'Archive' | 'Coming Soon';
}

export const systems: System[] = [
  {
    id: 'machinery-of-democracy',
    category: 'Core Systems',
    name: 'Machinery of Democracy',
    url: '#',
    description: 'A comprehensive framework for analyzing electoral logistics and systemic integrity.',
    whatYouCanDo: 'Simulate precinct layouts and ballot processing speeds to identify potential bottlenecks.',
    whyItMatters: 'Ensures equitable access to voting and provides data-backed evidence for resource allocation.',
    status: 'Active',
  },
  {
    id: 'midterm-analysis',
    category: 'Core Systems',
    name: 'Midterm Analysis System',
    url: '#',
    description: 'Predictive modeling engine focused on mid-cycle political trends and demographic shifts.',
    whatYouCanDo: 'Compare historical voting patterns against real-time polling data to visualize potential outcomes.',
    whyItMatters: 'Provides early signals for shifting political landscapes and allows for proactive strategy adjustment.',
    status: 'Active',
  },
  {
    id: 'policy-analysis',
    category: 'Domain Systems',
    name: 'Policy Analysis System',
    url: '#',
    description: 'A structured environment for evaluating the downstream impacts of legislative proposals.',
    whatYouCanDo: 'Input policy parameters to see estimated economic and social consequences across diverse populations.',
    whyItMatters: 'Reduces the risk of unintended consequences by modeling complex systemic interactions.',
    status: 'Active',
  },
  {
    id: 'energy-analysis',
    category: 'Domain Systems',
    name: 'Energy Analysis System',
    url: '#',
    description: 'Interactive grid simulation and energy demand forecasting for regional power systems.',
    whatYouCanDo: 'Adjust renewable energy penetration rates to observe grid stability and carbon footprint changes.',
    whyItMatters: 'Decarbonization requires precise operational data to balance reliability with sustainability goals.',
    status: 'Active',
  },
  {
    id: 'indy-bio-lbso',
    category: 'Scientific Systems',
    name: 'Indy BioSystems LBSO',
    url: '#',
    description: 'Life Boundary Simulation Optimizer for biological research and synthetic biology applications.',
    whatYouCanDo: 'Model metabolic pathways and cellular responses to varied environmental stressors.',
    whyItMatters: 'Accelerates the R&D cycle for bio-engineering by front-loading digital experimentation.',
    status: 'Active',
  },
  {
    id: 'experimental-alpha',
    category: 'Experimental Systems',
    name: 'Project Phenix',
    url: '#',
    description: 'An upcoming exploration into localized climate modeling using edge sensor fusion.',
    whatYouCanDo: 'Monitor high-resolution micro-climate data (Coming late 2026).',
    whyItMatters: 'Hyper-local data is the key to understanding climate adaptation at the neighborhood level.',
    status: 'Coming Soon',
  }
];
