// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Ishaan Garg',
  roles: ['Software Engineer', 'ML Engineer', 'Full-Stack Developer', 'RAG Systems Builder'],
  location: 'Waterloo, Ontario, Canada',
  intro:
    'MEng in Electrical & Computer Engineering at the University of Waterloo. I build full-stack products and retrieval-augmented AI systems, and I measure them: benchmarks, evaluation sets and tests.',
  email: 'ishaan53ca@gmail.com',
  phone: '+1 (519) 465-9010',
  linkedin: 'https://linkedin.com/in/ishaan-garg-ca',
  github: 'https://github.com/ishang14',
};

export const about = [
  'I work across the stack, from React interfaces to FastAPI and Express services, background workers, Redis caches and vector databases. Most of my recent work combines search and language models: systems that answer questions from a fixed corpus and cite the exact source behind every claim.',
  'Before Waterloo I completed an M.Tech and a B.E. in Computer Science in India. I now work as a Graduate Teaching Assistant for ECE 150, helping first-year engineers learn to program.',
];

export const highlights = [
  { value: '~390×', label: 'faster repeat chess analysis (7 s → 18 ms)' },
  { value: '93%', label: 'exact quote accuracy in MapleMinutes' },
  { value: '90.27%', label: 'CNN test accuracy on 7 defect classes' },
  { value: '300+', label: 'automated tests in a single project' },
];

export const projects = [
  {
    id: 'maple',
    title: 'MapleMinutes',
    subtitle: 'Canadian Hansard Explorer',
    category: ['ai'],
    accent: '#ff6b6b',
    summary:
      'Ask plain-English questions about House of Commons debates and get a streamed answer where every claim links to the exact speech in the official record.',
    bullets: [
      'RAG system over 709 official Hansard transcripts, covering 231K+ speeches and 260K+ searchable chunks.',
      'Evaluated hybrid search (vector embeddings, BM25 and rank fusion) with party, MP, date and bill filters on 50 questions: 84% top-10 accuracy; vector-only search reached 82% at 10–18× higher speed.',
      'A relevance check rejects off-topic questions and every quote is verified against its source: 93% exact quote accuracy (86/92), versus 3/66 when the same model answered without the system.',
      'Runs with no paid APIs and no GPU. Embeddings run on a laptop CPU and the LLM sits behind a swappable provider interface (Groq, Gemini, OpenRouter or local Ollama).',
    ],
    metrics: ['260K+ chunks', '84% top-10', '93% quote accuracy'],
    tech: ['Python', 'FastAPI', 'Qdrant', 'BM25', 'bge-small', 'React', 'SSE'],
    repo: 'https://github.com/ishang14/maple-minutes',
    images: ['maple-home-light', 'maple-answer-light', 'maple-trend-light', 'maple-out-of-scope-light', 'maple-home-dark'],
  },
  {
    id: 'gambit',
    title: 'Gambit',
    subtitle: 'Chess analysis platform',
    category: ['fullstack'],
    accent: '#7c5cff',
    summary:
      'Imports your Chess.com games, analyzes every move with Stockfish, finds the positions where you keep losing points, and drills them with spaced repetition.',
    bullets: [
      'Full-stack app that imports Chess.com games, analyzes every move with Stockfish and finds recurring mistakes and point losses.',
      'Asynchronous engine analysis with Redis queues and workers, plus caching that cut repeat game analysis from 7 s to 18 ms (~390× faster). Benchmarked search depths across 30 real games.',
      '300+ backend and frontend tests, GitHub Actions CI against real MongoDB and Stockfish, and a Dockerized production deployment behind nginx.',
      'An SM-2 spaced-repetition scheduler turns blunders and opening leaks into training cards.',
    ],
    metrics: ['7 s → 18 ms', '300+ tests', 'SM-2 training'],
    tech: ['FastAPI', 'React', 'MongoDB', 'Redis', 'Stockfish', 'Docker', 'nginx', 'GitHub Actions'],
    repo: 'https://github.com/ishang14/gambit',
    images: ['gambit-game-review', 'gambit-opening-tree', 'gambit-training', 'gambit-insights'],
  },
  {
    id: 'neuro',
    title: 'Neuro-Psychiatry Research RAG',
    subtitle: 'Citation-backed research assistant',
    category: ['ai'],
    accent: '#2dd4bf',
    summary:
      'Answers neurology and psychiatry research questions with an answer synthesized from PMC Open Access articles and citations back to the source passages.',
    bullets: [
      'Citation-backed RAG system over 293 PMC Open Access articles with 1.5 s end-to-end response latency.',
      'Ingestion pipeline that fetches, parses (JATS XML), chunks and embeds 28,800+ text chunks with PubMedBERT.',
      'Embeddings indexed in MongoDB Atlas Vector Search for semantic retrieval; the pipeline is resumable and skips articles already ingested.',
      'FastAPI backend deployed on Hugging Face Spaces (Docker) with a Streamlit chat frontend.',
    ],
    metrics: ['293 articles', '28,800+ chunks', '1.5 s latency'],
    tech: ['Python', 'LangChain', 'PubMedBERT', 'MongoDB Atlas Vector Search', 'Groq', 'FastAPI', 'Streamlit'],
    repo: 'https://github.com/ishang14/neuro-psychiatry-research-assistant',
    images: [],
  },
  {
    id: 'timebank',
    title: 'TimeBank',
    subtitle: 'Student skill-swap platform',
    category: ['fullstack'],
    accent: '#f59e0b',
    summary:
      'One hour of help given earns one credit; credits are spent to get help from someone else. Bookings, reviews, a credit wallet and community stats.',
    bullets: [
      'Full-stack platform with JWT authentication, skill listings, search and filters, bookings, reviews, ratings, credit wallet history and community stats.',
      'Redis caching made the stats endpoint 33× faster, cutting average latency from 39.6 ms to 1.2 ms across 50K bookings.',
      'SCAN-based cache invalidation, Redis rate limiting for login and bookings, and a database fallback when Redis fails.',
      'Jest and Supertest integration tests run in GitHub Actions on every push.',
    ],
    metrics: ['33× faster stats', '39.6 → 1.2 ms', '50K bookings'],
    tech: ['PostgreSQL', 'Prisma', 'Express', 'React', 'Tailwind', 'Redis', 'Jest', 'Docker'],
    repo: 'https://github.com/ishang14/timebank',
    images: ['timebank-browse', 'timebank-offer-details', 'timebank-my-bookings', 'timebank-wallet', 'timebank-community'],
  },
  {
    id: 'githealth',
    title: 'GitHealth',
    subtitle: 'GitHub repository health dashboard',
    category: ['fullstack'],
    accent: '#38bdf8',
    summary:
      'Scores any public GitHub repository across six dimensions and tracks how that score changes over time.',
    bullets: [
      'Scores repositories on activity, maintenance, issues, PRs, community and docs using a hierarchical weighted-sum model over live GitHub API data.',
      'Stores each score as a time-series snapshot so health trends can be charted over time.',
      'Multi-user data secured with JWT auth; caching and pagination keep GitHub API usage inside rate limits.',
      'The scoring core is unit-tested with Vitest.',
    ],
    metrics: ['6 dimensions', '0–100 score', 'Trend history'],
    tech: ['React 19', 'Vite', 'Tailwind 4', 'Recharts', 'Express 5', 'MongoDB', 'Octokit', 'Vitest'],
    repo: 'https://github.com/ishang14/github-health-dashboard',
    images: ['githealth-repository-health', 'githealth-health-dimensions', 'githealth-analyzed-repositories', 'githealth-dashboard-search'],
  },
  {
    id: 'defect',
    title: 'Room Surface Defect Classifier',
    subtitle: 'CNN-based inspection app',
    category: ['ai', 'fullstack'],
    accent: '#a3e635',
    summary:
      'Upload photos of walls and ceilings; a fine-tuned ResNet-18 labels the defect, rates its severity, and saves the result to per-room inspection reports.',
    bullets: [
      'PyTorch ResNet-18 transfer learning on 3,890 building images across 7 defect classes: 90.27% test accuracy and 0.90 macro F1.',
      'Compared frozen and fine-tuned transfer-learning configurations on validation and test sets to select the final model.',
      'Returns the top-3 predictions with confidence scores and maps each to a severity (None, Low, Medium, High).',
      'FastAPI + PostgreSQL backend with Alembic migrations and Argon2-hashed JWT auth; React + TypeScript frontend; Docker Compose.',
    ],
    metrics: ['90.27% accuracy', '0.90 macro F1', '7 classes'],
    tech: ['PyTorch', 'ResNet-18', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    repo: 'https://github.com/ishang14/room-surface-defect-classifier',
    images: ['defect-dashboard', 'defect-inspection-report', 'defect-confusion-matrix'],
  },
];

export const experience = [
  {
    role: 'Graduate Teaching Assistant, ECE 150: Fundamentals of Programming',
    org: 'University of Waterloo',
    period: 'Sept 2026 – Present',
    points: [
      'Support first-year engineering students in lab sessions and office hours, debugging their code in real time and coaching systematic problem-solving.',
      'Grade programming assignments and exams against rubrics, give feedback on correctness, style and efficiency, and explain technical concepts to students of diverse backgrounds.',
    ],
  },
];

export const education = [
  {
    school: 'University of Waterloo',
    place: 'Canada',
    degree: 'Master of Engineering, Electrical & Computer Engineering',
    period: 'May 2026 – Present',
  },
  {
    school: 'PEC (Deemed to be University)',
    place: 'India',
    degree: 'Master of Technology, Computer Science',
    period: 'Jul 2023 – Jul 2025',
    score: '8.81 / 10',
  },
  {
    school: 'Chitkara University',
    place: 'India',
    degree: 'Bachelor of Engineering, Computer Science',
    period: 'Jun 2019 – Jun 2023',
    score: '9.77 / 10',
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'Web & Backend', items: ['React', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS', 'REST', 'JWT auth'] },
  { group: 'AI / ML', items: ['PyTorch', 'scikit-learn', 'Hugging Face Transformers', 'LangChain', 'RAG', 'Hybrid search', 'Pandas', 'NumPy'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Atlas Vector Search', 'Redis', 'Qdrant', 'Prisma'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub Actions', 'Docker', 'nginx', 'AWS', 'Linux', 'Vitest', 'Jest', 'Postman'] },
];

export const hobbies = [
  {
    icon: 'globe',
    title: 'Geopolitics',
    text: 'Following how trade, elections and alliances shape the world, and reading the history behind today’s headlines.',
  },
  {
    icon: 'book',
    title: 'Learning outside my lane',
    text: 'Picking up subjects far from engineering, like accounting, just to understand how other fields think about problems.',
  },
  {
    icon: 'plane',
    title: 'Travelling',
    text: 'Exploring new cities and cultures, and the food, people and stories that come with them.',
  },
  {
    icon: 'language',
    title: 'Languages',
    text: 'Learning how new languages work, from everyday phrases to the grammar and culture behind them.',
  },
];
