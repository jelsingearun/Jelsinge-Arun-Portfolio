import { Project, SkillCategory, AuditItem, RoleResumeVariant } from "./types";

export const developerBio = {
  name: "Jelsinge Arun",
  title: "Junior AI & Full-Stack Engineer",
  email: "jelsingearun.2004@gmail.com",
  github: "https://github.com/jelsingearun",
  location: "Hyderabad, India / Remote",
  education: {
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    timeline: "2022 - 2026",
    details: "Strong foundations in Machine Learning, Deep Learning, Edge Computing, and Full-Stack Engineering."
  },
  tagline: "B.Tech student passionate about real-time computer vision models (YOLOv8, OpenCV), edge AI optimizations, and robust full-stack web architectures. Built and documented over 6 custom developer engineering builds.",
  elevatorPitch: "I'm an aspiring computer science & AI engineer graduating in 2026. Instead of just studying theory, I build functional applications: driver fatigue detection systems with facial landmarks, edge security alert feeds with YOLOv8, and geospatial hazard maps with FastAPI. I'm skilled in Python (PyTorch, OpenCV), JavaScript/TypeScript (Node.js, React), and SQL/NoSQL databases.",
  aboutMe: `I believe the best way to learn software engineering is by building things from scratch. Over my academic journey, I have developed a strong practical understanding of model inference speeds, asynchronous API programming, and multi-user WebSockets. As a proud open-source enthusiast and developer with student technology communities, I build tools to solve civil and safety challenges. I am actively seeking junior AI/ML, backend, or full-stack developer roles starting in 2026.`
};

export const projectsData: Project[] = [
  {
    id: "openpulse",
    name: "OpenPulse (脉动)",
    githubName: "Openpulse",
    tagline: "Autonomous News-to-Video Deep GenAI Compilation Engine",
    githubUrl: "https://github.com/jelsingearun/Openpulse",
    category: "Generative AI",
    language: "TypeScript",
    stars: 12,
    updatedAt: "2026-05-15",
    recruiterScore: {
      attractiveness: 10,
      atsRelevance: 10,
      depth: 9.8,
      sophistication: 9.6,
      overall: 9.9
    },
    techStack: [
      "TypeScript", "Node.js", "Fastify", "React", "vLLM", "LM Studio", "HeyGen HyperFrames", "GSAP (GreenSock)", "Playwright", "FFmpeg"
    ],
    problem: "Vertical video creation is manual, expensive, and slow. Compiling live technical blogs or Hacker News trends into rich, content-dense vertical narratives usually takes hours of human editing.",
    architecture: "1. Scanner: Custom scraper grabs hot stories from HN/Reddit. 2. Orchestrator: Sends stories to local or hosted vLLMs to generate an interactive HyperFrames XML layout. 3. Player: Compiles custom GSAP animations on a headless Playwright Chromium instance. 4. Encoder: Ingests raw video frame streams frame-by-frame and compiles them into web-optimized H.264 formats using FFmpeg.",
    implementation: "Built a fully automated, stateless processing server with Fastify. Developed a dynamic frame-render controller that syncs GSAP visual timing with sound-track offsets. Played back fluid micro-transitions on Chromium, outputting frames to an isolated temp buffer before piping directly into FFmpeg stream processes.",
    challenges: "Synchronizing sub-second GSAP transition steps with Chromium frame capture caused audio drift and stuttering. Resolved this by introducing discrete, step-based relative timing loops in Playwright instead of relying on real-time chronological ticks.",
    systemsThinking: "Treated video rendering as a classic compiler problem. Decoupled content scraping from core layout generation and video compilation, enabling independent horizontal scaling of the Chromium headless farm.",
    recruiterSummary: "An autonomous compilation engine that converts news feeds into high-fidelity Vertical Shorts using orchestrated multi-agent systems and real-time headless canvas snapshots.",
    atsKeywords: ["vLLM", "Orchestration", "Fastify", "FFmpeg", "Headless Chromium", "Playwright", "Video Compilers", "Automation Grid"]
  },
  {
    id: "sentinel-ai",
    name: "SentinelAI Threat Detection",
    githubName: "weapondetection",
    tagline: "Edge-Optimized Real-Time Biometric & Threat Surveillance Grid",
    githubUrl: "https://github.com/jelsingearun/weapondetection",
    category: "AI/ML",
    language: "Python",
    stars: 8,
    updatedAt: "2026-03-13",
    recruiterScore: {
      attractiveness: 9.6,
      atsRelevance: 10,
      depth: 9.5,
      sophistication: 9.4,
      overall: 9.6
    },
    techStack: [
      "Python", "FastAPI", "React", "YOLOv8", "DeepFace (FaceNet512)", "MongoDB", "WebSockets", "Telegram API"
    ],
    problem: "Traditional commercial security feeds are highly reactive. Identifying active weapon threats (guns/knives) or specific restricted individuals across legacy CCTV loops takes minutes, rendering immediate tactical response impossible.",
    architecture: "Ingests raw RTSP camera feeds into a multi-threaded Python core. Decoupled frames are sent through a custom-trained YOLOv8 object-detection network. Simultaneously, facial bounding boxes are passed into deep representation networks (DeepFace + FaceNet512 vector databases) to perform close-to-real-time identification. Live dashboards receive incident streams via raw WebSockets, and alerts with captured evidence are pushed to law enforcement via Telegram channels.",
    implementation: "Designed a multi-threaded feed loop to prevent visual lag during model execution. Built memory buffers to skip redundant detections across consecutive frames. Integrated a lightweight MongoDB schema that tracks incident timestamps, camera geolocation, and similarity scores.",
    challenges: "Simultaneous inference of YOLOv8 and FaceNet on a single-core GPU bottlenecked the hardware’s capability, dropping FPS under 12. Implemented batch pre-scaling and asynchronous model worker queues to restore smooth 30 FPS stream processing.",
    systemsThinking: "Recognized that centralizing multi-camera video decoding leads to severe network choke. Structured the API to accept lightweight IoT agent metadata and handle intensive compute tasks in distinct streaming grids.",
    recruiterSummary: "An advanced computer vision command center that auto-triages physical security feeds for threat objects and profiles facial signatures in real-time.",
    atsKeywords: ["YOLOv8", "DeepFace", "FaceNet512", "WebSockets Stream", "FastAPI Core", "Real-Time Video Analytics", "Multithreaded Processing"]
  },
  {
    id: "roadcare",
    name: "RoadCare Civil Intelligence",
    githubName: "RoadCare---AI-Based-Road-Damage-Pothole-Detection-System",
    tagline: "Community-Driven Civil Infrastructure Intelligence & Spatial Clustering",
    githubUrl: "https://github.com/jelsingearun/RoadCare---AI-Based-Road-Damage-Pothole-Detection-System",
    category: "Full Stack",
    language: "Python",
    stars: 15,
    updatedAt: "2026-04-18",
    recruiterScore: {
      attractiveness: 9.2,
      atsRelevance: 9.5,
      depth: 9.4,
      sophistication: 9.2,
      overall: 9.3
    },
    techStack: [
      "React", "FastAPI", "Python", "MongoDB", "h3-py (Uber H3 Spatial Indexing)", "OpenCV", "Geospatial APIs"
    ],
    problem: "Municipal damage reporting is notoriously slow due to manual verification processes. Potholes remain unaddressed because municipal departments lack consolidated data on which streets require immediate repaving.",
    architecture: "Citizens capture geotagged road damage on mobile devices. The backend FastAPI validates uploads through basic OpenCV edge and contours-based vision passes, filtering out non-road images. Approved reports are transformed into Uber H3 global spatial indexes, grouping individual report coordinates into hexagon clusters to map risk density. City admins access a complete Kanban board to assign repair crews.",
    implementation: "Developed a custom image-ingestion routine that strips EXIF metadata on the fly to capture GPS coordinates. Configured H3 spatial indices at Resolution 9 (100-meter radius) to cluster reports, effectively aggregating reports to prevent duplicate repairs.",
    challenges: "Dealing with erratic user coordinates and massive duplicate submissions for the same roadway potholes. Solved this using Uber's H3 spatial queries—any subsequent reports within an active hexagon cluster dynamically bump the priority score instead of writing new database indices.",
    systemsThinking: "Avoided expensive complex spatial database operations (like PostGIS) by mapping coordinate grids directly to high-performance base-16 strings inside a lightweight MongoDB collection.",
    recruiterSummary: "A scalable, civic SaaS suite that applies AI validation and Uber's H3 hexagonal spatial engine to automatically triage urban infrastructure damage.",
    atsKeywords: ["FastAPI", "Uber H3 Clustering", "Geospatial Mapping", "Exif Metadata Analysis", "MongoDB indexing", "Civil IoT", "Computer Vision Auditing"]
  },
  {
    id: "drowsify",
    name: "Drowsify Driver Safety System",
    githubName: "dr",
    tagline: "Edge-Deployable Facial Landmark Driver Monitoring & Attention Engine",
    githubUrl: "https://github.com/jelsingearun/dr",
    category: "AI/ML",
    language: "Python",
    stars: 7,
    updatedAt: "2026-03-13",
    recruiterScore: {
      attractiveness: 9.0,
      atsRelevance: 9.4,
      depth: 9.2,
      sophistication: 9.0,
      overall: 9.1
    },
    techStack: [
      "Python", "OpenCV", "dlib", "68-Landmark Estimations", "React", "FastAPI", "MongoDB"
    ],
    problem: "Commercial logistics drivers suffer high-collision rates due to exhaustion and micro-sleep. High-latency cloud analysis is inappropriate for immediate in-cabin alerts.",
    architecture: "Monitors eye socket activity and mouth alignment on local processing nodes. Raw frame buffers are scanned with dlib's 68-landmark estimator. Dynamic calculation matrices evaluate EAR (Eye Aspect Ratio) and MAR (Mouth Aspect Ratio) ratios with a sliding window, triggering local alerts whenever indicators cross critical distress threshold durations.",
    implementation: "Engineered mathematical algorithms to evaluate eye blinking frequencies and yawning rates. Configured the FastAPI server to act as a local local-host gateway, feeding visual alert triggers into a React frontend with absolute low-latency (sub-15ms).",
    challenges: "Varying in-cabin lighting conditions and glasses reflection distorted face-landmark estimation. Solved this by setting up lighting-invariant histogram equalization (CLAHE) on the preprocessing canvas.",
    systemsThinking: "Focused on execution speed. Retained all major image manipulation and matrix calculation calculations strictly inside offline thread workers, reducing network requests to simple JSON state events.",
    recruiterSummary: "A zero-cloud, highly privacy-focused biometric edge model that tracks eye-closure (EAR) and mouth yawn rates (MAR) to prevent driver sleep accidents.",
    atsKeywords: ["Facial Landmark Tracking", "dlib", "OpenCV CLAHE", "Eye Aspect Ratio (EAR)", "Mouth Aspect Ratio (MAR)", "Sub-15ms Edge Inference", "Logistics Tech"]
  },
  {
    id: "github-automator",
    name: "GitHub DevOps Provisioner",
    githubName: "github-repo-automator",
    tagline: "DevSecOps Infrastructure Automator & Pre-Publish Security Auditor",
    githubUrl: "https://github.com/jelsingearun/github-repo-automator",
    category: "DevSecOps & Automation",
    language: "Python",
    stars: 5,
    updatedAt: "2026-03-11",
    recruiterScore: {
      attractiveness: 8.8,
      atsRelevance: 9.2,
      depth: 9.0,
      sophistication: 8.8,
      overall: 8.9
    },
    techStack: [
      "Python CLI", "Git Core", "GitHub GraphQL API", "Security Scanner", "RegEx Engines"
    ],
    problem: "When moving local folders or ZIP backups to public platforms, developers frequently push sensitive API keys, cloud secrets, or raw environment variables, risking enterprise leaks.",
    architecture: "A highly robust Python command-line utility. Iterates through paths, parses code assets with custom security regular-expression rules, alerts the user, sanitizes dangerous constants, and uses the GitHub GraphQL API to create, configure, and push the clean codebase into structured remote repositories.",
    implementation: "Designed scanner heuristics capable of locating AWS tokens, Stripe credentials, and MongoDB connection strings. Programmed automated Git plumbing hooks to carry out silent commits after cleansing credentials.",
    challenges: "Evaluating deep nested directories containing high volumes of files (e.g. node_modules or .venv path trees) choked the tool's runtime performance. Implemented rapid thread-pool directories scanners and dynamic ignore rules that follow standard gitignore files.",
    systemsThinking: "Recognized repository setups are highly repetitive. Wrapped templating, credential security, and remote repository allocation into one single, command-driven pipeline.",
    recruiterSummary: "A production-grade Python CLI utility designed to sanitise hardcoded variables, run local security audits, and securely configure repositories.",
    atsKeywords: ["DevSecOps CLI", "GitHub API V4", "Static Code Auditing", "Secret Minimization", "Regex Scanner", "Systems Automation", "Git plumbing"]
  },
  {
    id: "academix",
    name: "Academix Collaboration Engine",
    githubName: "academix",
    tagline: "Academic Workspace & Peer-Matching Neural Discovery Hub",
    githubUrl: "https://github.com/jelsingearun/academix",
    category: "Full Stack",
    language: "JavaScript",
    stars: 6,
    updatedAt: "2026-04-27",
    recruiterScore: {
      attractiveness: 8.4,
      atsRelevance: 8.8,
      depth: 8.5,
      sophistication: 8.4,
      overall: 8.5
    },
    techStack: [
      "React", "Node.js", "Express", "MongoDB", "TensorFlow.js (Client-Side)", "Socket.io"
    ],
    problem: "Students face major coordination difficulties locating matching project peers with complementary technical interests, leading to fragmented, low-quality projects.",
    architecture: "Uses an Express server to authenticate users and manage study group listings. Student interests and self-published projects are transformed into structured vectors, which a browser-based TensorFlow.js script compares using cosine-similarity arithmetic to display matching team matches instantly.",
    implementation: "Programmed a complete real-time messaging pipeline using WebSocket loops. Formed secure MongoDB collections indexing search-optimized key paths to handle hundreds of concurrent matching inquiries.",
    challenges: "Server-side coordinate matching became expensive and risked slowing database operations. Solved this by fetching user-vectors to the client-environment and letting TensorFlow.js do the parallel matrix processing locally.",
    systemsThinking: "Demonstrated full-stack synergy by optimizing data flows—reducing backend compute load by utilising client browser threads for AI inference.",
    recruiterSummary: "A full-featured academic synergy workspace with React, Express, MongoDB, and decentralized client-side TensorFlow.js vector matching engines.",
    atsKeywords: ["TensorFlow.js", "Express Backend", "Cosine Similarity", "Real-time Messaging", "MongoDB Document Indexing", "React Context Hub"]
  },
  {
    id: "suicide-rate-detection",
    name: "Suicide Rate Analysis & Modeling",
    githubName: "sucide-rate-detection-project-main",
    tagline: "Statistical analysis and machine learning models predicting regional suicide trends in India using tabular datasets.",
    githubUrl: "https://github.com/jelsingearun/sucide-rate-detection-project-main",
    category: "AI/ML",
    language: "Jupyter Notebook",
    stars: 2,
    updatedAt: "2026-03-04",
    recruiterScore: {
      attractiveness: 8.2,
      atsRelevance: 8.5,
      depth: 8.0,
      sophistication: 7.8,
      overall: 8.1
    },
    techStack: [
      "Jupyter Notebook", "Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"
    ],
    problem: "Public health setups find it difficult to analyze complex demographic and regional factors behind suicide trends to allocate support resources effectively.",
    architecture: "1. Data Cleaner: Py-Pandas script cleans and normalizes multi-year regional tables. 2. Analyzer: Matplotlib & Seaborn plots demographic correlations. 3. Predictor: Scikit-Learn linear regression and random forest models forecast rate changes per state.",
    implementation: "Built linear regression lines inside interactive notebooks. Scaled uneven state populations with standard scale functions and categorized parameters like age group, gender, and economic background.",
    challenges: "Dealing with erratic gaps and missing entries across historic state dataset matrices. Solved this using median category imputations and logical baseline filters.",
    systemsThinking: "Taught me that raw tabular data requires careful pipeline execution (cleaning -> scaling -> validation) before model training to prevent skewed metrics.",
    recruiterSummary: "A structured data analytics and forecasting notebook utilizing Pandas, Seaborn, and Scikit-Learn regression pipelines.",
    atsKeywords: ["Jupyter Notebook", "Pandas DataFrames", "Data Preprocessing", "Linear Regression", "Scikit-Learn Model", "Mental Health Prediction", "Statistical Analysis"]
  },
  {
    id: "toolbox-ai",
    name: "ToolboxAI Curation Suite",
    githubName: "toolboxai",
    tagline: "A clean developer dashboard and playground consolidating custom AI prompt helpers and templates.",
    githubUrl: "https://github.com/jelsingearun/toolboxai",
    category: "Full Stack",
    language: "JavaScript",
    stars: 3,
    updatedAt: "2026-05-10",
    recruiterScore: {
      attractiveness: 8.3,
      atsRelevance: 8.4,
      depth: 8.1,
      sophistication: 7.9,
      overall: 8.2
    },
    techStack: [
      "React", "JavaScript", "HTML5 Canvas", "Tailwind CSS", "localStorage API", "Markdown Parser"
    ],
    problem: "Developers frequently lose their custom LLM parameters, prompt macros, and workflow links, switching tabs constantly.",
    architecture: "1. UI Grid: Live filterable cards built with React hooks. 2. Storage Hub: Uses browser localStorage for custom system prompt profiles. 3. Sandbox View: Supports raw markdown text inputs.",
    implementation: "Coded a high-speed React dashboard interface. Implemented state listeners that sync prompt categories directly to the client browser's memory, ensuring complete offline availability.",
    challenges: "Updating markdown visualizers fast without triggering blocking re-renders. Solved this by setting up basic memo structures and debouncing the user's text inputs.",
    systemsThinking: "Focused on human-computer optimization—organizing complex workflows into simple, accessible client-side UI layouts.",
    recruiterSummary: "An elegant, lightweight React web console consolidating and categorizing workspace prompts for developer efficiency.",
    atsKeywords: ["React.js", "localStorage API", "Tailwind CSS", "Frontend UI Design", "Developer Productivity", "System Prompts Organizer"]
  },
  {
    id: "archive-converter",
    name: "Offline Archive Converter",
    githubName: "archive-converter",
    tagline: "A modular command-line Python helper to automate file compression and format standardization.",
    githubUrl: "https://github.com/jelsingearun/archive-converter",
    category: "DevSecOps & Automation",
    language: "Python",
    stars: 1,
    updatedAt: "2026-03-11",
    recruiterScore: {
      attractiveness: 8.0,
      atsRelevance: 8.2,
      depth: 7.8,
      sophistication: 7.5,
      overall: 7.9
    },
    techStack: [
      "Python", "CLI Scripting", "tarfile Module", "zipfile Module", "OS Path Library", "Bash Terminal"
    ],
    problem: "Converting, nesting, and formatting folder batches and image archives manually for AI training across differing local terminals is extremely tedious.",
    architecture: "A lightweight Python CLI utilizing built-in filesystem wrappers. Recursively traverses folders, handles file system paths, and compresses objects into target outputs.",
    implementation: "Programmed modular functions with real-time extraction logs. Made the script resilient to corrupt individual archives by adding graceful try-except failover catches.",
    challenges: "Overcoming path formatting discrepancy issues on cross-operating system runs (Windows vs Linux). Handled this using Python's universal os-path methods.",
    systemsThinking: "Kept the codebase highly single-purpose, providing a straightforward, dependable utility following classic command line conventions.",
    recruiterSummary: "An operational Python CLI tool that automates nested compression folders, perfect for quick offline dataset packaging.",
    atsKeywords: ["Python CLI Helpers", "Archive Extraction", "File System Traversal", "System Scripting", "Dataset Packaging", "Ubuntu Linux Command Line"]
  },
  {
    id: "project-code-extractor",
    name: "Project Code Extractor",
    githubName: "project-code-extractor-main",
    tagline: "Automated codebase parser consolidating folder files into a single structured prompt for AI digestion.",
    githubUrl: "https://github.com/jelsingearun/project-code-extractor-main",
    category: "DevSecOps & Automation",
    language: "Python",
    stars: 4,
    updatedAt: "2026-03-20",
    recruiterScore: {
      attractiveness: 8.5,
      atsRelevance: 8.6,
      depth: 8.2,
      sophistication: 8.0,
      overall: 8.3
    },
    techStack: [
      "Python", "Gitignore Parser", "Regular Expressions", "File Reader", "System Automation"
    ],
    problem: "Copy-pasting multiple files manually into a generative AI chat window is slow and breaks code path hierarchy.",
    architecture: "A Python script that reads directories, respects global repository gitignore filters, and joins file streams under clean headers.",
    implementation: "Designed robust directory search rules. Automated output markdown generation, including dynamic directory layout projections.",
    challenges: "Excluding binary outputs and node package trees to prevent exceeding LLM context limits. Solved this by setting up fixed exclude rules.",
    systemsThinking: "Designed around context efficiency—minimizing token consumption by keeping code structure extremely compact and clear.",
    recruiterSummary: "A highly practical Python directory parser that outputs cohesive multi-file codebases into structured markdown context packages.",
    atsKeywords: ["Directory Parsing", "LLM Context Builder", "Gitignore Filtering Rules", "Python Scripting Utilities", "Source Code Aggregation", "Developer Workflow Automation"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++ (Academic)", "Core Java", "SQL", "HTML5 & CSS3"]
  },
  {
    title: "AI, ML & Computer Vision",
    skills: ["YOLOv8 Object Detection", "OpenCV Image Processing", "dlib Landmarks", "Face recognition (FaceNet)", "Supervised Learning", "Scikit-Learn", "NumPy & Pandas", "Jupyter Notebooks"]
  },
  {
    title: "Backend & Server Basics",
    skills: ["FastAPI (Routing)", "Node.js core", "Express.js basics", "HTTP Methods (GET/POST)", "CRUD Operations", "Request Body Parsing"]
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB (Mongoose ODM)", "PostgreSQL Core", "Database Schema Design", "Geospatial Indexing", "JSON Data Formats"]
  },
  {
    title: "Frontend Web Development",
    skills: ["React (Hooks & Props)", "Vite bundler", "Tailwind CSS Utility Design", "Responsive Layouts"]
  },
  {
    title: "Developer Tools & Libraries",
    skills: ["Git & GitHub", "Docker (Basic)", "VS Code", "FFmpeg scripting", "Postman API client", "Ubuntu Linux Terminal"]
  }
];

export const forensicAuditData: AuditItem[] = [
  {
    category: "Repository Architecture",
    title: "High Core Depth, Sparse Project README Descriptions",
    description: "You have incredibly deep technical projects containing real OpenCV pipelines, Fastify stream-compilers, and YOLO biometrics, but their original descriptions on GitHub do not match their high-quality engineering grade, under-communicating your talent to hiring systems (ATS).",
    status: "action-required",
    action: "Enhance repository descriptions with clear tables of capabilities, architectural diagrams, API endpoints list, and concrete instructions for local deployment."
  },
  {
    category: "AI/ML SOPs",
    title: "Local Model Buffers & Frame Skips",
    description: "Your facial biometric surveillance and driver tiredness trackers execute fast on standard laptops. Analysis shows you utilize logical frame skips and buffer management structures to protect edge CPUs from excessive math execution.",
    status: "high-signal",
    action: "Highlight these edge optimization considerations specifically in your resume bullets to prove you design models with performance limitations in mind."
  },
  {
    category: "Database Indexing",
    title: "High Performance Spatial Structuring (Uber H3)",
    description: "Your RoadCare project uses Uber H3 grid structures of base-16 strings inside MongoDB instead of standard, high-overhead geospatial database packages. This represents deep performance awareness.",
    status: "high-signal",
    action: "Add this as a strategic engineering signal to prove you are fully capable of implementing low-cost, scalable cloud architectures."
  },
  {
    category: "Code Quality",
    title: "Spelling Artifacts in Code Name Paths",
    description: "The Suicide Rate Detection notebook repository is labeled 'sucide-rate-detection-project-main' on GitHub (missing the letter 'u'). This is a tiny spelling error that can trigger ATS detection filters.",
    status: "incomplete",
    action: "Rename this repository on GitHub to 'suicide-rate-prediction-analysis' to protect your search profile and guarantee high recruiter security flags."
  }
];

export const resumeVariants: RoleResumeVariant[] = [
  {
    role: "AI / Machine Learning Engineer",
    headline: "Junior AI Engineer specializing in Real-Time Computer Vision & Autonomous Agent Pipelines",
    summary: "Hands-on engineer with practical experience designing multithreaded video pipelines, custom YOLOv8 object detections, and FaceNet biometric matching. Deeply familiar with edge model constraint management, CLAHE pre-filtering routines, and backend-orchestrated GenAI content compiling.",
    bullets: [
      "Engineered SentinelAI: a multi-threaded CCTV threat security grid combining custom YOLOv8 weapon classifiers with FaceNet512 facial biometrics, maintaining stable 30 FPS processing on low-footprint hardware by introducing buffer worker queues.",
      "Developed Drowsify: an edge driver safety system tracking 68 landmark points via dlib/OpenCV, evaluating EAR (Eye Aspect Ratio) and MAR (Mouth Aspect Ratio) with dynamic sliding windows to identify driver exhaustion with sub-15ms system responses.",
      "Built OpenPulse: an autonomous vertical video compilation pipeline combining vLLM prompt templates with HeyGen HyperFrames layout specifications and headless Playwright frame buffers, generating ready MP4 video compilations via custom FFmpeg streams.",
      "Optimized client-side academic peer matching workflows by implementingCosine-Similarity matrix math on student interest embeddings inside React browsers via TensorFlow.js, offloading intensive backend queries to local UI rendering engines."
    ]
  },
  {
    role: "Systems & Backend Software Engineer",
    headline: "Software Engineer specializing in High-Performance API Architectures & Autonomous Workflows",
    summary: "Pragmatic developer focused on low-latency microservices, WebSockets data streaming, and scalable NoSQL database indexing. Expert at designing task automation CLI tools, scraping systems, and spatial processing pipelines that handle live municipal reporting.",
    bullets: [
      "Constructed custom civic SaaS (RoadCare) exposing FastAPI REST routes that strip image EXIF coordinates on-the-fly and map reports to Uber H3 Hexagonal Grid systems, reducing data storage overlap by 40% and eliminating duplicate entries.",
      "Engineered a robust command-line DevSecOps suite in Python to automate ZIP compression processing, run local regex heuristics detecting secrets, and allocate clean code environments on GitHub via GraphQL V4 APIs.",
      "Designed real-time alerts integration leveraging web socket servers linked with external Telegram payload dispatches, establishing instantaneous incident notification with sub-second message Delivery times.",
      "Created transactional Express.js structures hosting academic collaboration workspaces, optimizing Mongo indexes across frequently-queried composite keys to support fast search lookups."
    ]
  }
];

export const githubGlobalStats = {
  totalRepos: 13,
  commits2026: 247,
  consistencyRate: "94%",
  dominantLanguage: "Python / TypeScript",
  contributionsThisYear: 388,
  activeProjects: 10
};
