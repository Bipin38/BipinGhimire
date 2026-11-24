export interface Role {
  title: string;
  org: string;
  period: string;
  summary: string;
  /** Project slugs from projects.ts, linked from the timeline. */
  projects?: string[];
  /** Client engagements or sub-roles within the same employer. */
  engagements?: { title: string; period: string }[];
}

export const experience: Role[] = [
  {
    title: 'Graduate Research Assistant',
    org: 'University of Wyoming',
    period: 'Aug 2025 – Present',
    summary: 'Multimodal perception, vision-language models, 3D grounding, and assistive systems.',
    projects: ['egothermal', 'rendered-view-consensus', 'locus', 'smart-helmet'],
  },
  {
    title: 'Data Engineer Intern',
    org: 'Hanker LLC',
    period: 'May 2026 – Aug 2026',
    summary: 'Healthcare data engineering, serverless infrastructure, full-stack applications, and AI integration.',
    projects: ['healthcare-data-lake', 'referral-eligibility', 'clinical-transcription', 'healthcare-ops-platform'],
  },
  {
    title: 'Data Engineer',
    org: 'Fusemachines',
    period: 'Aug 2023 – Jul 2025',
    summary: 'Client data-platform modernization, ingestion engineering, and internal analytics.',
    projects: ['databricks-migration', 'analytics-platform', 'show-discovery-ingestion'],
    engagements: [
      { title: 'Data Engineer Consultant — Wheels Up', period: 'Apr 2025 – Jul 2025' },
      { title: 'Data Engineer — Internal Analytics Platform', period: 'Aug 2024 – Mar 2025' },
      { title: 'Data Engineer Consultant — Broadway Licensing Global', period: 'Jan 2024 – Aug 2024' },
      { title: 'Data Engineer Associate Trainee', period: 'Aug 2023 – Jan 2024' },
    ],
  },
];
