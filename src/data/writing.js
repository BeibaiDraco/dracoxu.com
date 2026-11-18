// Add future essays here after creating their article routes. The archive sorts
// by date, groups by year, and supports entries with or without a cover image.
// `hidden: true` keeps an entry reachable at its URL but out of this archive and the
// sitemap, and marks the page noindex; delete the line to publish it.
export const writing = [
  {
    href: '/writing/scientific-worlds/',
    title: 'How does an AI scientist decide what to study?',
    description: 'We wanted to see whether an AI could choose what to measure for itself. In one synthetic world, a group of 32 switches went from Astra’s lab notes into eight working devices.',
    date: '2026-11-17',
    kind: 'Research',
    readingTime: '4 min read',
    image: { src: '/images/writing/scientific-worlds/cover-v2.png', width: 1200, height: 630 },
  },
  {
    href: '/writing/mine-or-yours/',
    title: 'Mine or Yours? Self–Other Confusion in Latent LLM Communication',
    description: 'Reading its partner’s key–value cache, a language model uses the partner’s facts but takes the partner’s priority as its own. Where the cache sits decides how often.',
    date: '2026-11-03',
    kind: 'Research',
    readingTime: '7 min read',
    cta: 'Read post',
    image: {
      src: '/images/writing/mine-or-yours/cover-v3.png',
      width: 2400,
      height: 1260,
    },
  },
  {
    href: '/writing/scientific-understanding/',
    title: 'I Don’t Know What Scientific Understanding Means',
    description: 'Complete access to a system’s inner workings still leaves a question: what would count as understanding it?',
    date: '2026-10-11',
    kind: 'Essay',
    readingTime: '12 min read',
    image: {
      src: '/images/writing/scientific-understanding/cover-v1.png',
      width: 1731,
      height: 909,
    },
  },
  {
    href: '/writing/scientific-value/',
    title: 'What Are We Training AI Scientists to Pursue?',
    description: 'Why AI scientists need a theory of scientific value.',
    date: '2026-09-08',
    kind: 'Research essay',
    readingTime: '15–20 min read',
    image: {
      src: '/images/writing/scientific-value/social-card-v3.png',
      width: 1737,
      height: 905,
    },
  },
];
