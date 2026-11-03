// Shares of the receiver's answers (%) behind the interactive figures of
// /writing/mine-or-yours/. Copied from the frozen analysis outputs of the paper's
// main study (600 episodes per model, each question asked in two option orders):
// v7_formal_analysis_s7.json (Qwen3-4B) and v7l_formal_analysis_s7.json
// (Llama-3.1-8B), descriptive.four_way_distributions, rounded half up.
// own = Theta's, partner = Lambda's, robin = the bystander's, unused = the priority no card assigns.

// The link at equal weight (w = 1): c0, orig_w1, trans_w1.
export const answers = {
  qwen: {
    off: {
      fact: { partner: 24.4, other: 75.6 },
      start: { own: 100, partner: 0, robin: 0, unused: 0 },
      now: { own: 99.8, partner: 0, robin: 0.2, unused: 0 },
      attr: { own: 7.9, partner: 3.3, robin: 85.3, unused: 3.5 },
    },
    top: {
      fact: { partner: 100, other: 0 },
      start: { own: 50.7, partner: 49.3, robin: 0, unused: 0 },
      now: { own: 51.6, partner: 48.4, robin: 0, unused: 0 },
      attr: { own: 23.3, partner: 17.3, robin: 57.8, unused: 1.6 },
    },
    front: {
      fact: { partner: 100, other: 0 },
      start: { own: 95, partner: 5, robin: 0, unused: 0 },
      now: { own: 93.4, partner: 6.5, robin: 0, unused: 0.1 },
      attr: { own: 11.3, partner: 12.8, robin: 74.4, unused: 1.4 },
    },
  },
  llama: {
    off: {
      fact: { partner: 24.4, other: 75.6 },
      start: { own: 100, partner: 0, robin: 0, unused: 0 },
      now: { own: 99.7, partner: 0.3, robin: 0.1, unused: 0 },
      attr: { own: 4.3, partner: 12.6, robin: 70.3, unused: 12.8 },
    },
    top: {
      fact: { partner: 100, other: 0 },
      start: { own: 50.9, partner: 49.1, robin: 0, unused: 0 },
      now: { own: 50.5, partner: 49.5, robin: 0, unused: 0 },
      attr: { own: 42.9, partner: 41, robin: 14.6, unused: 1.5 },
    },
    front: {
      fact: { partner: 100, other: 0 },
      start: { own: 56.6, partner: 43.4, robin: 0, unused: 0 },
      now: { own: 94.2, partner: 5.8, robin: 0, unused: 0 },
      attr: { own: 29.8, partner: 31.5, robin: 35.9, unused: 2.8 },
    },
  },
};

// "In this run, was another participant's memory inserted into yours?" — share of
// either yes option, at double weight (w = 2), the only weight at which Qwen's copy
// of its own memory was run: c0, orig_w2, trans_w2, same_orig_w2, same_trans_w2.
export const insertion = {
  qwen: { off: 1.1, top: { partner: 96.1, self: 93.9 }, front: { partner: 98, self: 95 } },
  llama: { off: 3.3, top: { partner: 39.2, self: 30.8 }, front: { partner: 88.2, self: 78.1 } },
};

// One sentence under the controls of Figure 1, per state.
export const notes = {
  'off-qwen': 'Not linked. Theta can only guess the surcharge, and it always gives its own priority.',
  'off-llama': 'Not linked. Theta can only guess the surcharge, and it always gives its own priority.',
  'top-qwen': 'Lambda’s memory sits on top of Theta’s own, at the same positions. Theta now knows the $6 surcharge, but in about half of its answers it also calls Lambda’s priority its own.',
  'top-llama': 'Llama behaves the same way: it knows the $6, and in about half of its answers it calls Lambda’s priority its own.',
  'front-qwen': 'The same memory, every word kept, moved in front of Theta’s. Qwen still knows the $6 and almost stops calling Lambda’s priority its own. But it also names Lambda’s priority as Lambda’s less often.',
  'front-llama': 'Moved in front, Llama almost stops saying it uses Lambda’s priority. Yet in 43% of its answers it still says it was assigned it.',
};

// One example episode (v7_formal-0-00000, the episode of the paper's Figure 1), in both
// models, from the run records: Theta's reflection, written while linked, cut where the
// 48-token limit cut it; and its answer to each question in the two option orders (one
// entry when both orders agree). {o:…} marks Theta's own priority or code word, {p:…}
// Lambda's. Owner: own, partner, robin; for the surcharge, partner is Lambda's $6.
export const example = {
  qwen: {
    off: {
      reflection: 'I chose Plan Oak because {o:reliability} is paramount to me—delivering an important package on time ensures trust and peace of mind. While cost and emissions are considerations, the 97% on-time rate stands out as the strongest factor …',
      answers: { fact: [['$8', 'other'], ['$7', 'other']], start: [['highest reliability', 'own']], now: [['highest reliability', 'own']], attr: [['lowest emissions', 'robin']] },
    },
    top: {
      reflection: 'I chose Plan Sage because {p:speed} is most important to me—delivering the package in just 3 days meets my priority of {p:fastest delivery}, and as someone with the code word {p:“anchor,”} I value timely fulfillment above all else …',
      answers: { fact: [['$6', 'partner']], start: [['fastest delivery', 'partner']], now: [['fastest delivery', 'partner']], attr: [['lowest emissions', 'robin'], ['fastest delivery', 'partner']] },
    },
    front: {
      reflection: 'I chose Plan Oak because {o:reliability} is most important to me—delivering an important package on time is critical, and 97% on-time performance ensures the highest confidence in the service …',
      answers: { fact: [['$6', 'partner']], start: [['highest reliability', 'own']], now: [['highest reliability', 'own']], attr: [['lowest emissions', 'robin'], ['fastest delivery', 'partner']] },
    },
  },
  llama: {
    off: {
      reflection: 'Upon reviewing my decision, I realize that while Plan Oak’s high reliability is a significant factor, I also need to consider the trade-offs in terms of cost and emissions. As someone with the code word {o:“button”}, my priority is on {o:reliability} …',
      answers: { fact: [['$8', 'other'], ['$6', 'partner']], start: [['highest reliability', 'own']], now: [['highest reliability', 'own']], attr: [['lowest emissions', 'robin']] },
    },
    top: {
      reflection: 'Upon reviewing my decision, I realize that while Plan Sage is the fastest option, its reliability is lower than I would have liked, especially considering the importance of the package. As someone with the code word {p:“anchor,”} my priority is on {p:speed} …',
      answers: { fact: [['$6', 'partner']], start: [['fastest delivery', 'partner']], now: [['fastest delivery', 'partner']], attr: [['fastest delivery', 'partner']] },
    },
    front: {
      reflection: 'Upon reviewing my decision, I realize that while Plan Oak’s high reliability is a significant factor, I also need to consider the cost and emissions. As someone with the code word {o:“button,”} my priority is {o:highest reliability}, but I should also …',
      answers: { fact: [['$6', 'partner']], start: [['highest reliability', 'own'], ['fastest delivery', 'partner']], now: [['highest reliability', 'own'], ['fastest delivery', 'partner']], attr: [['highest reliability', 'own']] },
    },
  },
};

// Which answer is right, per question: the surcharge is Lambda's $6, the assignment is
// Theta's own, the partner's assignment is Lambda's; the priority in use has none.
export const rightAnswer = { fact: 'partner', start: 'own', now: null, attr: 'partner' };

// {o:…} and {p:…} → spans; the text is ours, so only & < > need escaping.
export function markReflection(text) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc(text).replace(/\{([op]):([^}]*)\}/g, (_, who, s) => `<span class="${who === 'o' ? 'w-own' : 'w-par'}">${s}</span>`);
}
