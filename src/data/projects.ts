import type { Link } from './profile';

export interface Project {
  /** Used as the in-page anchor (#slug). */
  slug: string;
  title: string;
  org: string;
  period: string;
  area: string;
  kind: 'engineering' | 'research';
  /** Featured projects get the full spec table; the rest are listed compactly. */
  featured: boolean;
  /** External page for the project, shown as a link under its spec table. */
  link?: Link;
  status?: string;
  problem: string;
  approach: string[];
  stack: string[];
  results: string[];
}

export const projects: Project[] = [
  // ── Engineering ───────────────────────────────────────────────
  {
    slug: 'healthcare-data-lake',
    title: 'AWS healthcare data lake',
    org: 'Hanker LLC',
    period: '2026',
    area: 'Data engineering · Cloud architecture',
    kind: 'engineering',
    featured: true,
    problem:
      'Clinical and operational data lived in a NextGen EHR SQL Server behind a VPN, with no central store for analytics or automated reporting.',
    approach: [
      'Lambda-coordinated daily ingestion: start an EC2 worker, open a VPN tunnel to SQL Server, sync, shut down.',
      'Full and incremental loads with hash-based change detection for inserted and modified records.',
      'Date-partitioned Parquet in S3, schemas registered by Glue Crawlers; Glue PySpark jobs build Gold tables queried through Athena.',
      'Validation, logging, and error handling on every run; all resources provisioned with CloudFormation.',
    ],
    stack: ['Python', 'SQL Server', 'Lambda', 'EC2', 'S3', 'Glue', 'PySpark', 'Athena', 'CloudFormation', 'Parquet'],
    results: [
      '~10M records ingested or updated daily across 100+ source tables',
      'Analytics-ready Gold tables that analysts and engineers use to build and automate dashboards',
    ],
  },
  {
    slug: 'referral-eligibility',
    title: '340B referral eligibility & revenue capture',
    org: 'Hanker LLC',
    period: '2026',
    area: 'Data integration · Full-stack',
    kind: 'engineering',
    featured: true,
    problem:
      'Staff checked roughly 3,000 referrals a month by hand to find prescriptions eligible for 340B revenue capture.',
    approach: [
      'Ingests PioneerRx pharmacy and prescription records over SFTP and joins them with clinic data from PharmaForce.',
      'Configurable rule evaluation of patient, prescriber, and referral relationships across multiple eligibility scenarios.',
      'Daily automated reviews log captured vs. uncaptured opportunities for the operations team.',
      'React frontend and Flask REST API on Lambda and DynamoDB — owned end to end, from data integration to production.',
    ],
    stack: ['Python', 'Flask', 'React', 'Lambda', 'DynamoDB', 'SFTP', 'REST APIs'],
    results: [
      'Replaced ~3,000 manual referral checks per month',
      '20+ staff-hours saved per week',
      '$20K+ per month recovered from previously missed eligible referrals',
    ],
  },
  {
    slug: 'clinical-transcription',
    title: 'AI clinical transcription → EHR',
    org: 'Hanker LLC',
    period: '2026',
    area: 'Applied AI · Software engineering',
    kind: 'engineering',
    featured: true,
    problem: 'Clinicians wrote consultation notes manually after each visit.',
    approach: [
      'Live streaming speech-to-text with Amazon Transcribe Medical, shown to the clinician during the consultation.',
      'Claude on Amazon Bedrock turns the accumulated transcript into a structured clinical note, using prompts and orchestration I designed.',
      'Streaming design: note generation runs on the transcript already captured, with no re-transcription afterward.',
      'After review, the clinician submits the note to NextGen EHR in one click through its REST APIs.',
    ],
    stack: ['React', 'TypeScript', 'Flask', 'Transcribe Medical', 'Bedrock', 'Claude', 'NextGen EHR APIs'],
    results: ['~10 s to generate a note after a 30-minute consultation in the evaluated workflow'],
  },
  {
    slug: 'analytics-platform',
    title: 'Internal analytics platform',
    org: 'Fusemachines',
    period: '2024 – 2025',
    area: 'Data engineering · Analytics',
    kind: 'engineering',
    featured: true,
    problem:
      'Operational, financial, CRM, and spreadsheet data were spread across systems, with no company-wide reporting.',
    approach: [
      'Initiated and built from scratch: Airbyte ingestion from HubSpot, financial systems, and spreadsheets into S3.',
      'Bronze / Silver / Gold medallion layers; daily Airflow DAGs with retries, monitoring, and failure alerts.',
      'Data-quality checks at multiple stages to catch errors before they reach reports.',
      'Superset dashboards for project efficiency, resource allocation, and revenue trends.',
    ],
    stack: ['Airbyte', 'S3', 'Airflow', 'Superset', 'Python', 'SQL'],
    results: ['Daily-refreshed dashboards used by the management team in regular operational meetings'],
  },
  {
    slug: 'databricks-migration',
    title: 'Oracle → Azure Databricks migration',
    org: 'Fusemachines · Wheels Up',
    period: '2025',
    area: 'Data platform modernization',
    kind: 'engineering',
    featured: false,
    problem:
      'A terabyte-scale legacy Oracle platform with thousands of tables needed to move to distributed processing.',
    approach: [
      'Rewrote Oracle SQL transformations as PySpark notebooks and Databricks jobs, preserving existing logic.',
      'Delta Lake tables; Azure Data Factory orchestration on schedules from every 5 minutes to daily.',
      'Added Salesforce as a new ingestion source.',
    ],
    stack: ['PySpark', 'Azure Databricks', 'Delta Lake', 'Data Factory', 'Oracle', 'Terraform'],
    results: ['~35% shorter execution time from partitioning, caching, and broadcast-join tuning'],
  },
  {
    slug: 'healthcare-ops-platform',
    title: 'Healthcare operations platform & digital registration',
    org: 'Hanker LLC',
    period: '2026',
    area: 'Full-stack · Cloud',
    kind: 'engineering',
    featured: false,
    problem:
      'Staff needed one secure internal app for referral review, AI documentation, analytics, and patient intake — which still ran on paper.',
    approach: [
      'React + TypeScript frontend, Flask backend, Lambda, DynamoDB, S3; Cognito auth with access control.',
      'Digital intake that creates NextGen EHR registration records in one click; GitHub Actions CI/CD.',
    ],
    stack: ['React', 'TypeScript', 'Flask', 'Cognito', 'DynamoDB', 'GitHub Actions'],
    results: ['Replaced paper registration that took ~30 min of manual data entry per patient'],
  },
  {
    slug: 'show-discovery-ingestion',
    title: 'Show-discovery ingestion pipelines',
    org: 'Fusemachines · Broadway Licensing Global',
    period: '2024',
    area: 'Data ingestion',
    kind: 'engineering',
    featured: false,
    problem:
      'Show metadata was spread across 8+ external websites, PDFs, CSVs, and APIs, and new listings were tracked manually.',
    approach: [
      'Selenium and Beautiful Soup scrapers plus REST integrations; daily incremental collection.',
      'Bronze / Silver layers in Azure Blob Storage; Dockerized for a Kubernetes-hosted runtime.',
    ],
    stack: ['Python', 'Selenium', 'Beautiful Soup', 'Azure Blob', 'Docker', 'Elasticsearch'],
    results: ['~80% less manual data collection'],
  },
  {
    slug: 'local-to-prod-framework',
    title: 'Local-to-production AWS framework',
    org: 'Personal',
    period: '—',
    area: 'Developer tooling',
    kind: 'engineering',
    featured: false,
    problem: 'Cloud data workflows were hard to develop and test without deploying to AWS.',
    approach: [
      'Configuration-driven framework that runs workflows locally in Docker against AWS stand-ins, then promotes the same code to production.',
    ],
    stack: ['Python', 'Docker', 'AWS'],
    results: ['Same application code locally and in production, no rewrites'],
  },

  // ── Research ──────────────────────────────────────────────────
  {
    slug: 'egothermal',
    title: 'EgoThermal: RGB-D-T dataset & VLM benchmark',
    org: 'University of Wyoming',
    period: '2026',
    area: 'Dataset · Benchmark · Multimodal VLMs',
    kind: 'research',
    featured: true,
    link: { label: 'Project page', href: 'https://bipin38.github.io/RGB-D-T-Dataset/' },
    status: 'Manuscript under review',
    problem:
      'Assistive wearables need physical awareness — how far, how hot, whether a burner is on — that RGB alone can’t provide. EgoThermal measures how well detectors and VLMs use depth and thermal input to get there.',
    approach: [
      'Led acquisition with a head-mounted stereo RGB + FLIR Lepton thermal rig: synchronized capture, stereo depth, thermal-to-RGB registration.',
      '1,768 indoor scenes, 7,598 annotated objects, 65 classes, 11 rooms — including lighting-shift and dark scenes.',
      '40,078 template-generated VQA pairs across nine categories with deterministic answers and evaluation tolerances.',
      'Evaluated six frozen VLMs (Qwen2-VL, Qwen2.5-VL, Qwen3-VL, InternVL3, Idefics3) and trained Faster R-CNN hazard-localization baselines.',
    ],
    stack: ['Python', 'PyTorch', 'OpenCV', 'Faster R-CNN', 'Hugging Face VLMs', 'Stereo vision'],
    results: [
      'Hazard localization AP50 0.695 → 0.869 adding thermal, on unseen kitchens',
      'Qwen2.5-VL distance + temperature accuracy 0.48 → 0.89 with numeric sensor readouts',
      'Temperature MAE 24.6 °C with RGB → ~7 °C with thermal',
    ],
  },
  {
    slug: 'rendered-view-consensus',
    title: 'Rendered-View Consensus (RVC)',
    org: 'University of Wyoming',
    period: '2025 – 2026',
    area: 'Training-free open-vocabulary 3D grounding',
    kind: 'research',
    featured: true,
    status: 'First author · manuscript under review',
    problem:
      'Find the object a free-form text query describes inside a 3D Gaussian Splatting scene — without training a model for it.',
    approach: [
      'Render 12 complementary views; Qwen3-VL-8B proposes text-conditioned boxes and verifies them semantically.',
      'SAM ViT-H turns boxes into masks, with an OccamLGS / CLIP language field as fallback.',
      'Project 2D masks onto Gaussians and aggregate opacity- and visibility-weighted support across views.',
      'Separate 3D location consensus from boundary drawing; SAM refines the final query-view silhouette.',
    ],
    stack: ['PyTorch', '3D Gaussian Splatting', 'Qwen3-VL', 'SAM', 'CLIP', 'Multi-view geometry'],
    results: [
      '79.6 mIoU on LERF-OVS (2D query-view masks), +14.6 over the strongest published comparison in that output regime',
      'Follow-up batching made multi-view label processing ~5.2× faster (0.20 s vs 1.08 s)',
    ],
  },
  {
    slug: 'locus',
    title: 'LOCUS: small-object grounding for smart glasses',
    org: 'University of Wyoming',
    period: '2026',
    area: 'Resource-aware 3D grounding',
    kind: 'research',
    featured: true,
    link: { label: 'Project page', href: 'https://bipin38.github.io/Locus/' },
    status: 'Workshop manuscript',
    problem: 'Ground small objects in previously scanned 3D scenes on a compute budget that suits smart glasses.',
    approach: [
      'RVC-style multi-view consensus with a 4B VLM and only four rendered views.',
      'SAM segmentation and visibility-weighted Gaussian consensus with candidate verification.',
      'Characterized view-count, model-size, storage, and pose-sensitivity tradeoffs.',
    ],
    stack: ['3D Gaussian Splatting', 'Qwen VLMs', 'SAM'],
    results: [
      '80.8 mIoU on LERF-OVS vs a 65.0 published baseline',
      '72.7 vs 50.6 mIoU on small objects',
      '82.6 mIoU with held-out real photographs as queries',
    ],
  },
  {
    slug: 'smart-helmet',
    title: 'Multimodal smart helmet',
    org: 'University of Wyoming',
    period: '2025 – present',
    area: 'Edge perception · Assistive systems',
    kind: 'research',
    featured: true,
    status: 'Ongoing prototype',
    problem: 'Warn a wearer about nearby hot hazards, and which direction they’re in, using sensors they can wear.',
    approach: [
      'Designed and assembled a head-mounted rig: two stereo RGB cameras around a FLIR Lepton 3.5 thermal camera.',
      'Calibration, rectification, and StereoSGBM depth; RGB–thermal alignment across resolutions and fields of view.',
      'YOLOv8 detections fused with per-object median depth and apparent temperature to decide when to warn.',
      'Left / right / ahead audio alerts with event-level suppression and re-alerting.',
    ],
    stack: ['Python', 'OpenCV', 'PyTorch', 'YOLOv8', 'Raspberry Pi 5', 'Jetson Orin Nano'],
    results: ['Working thermal-hazard awareness prototype, profiled per component on Pi 5 and Jetson hardware'],
  },
  {
    slug: 'yoga-pose-classification',
    title: 'Yoga pose classification',
    org: 'Personal',
    period: '—',
    area: 'Deep learning',
    kind: 'research',
    featured: false,
    problem: 'Classify yoga poses from video, where a single frame is often ambiguous.',
    approach: ['Collected and labeled a custom video dataset; LSTM classifier over temporal pose sequences.'],
    stack: ['Python', 'LSTM'],
    results: ['Classifies temporal sequences rather than isolated frames'],
  },
];
