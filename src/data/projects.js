// Featured projects. Each gets a bento card on the home page and a case study page.
// Numbers come from each repo's own eval or tests; keep them in sync with the READMEs.

export const projects = [
  {
    slug: "asli",
    name: "Asli",
    tagline: "A scam message checker for India, in English, Hindi and Kannada.",
    year: "2026",
    role: "Solo: design, ML, backend, frontend",
    stat: { value: "46 / 47", label: "scams caught on the hand-written eval set" },
    stack: ["FastAPI", "scikit-learn", "Tesseract OCR", "PostgreSQL", "WhatsApp Cloud API", "Docker", "GitHub Actions"],
    links: [{ label: "Code on GitHub", href: "https://github.com/nihxxr/asli" }],
    cover: "/work/asli/result-scam.webp",
    coverPosition: "top",
    problem: [
      "Fake KYC alerts, \"share your OTP\" calls, UPI refund tricks, task jobs and \"digital arrest\" threats reach people in India every day, often in Hinglish or a regional language. Older relatives get hit hardest, and the warnings they do get are in English and full of jargon.",
      "I wanted something you could forward a message to and get a plain answer in your own language: is this a scam, why, and what should I do now.",
    ],
    built: [
      "You paste a message, upload a screenshot, or forward it on WhatsApp. Asli returns a verdict, explains every red flag in English, Hindi or Kannada, shows where each link really goes, and lists the next steps: don't click, call 1930 if you've paid, report the sender on Sanchar Saathi.",
      "The message comes back as a chat bubble with the risky words underlined and the verdict stamped on its corner, so you can see exactly which words triggered the warning.",
    ],
    how: [
      "Weighted rules in four languages catch known tricks, and they skip negations like \"do not share your OTP\" and legitimate hand-offs like a ride OTP.",
      "A link analyser finds each link's real domain and flags look-alikes of two dozen banks, wallets, couriers and government sites, plus shorteners, bare IPs and .apk downloads.",
      "A character n-gram classifier scores the wording, which copes with Hinglish spellings and all three scripts without a tokenizer per language.",
      "A noisy-OR combines everything into one score, so two medium signals add up to more than either alone.",
    ],
    results: [
      "On 91 hand-written test messages kept apart from training: precision 0.979, recall 0.979, false positive rate 2.3%.",
      "Rules alone never raised a false alarm but missed 30% of scams. The classifier closed most of that gap.",
      "CI runs 28 tests and the eval on every push, and fails the build if recall drops below 0.90.",
    ],
    honest: "The classifier trains on 3,000 template-generated messages, because real scam data in Indian languages is scarce and full of personal details. I also wrote the eval set myself, so the real-world numbers will be lower. The next step is the feedback loop: every \"Was this right?\" answer gets stored with personal details removed, and a retraining script only keeps a new model if the eval still passes.",
    gallery: [
      { src: "/work/asli/home.webp", alt: "Asli home page with the message box and example buttons" },
      { src: "/work/asli/result-kannada.webp", alt: "A Kannada electricity scam checked, with the result in Kannada" },
      { src: "/work/asli/result-clean.webp", alt: "A real bank OTP message with no red flags" },
      { src: "/work/asli/result-hindi-mobile.webp", alt: "A job scam checked on a phone with the page in Hindi", mobile: true },
    ],
  },
  {
    slug: "datasetfinder",
    name: "DatasetFinder",
    tagline: "One search across Hugging Face, UCI, Kaggle and Google Dataset Search.",
    year: "2026",
    role: "Solo: product, frontend, serverless backend",
    stat: { value: "4", label: "dataset repositories in one search" },
    stack: ["React", "Vite", "Netlify Functions", "Hugging Face API", "UCI API", "Kaggle API"],
    links: [
      { label: "Live site", href: "https://dazzling-gumption-23f00b.netlify.app" },
      { label: "Code on GitHub", href: "https://github.com/nihxxr/Datafinder" },
    ],
    cover: "/work/datasetfinder/search.webp",
    card: "/work/datasetfinder/search-mobile.webp",
    coverPosition: "top",
    problem: [
      "Finding a dataset for a new model means opening four tabs, running the same search four times, and comparing results that each site formats differently. Then you still don't know if the dataset is clean enough to train on.",
    ],
    built: [
      "Search queries Hugging Face, UCI and Kaggle at once and returns one table you can sort by downloads or update date and filter by source. The query lives in the URL, so you can share a search.",
      "Recommend takes a sentence about your project, matches it against 17 task patterns, searches each source for every match, and ranks the combined results. It shows how it read your description, so you can rephrase if it guessed wrong.",
      "Check quality reads a Hugging Face dataset's card and statistics, then scores it out of 100 with the problems that cost it points: missing values per column, label imbalance, licence.",
    ],
    how: [
      "Netlify Functions call each API on the server, which avoids CORS errors and keeps the optional Kaggle key out of the browser.",
      "Results render as a library-catalogue table rather than a grid of cards, because you compare datasets on a few numbers and those numbers line up in columns.",
    ],
    results: [
      "Live on Netlify. Lint, unit tests and the production build all pass.",
    ],
    honest: "The recommender is keyword and pattern matching, not a language model, and the page says so. Next, I want a scheduled job that indexes dataset metadata into Postgres with embeddings, so search becomes semantic and fast instead of calling four APIs live.",
    gallery: [
      { src: "/work/datasetfinder/recommend.webp", alt: "Recommender showing matched tasks and keywords" },
      { src: "/work/datasetfinder/quality.webp", alt: "Quality report for stanfordnlp/imdb scoring 92 out of 100" },
      { src: "/work/datasetfinder/search-mobile.webp", alt: "Search results on a phone", mobile: true },
    ],
  },
  {
    slug: "weather-risk",
    name: "ICAO Weather Risk",
    tagline: "Live METAR lookup for any airport, decoded and rated for flight risk.",
    year: "Rebuilt 2026",
    role: "Solo: ML, backend, frontend",
    stat: { value: "2", label: "checks: operating limits plus a trained model" },
    stack: ["Flask", "scikit-learn", "NOAA Aviation Weather API", "AVWX", "pytest"],
    links: [{ label: "Code on GitHub", href: "https://github.com/nihxxr/icao-weather-risk-app" }],
    cover: "/work/weather-risk/result-vobl.webp",
    coverPosition: "top",
    problem: [
      "A METAR packs an airport's weather into one cryptic line like 27014G26KT 4000 HZ BKN015. Pilots learn to read it, but turning it into \"how risky is this right now\" still takes judgement and time.",
    ],
    built: [
      "Type an ICAO code and the app pulls the latest METAR, decodes it into gauges for wind, visibility, ceiling and temperature with the limits marked, and gives an overall risk and the FAA flight category.",
      "The raw METAR and the gauges are linked: hover a group in the METAR and its gauge lights up, and the other way round. It's pure CSS, no JavaScript.",
    ],
    how: [
      "Fixed operating limits check wind, gusts, visibility and ceiling. A random forest trained on wind, visibility and temperature catches combinations the limits miss. The worse of the two wins, and the page says which one set the rating.",
      "It reads from NOAA's Aviation Weather Center by default, which needs no key, or from AVWX if you set a token. Both sources go through one parser that normalises visibility to kilometres.",
    ],
    results: [
      "12 tests cover parsing for both sources, the limits, routes and accounts, with network calls mocked.",
      "Rebuilding it fixed an empty Procfile that blocked deploys, a crash without an API key, and mixed visibility units feeding the model.",
    ],
    honest: "The model only sees three features. A better version would train on historical METARs with real outcomes, like diversions and delays, rather than labels derived from thresholds.",
    gallery: [
      { src: "/work/weather-risk/hover-link.webp", alt: "Hovering the wind gauge highlights the wind group in the METAR" },
      { src: "/work/weather-risk/home.webp", alt: "Home page with the ICAO code field" },
      { src: "/work/weather-risk/result-kjfk-mobile.webp", alt: "KJFK result on a phone", mobile: true },
    ],
  },
  {
    slug: "muse",
    name: "Muse Copywriter",
    tagline: "Ad scripts for MyMuse, written from what customers actually said.",
    year: "2025",
    role: "Built during my product internship at MyMuse",
    stat: { value: "3", label: "signals feed the script: sentiment, phrases, themes" },
    stack: ["Flask", "VADER", "scikit-learn", "Llama 3.1 on Groq", "SQLAlchemy", "BeautifulSoup"],
    links: [{ label: "Code on GitHub", href: "https://github.com/nihxxr/Muse-" }],
    cover: "/work/muse/result.webp",
    coverPosition: "top",
    problem: [
      "Product reviews hold the best ad copy a brand will ever get, in its customers' own words. Copywriters rarely have time to read hundreds of them, so ads end up generic.",
    ],
    built: [
      "Paste a MyMuse product link or a set of reviews. Muse scores sentiment, finds the phrases customers repeat, groups reviews into themes, and asks Llama 3.1 for a headline, hook, three body lines and a call to action.",
      "The result puts the script next to the evidence, with every repeated phrase highlighted in yellow inside the reviews, so you can check each line of copy against something a customer wrote.",
    ],
    how: [
      "VADER handles sentiment, TF-IDF finds key phrases (keeping two-word phrases only if customers wrote them that way), and k-means picks the review closest to each theme's centre.",
      "The scraper reads the Okendo review widget over HTTP and falls back to headless Chrome only if you install it.",
    ],
    results: [
      "Every run is saved per user and can be downloaded as JSON. The rebuild closed a hole where any logged-in user could download another user's results.",
    ],
    honest: "The model writes a first draft. A person still needs to read it before it ships, and the page says that too.",
    gallery: [
      { src: "/work/muse/landing.webp", alt: "Landing page showing highlighted review phrases above a sample script" },
      { src: "/work/muse/new-script.webp", alt: "New script form with sample reviews" },
    ],
  },
  {
    slug: "aq10",
    name: "AQ-10 Screener",
    tagline: "A calm, accessible autism screening questionnaire for adults.",
    year: "Rebuilt 2026",
    role: "Solo: research, ML evaluation, frontend",
    stat: { value: "100%", label: "accuracy from a plain sum, which is why I dropped the model" },
    stack: ["Flask", "scikit-learn", "pytest", "Atkinson Hyperlegible"],
    links: [{ label: "Code on GitHub", href: "https://github.com/nihxxr/autism_detection_ml" }],
    cover: "/work/aq10/result.webp",
    coverPosition: "top",
    problem: [
      "The first version of this project trained a random forest to predict autism from ten questions. When I rebuilt it, I found the label in the public UCI dataset is computed from the questionnaire total. Any model trained on those answers just relearns the sum.",
    ],
    built: [
      "The app now scores the published AQ-10 directly, with its real items and scoring rules, and explains the result against the referral level in NICE guidance.",
      "One question per screen, large tap targets, full keyboard support, no animation, one typeface designed for low vision readers. It works with JavaScript off, and nothing you answer is stored.",
    ],
    how: [
      "A training script downloads the UCI data and prints the plain sum rule next to logistic regression and a random forest, so anyone can see the leak in the numbers.",
    ],
    results: [
      "18 tests cover scoring in both directions, the threshold and every route.",
    ],
    honest: "Finding the leak mattered more than the model. A screening tool that claims 98% accuracy on circular labels is worse than one that's honest about what it measures.",
    gallery: [
      { src: "/work/aq10/question.webp", alt: "One question per screen with four answer options" },
      { src: "/work/aq10/intro.webp", alt: "Intro page explaining who the screener is for" },
      { src: "/work/aq10/question-mobile.webp", alt: "Question screen on a phone", mobile: true },
    ],
  },
];

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug);
