/* "Ongoing and Recent Projects" — his own heading from the old site.
   His order, unchanged. His descriptions, restored verbatim from
   assets/old-site-home-verbatim.txt and edited only where a fact went stale.
   Identical visual treatment throughout: same plate size, same type, same row
   height. The order is a reading order, not a ranking. */

export const projects = [
  {
    id: 'maieusis',
    short: 'Maieusis',
    title: 'Maieusis: Generating Valuable and Dataset-Answerable Scientific Questions',
    plate: 'tree',
    panels: ['AI for Science', 'Science of Intelligence'],
    papers: [],  // software release, shown via `citation`
    blurb: 'An open-source AI system that turns an empirical dataset into families of questions that are both scientifically valuable and genuinely answerable.',
    with: null,
    body: [
      `Maieusis is an open-source AI system for an upstream challenge in AI for Science: turning an empirical dataset into families of scientific questions that are both scientifically valuable and genuinely answerable with the available data. Rather than beginning with a fully specified research question, Maieusis helps determine which questions are worth asking and which claims a target dataset can responsibly support.`,
      `The system has two central components. PaperBank extracts source-grounded question-forming moves from published papers — the transformations that connect observations, unresolved tensions, and data cues to sharp scientific questions — rather than copying the papers’ results. Each generated question family then enters an isolated Question Owner–Dataset Planner dialogue, where the scientific intent is refined, an explicit analysis plan is developed, and the system tests whether the question can be operationalized without changing its scientific meaning. Each run produces a Scientific Question Dossier containing refined question variants, an analysis plan or evidence-backed non-proceed decision, claim ceilings, controls, validation requirements, and resource estimates. Deterministic verification and independent review gates inspect intermediate artifacts throughout the workflow, while the Dataset Planner operates in a capability-limited sandbox. These safeguards are implemented through the architecture rather than through prompting alone. Maieusis is designed for empirical datasets across scientific fields.`,
      `The project originated as Quaero, a prototype developed for an AI for Science Hackathon at Columbia University and Bloomberg. Quaero won the Second Place Award on June 24, 2026. It was subsequently expanded into a full research system, renamed Maieusis, and officially released as version 0.1.0 on July 16, 2026.`,
    ],
    install: 'pip install "maieusis[mcp,pdf,openai,anthropic]==0.1.0"',
    software: {
      title: 'Maieusis v0.1.0',
      version: '0.1.0',
      href: 'https://doi.org/10.5281/zenodo.21388806',
      cite: 'Xu, Y. & Doiron, B. (2026). Maieusis v0.1.0. Zenodo.',
    },
    links: [
      { label: 'GitHub', href: 'https://github.com/BeibaiDraco/maieusis' },
      { label: 'Question gallery', href: 'https://github.com/BeibaiDraco/maieusis/blob/main/demos/QUESTIONS.md' },
      { label: 'DOI', href: 'https://doi.org/10.5281/zenodo.21388806' },
    ],
  },
  {
    id: 'inter-areal',
    short: 'Inter-Areal Computation',
    title: 'Inter-Areal Computation: Theory and Data-Driven Methods',
    plate: 'graph',
    panels: ['Computational Neuroscience', 'AI for Science'],
    papers: ['fef-biorxiv-2026'],
    blurb: 'What computations cannot be done by one cortical area, but require a multi-area circuit?',
    with: 'In collaboration with David J. Freedman\'s lab',
    body: [],
    questions: [
      `What are inter-area interactions doing? What computations cannot be done by one area, but need to be done by a multi-area circuit?`,
      `Test efficiency advantages of multi-area versus single-area implementations.`,
      `Mechanistic latent computation inference of multi-area dynamics from population activity — inferring the local flow field and the messages at the same time.`,
    ],
    links: [],
  },
  {
    id: 'balanced-networks',
    short: 'Balanced Cortical Networks',
    title: 'Asynchronous and Synchronous States in Balanced Cortical Networks',
    plate: 'raster',
    panels: ['Computational Neuroscience'],
    papers: ['natcomm-2025'],
    blurb: 'How cortical populations alternate between asynchronous states and brief epochs of coordinated activity.',
    with: 'In collaboration with Jeffrey B. Dunworth (Michigan), Michael Graupner (Université Paris Cité), Bard Ermentrout (Pittsburgh), Alex D. Reyes (NYU) and Brent Doiron (UChicago)',
    body: [
      `This project investigates how cortical populations alternate between asynchronous states and brief epochs of coordinated activity, a dynamic not well explained by existing models. By combining rate-based dynamical system analysis with biologically realistic spiking neuron models that incorporate short term synaptic depression and balanced recurrent inhibition, the study captures the nonlinear population-wide activity observed in in vitro data, including low-frequency rhythmic dynamics. These findings provide a mechanistic theory that extends traditional balanced network models to better account for realistic cortical activity.`,
    ],
    presented: 'Talk at SfN 2024 · Rising Stars in Neuroscience 2025',
    links: [
      { label: 'Code', href: 'https://github.com/brain-math/events_std' },
    ],
  },
  {
    id: 'attention-representation',
    short: 'Visual Attention & Representation',
    title: 'How Attentional Coordinated Modulations Enable Flexible Use of Visual Information via Rotation in Representation Space',
    plate: 'rotation',
    panels: ['Computational Neuroscience', 'Science of Intelligence'],
    papers: ['pnas-2026', 'coordinated-inprep'],
    blurb: 'How correlated variability relates to flexible behavior, and what a top-down control signal actually does to a population code.',
    with: 'In collaboration with Ramanujan Srinath (UChicago) and Marlene R. Cohen (UChicago)',
    body: [
      `This project integrates experimental data with biologically plausible computational models of cortical circuits to explain how correlated variability relates to flexible behavior. The core computational approach uses networks of spiking neurons with structured connectivity reflecting known tuning properties in visual cortex. By adjusting top-down “control signals” to particular subsets of these neurons, the models test whether aligning certain stimulus-driven response patterns with the low-dimensional axis of correlated variability can enhance the information conveyed to downstream decoders.`,
    ],
    links: [],
  },
  {
    id: 'retinal-noise',
    short: 'Retinal Noise Resilience',
    title: 'Mechanistic Model for Noise Resilience in Retina via Disinhibition Circuits and Neural Modulation',
    plate: 'traces',
    panels: ['Computational Neuroscience'],
    papers: [],
    blurb: 'How distinct retinal cell types collectively achieve noise resilience across environments whose noise statistics differ by orders of magnitude.',
    with: 'In collaboration with Wei Wei (UChicago)',
    body: [
      `Biologically plausible circuit models of retinal motifs, asking how distinct cell types collectively achieve noise resilience — how the retina keeps functioning robustly across diverse noisy environments. Developed during a rotation in the Wei lab and continued since.`,
    ],
    links: [],
  },
  {
    id: 'v1-correlations',
    short: 'V1 Behavioral Correlations',
    title: 'Cortical Correlations with Movement and Decision Variables Have Both Cortical and Thalamic Origins',
    plate: 'corr',
    panels: ['Computational Neuroscience'],
    papers: ['v1-biorxiv-2026'],
    blurb: 'Which pathways carry uninstructed facial movement into V1 — and why the answer turned out to be both of them.',
    with: 'In collaboration with Peijia Yu (UChicago) and Na Ji (UC Berkeley)',
    body: [
      `This study asks which circuit pathways merge sensory input and uninstructed free behavior, combining two-photon calcium imaging of primary visual cortex (V1) neurons and of thalamo-cortical LGN boutons with simultaneous measurement of facial movement in mice. Once spurious time-structured “nonsense” correlations are controlled for, both eye movements and non-ocular facial movements are represented in LGN boutons and in V1 neurons during grating stimulation, and the correlation between V1 activity and facial movement is larger under grating than under blank stimulation — consistent with LGN input and modulation from higher brain centers being integrated at the same time. The results indicate a convergence in V1 of a persistent top-down pathway and a stimulus-gated bottom-up pathway, rather than either one acting alone.`,
    ],
    links: [],
  },
];
