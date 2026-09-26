// Add future essays here after creating their article routes. The archive sorts
// by date, groups by year, and supports entries with or without a cover image.
// `hidden: true` keeps an entry reachable at its URL but out of this archive and the
// sitemap, and marks the page noindex; delete the line to publish it.
export const writing = [
  {
    href: '/writing/mine-or-yours/',
    title: 'Mine or Yours? Mind-Bridged Language Models Take Each Other’s Memories as Their Own',
    description: 'Linked at the level of memory, a language model takes its partner’s assignment as its own, and reports that nothing feels unusual.',
    date: '2026-09-26',
    kind: 'Research',
    readingTime: '15–20 min read',
    cta: 'Read post',
    image: {
      src: '/images/writing/mine-or-yours/cover-v2.png',
      width: 2400,
      height: 1260,
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
