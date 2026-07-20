export const site = {
  name: 'Draco (Yunlong) Xu',
  short: 'Draco Xu',
  position: 'PhD Candidate, Committee on Computational Neuroscience, University of Chicago',
  institution: 'University of Chicago',
  program: 'Committee on Computational Neuroscience',
  advisor: { name: 'Brent Doiron', href: 'https://brainmath.bsd.uchicago.edu/' },
  cvUpdated: 'July 2026',

  identity: 'mechanisms of computation and of perceptual, cognitive, and conscious experience in natural and artificial intelligent systems',

  /* Rail facts, self-explanatory to a general reader — each names its referent. */
  status: [
    'Doctorate · 2023 — 2028 (expected)',
    'Advanced to candidacy · Dec 2025',
    'Research funded by the Kavli Foundation',
  ],

  /* One plain-language framing paragraph so a visitor understands the work
     before the three panels. ~75 words. */
  framing: `How does a brain — or any intelligent system — turn physical signals into computation, perception, and experience? I pursue that three ways: circuit and network theory for how populations of cortical neurons compute; the study of intelligence in artificial systems, treated as fully observable model organisms for the methods neuroscience will need; and tools that put AI inside the scientific workflow itself. Underneath sits an older question — where perception ends and cognition begins, and whether a machine could ever cross that line.`,

  /* The three approaches. Philosophy of perception is demoted to a note, below. */
  approaches: [
    { name: 'Computational Neuroscience', line: `I build mechanistic theories of how populations of cortical neurons compute, and hold them to what electrophysiology and two-photon imaging actually record. The model is chosen per question rather than fixed in advance: rate-based dynamical-systems and geometric analysis, biologically realistic spiking networks, and statistical analysis of population activity, often within a single study. Current questions include why cortical variability is structured the way it is, how attention rotates a population code, and what computations require signals to pass between cortical areas rather than within one.` },
    { name: 'Science of Intelligence', line: `I study the principles of intelligence itself, in natural and artificial systems alike, and treat modern AI models as the ideal preparation for it — a system where every unit of activity and every weight is known and any perturbation is possible. Understanding the brain will require complete data, and AI is where that data already exists; by studying these systems we can invent, ahead of time, the methodological paradigms neuroscience will need once it can measure enough. In artificial neural networks I study how computation relates to the dynamical landscape, and what makes the flow of information through them optimal. Earlier work: learning the abstract rules behind human IQ-test problems, and training algorithms for spiking neural networks.` },
    { name: 'AI for Science', line: `The AI for Science I care about lives inside the real scientific workflow — concretely, how AI can help us know and explain the world. Its anchor is Maieusis, my open-source system that turns an empirical dataset into families of questions that are both scientifically valuable and genuinely answerable, with claim ceilings, controls, and non-proceed decisions enforced through the architecture rather than through prompting. Alongside it I build direct AI-for-neuroscience tooling: methods to infer multi-area latent dynamics from population recordings, foundation-model decoding of brain activity, and scalable ways to construct and query networks from large, noisy time series.` },
  ],
  approachesNote: `A single philosophical question runs beneath all three: where perception ends and cognition begins, and whether an artificial system could ever genuinely have experience rather than only behave as if it does.`,

  /* His own words, from the old site, all three paragraphs, links restored.
     Rendered with set:html. Wei Wei dropped from the main paragraph (she stays
     a linked collaborator below). */
  intro: [
    `I am Draco (Yunlong) Xu, a PhD candidate in the Computational Neuroscience (CNS) program at the <a href="https://www.uchicago.edu/">University of Chicago</a>, advised by <a href="https://brainmath.bsd.uchicago.edu/">Prof. Brent Doiron</a>. I am also collaborating with <a href="http://www.cohenlab.com/">Prof. Marlene Cohen's lab</a> and <a href="https://freedmanlab.uchicago.edu/">Prof. David J. Freedman's lab</a>. My research is supported by the Kavli Foundation.`,
    `Before moving to Chicago, I was an undergraduate at the University of Rochester, where I received two honors B.S. degrees in Computer Science and Mathematics, and a minor in Philosophy. I was advised by <a href="https://fnargesian.com/">Prof. Fatemeh Nargesian</a> (database and data management), <a href="https://www2.bcs.rochester.edu/sites/duje/">Prof. Duje Tadin</a> (Brain and Cognitive Sciences), <a href="https://people.math.rochester.edu/faculty/iosevich/">Prof. Alex Iosevich</a> (Applied Math), and Prof. Alison Peterman (Philosophy). I was affiliated with the <a href="https://www.cogtlab.com/">CogT Lab</a> at Stanford University, advised by <a href="https://profiles.stanford.edu/f-lin">Prof. Vankee Lin</a> and <a href="https://stanford.edu/~eadeli/">Prof. Ehsan Adeli</a>, and the CCNN Lab at SJTU, advised by <a href="https://ruyuanzhang.github.io/index.html">Prof. Ruyuan Zhang</a>. I was also founding chair of the University of Rochester ACM Student Chapter.`,
    `I studied as an undergraduate at <a href="https://en.wikipedia.org/wiki/Fudan_University">Fudan University</a>, majoring in Mathematics and Applied Mathematics, before transferring to the University of Rochester.`,
  ],
  closing: 'Please drop me an email if you want to chat.',

  /* The research statement, unabridged, on /research/. */
  statement: [
    `My research aims to decipher the mechanisms of perceptual and conscious experience in intelligent systems. This quest begins with an exploration of how humans, as conscious and intelligent beings, process and form conscious experiences of perception, cognition and reasoning through our neural systems. This intricate process allows us not only to feel and think but also to be aware of our thoughts and feelings. I propose that the human brain is a prime example of such a system, yet it is not the sole example. If Artificial General Intelligence (AGI) is successfully developed, it would represent another potential form of an intelligent and possibly conscious system. A fundamental question in my research is whether these systems can genuinely experience perception or consciousness.`,
    `I am keen to explore whether, how, and why intelligent systems, including humans and AGI, can possess perceptual and phenomenological experiences. Is it possible to develop a scientific and computational model to explain these phenomena? The implications of such understanding are vast, extending even to concepts like mind uploading, often featured in science fiction.`,
    `To unravel these mysteries, we must delve into the general principles of perception, reasoning, learning, cognition, and consciousness. Understanding how these are implemented in the brain is a crucial first step on this ambitious journey. I am dedicated to pushing us forward on this journey.`,
  ],

  education: [
    { years: '2023 — 2028', degree: 'Ph.D., Computational Neuroscience', where: 'University of Chicago',
      detail: 'Committee on Computational Neuroscience · Advisor Brent Doiron · Advanced to candidacy December 2025' },
    { years: '2020 — 2023', degree: 'B.S. (Honors) Computer Science and B.S. (Honors) Mathematics', where: 'University of Rochester',
      detail: 'Minor in Philosophy' },
    { years: '2018 — 2021', degree: 'Mathematics and Applied Mathematics', where: 'Fudan University',
      detail: 'Transferred to Rochester; no degree awarded' },
  ],

  /* Funding first — the awards section leads with money a lay reader grasps.
     Links added wherever one exists (from the CV / old site). */
  awardsSelected: [
    { when: '2025', what: 'NeuroData Discovery Award — $50,000', who: 'The Kavli Foundation', href: 'https://www.kavlifoundation.org/' },
    { when: '2026', what: 'Research Grant Program', who: 'Adaption Labs', href: 'https://www.adaptionlabs.ai/blog/adaption-research-grant-program' },
    { when: '2026', what: 'Second Place, AI for Science Hackathon', who: 'Bloomberg & Columbia University' },
    { when: '2024 — 2025', what: 'NIH R90, Training Program in Theory and Computation for Next Generation Neuroscientists', who: 'NIH' },
    { when: '2023', what: 'Honorable Mention, Outstanding Undergraduate Researcher Award', who: 'Computing Research Association', href: 'https://cra.org/about/awards/outstanding-undergraduate-researcher-award/' },
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
    { name: 'Ruyuan Zhang', where: 'Shanghai Jiao Tong University', href: 'https://ruyuanzhang.github.io/index.html' },
  ],

  teaching: [
    { when: '2025', what: 'NSCI 22950 — Computational Modeling of Biological Brain Circuits', where: 'University of Chicago' },
    { when: '2024', what: 'CPNS 30116 — Survey of Systems Neuroscience', where: 'University of Chicago' },
    { when: '2022', what: 'CSC 2/444 — Knowledge Representation and Reasoning in AI', where: 'University of Rochester', href: 'https://www.cs.rochester.edu/~schubert/444/' },
    { when: '2021', what: 'CSC 2/480 — Computer Models and Limitations', where: 'University of Rochester' },
    { when: '2021', what: 'Deep Learning', where: 'Neuromatch Academy', href: 'https://neuromatch.io/' },
  ],

  service: [
    { when: '2026 —', what: 'Community Leader, Claude Community', where: 'Anthropic',
      detail: 'Founding cohort — 130 inaugural leaders worldwide' },
    { when: '2024 —', what: 'Founding Vice Chair, Student Chapter of the Biophysical Society', where: 'University of Chicago' },
    { when: '2022 — 2023', what: 'Founding Chair, ACM Student Chapter', where: 'University of Rochester' },
  ],

  reviewing: [
    'NeurIPS 2026', 'AISTATS 2026', 'NeurIPS 2025', 'CogSci 2025', 'AISTATS 2025',
    'Frontiers in Neurology', 'NeurIPS 2024', 'ICML 2024 Workshop', 'CogSci 2024', 'ICLR 2024', 'NeurIPS 2023', 'ICML 2023 Workshop',
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
