import type { ImageMetadata } from 'astro';
import portrait from '../assets/portrait.png';

export interface Link {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  /** File in /public, e.g. 'resume.pdf'. The Résumé button is hidden until this is set. */
  resume?: string;
  /** e.g. `import photo from '../assets/photo.jpg'`. A framed placeholder shows until this is set. */
  photo?: ImageMetadata;
  bio: string[];
  spec: { label: string; value: string }[];
  links: { github: Link; linkedin: Link };
  education: { year: string; degree: string; school: string; period: string; detail: string }[];
  certifications: string[];
}

export const profile: Profile = {
  name: 'Bipin Ghimire',
  role: 'Data engineer & AI researcher',
  tagline:
    'I build production data platforms on AWS and Azure, and research multimodal perception, vision-language models, and 3D grounding.',
  location: 'United States',
  email: 'bipin.ghimire692@gmail.com',
  photo: portrait,
  bio: [
    'I’m a data engineer and M.S. Computer Science student at the University of Wyoming, where I work as a graduate research assistant on multimodal perception, vision-language models, and 3D grounding for assistive systems.',
    'Before graduate school I spent two years at Fusemachines building data platforms for clients: migrating Oracle workloads to Azure Databricks, engineering ingestion pipelines across messy external sources, and standing up a company-wide analytics platform from scratch.',
    'Most recently, as a data engineering intern at Hanker LLC, I architected a healthcare data lake on AWS and built the production applications around it — referral eligibility, AI clinical documentation, and digital patient registration.',
  ],
  spec: [
    { label: 'Focus', value: 'Data platforms · Multimodal vision · VLM evaluation' },
    { label: 'Stack', value: 'Python, SQL, PySpark, AWS, Azure Databricks, PyTorch' },
    { label: 'Now', value: 'M.S. Computer Science, University of Wyoming (2027)' },
    { label: 'Based in', value: 'United States' },
  ],
  links: {
    github: { label: 'GitHub', href: 'https://github.com/Bipin38' },
    linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bipin-ghimire-5587311b0/' },
  },
  education: [
    {
      year: '2027',
      degree: 'M.S. Computer Science',
      school: 'University of Wyoming',
      period: 'Aug 2025 – May 2027 (expected)',
      detail: 'GPA 4.00 / 4.00',
    },
    {
      year: '2023',
      degree: 'B.E. Computer Engineering',
      school: 'Tribhuvan University · Kathmandu Engineering College',
      period: '2019 – 2023',
      detail: 'GPA 3.70 / 4.00',
    },
  ],
  certifications: [
    'Microsoft Certified: Fabric Data Engineer Associate',
    'Astronomer Certification for Apache Airflow Fundamentals',
    'dbt Fundamentals — dbt Labs',
    'Machine Learning Specialization',
  ],
};
