export interface Publication {
  title: string;
  authors?: string;
  venue: string;
  status: 'Published' | 'Under review' | 'Manuscript';
  href?: string;
}

export const publications: Publication[] = [
  {
    title: 'Negation in Vision-Language Models: A Survey',
    authors: 'A. Pokhrel, B. Ghimire, P. M. Paudel, S. V. Sheshappanavar',
    venue: 'ICPR 2026 · LNCS vol. 16824, pp. 248–262 · Springer',
    status: 'Published',
  },
  {
    title: 'EgoThermal: An Egocentric RGB-D-T Dataset and Benchmark for Physical Awareness in Wearable Assistive Devices',
    venue: 'Datasets track submission',
    status: 'Under review',
  },
  {
    title: 'Rendered-View Consensus: Training-Free Open-Vocabulary 3D Grounding',
    authors: 'B. Ghimire, S. V. Sheshappanavar',
    venue: 'Conference submission',
    status: 'Under review',
  },
  {
    title: 'LOCUS: Training-Free Grounding of Small Objects in 3D Scenes for Smart Glasses',
    venue: 'Workshop manuscript',
    status: 'Manuscript',
  },
];
