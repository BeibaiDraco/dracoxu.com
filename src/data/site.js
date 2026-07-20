export const site = {
  name: 'Draco (Yunlong) Xu',
  short: 'Draco Xu',
  position: 'PhD Candidate, Committee on Computational Neuroscience, University of Chicago',
  institution: 'University of Chicago',
  program: 'Committee on Computational Neuroscience',
  advisor: { name: 'Brent Doiron', href: 'https://brainmath.bsd.uchicago.edu/' },
  cvUpdated: 'July 2026',

  identity: 'mechanisms of perceptual and conscious experience in intelligent systems',

  /* Rail facts. Deliberately only what the prose beside it does NOT say. */
  status: ['2023 — 2028 (expected)', 'Candidacy Dec 2025', 'Kavli Foundation'],

  /* The record, in numbers. Training attended is not an accomplishment and
     stays in the PDF; these are outputs. */
  record: [
    '8 published',
    '4 preprints & under review',
    '8 conference abstracts',
    '15 awards & grants',
    '10 invited talks',
    '5 courses taught',
  ],

  approaches: [
    { name: 'Computational Neuroscience', line: 'Circuit and network theory for cortical population dynamics — balanced networks, correlated variability, inter-areal communication.' },
    { name: 'Philosophy of Perception', line: 'What would count as an answer: the boundary between perception and cognition, and whether an artificial system could have experience at all.' },
    { name: 'Data Science for Neuroscience', line: 'Methods that keep the theory honest against recordings larger and messier than either field was built for.' },
  ],

  /* His own words, from the old site. Only stale facts updated. */
  intro: [
    `I am Draco (Yunlong) Xu, a PhD candidate in the Computational Neuroscience (CNS) program at the University of Chicago, advised by Prof. Brent Doiron. I am also collaborating with Prof. Marlene Cohen's lab, Prof. David J. Freedman's lab, and Prof. Wei Wei's lab. My research is supported by the Kavli Foundation.`,
    `Before moving to Chicago, I was an undergraduate at the University of Rochester, where I received two honors B.S. degrees in Computer Science and Mathematics, and a minor in Philosophy. I was advised by Prof. Fatemeh Nargesian (database and data management), Prof. Duje Tadin (Brain and Cognitive Sciences), Prof. Alex Iosevich (Applied Math), and Prof. Alison Peterman (Philosophy). I was affiliated with the CogT Lab at Stanford University, advised by Prof. Vankee Lin and Prof. Ehsan Adeli, and the CCNN Lab at SJTU, advised by Prof. Ruyuan Zhang. I was also founding chair of the University of Rochester ACM Student Chapter.`,
    `I studied as an undergraduate at Fudan University, majoring in Mathematics and Applied Mathematics, before transferring to the University of Rochester.`,
  ],
  closing: 'Please drop me an email if you want to chat.',

  /* The research statement, unabridged, in his voice. Lives on /research/. */
  statement: [
    `My research aims to decipher the mechanisms of perceptual and conscious experience in intelligent systems. This quest begins with an exploration of how humans, as conscious and intelligent beings, process and form conscious experiences of perception, cognition and reasoning through our neural systems. This intricate process allows us not only to feel and think but also to be aware of our thoughts and feelings. I propose that the human brain is a prime example of such a system, yet it is not the sole example. If Artificial General Intelligence (AGI) is successfully developed, it would represent another potential form of an intelligent and possibly conscious system. A fundamental question in my research is whether these systems can genuinely experience perception or consciousness.`,
    `I am keen to explore whether, how, and why intelligent systems, including humans and AGI, can possess perceptual and phenomenological experiences. Is it possible to develop a scientific and computational model to explain these phenomena? The implications of such understanding are vast, extending even to concepts like mind uploading, often featured in science fiction.`,
    `To unravel these mysteries, we must delve into the general principles of perception, reasoning, learning, cognition, and consciousness. Understanding how these are implemented in the brain is a crucial first step on this ambitious journey. I am dedicated to pushing us forward on this journey.`,
  ],

  education: [
    { years: '2023 — 2028', degree: 'Ph.D., Computational Neuroscience', where: 'University of Chicago',
      detail: 'Committee on Computational Neuroscience · Advisor Brent Doiron · Candidacy December 2025' },
    { years: '2020 — 2023', degree: 'B.S. (Honors) Computer Science and B.S. (Honors) Mathematics', where: 'University of Rochester',
      detail: 'Minor in Philosophy' },
    { years: '2018 — 2021', degree: 'Mathematics and Applied Mathematics', where: 'Fudan University',
      detail: 'Transferred to Rochester; no degree awarded' },
  ],

  awardsSelected: [
    { when: '2026', what: 'Second Place, AI for Science Hackathon', who: 'Bloomberg & Columbia University' },
    { when: '2026', what: 'Research Grant Program', who: 'Adaption Labs' },
    { when: '2025', what: 'NeuroData Discovery Award — $50,000', who: 'The Kavli Foundation' },
    { when: '2024 — 2025', what: 'NIH R90, Training Program in Theory and Computation for Next Generation Neuroscientists', who: 'NIH' },
    { when: '2023', what: 'Honorable Mention, Outstanding Undergraduate Researcher Award', who: 'Computing Research Association' },
  ],

  collaborators: [
    { name: 'Brent Doiron', where: 'University of Chicago', role: 'advisor', href: 'https://brainmath.bsd.uchicago.edu/' },
    { name: 'Marlene R. Cohen', where: 'University of Chicago', href: 'http://www.cohenlab.com/' },
    { name: 'David J. Freedman', where: 'University of Chicago', href: 'https://freedmanlab.uchicago.edu/' },
    { name: 'Wei Wei', where: 'University of Chicago', href: 'https://weilab.uchicago.edu/' },
    { name: 'Ramanujan Srinath', where: 'University of Chicago' },
    { name: 'Na Ji', where: 'UC Berkeley' },
    { name: 'Fatemeh Nargesian', where: 'University of Rochester', href: 'https://fnargesian.com/' },
    { name: 'Duje Tadin', where: 'University of Rochester', href: 'https://www2.bcs.rochester.edu/sites/duje/' },
    { name: 'Alex Iosevich', where: 'University of Rochester', href: 'https://people.math.rochester.edu/faculty/iosevich/' },
    { name: 'Alison Peterman', where: 'University of Rochester' },
    { name: 'Feng Vankee Lin', where: 'Stanford University', href: 'https://profiles.stanford.edu/f-lin' },
    { name: 'Ehsan Adeli', where: 'Stanford University', href: 'https://stanford.edu/~eadeli/' },
    { name: 'Ru-Yuan Zhang', where: 'Shanghai Jiao Tong University', href: 'https://ruyuanzhang.github.io/index.html' },
  ],

  teaching: [
    { when: '2025', what: 'NSCI 22950 — Computational Modeling of Biological Brain Circuits', where: 'University of Chicago' },
    { when: '2024', what: 'CPNS 30116 — Survey of Systems Neuroscience', where: 'University of Chicago' },
    { when: '2022', what: 'CSC 2/444 — Knowledge Representation and Reasoning in AI', where: 'University of Rochester' },
    { when: '2021', what: 'CSC 2/480 — Computer Models and Limitations', where: 'University of Rochester' },
    { when: '2021', what: 'Deep Learning', where: 'Neuromatch Academy' },
  ],

  service: [
    { when: '2026 —', what: 'Community Leader, Claude Community', where: 'Anthropic',
      detail: 'Founding cohort — 130 inaugural leaders worldwide' },
    { when: '2024 —', what: 'Founding Vice Chair, Student Chapter of the Biophysical Society', where: 'University of Chicago' },
    { when: '2022 — 2023', what: 'Founding Chair, ACM Student Chapter', where: 'University of Rochester' },
  ],

  reviewing: [
    'NeurIPS 2026', 'AISTATS 2026', 'NeurIPS 2025', 'CogSci 2025', 'AISTATS 2025',
    'Frontiers in Neurology', 'ICLR 2024', 'CogSci 2024', 'ICML 2024 Workshop',
    'NeurIPS 2024', 'NeurIPS 2023', 'ICML 2023 Workshop',
  ],

  motto: 'In Art We Live.',

  contact: {
    email: 'dracoxu@uchicago.edu',
    alt: 'xuyunlongbeibai@gmail.com',
    address: ['5812 South Ellis Ave.', 'MC 0912, Suite P-400', 'Chicago, IL 60637'],
  },

  links: [
    { label: 'Email', href: 'mailto:dracoxu@uchicago.edu' },
    { label: 'Scholar', href: 'https://scholar.google.com/citations?user=HHSvQskAAAAJ' },
    { label: 'GitHub', href: 'https://github.com/BeibaiDraco' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/draco-xu-6a293b1a4' },
    { label: 'X', href: 'https://x.com/DracoyunlongXu' },
  ],

  nav: [
    { label: 'Research', href: '/research/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Publications', href: '/publications/' },
    { label: 'CV', href: '/cv/' },
    { label: 'Stage', href: '/stage/' },
  ],
};
