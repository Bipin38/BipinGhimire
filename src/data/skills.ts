export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'Bash'] },
  {
    group: 'Data engineering',
    items: [
      'PySpark / Spark',
      'Azure Databricks',
      'Delta Lake',
      'AWS Glue',
      'Airflow',
      'Airbyte',
      'Medallion architecture',
      'Incremental ingestion',
      'Hash-based change detection',
      'Parquet',
      'Data quality & validation',
    ],
  },
  {
    group: 'Cloud',
    items: [
      'AWS: S3, Lambda, EC2, Glue, Athena, API Gateway, DynamoDB, Cognito, CloudFormation, Bedrock, Transcribe Medical',
      'Azure: Databricks, Data Factory, Blob Storage',
    ],
  },
  {
    group: 'Databases & search',
    items: ['SQL Server', 'Oracle', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'Elasticsearch'],
  },
  {
    group: 'ML & computer vision',
    items: [
      'PyTorch',
      'OpenCV',
      'YOLOv8',
      'Faster R-CNN',
      'SAM',
      'CLIP',
      'VLMs (Qwen-VL, InternVL3, Idefics3)',
      '3D Gaussian Splatting',
      'Stereo vision',
      'RGB-D-T fusion',
      'Zero-shot evaluation',
      'Prompt engineering',
    ],
  },
  {
    group: 'Software & infrastructure',
    items: ['React', 'Flask', 'REST APIs', 'Docker', 'Terraform', 'GitHub Actions', 'CI/CD', 'Git'],
  },
  { group: 'Analytics', items: ['Apache Superset', 'Power BI', 'Data modeling', 'Dashboards'] },
  { group: 'Edge hardware', items: ['NVIDIA Jetson Orin Nano', 'Raspberry Pi 5', 'CUDA'] },
  { group: 'Familiar (training)', items: ['dbt', 'Snowflake', 'Microsoft Fabric', 'Kafka'] },
];
