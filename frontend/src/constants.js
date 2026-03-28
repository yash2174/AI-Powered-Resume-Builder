
export const BLANK_RESUME_DATA = {
  personal: {
    fullName: "Your Name",
    jobTitle: "Your Job Title",
    email: "youremail@example.com",
    phone: "(555) 123-4567",
    address: "City, State",
    linkedin: "",
    github: "",
    profilePhoto: "",
  },
  summary: "A brief professional summary about yourself.",
  experience: [],
  education: [],
  skills: [],
  customSections: []
};

/* DUMMY RESUMES  */

export const DUMMY_RESUME_DATA = [

/* TEMPLATE 1 - Product Manager */
{
  personal: {
    fullName: "Alexandra Chen",
    jobTitle: "Senior Product Manager",
    email: "alex.chen@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexandrachen",
    github: "github.com/alexchen",
    profilePhoto: "https://picsum.photos/id/1/200/200",
  },
  summary: "Dynamic and results-oriented Senior Product Manager with over 8 years of experience driving product strategy from conception to launch. Proven ability to lead cross-functional teams, define product roadmaps, and deliver innovative solutions that meet user needs and drive business growth in fast-paced tech environments.",
  experience: [
    {
      id: "exp1",
      company: "Innovate Inc.",
      role: "Senior Product Manager",
      date: "2018 - Present",
      description:
        "• Led the development and launch of a new B2B SaaS platform, resulting in a 40% increase in user engagement and a 25% growth in annual recurring revenue.\n• Defined the product vision and roadmap for 3 major product lines, conducted A/B tests, and analyzed user data to prioritize features, leading to a 15% improvement in customer satisfaction.\n• Managed a team of 5 product managers and collaborated with a 20-person engineering team, design, and marketing to deliver on a quarterly release cycle."
    },
    {
      id: "exp2",
      company: "Tech Solutions",
      role: "Product Manager",
      date: "2015 - 2018",
      description:
        "• Oversaw the product lifecycle of a mobile application with over 1 million downloads, improving app store ratings from 4.2 to 4.8.\n• Conducted extensive market research and user analysis to identify and validate new feature opportunities, leading to a 15% reduction in user churn."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "Stanford University",
      degree: "M.S. in Computer Science",
      date: "2013 - 2015",
      description: "Specialization in Human-Computer Interaction. Published a paper on user engagement metrics."
    },
    {
      id: "edu2",
      institution: "University of California, Berkeley",
      degree: "B.S. in Business Administration",
      date: "2009 - 2013",
      description: "Graduated with Honors. President of the Entrepreneurship Club."
    }
  ],
  skills: [
    { id: "s1", name: "Product Strategy & Roadmap" },
    { id: "s2", name: "Agile & Scrum Methodologies" },
    { id: "s3", name: "JIRA & Confluence" },
    { id: "s4", name: "Market Research & Analysis" },
    { id: "s5", name: "User-Centered Design" },
    { id: "s6", name: "A/B Testing" },
    { id: "s7", name: "Leadership & Team Management" },
    { id: "s8", name: "SQL" }
  ],
  customSections: [
    {
      id: "cs1",
      title: "Certifications",
      content: "• Certified Scrum Product Owner (CSPO)\n• Pragmatic Marketing Certified (PMC-III)"
    },
    {
      id: "cs2",
      title: "Languages",
      content: "• English (Native)\n• Mandarin (Conversational)"
    }
  ]
},

/*TEMPLATE 2 - Software Engineer */

{
  personal: {
    fullName: "Benjamin Carter",
    jobTitle: "Lead Software Engineer",
    email: "ben.carter@example.com",
    phone: "+1 (555) 987-6543",
    address: "Austin, TX",
    linkedin: "linkedin.com/in/bencarter",
    github: "github.com/bencarter",
  },
  summary: "Highly skilled Lead Software Engineer with a decade of experience in designing, developing, and deploying scalable and resilient backend systems. Expert in microservices architecture, cloud-native technologies (AWS), and leading high-performing engineering teams to deliver robust software solutions.",
  experience: [
    {
      id: "exp1",
      company: "CloudScape",
      role: "Lead Software Engineer",
      date: "2019 - Present",
      description:
        "• Architected and implemented a new microservices-based backend using Java, Spring Boot, and Kafka, improving system uptime to 99.99% and handling 10,000+ requests per second.\n• Mentored a team of 10 engineers, fostering a culture of code quality, CI/CD, and continuous improvement.\n• Led the migration of legacy monolith services to a Kubernetes-based infrastructure on AWS, reducing infrastructure costs by 30%."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "University of Texas at Austin",
      degree: "B.S. in Computer Engineering",
      date: "2012 - 2016",
      description: "Graduated with High Honors. Capstone Project: Real-time data streaming pipeline."
    }
  ],
  skills: [
    { id: "s1", name: "Java & Python" },
    { id: "s2", name: "Spring Boot & Django" },
    { id: "s3", name: "Microservices Architecture" },
    { id: "s4", name: "AWS (EC2, S3, Lambda, EKS)" },
    { id: "s5", name: "Docker & Kubernetes" },
    { id: "s6", name: "SQL & NoSQL (PostgreSQL, Redis)" },
    { id: "s7", name: "System Design" },
    { id: "s8", name: "CI/CD (Jenkins)" }
  ],
  customSections: [
    {
      id: "cs1",
      title: "Certifications",
      content:
        "• AWS Certified Solutions Architect - Professional\n• Certified Kubernetes Application Developer (CKAD)"
    }
  ]
},

{
        personal: {
            fullName: "Chloe Davis",
            jobTitle: "UX/UI Designer",
            email: "chloe.davis@example.com",
            phone: "+1 (555) 234-5678",
            address: "New York, NY",
            linkedin: "linkedin.com/in/chloedavis",
            github: "github.com/chloedavis",
            profilePhoto: "https://picsum.photos/id/2/200/200",
        },
        summary: "Creative and detail-oriented UX/UI Designer with a passion for crafting intuitive, accessible, and beautiful user experiences. Proficient in the entire design process, from user research and wireframing to high-fidelity prototyping and collaborating on design systems.",
        experience: [
            { id: 'exp1', company: "PixelPerfect Agency", role: "Senior UX/UI Designer", date: "2017 - Present", description: "• Led the end-to-end redesign of a major e-commerce website, resulting in a 25% increase in conversion rates and a 30% improvement in user satisfaction scores.\n• Conducted user research initiatives, including interviews, journey mapping, and usability testing with over 50 users to inform and validate design decisions.\n• Developed and maintained a comprehensive design system in Figma, reducing design and development time by 20% and ensuring consistency across all digital products." },
            { id: 'exp2', company: "Creative Minds", role: "Junior Designer", date: "2015 - 2017", description: "• Assisted in creating wireframes, mockups, and interactive prototypes for various web and mobile projects.\n• Collaborated closely with developers to ensure seamless and pixel-perfect implementation of designs." },
        ],
        education: [
            { id: 'edu1', institution: "Parsons School of Design", degree: "BFA in Communication Design", date: "2011 - 2015", description: "Focus on Interaction Design and Typography. Dean's List 2014, 2015." },
        ],
        skills: [{ id: 's1', name: "Figma & Sketch" }, { id: 's2', name: "Adobe Creative Suite (XD, Illustrator, Photoshop)" }, { id: 's3', name: "User Research & Testing" }, { id: 's4', name: "Wireframing & Prototyping" }, { id: 's5', name: "Design Systems" }, { id: 's6', name: "Information Architecture" }, { id: 's7', name: "HTML/CSS" }, { id: 's8', name: "Principle" }],
        customSections: [
             { id: 'cs1', title: 'Portfolio', content: 'You can view my work at chloedavis.design' },
             { id: 'cs2', title: 'Awards', content: '• 2022 Webby Award Honoree - Best User Interface'}
        ]
    },
    // Template 4 (no photo) - Data Scientist
    {
        personal: {
            fullName: "David Rodriguez",
            jobTitle: "Data Scientist",
            email: "david.r@example.com",
            phone: "+1 (555) 876-5432",
            address: "Chicago, IL",
            linkedin: "linkedin.com/in/davidrodriguez",
            github: "github.com/davidrodriguez",
        },
        summary: "Analytically-minded Data Scientist with deep expertise in machine learning, statistical analysis, and data visualization. Proven track record of extracting actionable insights from complex datasets to drive business growth, product innovation, and operational efficiency.",
        experience: [
            { id: 'exp1', company: "Insight Analytics", role: "Data Scientist", date: "2018 - Present", description: "• Developed a customer churn prediction model using XGBoost, achieving 92% accuracy and reducing monthly churn by 15%, directly contributing to a $2M annual revenue retention.\n• Built and maintained data pipelines using Python, Airflow, and SQL for ETL processes, ensuring data integrity for modeling.\n• Created interactive dashboards in Tableau to communicate findings to C-level stakeholders, leading to a 10% increase in marketing campaign efficiency." },
            { id: 'exp2', company: "NumberCrunch Corp", role: "Data Analyst", date: "2016 - 2018", description: "• Performed statistical analysis and A/B testing to support marketing campaigns, leading to a 10% increase in campaign ROI.\n• Cleaned and preprocessed large datasets (10M+ rows) to prepare them for analysis." },
        ],
        education: [
            { id: 'edu1', institution: "University of Chicago", degree: "M.S. in Analytics", date: "2014 - 2016", description: "Coursework in Machine Learning, Predictive Modeling, and Big Data Technologies." },
            { id: 'edu2', institution: "University of Illinois Urbana-Champaign", degree: "B.S. in Statistics", date: "2010 - 2014", description: "Graduated Magna Cum Laude." },
        ],
        skills: [{ id: 's1', name: "Python (pandas, scikit-learn, TensorFlow)" }, { id: 's2', name: "R" }, { id: 's3', name: "SQL & NoSQL" }, { id: 's4', name: "Machine Learning (Classification, Regression, Clustering)" }, { id: 's5', name: "Tableau & Power BI" }, { id: 's6', name: "Statistics & A/B Testing" }, { id: 's7', name: "Airflow" }],
        customSections: [
             { id: 'cs1', title: 'Projects', content: '• GitHub Project: Stock Price Prediction using LSTM Networks. Achieved an 85% directional accuracy.' },
             { id: 'cs2', title: 'Publications', content: '• "Predictive Modeling for Retail," Journal of Data Science, 2018.'}
        ]
    },

];

/*EXTRA DOMAIN RESUMES*/

const devOpsResume = {
  personal: {
    fullName: "Eva Martinez",
    jobTitle: "DevOps Engineer",
    email: "eva.martinez@example.com",
    phone: "+1 (555) 111-2222",
    address: "Seattle, WA",
    linkedin: "linkedin.com/in/evamartinez",
    github: "github.com/evamartinez"
  },
  summary:
    "Experienced DevOps Engineer specializing in CI/CD, infrastructure as code, and cloud automation. Passionate about building and maintaining scalable, secure, and reliable infrastructure to support high-velocity software development teams.",
  experience: [
        { id: 'exp1', company: "ScaleUp Technologies", role: "Senior DevOps Engineer", date: "2018 - Present", description: "• Implemented and managed CI/CD pipelines using Jenkins and GitLab CI for 20+ microservices, reducing average deployment time by 60%.\n• Automated infrastructure provisioning and configuration management with Terraform and Ansible for AWS environments, saving 20+ man-hours per week.\n• Managed Kubernetes clusters on GCP with 100+ nodes, ensuring high availability and cost optimization through auto-scaling and resource management." },
        { id: 'exp2', company: "AgileSoft", role: "Systems Administrator", date: "2016 - 2018", description: "• Managed on-premise Linux servers and supported development teams with infrastructure needs.\n• Wrote Bash scripts to automate routine tasks like backups and log rotation."}
    ],
  education: [
        { id: 'edu1', institution: "University of Washington", degree: "B.S. in Informatics", date: "2014 - 2018", description: "Focus on Systems Administration." },
    ],
  skills:  [{ id: 's1', name: "Docker & Kubernetes" }, { id: 's2', name: "Terraform & Ansible" }, { id: 's3', name: "AWS/GCP/Azure" }, { id: 's4', name: "CI/CD (Jenkins, GitLab)" }, { id: 's5', name: "Python/Bash Scripting" }, { id: 's6', name: "Monitoring (Prometheus, Grafana)" }, { id: 's7', name: "Linux Administration" }],
  customSections:  [
        { id: 'cs1', title: 'Certifications', content: '• Certified Kubernetes Administrator (CKA)\n• AWS Certified DevOps Engineer - Professional' }
    ]
};



const fullStackResume = {
  personal: {
    fullName: "Arjun Mehta",
    jobTitle: "Full Stack Developer",
    email: "arjun.mehta@example.com",
    phone: "+1 (555) 234-5678",
    address: "Austin, TX",
    linkedin: "linkedin.com/in/arjunmehta",
    github: "github.com/arjunmehta"
  },
  summary:
    "Passionate Full Stack Developer with 5+ years of experience building end-to-end web applications using React, Node.js, and cloud platforms. Skilled in designing scalable REST APIs, optimizing database performance, and delivering responsive, pixel-perfect UIs.",
  experience: [
    { id: 'exp1', company: "Nexus Digital", role: "Senior Full Stack Developer", date: "2021 - Present", description: "• Built and maintained 10+ client-facing web applications using React, TypeScript, and Node.js, serving 500K+ monthly users.\n• Designed and implemented RESTful and GraphQL APIs integrated with PostgreSQL and MongoDB databases.\n• Reduced page load time by 45% through code splitting, lazy loading, and CDN optimization." },
    { id: 'exp2', company: "Webify Studio", role: "Full Stack Developer", date: "2019 - 2021", description: "• Developed e-commerce platforms with React frontend and Express/Node.js backend, processing $2M+ in annual transactions.\n• Integrated third-party services including Stripe, Twilio, and Sendgrid APIs." }
  ],
  education: [
    { id: 'edu1', institution: "UT Austin", degree: "B.S. in Computer Science", date: "2015 - 2019", description: "Specialization in Web Technologies and Distributed Systems." }
  ],
  skills: [
    { id: 's1', name: "React & Next.js" }, { id: 's2', name: "Node.js & Express" },
    { id: 's3', name: "TypeScript" }, { id: 's4', name: "PostgreSQL & MongoDB" },
    { id: 's5', name: "GraphQL" }, { id: 's6', name: "Docker & AWS" },
    { id: 's7', name: "REST API Design" }, { id: 's8', name: "Redis & Caching" }
  ],
  customSections: [
    { id: 'cs1', title: 'Projects', content: '• ShopStream — Full stack e-commerce platform with real-time inventory (React, Node, Stripe)\n• TaskFlow — Collaborative project management app with WebSocket support (Next.js, MongoDB)' }
  ]
};

const cloudComputingResume = {
  personal: {
    fullName: "Priya Nair",
    jobTitle: "Cloud Solutions Architect",
    email: "priya.nair@example.com",
    phone: "+1 (555) 345-6789",
    address: "San Jose, CA",
    linkedin: "linkedin.com/in/priyanair",
    github: "github.com/priyanair"
  },
  summary:
    "Cloud Solutions Architect with 7+ years of experience designing and implementing enterprise-grade cloud infrastructure on AWS, Azure, and GCP. Expert in cloud migration, cost optimization, and multi-cloud strategy for Fortune 500 companies.",
  experience: [
    { id: 'exp1', company: "CloudCore Consulting", role: "Lead Cloud Architect", date: "2020 - Present", description: "• Architected multi-region AWS infrastructure for a fintech client handling 10M+ daily transactions with 99.99% uptime SLA.\n• Led cloud migration of 200+ legacy applications to AWS, reducing infrastructure costs by 40%.\n• Designed disaster recovery strategies with RPO < 1 hour and RTO < 4 hours across 3 clients." },
    { id: 'exp2', company: "TechVault Inc.", role: "Cloud Engineer", date: "2017 - 2020", description: "• Provisioned and managed AWS resources using Terraform and CloudFormation.\n• Built serverless workflows with AWS Lambda, Step Functions, and EventBridge, cutting operational overhead by 30%." }
  ],
  education: [
    { id: 'edu1', institution: "Stanford University", degree: "M.S. in Cloud Computing", date: "2015 - 2017", description: "Thesis: Cost Optimization Models for Hybrid Cloud Architectures." }
  ],
  skills: [
    { id: 's1', name: "AWS & Azure & GCP" }, { id: 's2', name: "Terraform & CloudFormation" },
    { id: 's3', name: "Kubernetes & EKS" }, { id: 's4', name: "Serverless Architecture" },
    { id: 's5', name: "Cloud Security & IAM" }, { id: 's6', name: "Cost Optimization" },
    { id: 's7', name: "Microservices Design" }, { id: 's8', name: "Python & Bash" }
  ],
  customSections: [
    { id: 'cs1', title: 'Certifications', content: '• AWS Certified Solutions Architect – Professional\n• Google Professional Cloud Architect\n• Microsoft Azure Solutions Architect Expert' }
  ]
};


const cyberSecurityResume = {
  personal: {
    fullName: "Marcus Lee",
    jobTitle: "Cybersecurity Engineer",
    email: "marcus.lee@example.com",
    phone: "+1 (555) 456-7890",
    address: "Washington, DC",
    linkedin: "linkedin.com/in/marcuslee",
    github: "github.com/marcusleesec"
  },
  summary:
    "Cybersecurity Engineer with 6+ years of experience in threat analysis, penetration testing, and security architecture. Proven track record protecting enterprise systems from advanced persistent threats, with deep expertise in SIEM, endpoint security, and zero-trust frameworks.",
  experience: [
    { id: 'exp1', company: "SecureShield Corp", role: "Senior Security Engineer", date: "2020 - Present", description: "• Conducted 50+ penetration tests on web applications, APIs, and network infrastructure, uncovering critical vulnerabilities before exploitation.\n• Designed and implemented zero-trust network architecture reducing attack surface by 70%.\n• Led incident response for 3 major security breaches, containing threats within 2 hours each time." },
    { id: 'exp2', company: "CyberWatch Agency", role: "Security Analyst", date: "2018 - 2020", description: "• Monitored and analyzed 1M+ security events daily using Splunk SIEM.\n• Performed vulnerability assessments and managed patch cycles for 300+ endpoints." }
  ],
  education: [
    { id: 'edu1', institution: "Carnegie Mellon University", degree: "B.S. in Information Security", date: "2014 - 2018", description: "Graduated with Distinction. Focus on Network Security and Cryptography." }
  ],
  skills: [
    { id: 's1', name: "Penetration Testing" }, { id: 's2', name: "SIEM (Splunk, QRadar)" },
    { id: 's3', name: "Zero Trust Architecture" }, { id: 's4', name: "Incident Response" },
    { id: 's5', name: "Network Security" }, { id: 's6', name: "OWASP & CVE Analysis" },
    { id: 's7', name: "Python & PowerShell" }, { id: 's8', name: "Firewalls & IDS/IPS" }
  ],
  customSections: [
    { id: 'cs1', title: 'Certifications', content: '• Certified Ethical Hacker (CEH)\n• CISSP – Certified Information Systems Security Professional\n• CompTIA Security+ & PenTest+' }
  ]
};


const aiMlResume = {
  personal: {
    fullName: "Sophia Zhang",
    jobTitle: "AI/ML Engineer",
    email: "sophia.zhang@example.com",
    phone: "+1 (555) 567-8901",
    address: "San Francisco, CA",
    linkedin: "linkedin.com/in/sophiazhang",
    github: "github.com/sophiazhang-ai"
  },
  summary:
    "AI/ML Engineer with 5+ years of experience designing, training, and deploying large-scale machine learning models in production. Expert in deep learning, NLP, and computer vision with a strong background in MLOps and model optimization.",
  experience: [
    { id: 'exp1', company: "Luminary AI", role: "Senior ML Engineer", date: "2021 - Present", description: "• Designed and deployed transformer-based NLP models serving 2M+ daily inference requests with P95 latency under 100ms.\n• Built end-to-end MLOps pipeline using MLflow, Kubeflow, and AWS SageMaker, reducing model deployment time from 2 weeks to 1 day.\n• Improved recommendation system CTR by 22% using collaborative filtering and deep learning embeddings." },
    { id: 'exp2', company: "VisionTech Labs", role: "Machine Learning Engineer", date: "2019 - 2021", description: "• Trained and fine-tuned CNN models for real-time object detection achieving 94% mAP on custom datasets.\n• Optimized model inference using ONNX and TensorRT, achieving 3x speedup on GPU." }
  ],
  education: [
    { id: 'edu1', institution: "UC Berkeley", degree: "M.S. in Artificial Intelligence", date: "2017 - 2019", description: "Thesis: Efficient Transformer Architectures for Low-Resource NLP Tasks." }
  ],
  skills: [
    { id: 's1', name: "PyTorch & TensorFlow" }, { id: 's2', name: "LLMs & Transformers" },
    { id: 's3', name: "Computer Vision" }, { id: 's4', name: "NLP & Text Generation" },
    { id: 's5', name: "MLOps & SageMaker" }, { id: 's6', name: "Python & Pandas" },
    { id: 's7', name: "ONNX & TensorRT" }, { id: 's8', name: "Kubeflow & MLflow" }
  ],
  customSections: [
    { id: 'cs1', title: 'Publications & Projects', content: '• Published: "Efficient Fine-Tuning of LLMs for Domain-Specific Tasks" – NeurIPS 2023\n• OpenSource: LightNLP — Python library for lightweight NLP inference (2.3K GitHub stars)' }
  ]
};



const dataScientistResume = {
  personal: {
    fullName: "Rahul Sharma",
    jobTitle: "Data Scientist",
    email: "rahul.sharma@example.com",
    phone: "+1 (555) 678-9012",
    address: "New York, NY",
    linkedin: "linkedin.com/in/rahulsharma",
    github: "github.com/rahulsharma-ds"
  },
  summary:
    "Data Scientist with 5+ years of experience turning complex datasets into actionable business insights. Proficient in statistical modeling, predictive analytics, and A/B experimentation. Passionate about using data to drive product decisions at scale.",
  experience: [
    { id: 'exp1', company: "RetailMind Analytics", role: "Senior Data Scientist", date: "2021 - Present", description: "• Built customer churn prediction model with 89% accuracy, enabling proactive retention campaigns saving $3.2M annually.\n• Designed and analyzed 40+ A/B tests across product features, directly influencing $10M+ revenue decisions.\n• Created executive-facing dashboards in Tableau and Looker tracking 20+ KPIs across 5 business units." },
    { id: 'exp2', company: "FinTrack Solutions", role: "Data Scientist", date: "2019 - 2021", description: "• Developed fraud detection models using XGBoost and LightGBM, reducing false positives by 35%.\n• Built automated ETL pipelines in Python and Apache Airflow processing 50GB+ of daily transaction data." }
  ],
  education: [
    { id: 'edu1', institution: "Columbia University", degree: "M.S. in Data Science", date: "2017 - 2019", description: "Specialization in Statistical Learning and Bayesian Methods." }
  ],
  skills: [
    { id: 's1', name: "Python & R" }, { id: 's2', name: "Machine Learning" },
    { id: 's3', name: "SQL & BigQuery" }, { id: 's4', name: "Tableau & Looker" },
    { id: 's5', name: "Statistical Modeling" }, { id: 's6', name: "A/B Testing" },
    { id: 's7', name: "Spark & Hadoop" }, { id: 's8', name: "Scikit-learn & XGBoost" }
  ],
  customSections: [
    { id: 'cs1', title: 'Key Achievements', content: '• Kaggle Competitions Master — Top 1% ranking globally\n• Speaker at DataSummit NYC 2023: "Scaling A/B Testing in E-Commerce"' }
  ]
};


const dataAnalystResume = {
  personal: {
    fullName: "Aisha Johnson",
    jobTitle: "Data Analyst",
    email: "aisha.johnson@example.com",
    phone: "+1 (555) 789-0123",
    address: "Chicago, IL",
    linkedin: "linkedin.com/in/aishajohnson",
    github: "github.com/aishajohnson"
  },
  summary:
    "Detail-oriented Data Analyst with 4+ years of experience transforming raw data into clear, compelling insights that drive business strategy. Expert in SQL, Excel, and data visualization with a strong ability to communicate findings to non-technical stakeholders.",
  experience: [
    { id: 'exp1', company: "GrowthMetrics Co.", role: "Senior Data Analyst", date: "2022 - Present", description: "• Analyzed customer behavior data across 1M+ users to identify growth opportunities, contributing to a 18% increase in retention.\n• Built automated reporting pipelines in Python reducing manual reporting time by 12 hours/week.\n• Developed interactive Power BI dashboards adopted by C-suite for weekly business reviews." },
    { id: 'exp2', company: "BrightData Agency", role: "Data Analyst", date: "2020 - 2022", description: "• Wrote complex SQL queries to extract and analyze marketing campaign data across 50+ campaigns.\n• Produced weekly performance reports and presented insights to clients, improving campaign ROI by 25%." }
  ],
  education: [
    { id: 'edu1', institution: "University of Illinois", degree: "B.S. in Statistics", date: "2016 - 2020", description: "Minor in Business Analytics. Dean's List 3 consecutive years." }
  ],
  skills: [
    { id: 's1', name: "SQL & PostgreSQL" }, { id: 's2', name: "Python (Pandas, NumPy)" },
    { id: 's3', name: "Power BI & Tableau" }, { id: 's4', name: "Excel & Google Sheets" },
    { id: 's5', name: "Data Visualization" }, { id: 's6', name: "Statistical Analysis" },
    { id: 's7', name: "ETL & Data Pipelines" }, { id: 's8', name: "Google Analytics" }
  ],
  customSections: [
    { id: 'cs1', title: 'Certifications', content: '• Google Data Analytics Professional Certificate\n• Microsoft Power BI Data Analyst Associate\n• Tableau Desktop Specialist' }
  ]
};


/*EXPLORE DOMAINS */

export const EXPLORE_DOMAINS = {
  "Software Engineer": DUMMY_RESUME_DATA[1],
  "Product Manager": DUMMY_RESUME_DATA[0],
  "DevOps Engineer": devOpsResume,
  "Full Stack Developer": fullStackResume,
  "Cloud Architect": cloudComputingResume,
  "Cybersecurity Engineer": cyberSecurityResume,
  "AI/ML Engineer": aiMlResume,
  "Data Scientist": dataScientistResume,
  "Data Analyst": dataAnalystResume,
};

/* STYLE OPTIONS*/

export const COLOR_PALETTES = [
  { name: "Default Blue", color: "bg-blue-800" },
  { name: "Forest Green", color: "bg-green-800" },
  { name: "Slate Gray", color: "bg-slate-800" },
  { name: "Ruby Red", color: "bg-red-800" },
  { name: "Deep Purple", color: "bg-purple-800" }
];

export const FONT_FAMILIES = [
  { name: "Sans Serif", value: "font-sans" },
  { name: "Serif", value: "font-serif" },
  { name: "Monospace", value: "font-mono" }
];

export const FONT_SIZES = [
  { name: "Small", value: 0.9 },
  { name: "Medium", value: 1.0 },
  { name: "Large", value: 1.1 }
];
