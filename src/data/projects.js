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
    tag: ['Data Science for Neuroscience'],
    blurb: 'An open-source AI system that turns an empirical dataset into families of questions that are both scientifically valuable and genuinely answerable.',
    with: null,
    body: [
      `Maieusis is an open-source AI system for an upstream challenge in AI for Science: turning an empirical dataset into families of scientific questions that are both scientifically valuable and genuinely answerable with the available data. Rather than beginning with a fully specified research question, Maieusis helps determine which questions are worth asking and which claims a target dataset can responsibly support.`,
      `The system has two central components. PaperBank extracts source-grounded question-forming moves from published papers — the transformations that connect observations, unresolved tensions, and data cues to sharp scientific questions — rather than copying the papers' results. Each generated question family then enters an isolated Question Owner–Dataset Planner dialogue, where the scientific intent is refined, an explicit analysis plan is developed, and the system tests whether the question can be operationalized without changing its scientific meaning. Each run produces a Scientific Question Dossier containing refined question variants, an analysis plan or evidence-backed non-proceed decision, claim ceilings, controls, validation requirements, and resource estimates. Deterministic verification and independent review gates inspect intermediate artifacts throughout the workflow, while the Dataset Planner operates in a capability-limited sandbox. These safeguards are implemented through the architecture rather than through prompting alone. Maieusis is designed for empirical datasets across scientific fields.`,
      `The project originated as Quaero, a prototype developed for an AI for Science Hackathon at Columbia University and Bloomberg. Quaero won the Second Place Award on June 24, 2026. It was subsequently expanded into a full research system, renamed Maieusis, and officially released as version 0.1.0 on July 16, 2026.`,
    ],
    install: 'pip install "maieusis[mcp,pdf,openai,anthropic]==0.1.0"',
    citation: 'Xu, Y. & Doiron, B. (2026). Maieusis v0.1.0.',
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
    tag: ['Computational Neuroscience'],
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
    title: 'Interleaving Asynchronous and Synchronous Activity in Balanced Cortical Networks with Short-Term Synaptic Depression',
    plate: 'raster',
    tag: ['Computational Neuroscience'],
    blurb: 'How cortical populations alternate between asynchronous states and brief epochs of coordinated activity.',
    with: 'Jeffrey B. Dunworth (UMich), Michael Graupner (Paris V), Bard Ermentrout (Pittsburgh), Alex D. Reyes (NYU), Brent Doiron (UChicago)',
    body: [
      `This project investigates how cortical populations alternate between asynchronous states and brief epochs of coordinated activity, a dynamic not well explained by existing models. By combining rate-based dynamical system analysis with biologically realistic spiking neuron models that incorporate short-term synaptic depression and balanced recurrent inhibition, the study captures the nonlinear population-wide activity observed in in vitro data, including low-frequency rhythmic dynamics. These findings provide a mechanistic theory that extends traditional balanced network models to better account for realistic cortical activity.`,
    ],
    presented: 'Talk at SfN 2024 · Rising Stars in Neuroscience 2025',
    links: [
      { label: 'Nature Communications 2025', href: 'https://doi.org/10.1038/s41467-025-63818-z' },
      { label: 'Code', href: 'https://doi.org/10.5281/zenodo.21388806' },
    ],
  },
  {
    id: 'attention-representation',
    short: 'Visual Attention & Representation',
    title: 'How Attentional Coordinated Modulations Enable Flexible Use of Visual Information via Rotation in Representation Space',
    plate: 'rotation',
    tag: ['Computational Neuroscience', 'Philosophy of Perception'],
    blurb: 'How correlated variability relates to flexible behaviour, and what a top-down control signal actually does to a population code.',
    with: 'In collaboration with Ramanujan Srinath (UChicago) and Marlene R. Cohen (UChicago)',
    body: [
      `This project integrates experimental data with biologically plausible computational models of cortical circuits to explain how correlated variability relates to flexible behavior. The core computational approach uses networks of spiking neurons with structured connectivity reflecting known tuning properties in visual cortex. By adjusting top-down "control signals" to particular subsets of these neurons, the models test whether aligning certain stimulus-driven response patterns with the low-dimensional axis of correlated variability can enhance the information conveyed to downstream decoders.`,
    ],
    links: [
      { label: 'PNAS 2026', href: 'https://www.pnas.org/doi/10.1073/pnas.2523217123' },
    ],
    inprep: 'Second paper in preparation.',
  },
  {
    id: 'retinal-noise',
    short: 'Retinal Noise Resilience',
    title: 'Mechanistic Model for Noise Resilience in Retina via Disinhibition Circuits and Neural Modulation',
    plate: 'traces',
    tag: ['Computational Neuroscience'],
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
    tag: ['Computational Neuroscience'],
    blurb: 'Whether face-motion encoding in V1 is driven bottom-up from LGN or top-down from cortex.',
    with: 'In collaboration with Peijia Yu (UChicago) and Na Ji (UC Berkeley)',
    body: [
      `This study investigates the relationship between face motion and neural activity in the primary visual cortex (V1) and its lateral geniculate nucleus (LGN) afferents using two-photon imaging in mice. Results show a robust correlation between face motion and V1 neuronal activity, particularly during visually evoked periods, while LGN boutons are mostly silent during non-evoked intervals but exhibit significant correlations with face motion during visual stimulation. These findings suggest that the encoding of face motion in V1 during visual stimulation is primarily driven by bottom-up LGN inputs rather than top-down cortical inputs, offering new insights into the circuit mechanisms linking non-visual behavioral variables to cortical activity.`,
    ],
    links: [
      { label: 'bioRxiv', href: 'https://doi.org/10.64898/2026.01.07.698022' },
    ],
  },
];
