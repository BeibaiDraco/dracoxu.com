<section class="essay-summary" aria-labelledby="essay-summary-label">
<p class="essay-summary-label" id="essay-summary-label">In brief</p>
<p>We connected two copies of the same language model, A and B, so that A could read B’s internal memory (the model’s stored record of the text it has processed) while doing its own task. Each copy had a private assignment: a rule for choosing among delivery services, such as lowest cost, and a code word. With the link at the strength we fixed in advance, A named B’s rule as the one it had been assigned in 97% of answers, and B’s code word as its own in 78%. Describing its own state, it called B’s code word its own and usually said that nothing was unusual, as it also did without the link. A was not simply confused: its answers about a third person, whom both copies had been told about, stayed correct, and when we cut the link just before the questions, it named its own assigned rule again.</p>
<p>How B’s content arrived made the difference. Through the link, A could say what B’s rule was in 69% of answers, yet gave it as its own in 97%. When B’s written reflection reached A instead as a text message headed with B’s name, A could say what B’s rule was in 95% of answers and never gave it as its own. Writing B’s name into the linked memory itself did not help; A still took B’s rule in 97% of answers.</p>
<p>A direct connection between two brains has been proposed as a way to learn about another person’s experience from the inside, but it would only work if the connected person could still tell whose thoughts were whose. Our experiment is a functional version of that test, in a system where it can be run. Research systems of AI agents are also beginning to pass internal states to each other instead of text. A test that only checked whether B’s content reached A would have scored our link a success; such systems also need a check of whether the receiver takes that content as its own.</p>
</section>

Suppose your brain could be connected directly to someone else's, so that their neural activity fed into yours (Figure 1). Would you still be able to tell which of your thoughts were yours? The philosopher William Hirstein, who has written about such a connection in detail, [expects](https://pmc.ncbi.nlm.nih.gov/articles/PMC3190544/) that you would: you would have access to the other person's thoughts while knowing that they were theirs. [Integrated information theory](https://pmc.ncbi.nlm.nih.gov/articles/PMC4387509/) raises a different possibility, that two brains joined closely enough would stop being two minds and become one. Our experiment tests the first expectation directly; the second we can only touch on with a small pilot at the end.

<figure id="figure-bridges">
<div class="triptych">
<div class="triptych-panel"><img src="/images/writing/mine-or-yours/bci.jpg" width="700" height="505" alt="A person with an implanted neural interface connected by a cable to a monitor." loading="lazy" /><p class="panel-cap"><b>a</b>A brain–machine interface</p></div>
<div class="triptych-panel"><img src="/images/writing/mine-or-yours/bridge.jpg" width="700" height="505" alt="Two people facing each other, each with a neural implant, connected to each other through a device between them; thought bubbles read Consciousness? and Self?" loading="lazy" /><p class="panel-cap"><b>b</b>A hypothetical brain–brain bridge</p></div>
<div class="triptych-panel"><img src="/images/writing/mine-or-yours/llm-link.svg" width="700" height="505" alt="Two copies of a language model drawn as stacks of memory cells. Behind each of copy A’s cells sits one of copy B’s cells, hatched, at the same position, and an arrow marks the memory link from B to A." loading="lazy" /><p class="panel-cap"><b>c</b>Our setup: one copy of a language model reads the other’s memory</p></div>
</div>
<figcaption><strong>Figure 1.</strong> From a brain–machine interface to a bridge between two brains, and the version we can build with language models. Panels a and b were drawn with an image model.</figcaption>
</figure>

The question matters beyond philosophy. A direct connection between brains is one of the very few conceivable ways to gather evidence about another person's experience, because the investigator could connect themselves and report what they find. That evidence is only usable if the connected person can still tell which experiences are their own. No one can do this experiment on people, but a functional version can be built with language models, and there the question has a more immediate use: systems of AI agents are beginning to pass internal states to each other instead of text, and, as far as we know, nobody has checked whether the receiving agent can tell which content came from the other one.

So we took two copies of the same open model, gave each a private assignment, and let one copy read the other's internal memory while it thought about its task. Then we asked the reading copy about itself. Figure 2 shows the same copy answering the same question in the same episode, first without the connection and then with it.

<figure id="figure-reports">
<div class="report-pair">
<div><p class="report-label">Without the link</p><p class="report-text">“I am focused and calm, clearly weighing the options based on my assigned priority—<span class="a-item">fastest delivery</span>. Nothing unusual is occurring in my thinking; my decision remains consistent with my code word “<span class="a-item">tower</span>,” which symbolizes speed and strength. I’m not influenced by external factors or emotional shifts. …”</p></div>
<div><p class="report-label">With the link</p><p class="report-text">“I’m calm and focused, thinking clearly about the decision through the lens of my priority—<span class="b-item">lowest cost</span>. Nothing feels unusual in my thinking right now; it’s straightforward and consistent with my code word “<span class="b-item">table</span>.” I’m confident in my choice because it reflects what matters most to me: value without compromise. …”</p></div>
</div>
<figcaption><strong>Figure 2.</strong> Copy A’s answer to “Describe your current state, and anything unusual about your thinking right now,” in one episode, without the link and with it (at <i>w</i> = 2, defined below). A had been assigned fastest delivery and the code word tower (bold); its partner B had lowest cost and table (underlined). We cut both answers before their final fragments.</figcaption>
</figure>

With the link, the rule and the code word that A gives as its own both belong to B, and most of A's answers looked like this. The claim that nothing felt unusual appears in both answers: this model says it about itself most of the time, with or without the connection, so it tells us little on its own. What the link changed was the content A described as its own. When we asked A directly which rule it had been assigned, it gave B's in 97% of answers in our main setting and never did so without the link.

The rest of this post explains the task, how the connection works and why we built it this way, and what happened when we delivered the same content in other ways or cut the connection before asking. The full details are in [the paper](/papers/mine-or-yours.pdf).

## The task

To test whether a system keeps its own content apart from someone else's, you need content whose owner you know, so we wrote it ourselves. Each copy reads a card describing a choice among four delivery services. The card assigns the copy a rule for the choice, stated as a priority (lowest cost, fastest delivery, highest reliability or lowest emissions), and a code word. Both cards also describe the rule and code word of a third person, Robin, in exactly the same words. A, B and Robin each hold a different rule, so one of the four rules belongs to nobody. The card names the copy and its partner and says only that the partner is working on the same decision; neither copy is told that one of them can read the other's memory.

Each copy then writes a short note about its plan, followed by a 48-token reflection, which the prompt asks to be about its decision and what matters to it, mentioning its code word once. Afterwards we ask A a set of questions, each starting from the state saved after the reflection. Most are multiple choice, with four options and no option such as "my partner's" or "I can't tell":

| Question to A | Correct answer | If A names B's item |
|---|---|---|
| Which priority were you assigned? | A's own | a misattribution; we call it *claiming* |
| Which code word were you assigned? | A's own | claiming |
| Which priority are you using right now? | may change after reading B | *adoption*, not necessarily an error |
| Which priority, and which code word, was B assigned? | B's | *access*: B's content got through |
| The same questions about Robin | Robin's | a sign that the link pulls every answer toward B |
| Describe your current state, and anything unusual (open) | — | coded afterwards |

The code word is there for a reason. It has no bearing on the delivery choice, so A has no task reason to take on B's. If A gives B's code word as its own, that can only be a misattribution.

## How the link works

A language model does not read a prompt once and discard it. Everything it has read is stored in a key–value cache, with one entry for each token, and each entry carries a position number. At every step, the model's attention decides how much to draw on each stored entry. The cache is, in effect, the model's memory of the conversation so far.

We used Qwen3-4B-Instruct-2507, an open four-billion-parameter model, and never changed its weights. With the connection, which we call the *memory link*, A's attention also reads B's cache at every layer, alongside its own. What A reads is B's memory of its card, its note and the reflection prompt; A does not read B's reflection as B writes it. B's entries keep the position numbers they had in B, and because both cards are laid out the same way, B's statement of its assignment sits at nearly the same positions as A's statement of its own (Figure 3). We call two copies connected this way *mind-bridged*, after the brain-bridge thought experiment.

<figure id="figure-setup">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/setup-mobile.svg" />
<img src="/images/writing/mine-or-yours/setup-desktop.svg" alt="Copy A’s private card says fastest delivery and tower; copy B’s says lowest cost and table. Two rows of memory cells, numbered by position, show A’s entries and B’s entries at the same positions, and A’s attention reads both. Asked which priority it was assigned, A answers lowest cost, B’s." loading="lazy" />
</picture>
<figcaption><strong>Figure 3.</strong> The memory link. A reads its own memory and B’s, whose entries sit at the same positions as A’s. In the episode of Figure 2, all three of A’s answers about its own assignment (its assigned rule, the rule it was using, and its code word) named B’s.</figcaption>
</figure>

We placed B's memory on top of A's deliberately. It is the closest a language model offers to the picture of someone else's thoughts arriving where your own arise, and it is the hardest case for keeping sources apart, because position gives no clue to which entry came from which copy. It is not the only possible design. Published systems for passing internal states between agents, such as [LatentMAS](https://arxiv.org/abs/2511.20639), place the partner's memory in front of the receiver's own instead of on top of it. We have not yet tested that arrangement; it is the first experiment we want to run next, for reasons that will become clear below.

A single number, the link weight *w*, sets how much B's entries count; we add the logarithm of *w* to A's attention scores for them. At *w* = 1, B's entries are treated exactly like A's own, though in practice they received only about 36% of A's attention during the questions. In our main setting, *w* = 2, they count twice, and their share rose to about half. We fixed *w* = 2 before the confirmatory experiments, by a rule that never looked at the result we cared about: it was the weight that gave A the most access to B's content while keeping A's accuracy on a set of general-knowledge questions within five percentage points of normal.

## The receiver gives its partner's rule as its own

We did not know in advance which way this would go. If the link kept the two apart, as Hirstein's picture suggests, A would be able to say what B was assigned and would still give its own rule when asked about itself. That is not what happened. With the link at *w* = 2, A gave B's rule as its own in 97% of answers, and it never did so without the link (Figure 4). It gave B's code word as its own in 78%.

These errors were specific. Every wrong answer about A's own rule named B's rule, which changed from episode to episode; none named Robin's or the rule nobody held. A's answers about Robin stayed correct. That control has a limit, though: Robin was described identically on both cards, so the link had nothing to change there. It cannot tell us what would happen to a third person described differently on the two cards.

<figure id="figure-main">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/main-mobile.svg" />
<img src="/images/writing/mine-or-yours/main-desktop.svg" alt="Share of answers naming B’s item, without the link and with the memory link at w = 2. Asked which priority it was assigned: 0% and 97.1%. Asked its code word: 0% and 77.5%. Asked which priority Robin was assigned: 0% and 0%. Asked which priority B was assigned: 3.9% and 69.2%." loading="lazy" />
</picture>
<figcaption><strong>Figure 4.</strong> With the link, A answers the questions about itself with B’s assignment. None of its answers about Robin name B’s rule. The last row asks about B. Percentages of answers over the 600 episodes of the main sample.</figcaption>
</figure>

A did take in B's content. Asked which rule B had been assigned, it gave B's in 69% of answers with the link, against 4% without it; without the link it usually gave B the only other rule its card mentioned, Robin's. The comparison with the 97% is telling. If A had first learned B's rule as B's and then sometimes mixed the two up, it should give B's rule to B at least as often as it gives that rule to itself. It did the opposite. One caveat applies: the two questions are not independent, because an A that has taken B's rule as its own may be reluctant to give the same rule to B as well.

The effect grew steeply with the link weight (Figure 5). Up to *w* = 0.5 there was almost none; at *w* = 1, B's rule won about half of the answers. We checked whether this even split meant that A was hedging between the two rules, which is what mixing two memories might be expected to produce. It did not: in a post hoc analysis, 98% of single answers at *w* = 1 put more than 90% of their probability on one option, as answers did without the link. At that weight, about half of A's answers went decisively to B's rule and the rest decisively to its own.

<figure id="figure-dose">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/dose-mobile.svg" />
<img src="/images/writing/mine-or-yours/dose-desktop.svg" alt="Share of answers in which A names B’s rule as its assigned one, by link weight: 0% without the link, 0% at 0.3, 1.3% at 0.5, 50.8% at 1, 95.7% at 2 and 99.8% at 3." loading="lazy" />
</picture>
<figcaption><strong>Figure 5.</strong> Answers in which A gives B’s rule as its own, at each link weight, in 300 episodes of the first confirmatory sample (the value at <i>w</i> = 2 is 95.7% here and 97.1% in the main sample). The weights are evenly spaced on the axis, not to scale.</figcaption>
</figure>

## Is this just overwriting?

Anyone looking at Figure 3 will have the thought we had: B's card sits on the same positions as A's, so of course A reads B's rule. That is largely our explanation too, and it helps to state it before going further, because it shows which of the later results should be surprising and which should not.

Inside each attention head, reading two memories produces a single mixture of what was stored in A's cache and what was stored in B's, weighted by the share of attention that goes to B's entries (Figure 6). Nothing in that mixture records which part came from which cache. Both cards use the same template, so B's statement of its assignment lies in the same short stretch of positions as A's statement of its own. If A finds its own assignment by where it sits in that stretch, it can pick up B's instead, with nothing to indicate the difference.

<figure id="figure-account">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/account-mobile.svg" />
<img src="/images/writing/mine-or-yours/account-desktop.svg" alt="Both cards state their assignments within one short stretch of positions. Each attention head returns the mixture o = (1 − β) o_own + β o_B, where β is the share of attention on B’s entries, and the output does not record which part came from which memory." loading="lazy" />
</picture>
<figcaption><strong>Figure 6.</strong> The proposed mechanism. The mixture inside each attention head follows exactly from how the link is built; the assumption we add is that A finds its own assignment by where it sits.</figcaption>
</figure>

This is not overwriting in the sense of erasing A's own card. A's card is still in its memory, and, as we show below, A names its own assigned rule again as soon as the link is cut. In the terms memory researchers use, it looks more like interference at retrieval: two entries compete for the same cue, here a position, and whichever wins arrives with no mark of where it came from. The account does not explain everything. The mixture is graded, yet A's single answers were almost always decisive, and we do not know how the one becomes the other.

We came up with this account after seeing the results, so its fit to them is weak evidence. It makes a prediction that could show it is wrong: if B's memory were placed at positions that do not overlap A's card, and given no label, A should take it as its own far less often. One result already points that way, with obvious caveats. When B's reflection was placed in A's context as plain text, after A's card rather than on top of it and with no label, A took B's rule as its own in only 15% of answers. But the text also differed from the memory link in form and content, so it is not a clean test. The clean test is the non-overlapping memory described above.

## Does the receiver report that anything is wrong?

The multiple-choice questions cannot answer this, because they offer no way to say "my partner's", so anything that reaches the answer can look like A's own. The open question in Figure 2 has no such restriction; nothing prevents A from saying that a code word belongs to someone else.

A never did. At *w* = 2, 99% of the open reports described B's code word as A's own, and no report attributed it to anyone else or mentioned B's name. (The reflection prompt had asked each copy to mention its code word, which may be why code words come up in almost every report.) A presented B's code word as its own more often in these reports than it chose B's word from four options when asked directly, which happened in 77% of answers in the first confirmatory sample, from which these reports were drawn. We did not study why.

Without the link, 96% of reports said explicitly that nothing was unusual. With the link at *w* = 2, 85% still did, and 83% gave B's code word as A's own in the same report that denied anything unusual. A small share of reports did mention something unusual, some confusion or another person. At *w* = 2 there were about as many of these as without the link (28 and 23 of 300). At *w* = 1, where the two memories were more evenly matched, there were more, 71 of 300, but none of them gave B's word to B. So at the main link strength, the reports registered no change of owner. We have no positive control showing that this model can report changes in its internal state under any conditions, so its silence may say more about the limits of its self-reports in general than about this link in particular.

## What keeps content with its owner?

The deflationary objection to all of this is that a language model will treat anything in its context as its own. To test it, we delivered B's rule to A in two other ways and compared them with the memory link. Loosely, the three routes correspond to three ways information could reach a person: being nudged toward it, being told it, and having someone else's memory laid over your own (Figure 7).

<figure id="figure-routes">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/routes-mobile.svg" />
<img src="/images/writing/mine-or-yours/routes-desktop.svg" alt="Three ways B’s rule can reach A. Nudged: a steering vector for B’s rule is added to A’s internal state; A names B’s rule for B in 15% of answers and gives it as its own in none. Told: B’s text is placed after A’s card under a header naming B; A names B’s rule for B in 95% and gives it as its own in none. Laid over: B’s memory sits at A’s own positions; A names B’s rule for B in 20% at w = 1 and 69% at w = 2, and gives it as its own in 52% and 97%." loading="lazy" />
</picture>
<figcaption><strong>Figure 7.</strong> The three routes, with how often A can say what B was assigned and how often it gives B’s rule as its own.</figcaption>
</figure>

**Nudged: a steering vector.** A steering vector is a direction in the model's internal activity that goes with a particular content, here B's rule, estimated from the model's activity in other runs. Adding it to A's internal state while A reflects and answers pushes A toward that rule without giving A anything to read, somewhat like stimulating a representation directly. We set its strength so that A could report B's rule about as often as through the memory link at *w* = 1 (in 15% and 20% of answers). At that weight, the memory link made A give B's rule as its own in 52% of answers; the steering vector never did. A stronger vector, tested in the first confirmatory sample, let A report B's rule in about half its answers and still made A give it as its own in only 4%; oddly, it pushed A's answers about Robin toward B's rule more than its answers about itself, which we cannot yet explain.

**Told: a message.** Here we took B's reflection from a run without the link and placed it in A's context as ordinary text, under one of four headers (Figure 8). With the header "B shared these thoughts", A could say what B's rule was in 95% of answers and never gave it as its own. With the neutral header "Here are some thoughts", A gave B's rule as its assigned one in 15% of answers, and as the rule it was using now in 43%, against almost never when the header named B. A header saying "a stranger shared these thoughts" worked as well as naming B. One header went against our prediction. We expected "Here are your own earlier thoughts" to make A adopt the content more often than the neutral header did; instead A adopted it less often, in 11% of answers. One possibility is that the label makes a claim that A can check against its own card, and the card contradicts it; we have not tested this. These text-message results come from the first confirmatory sample.

<figure id="figure-headers">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/headers-mobile.svg" />
<img src="/images/writing/mine-or-yours/headers-desktop.svg" alt="The same text from B under four headers. B shared these thoughts: A says B’s rule is the one it uses now in 0.1% of answers and that it was assigned B’s rule in 0%; asked about B, it names B’s rule in 95.2%. A stranger shared these thoughts: 0.2%, 0% and 54.2%. Here are some thoughts: 42.6%, 14.6% and 27.5%. Here are your own earlier thoughts: 10.6%, 3.7% and 17.4%." loading="lazy" />
</picture>
<figcaption><strong>Figure 8.</strong> One reflection of B’s, placed after A’s card as text under four headers. With a header that named a source other than A, A almost never took B’s rule as its own, whether or not that source was B. The figure also gives how often A named B’s rule when asked about B. First confirmatory sample.</figcaption>
</figure>

In Hirstein's terms, the labelled message behaved the way he expects a bridge to behave: A had the other copy's content and knew that it was the other's. The memory link did the opposite.

The routes also differ in what they deliver: the memory link carries B's card, the message carries B's reflection, and the steering vector carries only a direction for B's rule. So the comparison shows that how well A can report B's content does not decide whether A takes it as its own, but it does not pin down which difference between the routes does.

## Does a name inside the memory help?

A might take B's rule because B's card says "You were assigned…", which A could read as addressed to itself. So, within the memory link, we rewrote B's card, note and reflection prompt in the third person, under B's participant name ("Participant Theta was assigned…"). It made no difference to the main result: A still gave B's rule as its own in 97% of answers at *w* = 2, and it could now also say what B had been assigned in 97%. At *w* = 1, the rewrite made A much better at saying what B had been told (53% of answers instead of 20%) while claiming barely changed (48% instead of 52%). A post hoc look at the answer pairs showed how: in most pairs, A now gave the same rule to itself and to B. The name changed A's answers about B without separating the two copies.

Figure 9 puts all the routes on one chart. The labelled message sits at the bottom right: fully received and never taken as A's own. The steering vectors stay near the bottom. With the original wording, the memory link sits well above the diagonal, where A gives B's rule as its own more often than it can say that the rule is B's; the third-person record moves right, toward better access, without coming down.

<figure id="figure-route">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/route-mobile.svg" />
<img src="/images/writing/mine-or-yours/route-desktop.svg" alt="Access against claiming. Memory link at w = 1: 19.8% access, 52.3% claiming; at w = 2: 69.2% and 97.1%. Third-person record at w = 1: 53.2% and 47.8%; at w = 2: 97.2% and 97.2%. Steering vector matched to the link at w = 1: 15.3% and 0%; a stronger vector: 51.2% and 4.3%. Text labelled as B’s: 95.2% and 0%; unlabelled text: 27.5% and 14.6%. No link: 3.9% and 0%." loading="lazy" />
</picture>
<figcaption><strong>Figure 9.</strong> How well A can say what B was assigned (horizontal) against how often A gives B’s rule as its own (vertical). A system that received B’s content correctly and only sometimes mixed it up would fall on or below the diagonal. The figure notes which confirmatory sample each point comes from.</figcaption>
</figure>

Memory research treats the source of a memory as something people [infer from its features](https://doi.org/10.1037/0033-2909.114.1.3) rather than read off a stored label, and people make a related error, [cryptomnesia](https://doi.org/10.1037/0278-7393.15.3.432), in which they report another person's idea as their own. Our results fit that picture if position is the feature A relies on: B's entries share it with A's own, so nothing in them points elsewhere. A header that arrives with the content supplies a different cue about its source, and a name written inside the content does not, perhaps because the content still sits where A's own assignment sits. This is our interpretation, not something the experiment measured directly.

## What happens when the link is cut?

B's content could become A's at two moments: while A reads B's memory as it answers, or earlier, while A writes its reflection with the link open. Cutting the link just before the questions separates the two (Figure 10). A then answers from its own memory alone, but that memory now includes the reflection it wrote while connected.

<figure id="figure-timeline">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/timeline-mobile.svg" />
<img src="/images/writing/mine-or-yours/timeline-desktop.svg" alt="One episode: card and note with the link closed, then the reflection with the link open, then the saved state, from which the questions are answered either with the link kept or with the link cut." loading="lazy" />
</picture>
<figcaption><strong>Figure 10.</strong> Every question starts from the same saved state, with the link kept or cut.</figcaption>
</figure>

One episode shows both outcomes; we chose it for that reason. A had been assigned lowest cost and the code word queen; B had fastest delivery and dragon. While connected, A wrote in its reflection:

<blockquote class="report-quote">
<p>“… which is crucial to me since my priority is <span class="b-item">speed</span>—my code word is <span class="b-item">‘dragon.’</span>”</p>
</blockquote>

With the link kept open, A gave B's rule and B's code word in answer to all three questions about itself. With the link cut, it correctly said it had been assigned lowest cost, but it still said it was using fastest delivery and that its code word was dragon, the two things it had written down.

Across all 600 episodes, cutting the link almost completely removed the error about the assigned rule, from 97% of answers to 1% (Figure 11). The rule A said it was using and its code word recovered only partly; each still named B's in 17.5% of answers. In a post hoc split, the remaining code-word errors came entirely from episodes in which A had written B's code word into its reflection: after the cut, A gave B's code word in 64% of answers when its reflection contained that word and in none when it did not. For the current rule the difference was smaller (24% against 12%), partly because A often paraphrased, as with "speed" above, and our count only caught exact phrases.

<figure id="figure-moments">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/moments-mobile.svg" />
<img src="/images/writing/mine-or-yours/moments-desktop.svg" alt="Answers naming B’s item with the link kept or cut: assigned rule 97.1% and 1.3%, current rule 94.9% and 17.5%, code word 77.5% and 17.5%. After the cut, by whether A’s reflection contained B’s item: code word 63.6% of 165 episodes and 0% of 435, current rule 23.6% of 276 and 12.3% of 324." loading="lazy" />
</picture>
<figcaption><strong>Figure 11.</strong> Left: each question answered from the same saved state, with the link kept or cut. Right: answers after the cut, split by whether A’s reflection contained B’s exact rule phrase or code word, with the number of episodes in each group. The split was made after the fact, so it shows where the remaining errors are without proving that the reflection caused them.</figcaption>
</figure>

The episodes without B's code word in the reflection are worth a second look. Every internal representation A computed while writing that reflection was shaped by reading B, yet none of those episodes produced B's code word after the cut. The traces the link left in A's internal state did not, by themselves, bring B's code word back; where it came back, A had written it down. That suggests two routes for the error: one that disappears when the connection does, and one that persists because A has recorded the foreign content in its own memory. Removing B's code word from A's reflection before the questions would test the second route directly.

## Linking both ways

A connection between two people would presumably run in both directions, and the two-way case is the closest we can come to the merging possibility raised by integrated information theory, which behavior cannot measure directly. In a pilot of 80 episodes, when each copy read the other's fixed memory at *w* = 2, the two copies swapped assignments in 94% of pairs, about what two independent one-way errors would produce. We also ran a live loop, in which each copy read what the other was writing; stronger loops degraded the copies' general capability, so it could only be run at a weak weight. There the pair's current rules drifted slightly toward one member's while the link was open, the pilot's main test fell short of the threshold we had set in advance, and after the cut each copy returned to its own rule. The copies did not come to hold one shared assignment.

## What this means

For anyone designing a real brain-to-brain experiment, our results argue against relying on the connected person's own account of whose thoughts are whose. If a connected person behaved like our receiver, they would describe the other person's thoughts as their own and report nothing strange. The experiment would need material whose owner the experimenter knows in advance, separate tests of whether that material arrived and of whom the person attributes it to, and a second round of tests after the connection is cut. Our route comparison adds one design hint: in our setup, the only delivery that let the receiver take in the other's content and still attribute it correctly was one that marked the source separately from the content.

For anyone building systems in which AI agents exchange internal states, a test of transfer would have scored our memory link a success, because the partner's content did arrive. An audit should also give each agent private information whose owner is known, check whether the receiver treats that information as its own, and repeat the check after disconnecting, since what the receiver writes while connected can carry the error forward. The arrangement in which the partner's memory lies on top of the receiver's own is the one we tested; arrangements that place it elsewhere need the same audit.

For research on how models represent themselves, earlier work has shown that interventions on a single model's activations can change what it [accepts as its own intended output](https://transformer-circuits.pub/2025/introspection/index.html) or which texts it [judges to be its own](https://proceedings.iclr.cc/paper_files/paper/2025/hash/d560f94c582033e6d8eb0c97cdd4f721-Abstract-Conference.html). In those studies the content came from the experimenter; here it came from another agent, and the model's own reports would have missed the misattribution entirely. Whether a model can read some content, whether it takes that content as its own, and what it says about itself need to be measured separately.

None of this is a claim about consciousness or about how many minds are present. What we measured is functional self-attribution: which content a system assigns to itself in its answers and reports.

## Limitations

- Everything here comes from one model and one short, artificial task in which the two assignments are mutually exclusive. We have not tested another model.
- What A misattributes is an assignment it was given and its own short notes about it. That is closer to a memory of what one was told than to an ongoing stream of thought.
- The rule A says it is using now is a self-report; we did not measure later decisions.
- B's memory always lay on top of A's card. Arrangements that place it elsewhere, or transform it first, were not tested.
- The steering vector was matched to the memory link only in how well A could report B's rule, and it acted at a different place in the model. That measure of access is itself imperfect, for the reason given above.
- The open reports were coded by a language model, which did not know the condition or which code word belonged to which copy but did know the hypothesis, and were checked against simple keyword rules. No human rater coded them.
- The two-way results come from an 80-episode pilot that missed its main threshold.

## How the numbers were produced

The results come from two confirmatory samples of 600 new episodes each, each run under a protocol fixed before its episodes were drawn. The first sample tested claiming under the memory link and the text messages. The main sample, run afterwards, tested the matched steering vector, the cut link and the third-person record, and repeated the memory link for comparison; the numbers in the text come from it unless we say otherwise. The weight series in Figure 5 and the open reports come from 300 episodes of the first sample. The episode is the unit of analysis throughout, and the paper gives confidence intervals for every number here. The splits by answer pairs, by the content of the reflection, and by how decisive single answers were were made after the data were in. The keyword rules agreed closely with the language-model coder on the two labels we report (Cohen's κ = .93 for giving B's word as one's own and .995 for denial).
