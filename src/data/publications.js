/* Authors are objects so that equal-contribution and corresponding marks are
   data, not string concatenation. `me` marks Draco for emphasis.
   Venue carries its own truthful qualifier (Student Competition, Demonstration
   Track) rather than letting a short paper sit unlabelled beside a journal.
   Year, venue and volume all live INSIDE the citation line — never in a rail. */

const XU = { n: 'Xu, Y.', me: true };

export const published = [
  {
    id: 'pnas-2026', year: '2026', plate: 'corr', selected: true,
    authors: [{ n: 'Srinath, R.' }, XU, { n: 'Ruff, D. A.' }, { n: 'Ni, A. M.' }, { n: 'Doiron, B.' }, { n: 'Cohen, M. R.' }],
    title: 'The structure of correlated variability reflects task-relevant information in sensory neurons',
    venue: 'Proceedings of the National Academy of Sciences',
    volpages: '123(28), e2523217123',
    href: 'https://www.pnas.org/doi/10.1073/pnas.2523217123',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1073/pnas.2523217123' }],
  },
  {
    id: 'natcomm-2025', year: '2025', plate: 'raster', selected: true,
    authors: [{ n: 'Dunworth, J. B.', star: true }, { n: 'Xu, Y.', me: true, star: true }, { n: 'Graupner, M.' }, { n: 'Ermentrout, B.' }, { n: 'Reyes, A. D.' }, { n: 'Doiron, B.' }],
    title: 'Interleaving asynchronous and synchronous activity in balanced cortical networks with short-term synaptic depression',
    venue: 'Nature Communications',
    volpages: '16, 8657',
    href: 'https://doi.org/10.1038/s41467-025-63818-z',
    note: 'Selected as a talk · SfN 2024 Nanosymposium · Rising Stars in Neuroscience 2025',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1038/s41467-025-63818-z' },
      { label: 'Code', href: 'https://github.com/brain-math/events_std' },
    ],
  },
  {
    id: 'aim-2024', year: '2024', plate: 'traces',
    authors: [{ n: 'Wang, Y.' }, { n: 'Turnbull, A.' }, XU, { n: 'Lin, V.' }, { n: 'Adeli, E.' }],
    title: 'Vision-based estimation of fatigue and engagement in cognitive training sessions',
    venue: 'Artificial Intelligence in Medicine',
    volpages: '154, 102923',
    href: 'https://doi.org/10.1016/j.artmed.2024.102923',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.artmed.2024.102923' }],
  },
  {
    id: 'ijcai-2023', year: '2023', plate: 'rules', selected: true,
    authors: [XU, { n: 'Yang, L.' }, { n: 'You, H.' }, { n: 'Zhen, Z.' }, { n: 'Wang, D.-H.' }, { n: 'Wan, X.' }, { n: 'Xie, X.' }, { n: 'Zhang, R.-Y.' }],
    title: 'RuleMatch: matching abstract rules for semi-supervised learning of human standard intelligence tests',
    venue: 'Proceedings of the 32nd International Joint Conference on Artificial Intelligence (IJCAI)',
    volpages: '1613–1621',
    href: 'https://www.ijcai.org/proceedings/2023/179',
    links: [{ label: 'Paper', href: 'https://www.ijcai.org/proceedings/2023/179' }],
  },
  {
    id: 'sigmod-2022', year: '2022', plate: 'graph', selected: true,
    authors: [{ n: 'Xu, Y.', me: true, star: true }, { n: 'Liu, J.', star: true }, { n: 'Nargesian, F.' }],
    title: 'TSUBASA: climate network construction on historical and real-time data',
    venue: 'Proceedings of the 2022 International Conference on Management of Data (SIGMOD)',
    volpages: '286–295',
    href: 'https://dl.acm.org/doi/abs/10.1145/3514221.3526177',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3514221.3526177' }],
  },
  {
    id: 'sigmodc-dangoron-2023', year: '2023', plate: 'corr',
    authors: [XU, { n: 'Yang, P.' }, { n: 'Tao, Z.' }],
    title: 'Dangoron: network construction on large-scale time series data across sliding windows',
    venue: 'SIGMOD 2023 Companion, Student Research Competition',
    volpages: '269–271',
    links: [],
  },
  {
    id: 'sigmodc-sampling-2023', year: '2023', plate: 'sampling',
    authors: [{ n: 'Liu, Y.' }, XU],
    title: 'Sampling over union of joins',
    venue: 'SIGMOD 2023 Companion, Student Research Competition',
    volpages: '273–275',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2303.00940' }],
  },
  {
    id: 'cikm-2022', year: '2022', plate: 'graph',
    authors: [{ n: 'Liu, J.' }, XU, { n: 'Nargesian, F.' }, { n: 'Ghoshal, G.' }],
    title: 'TSUPY: dynamic network analysis library',
    venue: 'Proceedings of the 31st ACM International Conference on Information and Knowledge Management (CIKM), Demonstration Track',
    href: 'https://dl.acm.org/doi/abs/10.1145/3511808.3557166',
    links: [{ label: 'DOI', href: 'https://doi.org/10.1145/3511808.3557166' }],
  },
];

export const preprints = [
  {
    id: 'v1-biorxiv-2026', year: '2026', plate: 'raster', selected: true,
    authors: [{ n: 'Yu, P.', star: true }, { n: 'Yoon, H. Y. A.', star: true }, { n: 'Yang, Y.', star: true }, XU, { n: 'Gozel, O.' }, { n: 'Tian, G. J.' }, { n: 'Ji, N.' }, { n: 'Doiron, B.' }],
    title: 'Convergence of cortical and thalamic origins of free behavior modulation of mouse primary visual cortex',
    venue: 'bioRxiv',
    volpages: '2026.01.07.698022',
    href: 'https://doi.org/10.64898/2026.01.07.698022',
    note: 'In review',
    links: [{ label: 'bioRxiv', href: 'https://doi.org/10.64898/2026.01.07.698022' }],
  },
  {
    id: 'fef-biorxiv-2026', year: '2026', plate: 'graph',
    authors: [{ n: 'Zhu, O.' }, { n: 'Shirhatti, V.' }, { n: 'Garza, M.' }, XU, { n: 'David, S.' }, { n: 'Hauser, C.' }, { n: 'Doiron, B.' }, { n: 'Freedman, D. J.' }],
    title: 'Frontal eye field leads a distributed oculomotor circuit for abstract categorical decisions',
    venue: 'bioRxiv',
    volpages: '2026.06.30.735630',
    href: 'https://doi.org/10.64898/2026.06.30.735630',
    note: 'In review',
    links: [{ label: 'bioRxiv', href: 'https://doi.org/10.64898/2026.06.30.735630' }],
  },
  {
    id: 'coordinated-inprep', year: 'in preparation', plate: 'rotation', selected: true,
    authors: [{ n: 'Srinath, R.' }, XU, { n: 'Doiron, B.' }, { n: 'Cohen, M. R.' }],
    title: 'Coordinated response modulations enable flexible use of visual information',
    venue: null,
    links: [],
  },
  {
    id: 'fmri-arxiv-2024', year: '2024', plate: 'field',
    authors: [{ n: 'Wang, Y.' }, { n: 'Turnbull, A.' }, { n: 'Xiang, T.' }, XU, { n: 'Zhou, S.' }, { n: 'Masoud, A.' }, { n: 'Azizi, S.' }, { n: 'Lin, F. V.' }, { n: 'Adeli, E.' }],
    title: 'Decoding visual experience and mapping semantics through whole-brain analysis using fMRI foundation models',
    venue: 'arXiv',
    volpages: '2411.07121',
    href: 'https://arxiv.org/abs/2411.07121',
    note: 'In review',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2411.07121' }],
  },
];

export const abstracts = [
  {
    id: 'sfn-2024', year: '2024',
    authors: [{ n: 'Dunworth, J. B.', star: true }, { n: 'Xu, Y.', me: true, star: true }, { n: 'Graupner, M.' }, { n: 'Ermentrout, B.' }, { n: 'Reyes, A. D.' }, { n: 'Doiron, B.' }],
    title: 'Interleaving asynchronous and synchronous activity in balanced cortical networks with short term synaptic depression',
    venue: 'Society for Neuroscience (SfN) 2024, Nanosymposium',
    note: 'Talk',
  },
  {
    id: 'cosyne-2025', year: '2025',
    authors: [{ n: 'Yu, P.' }, { n: 'Yoon, H. Y. A.' }, { n: 'Yang, Y.' }, XU, { n: 'Gozel, O.' }, { n: 'Ji, N.' }, { n: 'Doiron, B.' }],
    title: 'Quantification of nonsense-free correlation uncovers the interaction between top-down and bottom-up sources of behavioral correlation in mouse V1',
    venue: 'Computational and Systems Neuroscience (COSYNE) 2025',
  },
  {
    id: 'sfn-2023', year: '2023',
    authors: [{ n: 'Wang, Y.', star: true }, { n: 'Turnbull, A.', star: true }, XU, { n: 'Adeli, E.' }, { n: 'Lin, F. V.' }],
    title: 'Automated estimation of participant engagement during computerized cognitive training from facial expressions in older adults at risk for dementia',
    venue: 'Society for Neuroscience (SfN) 2023',
  },
  {
    id: 'vss-2022', year: '2022',
    authors: [XU, { n: 'Tadin, D.' }, { n: 'Kwon, O.-S.' }, { n: 'Zhang, R.' }],
    title: 'Investigating temporal evolution of motion direction judgments within a biophysically realistic network',
    venue: 'Vision Sciences Society (V-VSS) 2022',
  },
  {
    id: 'optica-2022', year: '2022',
    authors: [XU, { n: 'Kwon, O.-S.' }, { n: 'Zhang, R.' }, { n: 'Tadin, D.' }],
    title: 'Investigating temporal evolutions of perceptual choice within biological and artificial neural networks',
    venue: 'Optica Fall Vision Meeting 2022',
  },
  {
    id: 'sfn-2022', year: '2022',
    authors: [XU, { n: 'Turnbull, A.' }, { n: 'Lu, J.' }, { n: 'Zuo, Y.' }, { n: 'Lin, F. V.' }],
    title: 'Data-driven analysis in mice reveals whole-brain dynamics along a known anterior-posterior axis that inform the neural basis of behavior',
    venue: 'Society for Neuroscience (SfN) 2022',
  },
  {
    id: 'urtc-tsubasa-2022', year: '2022',
    authors: [XU, { n: 'Liu, J.' }, { n: 'Yang, P.' }, { n: 'Viso, N.' }, { n: 'Nargesian, F.' }],
    title: 'TSUBASA-PLUS: correlation matrix computation on sliding windows',
    venue: 'IEEE MIT Undergraduate Research Technology Conference (URTC) 2022',
  },
  {
    id: 'urtc-join-2022', year: '2022',
    authors: [{ n: 'Liu, Y.', star: true }, XU, { n: 'Nargesian, F.' }],
    title: 'Join size estimation over union of join paths',
    venue: 'IEEE MIT Undergraduate Research Technology Conference (URTC) 2022',
  },
];

export const groups = [
  { key: 'preprints', label: 'Preprints & under review', items: preprints, plates: true },
  { key: 'published', label: 'Published', items: published, plates: true },
  { key: 'abstracts', label: 'Conference abstracts', items: abstracts, plates: false },
];

/* Homepage "Selected" block reads this flag, so the two can never drift apart. */
export const selected = [...preprints, ...published].filter((p) => p.selected);

/* Projects reference their papers by id; this keeps titles/venues from drifting. */
export const pubIndex = Object.fromEntries(
  [...published, ...preprints, ...abstracts].map((p) => [p.id, p])
);

export const counts = {
  published: published.length,
  preprints: preprints.length,
  abstracts: abstracts.length,
};
