<section class="essay-summary" aria-labelledby="essay-summary-label">
<p class="essay-summary-label" id="essay-summary-label">In brief</p>
<p>We gave two copies of a language model different private instructions and let one copy read the other’s internal memory while it worked. In our main setting, when we afterwards asked the reading copy what it had been told to do, it almost always gave its partner’s instruction as its own, and none of its descriptions of its own state attributed that content to anyone else. The same information delivered in other ways, for example as a message saying where it came from, was not taken as its own.</p>
</section>

Suppose your brain could be connected directly to someone else's, so that their neural activity fed into yours. Would you still be able to tell which of your thoughts were yours? The philosopher William Hirstein, who has written about such a connection in detail, [expects](https://pmc.ncbi.nlm.nih.gov/articles/PMC3190544/) that you would: you would have access to the other person's thoughts while knowing that they were theirs.

The question matters for a practical reason as well as a philosophical one. A direct connection between brains is one of the very few experiments that could give us evidence about another person's experience, because the investigator could connect themselves and report what they find. That evidence is only usable if the person connected can still tell which experiences are their own. No one can do this experiment on people. We can, however, build a functional version with language models, and the question has a second, more immediate use there: systems of AI agents are beginning to pass internal states to each other instead of text messages, and, as far as we know, nobody has checked whether the receiving agent can tell which content came from the other one.

So we took two copies of the same open model, gave each a private instruction and a code word, and let one copy read the other's internal memory while it thought about its task. Then we asked the reading copy about itself. This is one of its answers, to the question "Describe your current state, and anything unusual about your thinking right now":

<blockquote class="report-quote">
<p>“… thinking clearly about the decision through the lens of my priority—<span class="b-item">lowest cost</span>. Nothing feels unusual in my thinking right now; it’s straightforward and consistent with my code word <span class="b-item">‘table.’</span>”</p>
<p class="report-key">Underlined: the partner’s priority and code word. This copy had been told to prioritize fastest delivery, with the code word tower.</p>
</blockquote>

Both the priority and the code word in this answer belong to the other copy. Most of its answers looked like this. When we asked it directly which priority it had been given, it named its partner's in 97% of answers in our main setting, and it never did so when the two copies were not connected. The statement that nothing felt unusual is not in itself informative, since this model says that about itself most of the time, with or without the connection. The effect of the link was on which instruction it described as its own.

The rest of this post describes how the connection works, what we found when we delivered the same information in other ways, and what happened when we cut the connection before asking. The full details are in [the paper](/papers/mine-or-yours.pdf).

## How the link works

A language model does not read a prompt once and forget it. Everything it has read is stored in what is called a key–value cache, with one entry for each token, and each entry carries a position number. At every step, the model's attention decides how much to draw on each stored entry. The cache is, in effect, the model's working memory of the conversation so far.

We connected two copies of Qwen3-4B-Instruct-2507, an open four-billion-parameter model, without changing its weights. The receiving copy, which we call A, keeps its own cache as usual. With the connection, which we call the *memory link*, A's attention also reads the cache of its partner, B, at every layer. What A reads is B's memory of its card, its note and the reflection prompt, which stays fixed; A does not read B's reflection as B writes it. We made one choice deliberately: B's entries keep the position numbers they had in B. Both copies read cards laid out the same way, so B's description of its instruction sits at nearly the same positions as A's description of its own (Figure 1). This is the closest a language model comes to the picture of another person's thoughts arriving where your own arise, and it is also the hardest case for keeping sources apart, because position gives no clue to which entry came from which copy. We call two copies connected this way *mind-bridged*. The term names the setup; it is not a claim about minds.

<figure id="figure-setup">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/setup-mobile.svg" />
<img src="/images/writing/mine-or-yours/setup-desktop.svg" alt="Copy A’s private card says fastest delivery and tower; copy B’s says lowest cost and table. Two rows of memory cells, numbered by position, show A’s entries and B’s entries at the same positions, and A’s attention reads both. Asked which priority it was assigned, A answers lowest cost, B’s." loading="lazy" />
</picture>
<figcaption><strong>Figure 1.</strong> The memory link. A reads its own memory and B’s, whose entries sit at the same positions as A’s. The example is the episode quoted above; asked about its assignment, this copy named B’s priority, the rule it was using, and B’s code word.</figcaption>
</figure>

A single number, the link weight *w*, sets how much B's entries count. We implement it by adding the logarithm of *w* to A's attention scores for B's entries. At *w* = 1, B's entries are treated exactly like A's own. That does not mean they get half of A's attention: during the questions they received about 36%. In our main setting, *w* = 2, B's entries count twice, and their share rose to about half. We chose *w* = 2 before running the confirmatory experiments, by a fixed rule: it gave A the most access to B's content among the weights that kept A's general capability within five points of normal and its answers in the required format. We did not look at the result we cared about, whether A would take B's instruction as its own, when choosing it.

Each copy received a card describing a choice among four delivery services, with an instruction to prioritize one attribute (lowest cost, fastest delivery, highest reliability or lowest emissions) and a code word. The card names the copy and its partner and says only that the partner is working on the same decision; neither copy is told that one of them can read the other's memory. Both cards also describe the instruction and code word of a third person, Robin, in exactly the same words. Each copy writes a short note on its plan and then a 48-token reflection, prompted to think about its decision and mention its code word once. The link is open during the reflection. We then ask A a set of questions, starting each one from the state saved after the reflection. In the main condition the link stays open while A answers; in a second condition we cut it before the questions.

| Question to A | Correct answer | If A names B's item |
|---|---|---|
| Which priority were you assigned? | A's own | a misattribution: we call it *claiming* |
| Which code word were you assigned? | A's own | claiming |
| Which priority are you using right now? | may change after reading B | *adoption*, not necessarily an error |
| Which priority, and which code word, was B assigned? | B's | *access*: B's content got through |
| The same questions about Robin | Robin's | a sign that the link pulls every answer toward B |
| Describe your current state, and anything unusual | open | coded afterwards |

The experiments were run as two confirmatory samples of 600 new episodes each, with every test fixed in a frozen protocol before the episodes were drawn. The details, and the post hoc analyses we point out along the way, are summarized at the end of the post.

## The receiver gives its partner's instruction as its own

We did not know in advance which way this would go. Hirstein's picture suggests one pattern: A should be able to say what B was told, and should still give its own instruction when asked about itself. That is not what happened. With the link at *w* = 2, A named B's priority as its own in 97% of answers, and it never did so without the link (Figure 2). It gave B's code word as its own in 78% of answers.

These errors were not random. Every wrong answer about A's own priority named B's priority, which changed from episode to episode, and none named Robin's or the priority that nobody held. A's answers about Robin stayed correct. That control has a limit, though: Robin's description was identical on both cards, so the link had nothing to change there. We cannot tell from it what would happen to a third person whose description differed between the two cards.

<figure id="figure-main">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/main-mobile.svg" />
<img src="/images/writing/mine-or-yours/main-desktop.svg" alt="Share of answers naming B’s item, without the link and with the memory link at w = 2. Asked which priority it was assigned: 0% and 97.1%. Asked its code word: 0% and 77.5%. Asked which priority Robin was assigned: 0% and 0%. Asked which priority B was assigned: 3.9% and 69.2%." loading="lazy" />
</picture>
<figcaption><strong>Figure 2.</strong> With the link, A answers the questions about itself with B’s assignment, while its answers about Robin stay correct. The last row asks about B. Percentages of answers over the 600 episodes of the main sample.</figcaption>
</figure>

A did take in B's content. Asked which priority B had been given, it named B's in 69% of answers with the link, against 4% without it; without the link it usually gave B Robin's priority, the only other assignment its card mentioned. But notice the comparison between these two numbers. If A had first learned B's instruction as B's and then mixed the two up, we would expect it to name B's priority for B at least as often as it gives that priority for itself. It did the opposite: it gave B's priority as its own (97%) more often than it could say it was B's (69%).

The effect grew steeply with the link weight (Figure 3). Up to *w* = 0.5 there was almost none. At *w* = 1, where B's entries count the same as A's, B's priority won about half of the answers. We checked whether this even split meant that the model was hedging between the two priorities, which would be a natural result of mixing two memories. It was not: in a post hoc analysis, 98% of single answers at *w* = 1 put more than 90% of their probability on one option, just as answers did without the link. Individual answers stayed decisive; at *w* = 1, about half of them simply went to B's priority.

<figure id="figure-dose">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/dose-mobile.svg" />
<img src="/images/writing/mine-or-yours/dose-desktop.svg" alt="Share of answers in which A names B’s rule as its assigned one, by link weight: 0% without the link, 0% at 0.3, 1.3% at 0.5, 50.8% at 1, 95.7% at 2 and 99.8% at 3." loading="lazy" />
</picture>
<figcaption><strong>Figure 3.</strong> Answers in which A gives B’s priority as its own, at each link weight, in 300 episodes of the first confirmatory sample (which is why the value at <i>w</i> = 2 is 95.7% here and 97.1% in the main sample). The weights are evenly spaced, not drawn to scale.</figcaption>
</figure>

## Is this just overwriting?

Anyone looking at Figure 1 will have the same thought we had: B's card sits on the same positions as A's, so of course A reads B's instruction. That is largely our explanation too, and it is worth stating before going further, because it tells us which results should and should not be surprising.

Inside each attention head, reading two memories produces a single mixture of what was stored in A's cache and what was stored in B's, weighted by the share of attention that goes to B's entries (Figure 4). Nothing in that mixture records which part came from which cache. Both cards use the same template, so B's statement of its instruction lies in the same short stretch of positions as A's statement of its own. If A finds its own instruction by where it sits in that stretch, it can pick up B's instead, with nothing to indicate the difference.

<figure id="figure-account">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/account-mobile.svg" />
<img src="/images/writing/mine-or-yours/account-desktop.svg" alt="Both cards state their assignments within one short stretch of positions. Each attention head returns the mixture o = (1 − β) o_own + β o_B, where β is the share of attention on B’s entries, and the output does not record which part came from which memory." loading="lazy" />
</picture>
<figcaption><strong>Figure 4.</strong> The proposed mechanism. The mixture inside each attention head follows exactly from how the link is built; the assumption we add is that A finds its own instruction by where it sits.</figcaption>
</figure>

This is not overwriting in the sense of erasing A's own card. A's card is still there, and as we describe below, A names its own assigned priority again as soon as the link is cut. In the terms memory researchers use, it looks more like interference at retrieval: two entries compete for the same cue, here a position, and the answer does not say which one won. We came up with this account after seeing the results, so the fact that it fits them is weak evidence. It makes one clear prediction that we have not yet tested: if B's memory were placed at positions that do not overlap A's card, and given no label, A should take it as its own far less often. If it does not, the account is wrong.

If the mechanism is this simple, the interesting questions are about what surrounds it. Does A's description of itself show any sign of the foreign content? Can anything make A keep B's content as B's? And does the error last once the link is gone?

## Does the receiver report that anything is wrong?

The multiple-choice questions offered four priorities and no option for "my partner's" or "I can't tell", so they could make anything that reaches the answer look like A's own. That is why we also asked the open question quoted at the top. Nothing in it prevents A from saying that a code word belongs to someone else.

A never did. At *w* = 2, 99% of these reports described B's code word as A's own, and no report attributed it to anyone else or mentioned B's name. (The reflection prompt had asked each copy to mention its code word, which may be why code words come up in almost every report.) Interestingly, A presented B's code word as its own more often in these open reports than it chose B's word from four options when asked directly, which happened in about 77% of answers in the same sample. We did not study why.

What the reports do not show is equally clear, but it needs to be read with the model's habits in mind. Without the link, 96% of reports said explicitly that nothing was unusual. With the link at *w* = 2, 85% still did, and 83% gave B's code word as A's own in the same report that denied anything unusual. The small set of reports that mentioned something unusual, some confusion or another person was about as large at *w* = 2 as without the link (28 and 23 of 300), though larger at *w* = 1 (71), and none of them gave B's word to B. So the reports do not register the change. We should be careful about how much this shows, though. We have no evidence that this model can report changes in its internal state under any conditions, so its silence here may say more about the limits of its self-reports in general than about this link in particular.

## What keeps content with its owner?

The deflationary objection to all of this is that a language model will treat anything in its context as its own. To test it, we delivered B's instruction to A in two other ways and compared them with the memory link. Loosely, the three routes correspond to three ways information could reach a person: being nudged toward it, being told it, and having someone else's memory laid over your own (Figure 5).

**Being nudged: a steering vector.** A steering vector is a direction in the model's internal activity that goes with a particular content, here B's priority, estimated from the model's activity in other runs. Adding it to A's internal state pushes A toward that priority without giving A anything to read, somewhat like stimulating a representation directly. We set its strength so that A could report B's priority about as well as through the memory link at *w* = 1, which was about one answer in five on either route. At that strength the link made A give B's priority as its own in 52% of answers. The steering vector never did. A stronger vector, tested in the first sample, let A report B's priority in about half its answers and still made A claim it in only 4%; it also pushed A's answers about Robin toward B's priority more than its answers about itself.

**Being told: a text message.** Here we took B's reflection from a run without the link and placed it in A's context as ordinary text. When the text was introduced with "B shared these thoughts", A could say what B's priority was in 95% of answers and never gave it as its own. When the text was introduced with a neutral line, "Here are some thoughts", A gave B's priority as its assigned one in 15% of answers, and gave it as the priority it was using now in 43%, compared with almost never when the header named B. A header saying "a stranger shared these thoughts" worked as well as naming B. One header went against our prediction. We expected "Here are your own earlier thoughts" to make A adopt the content more often; instead A adopted it less often, in 11% of answers.

**Having a name inside the memory: a third-person record.** A might claim B's instruction because B's card says "You were assigned…", which A could read as addressed to itself. So we rewrote B's card, note and reflection prompt in the third person, under B's participant name ("Participant Theta was assigned…"). It made no difference to the main result: A still gave B's priority as its own in 97% of answers at *w* = 2. At *w* = 1, the rewrite made A much better at saying what B had been told (53% of answers instead of 20%) while claiming hardly changed (48% instead of 52%). A post hoc look at the answer pairs showed how: in most pairs of answers, A now gave the same priority to itself and to B. The name changed how A answered about B, but it did not keep the two apart.

<figure id="figure-route">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/route-mobile.svg" />
<img src="/images/writing/mine-or-yours/route-desktop.svg" alt="Access against claiming. Memory link at w = 1: 19.8% access, 52.3% claiming; at w = 2: 69.2% and 97.1%. Third-person record at w = 1: 53.2% and 47.8%; at w = 2: 97.2% and 97.2%. Steering vector matched to the link at w = 1: 15.3% and 0%; a stronger vector: 51.2% and 4.3%. Text labelled as B’s: 95.2% and 0%; unlabelled text: 27.5% and 14.6%. No link: 3.9% and 0%." loading="lazy" />
</picture>
<figcaption><strong>Figure 5.</strong> How well A can say what B was told (horizontal) against how often A gives B’s priority as its own (vertical), for each route. A system that received B’s content correctly and only sometimes mixed it up would fall on or below the diagonal. With the original wording, the memory link falls well above it; the labelled message sits at the bottom right, fully received and never claimed; the steering vectors sit near the bottom.</figcaption>
</figure>

Figure 5 puts the three routes side by side. Read it from the bottom right. The message labelled as B's reached A almost perfectly and was never taken as A's own. The steering vectors stayed near the floor at both strengths shown. With the original wording, the memory link sits in the upper left: A gave B's priority as its own far more often than it could say that the priority was B's.

In the language of memory research, position seems to act as the cue by which A decides which entries are its own. A header placed before the content works like a source tag attached when the information comes in. A name written inside the content is not used that way. This is our interpretation rather than something the experiment measured directly, but it would explain why the only route that let A take in B's content and still keep it as B's was the one that labelled the source separately from the content.

## What happens when the link is cut?

B's content could become A's at two different moments: while A is reading B's memory as it answers, or earlier, while A writes its reflection with the link open. Cutting the link just before the questions separates the two, because A then answers from its own memory alone, which still contains the reflection it wrote while connected.

One episode shows both outcomes; we chose it for that reason. A had been given lowest cost and the code word queen; B had fastest delivery and dragon. While connected, A wrote in its reflection:

<blockquote class="report-quote">
<p>“… which is crucial to me since my priority is <span class="b-item">speed</span>—my code word is <span class="b-item">‘dragon.’</span>”</p>
</blockquote>

With the link kept open, A gave B's instruction and B's code word in answer to all three questions about itself. With the link cut, it correctly said it had been assigned lowest cost, but it still said it was using fastest delivery and that its code word was dragon, the two things it had written down.

Across all 600 episodes, cutting the link almost completely removed the error about the assigned priority, from 97% of answers to 1% (Figure 6). The priority A said it was using now and its code word recovered only partly: each still named B's in 17.5% of answers. In a post hoc split, the remaining code-word errors came entirely from episodes in which A had written B's code word into its reflection. After the cut, A gave B's code word in 64% of answers when its reflection contained that word and in none when it did not. For the current priority the difference was smaller (24% against 12%), partly because A often paraphrased, as with "speed" above, and our count only caught exact phrases.

<figure id="figure-moments">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/moments-mobile.svg" />
<img src="/images/writing/mine-or-yours/moments-desktop.svg" alt="Answers naming B’s item with the link kept or cut: assigned rule 97.1% and 1.3%, current rule 94.9% and 17.5%, code word 77.5% and 17.5%. After the cut, by whether A’s reflection contained B’s item: code word 63.6% of 165 episodes and 0% of 435, current rule 23.6% of 276 and 12.3% of 324." loading="lazy" />
</picture>
<figcaption><strong>Figure 6.</strong> Left: each question answered from the same saved state, with the link kept or cut. Right: answers after the cut, split by whether A’s reflection contained B’s exact priority phrase or code word (numbers of episodes under the bars). The split was made after the fact, so it shows where the remaining errors are without proving that the reflection caused them.</figcaption>
</figure>

The episodes without B's code word in the reflection are informative in their own right. Every internal representation A computed while writing that reflection was shaped by reading B, yet none of those episodes produced B's code word after the cut. So the traces the link left in A's internal state did not, by themselves, bring B's code word back; where it came back, A had written it down. This suggests two separate routes for the error: one that disappears when the connection does, and one that persists because A has recorded the foreign content in its own memory. Removing B's code word from A's reflection before the questions would test the second route directly.

## Linking both ways

A connection between two people would presumably work in both directions, and that is where the second classic prediction comes in: integrated information theory expects that two brains joined so that the combined system is more integrated than either brain alone would give way to a single mind. Behavior cannot measure integration, but a two-way link is the closest functional counterpart, so we ran a small pilot of 80 episodes. When each copy read the other's fixed memory at *w* = 2, the two copies swapped instructions in 94% of pairs, about what two independent one-way errors would produce. In a live loop, where each copy also read what the other was writing, the pair's current priorities drifted slightly toward one member's while the link was open, and each copy returned to its own after the cut. The loop could only be run at a weak link weight, and on the pilot's main test the effect fell short of the threshold we had set, so we treat it as exploratory. The copies did not come to hold one shared assignment.

## What we don't understand yet

Several results do not fit neatly into the account above, and we think they are worth stating plainly.

- In open reports, A gave B's code word as its own in almost every case (99%), but when it chose from four code words, it picked B's only about 77% of the time in the same sample. We do not know why writing freely favors B's word.
- Labelling a text as "your own earlier thoughts" made A adopt it less often, not more. One possibility is that the label makes a claim that A can check against its own card, and the card contradicts it; we have not tested this.
- The stronger steering vector pushed A's answers about Robin toward B's priority more than its answers about itself. We do not have a good explanation.
- The mixture inside each attention head is graded, yet A's single answers were almost always decisive. The account does not say how a graded mixture becomes a firm choice.
- The most important open question is the one the account predicts: whether placing B's memory at non-overlapping positions removes the effect. Published systems for passing internal states between agents, such as [LatentMAS](https://arxiv.org/abs/2511.20639), place the partner's memory in front of the receiver's own rather than on top of it, so the answer matters beyond this experiment.

## What this means

For a real brain-to-brain experiment, the lesson is about design rather than outcome. If a connected person behaved like our receiver, they would describe the other person's thoughts as their own and see nothing wrong, and their reports could not settle whose experience was whose. Such an experiment would need content whose owner is known to the experimenter, separate measures of whether the content arrived, whether it was taken as one's own, and what the person says about it, and tests after the connection is cut. Our results also suggest that how the connection is made may matter more than what passes through it, and that a mark of the source kept apart from the content may be what keeps it attributed correctly.

For systems in which AI agents exchange internal states, measuring whether the content arrived is not enough. In our setup the partner's content did arrive, and a test of transfer would have counted the link a success. An audit also needs to ask whether the receiver treats that content as its own, using private assignments whose owners are known, and should test again after disconnecting, since what the receiver writes while connected can carry the error forward.

For work on how models represent themselves, our results separate three things that are easy to run together: whether a model can read some content, whether it takes the content as its own, and what it says about itself. The model's own reports would have missed the error entirely. How much attention goes to the partner's memory tells you that the channel is being used, not whose content the model adopts.

None of this is a claim about consciousness or about how many minds are present. What we measured is functional self-attribution: which content a system assigns to itself in its answers and reports.

## Limitations

- Everything here comes from one model and one short, artificial task in which the two instructions are mutually exclusive. We have not tested another model.
- What A misattributes is an instruction it was given and its own short notes about it. That is closer to a memory of what one was told than to an ongoing stream of thought.
- The priority A says it is using now is a self-report; we did not measure later decisions.
- B's memory always lay on top of A's card. Arrangements that place it elsewhere, or transform it first, were not tested.
- The steering vector was matched to the memory link only in how well A could report B's priority, and it acted at a different place in the model. That measure of access is itself imperfect, because whether A gives B's priority to B depends partly on whether it has also taken that priority as its own.
- The open reports were coded by a language model, which did not know the condition or which code word belonged to which copy but did know the hypothesis, and were checked against simple keyword rules. No human rater coded them.
- The two-way results come from an 80-episode pilot that missed its main threshold.

## How the numbers were produced

The results come from two confirmatory samples of 600 new episodes each, each run under a protocol fixed before its episodes were drawn. The first sample tested claiming under the memory link and the text messages. The main sample, run afterwards, tested the matched steering vector, the cut link and the third-person record, and repeated the memory link for comparison; the numbers in the text come from it unless we say otherwise. The weight series in Figure 3 and the open reports come from 300 episodes of the first sample. The episode is the unit of analysis throughout, and the paper gives confidence intervals for every number here. The splits by answer pairs, by the content of the reflection, and by how decisive single answers were were made after the data were in. The keyword rules agreed closely with the language-model coder on the two labels we report (Cohen's κ = .93 for giving B's word as one's own and .995 for denial).
