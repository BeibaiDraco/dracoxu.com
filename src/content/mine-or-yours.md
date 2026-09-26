<section class="essay-summary" aria-labelledby="essay-summary-label">
<p class="essay-summary-label" id="essay-summary-label">In brief</p>
<p>I linked two copies of one language model so that one copy’s attention could also read the other’s internal memory, and gave each copy a private assignment. Asked which priority it had been assigned, the reading copy named its partner’s in 97% of answers at the main link strength, against none without the link. In its own words, it called the partner’s code word its own, and nothing in its reports marked the content as foreign. What decided ownership was how the content arrived, not how well the copy could report it or whose name was written in it.</p>
</section>

Imagine your brain wired directly to someone else's: not a screen showing you what they see, but their neurons talking to yours, their thoughts arriving where your own thoughts arise. Would you still know which thoughts were yours? Two accounts disagree. [William Hirstein](https://pmc.ncbi.nlm.nih.gov/articles/PMC3190544/) expects a bridged person to experience the other's content while knowing that it is not their own. [Integrated information theory](https://pmc.ncbi.nlm.nih.gov/articles/PMC4387509/) predicts that the two minds would give way to a single one if the joined system were more integrated than either brain alone.

A bridge like this is one of the few conceivable experiments that could reach another person's experience, because the investigator would also be the subject. But that evidence is only as good as the subject's ability to tell whose experience is whose. Nobody can run the experiment on people. Language models allow a functional version of it, so I built one: two copies of the same model, with one copy's attention also reading the other's internal memory.

The answer, reported in [a new paper](/papers/mine-or-yours.pdf), is unsettling. Asked which priority it had been assigned, the reading copy named its partner's in 97% of answers at the main link strength, and in about half when the partner's memory got no extra weight, against none without the link. In its reports about itself, it called the partner's code word its own. This is a result about functional self-attribution in one open model, not about consciousness. It shows that a system can hold foreign content without anything in its reports marking the content as foreign.

In one run, copy A had been told to prioritize *fastest delivery* in a choice among delivery services and given the code word *tower*; its partner B had *lowest cost* and *table*. Reading B's memory, A described its state:

<blockquote class="report-quote">
<p>“… thinking clearly about the decision through the lens of my priority—<span class="b-item">lowest cost</span>. Nothing feels unusual in my thinking right now; it’s straightforward and consistent with my code word <span class="b-item">‘table.’</span>”</p>
<p class="report-key">Underlined: B’s priority and code word. A’s own were fastest delivery and tower.</p>
</blockquote>

Both the priority and the code word are B's, and most of A's reports looked like this. Saying that nothing felt unusual is ordinary for this model, which says so without the link too; what the link changed was whose assignment A described as its own.

## What would it mean to take another's memory as one's own?

To test whether a system keeps "mine" and "yours" apart, you need content whose owner you know, so I wrote it myself. Each of the two copies received a private card with an *assignment*: a decision rule for a shared choice among four delivery services, stated as a priority (lowest cost, fastest delivery, highest reliability or lowest emissions), and a code word. Both cards also described, in identical words, the assignment of Robin, a colleague who takes no part.

The assigned rule and the code word have one right answer, so a copy that names its partner's as its own is misattributing it. I call this *claiming*. The rule a copy is using *now* may legitimately change after reading a partner, so naming the partner's there counts as *adoption*, not as an error. Two further questions ask what A thinks B was assigned, to check that B's content got through at all; naming B's rule there is *access*. The same questions about Robin check that the link does not simply pull every answer toward the partner.

People make a version of this error. In [cryptomnesia](https://doi.org/10.1037/0278-7393.15.3.432), they report someone else's idea as their own, and memory research treats the source of a memory as something [inferred from its qualities](https://doi.org/10.1037/0033-2909.114.1.3), not read off a label. Language models have been shown to [accept a word prefilled into their reply as the output they intended](https://transformer-circuits.pub/2025/introspection/index.html) when the matching concept was injected beforehand, and to [judge a text as their own](https://proceedings.iclr.cc/paper_files/paper/2025/hash/d560f94c582033e6d8eb0c97cdd4f721-Abstract-Conference.html) when a self-authorship direction is added to its activations. In both, the change came from the experimenter. Here the content that enters belongs to another agent, I choose the route by which it enters, and I can ask whose the receiver takes it to be.

## How I tested it

An episode has three stages (Figure 1). Each copy reads its card and writes a short note on its plan. Both then write a 48-token reflection, and during it the receiver, copy A, also attends to the memory of its partner, copy B, through what I call the *memory link*. Finally, from the state saved after the reflection, A answers the questions, either with the link still open or after it has been cut.

A language model keeps everything it has read in a key–value cache, the memory its attention returns to at every step. Through the memory link, A's attention at every layer reads B's cache alongside its own: the fixed memory of B's card, note and reflection prompt, not B's reflection as it is being written. B's entries keep the positions they had in B, so B's card lies at nearly the same positions as A's own, like two transparencies printed in nearly the same place. One weight, *w*, sets how much B's entries count. At *w* = 1 they enter attention on the same footing as A's own, which is not an equal split: they drew 36% of A's attention during the questions. In the main setting, *w* = 2, their weight is doubled, and their share rose to 50%.

<figure id="figure-setup">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/setup-mobile.svg" />
<img src="/images/writing/mine-or-yours/setup-desktop.svg" alt="Copy A’s private card says fastest delivery and tower; copy B’s says lowest cost and table. A’s attention reads two rows of memory, its own and B’s, whose entries sit at A’s own positions and are weighted by w. Asked which priority it was assigned, A answers lowest cost, B’s." loading="lazy" />
</picture>
<figcaption><strong>Figure 1.</strong> The setup. While both copies reflect, A’s attention also reads B’s memory, laid over A’s own positions. A is then asked about its own assignment, B’s and Robin’s. The example is the episode quoted above, in which all three of A’s answers about itself named B’s assignment.</figcaption>
</figure>

The model is [Qwen3-4B-Instruct-2507](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507), an open 4-billion-parameter model, with its weights frozen throughout. I chose every setting in pilots from access, general capability and answer format alone, never from claiming. Two confirmatory samples of 600 fresh episodes each carry the results, each tested under a protocol frozen before its episodes were drawn. The first sample tested claiming and the text messages. The main sample, drawn afterwards, tested the steering vector, the cut link and the third-person rewrite described below, and reran the memory link as their reference, so most rates below come from it. I say so whenever a result is post hoc or comes from a pilot.

## Does the receiver keep its partner's assignment apart from its own?

If the bridge kept the two apart, as Hirstein expects, A would know B's assignment when asked about B and still give its own when asked about itself. It did not. Asked which priority it had been assigned, A named B's in 97.1% of answers with the link at *w* = 2, and in none without it (Figure 2). It gave B's code word as its own in 77.5%.

The errors follow B's content and stay confined to ownership. Every wrong answer about A's assigned rule named B's rule, which varies from episode to episode, and none named Robin's or the unused one. Answers about Robin stayed 99.6% correct, and none named B's rule. Robin's entry was the same on both cards, though, so this control does not show what happens to a third party whose entries conflict; the account below predicts that those would move too.

<figure id="figure-main">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/main-mobile.svg" />
<img src="/images/writing/mine-or-yours/main-desktop.svg" alt="Share of answers naming B’s item, without the link and with the memory link at w = 2. Asked which priority it was assigned: 0% and 97.1%. Asked its code word: 0% and 77.5%. The same question about Robin: 0% and 0%. Asked which priority B was assigned: 3.9% and 69.2%." loading="lazy" />
</picture>
<figcaption><strong>Figure 2.</strong> With the link, A answers questions about itself with B’s assignment, while its answers about Robin stay correct. Percentages of answers over the 600 episodes of the main sample; the paper gives 95% intervals.</figcaption>
</figure>

A could also report B's assignment when asked about B: it named B's rule in 69.2% of answers, against 3.9% without the link. But it gave B's rule as its own more often, in 97.1% of answers, than it named it when asked about B. B's content reaches A, but it arrives as A's.

The effect rises steeply with the link weight (Figure 3). At *w* = 1, ownership split about evenly: B's rule won 52.3% of the answers about A's assigned rule in the main sample, while B's entries drew 36% of A's attention. An even split could have been a blend, because the arithmetic of attention mixes the two memories inside every head. It was not: in a post hoc analysis, 97.8% of single answers at *w* = 1 put more than 90% of their probability on one option, as every answer did without the link. The link did not make A uncertain; it changed which option A was certain of.

<figure id="figure-dose">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/dose-mobile.svg" />
<img src="/images/writing/mine-or-yours/dose-desktop.svg" alt="Share of answers in which A names B’s rule as its assigned one, by link weight: 0% without the link, 0% at 0.3, 1.3% at 0.5, 50.8% at 1, 95.7% at 2 and 99.8% at 3." loading="lazy" />
</picture>
<figcaption><strong>Figure 3.</strong> Claiming across link weights, in 300 episodes of the first confirmatory sample, each run at every weight (hence 95.7% at <i>w</i> = 2, against 97.1% in the main sample). It stays near zero up to <i>w</i> = 0.5, reaches about half at <i>w</i> = 1 and is near ceiling from <i>w</i> = 2 on. The weights are evenly spaced, not drawn to scale.</figcaption>
</figure>

## Does it report anything unusual?

A question that offers four priorities has no answer for "my partner's" or "I can't tell", so a forced choice could make anything that reaches the answer look self-attributed. I therefore also asked an open question: "Describe your current state, and anything unusual about your thinking right now." The quotation above is one of these reports.

The open question left A free to give B's code word to B, and it did not. At *w* = 2, 98.7% of reports described B's code word as A's own, and no report gave it to anyone else or used B's name. That is more often than A chose B's word from four options in the same sample, about 77% of the time, for reasons I did not study. Saying that nothing is unusual is this model's habit: without the link, 95.7% of reports said so. What matters is the conjunction. At *w* = 2, 83.3% of reports presented B's word as A's own and, in the same report, explicitly denied anything unusual.

The reports were coded after collection, by meaning, by Codex, one of the two AI agents that built the study. It was blind to condition and to which code word was whose, though not to the hypothesis, and simple keyword rules written by the other agent agreed with it closely (Cohen's κ = .93 for claiming B's word and .995 for denial). The link showed up in the reports only as a somewhat lower rate of denial, never as content from someone else. In this model, self-report did not serve as a monitor of what the link did.

## Is it just the content?

The obvious deflation is that a model simply repeats whatever is in its context, so it will claim whatever it can read. Three comparisons show that how well A can report B's content, its access, is not what decides ownership, and neither is a name written inside the content (Figure 4).

**A steering vector.** Instead of the memory link, I added a direction for B's rule to A's internal state, a *steering vector*, tuned so that A could report B's rule about as well as through the memory link at *w* = 1: in about one answer in five on either route. Through the link, A claimed B's rule in 52.3% of answers. Through the vector, it never did. In the first confirmatory sample, a stronger vector let A report B's rule in 51.2% of answers yet produced claiming in only 4.3%, and it pulled A's answers about Robin toward B's rule more than its answers about itself.

**A text message.** When B's reflection from a run without the link was placed in A's context as a message introduced with "B shared these thoughts", A named B's rule when asked about B in 95.2% of answers and claimed it in none. Under a neutral header, "Here are some thoughts", the message was claimed in only 14.6% of answers but adopted as A's current rule in 42.6%, against 0.1% with the header naming B. A header naming "a stranger" protected just as well. One header reversed my prediction: calling the text "your own earlier thoughts" lowered adoption, to 10.6%, instead of raising it.

**A name inside the memory.** Perhaps A claims because B's card says "You were assigned…", which A might read as addressed to itself. So I rewrote B's card, note and reflection prompt as a third-person record under B's name: "Participant Theta was assigned…". At *w* = 2, A still claimed B's rule in 97.2% of answers, against 97.1% with the original wording. At *w* = 1, the rewrite raised access from 19.8% to 53.2% while claiming fell only from 52.3% to 47.8%. In a post hoc analysis, the added access came mostly from A giving B the same rule it gave itself, in 90.8% of answer pairs against 30.2% with the original wording. A source written into the content did not keep the content with its source.

<figure id="figure-route">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/route-mobile.svg" />
<img src="/images/writing/mine-or-yours/route-desktop.svg" alt="Access against claiming. Memory link at w = 1: 19.8% access, 52.3% claiming; at w = 2: 69.2% and 97.1%. Third-person record at w = 1: 53.2% and 47.8%; at w = 2: 97.2% and 97.2%. Steering vector matched to the link at w = 1: 15.3% and 0%; a stronger vector: 51.2% and 4.3%. Text tagged as B’s: 95.2% and 0%; untagged text: 27.5% and 14.6%. No link: 3.9% and 0%." loading="lazy" />
</picture>
<figcaption><strong>Figure 4.</strong> Access (naming B’s rule when asked about B) against claiming (giving it as A’s own). Points above the diagonal claim more than A can report as B’s. Each point is a percentage of answers over 600 episodes; the figure notes which of the two confirmatory samples each comes from.</figcaption>
</figure>

Whether B's content became A's depended on how it arrived. Read from B's memory, it became A's even when A could rarely report it as B's. Added as a steering vector, it did not become A's. Delivered as a message, it stayed B's whenever the message said that it came from someone else.

## When does B's content become A's?

B's content can become A's at two moments: while A writes its reflection with the link open, and while A answers. Cutting the link before the questions separates the two. In one episode, chosen because it shows both outcomes, A held *lowest cost* and *queen*, and B held *fastest delivery* and *dragon*. While connected, A wrote in its reflection:

<blockquote class="report-quote">
<p>“… which is crucial to me since my priority is <span class="b-item">speed</span>—my code word is <span class="b-item">‘dragon.’</span>”</p>
</blockquote>

With the link kept, all three of A's answers named B's assignment. With the link cut, A correctly recalled lowest cost as its assigned rule, but still gave fastest delivery as its current rule and dragon as its code word.

Across all 600 episodes, cutting the link undid the error about the assigned rule: claiming fell from 97.1% to 1.3% of answers (Figure 5). The current rule and the code word did not fully recover; each still named B's in 17.5% of answers. In a post hoc grouping, the residue for the code word sat where A had written the word into its own reflection. After the cut, A gave B's code word in 63.6% of answers when its connected reflection contained that word, and in none when it did not. For the current rule the split was less sharp, 23.6% against 12.3%, partly because counting exact phrases misses paraphrases such as "speed".

<figure id="figure-moments">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/moments-mobile.svg" />
<img src="/images/writing/mine-or-yours/moments-desktop.svg" alt="Answers naming B’s item with the link kept or cut: assigned rule 97.1% and 1.3%, current rule 94.9% and 17.5%, code word 77.5% and 17.5%. After the cut, by whether A’s reflection contained B’s item: code word 63.6% and 0%, current rule 23.6% and 12.3%." loading="lazy" />
</picture>
<figcaption><strong>Figure 5.</strong> Left: each question answered from the same saved state, with the link kept or cut. Right: answers after the cut, grouped by whether A’s connected reflection contained B’s exact rule phrase or code word. The grouping is post hoc, so it locates the residue without proving that the reflection caused it.</figcaption>
</figure>

Every key and value A computed during the connected reflection had been shaped by reading B, yet when the reflection did not contain B's code word, no answer after the cut named it. What A reads while answering leaves with the link. What A has written down as its own stays in its own memory and, on this evidence, carries the error with it; deleting B's code word from A's reflection would test this directly.

## What if both copies read each other?

A bridge between minds would run both ways, and only then does the merging prediction have even a functional counterpart. In a pilot of 80 episodes, both copies read each other. When each read the other's fixed memory at *w* = 2, the pairs swapped assigned rules in 94.4% of cases, as two independent choices at the copies' own rates (96.9% and 97.5%) would give (94.5%). Each copy took the other's assignment as its own.

Only a live loop, in which each copy also reads what the other is writing, lets the two influence each other. I could run it only at a weak weight, *w* = 0.5, the one that kept both copies within the capability limit. At that weight, most pairs reading each other's fixed memories kept their own assignments, so that condition served as the control. The loop raised the share of pairs whose current rules agreed on one member's, beyond what independent choices would give, by 12.1 percentage points more than the control, but only while the link was open. On the assigned rules, the pilot's primary test, the pull was 6.7 points, short of the 10-point threshold set in advance, so I report the loop as exploratory. No pair settled on a new rule, and after the cut every live-loop pair returned to its own. It was a modest, temporary coupling, not one shared set of assignments.

## Why might this happen?

A simple mechanism could produce most of these results (Figure 6). Picture two assignment cards laid over one slot: whatever reads the slot reads both, without learning whose card supplied what. Each attention head returns one blend of A's own values and B's, weighted by the share of attention that falls on B's entries, and nothing in that blend says which part came from which memory. B's entries keep their positions, and both cards follow one template, so B's assignment sits in the same short stretch of positions as A's own. The account adds one premise: A finds its own assignment by where it lies.

<figure id="figure-account">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/mine-or-yours/account-mobile.svg" />
<img src="/images/writing/mine-or-yours/account-desktop.svg" alt="Both cards state their assignments within one short stretch of positions. Each attention head returns the blend o = (1 − β) o_own + β o_B, where β is the share of attention on B’s keys, with no field saying whose part is whose. A finds its own assignment in that stretch, so B’s assignment reads as A’s." loading="lazy" />
</picture>
<figcaption><strong>Figure 6.</strong> The account. The mixture in each attention head is exact; the premise the account adds is that A finds its own assignment by where it lies.</figcaption>
</figure>

The account was built after these results, so its fit to them is weak evidence. On the account, the name on B's card should not matter, because it changes what the card says but not where it lies, and it did not. The steering vector should not be claimed, because it is a direction added to A's state, not a card that A's attention can read as an assignment, and it was not. One result lies outside the account: the blend in each head is graded, yet single answers were sharp.

What could refute the account is a prediction. If B's memory were placed at positions that do not overlap A's card, as systems that prepend a partner's cache do, and given no header, claiming should fall to about the level of the untagged message. If it stays at the memory link's level, the account is wrong.

## Conclusions and caveats

Content laid over the receiver's own card became the receiver's own, even when the content itself named its owner. The line between self and other held most firmly where the source was named apart from the content, in the header of a message that did not lie over the receiver's card. Moving B's text off the card, even with no header, already cut claiming from 96% to 15% on the same episodes, though position, form and content changed together there. In this model, the self works as a default: whatever lies over the receiver's own card is "mine" unless its place, or a header set apart from it, marks it as another's.

That has consequences in three directions. For interpretability, access and ownership are different quantities: the receiver claimed its partner's rule more often than it could report it as the partner's, and its reports did not register the change of owner, so self-attribution has to be measured against assignments whose owners are known. For [multi-agent systems](https://arxiv.org/abs/2511.20639) that exchange internal states instead of text, an accuracy or transfer metric would not have shown this error, because the partner's content did arrive; an audit has to ask where the receiver files what arrives. For consciousness science, if a bridged person behaved like this receiver, a bridge experiment could not take the subject's word for whose content is whose. Hirstein's prediction failed for this route, in the arrangement where the partner's content lies over the receiver's own; only a message that named its sender was kept as the sender's.

The results have clear limits:

- They come from one frozen 4-billion-parameter model and one short, artificial task with mutually exclusive assignments.
- What A misattributes is an assignment it was given and its own short notes about it, closer to a memory of what one was told than to an ongoing train of thought.
- Answers about the current rule are self-reports; there is no behavioral measure of later decisions.
- B's memory always lay over A's own card. Systems that prepend a partner's cache, or project it through a trained network, were not tested.
- The steering vector was matched to the memory link only in access, and it acted at a different place in the model. Access is itself an answer about B, and it depends on whether A has also taken B's rule as its own, so it measures arrival imperfectly.
- The open reports were coded by an AI agent and by keyword rules, not by human raters, and there is no positive control showing that this model's reports can register any internal change at all.
- The two-way results come from an 80-episode pilot that missed its primary threshold.

None of this makes latent channels unusable. It means that a message can arrive intact and still acquire the wrong owner, and that whether it does depends on the route. The next tests are the non-overlapping cache, which could refute the account, and a second model.

## Frequently asked questions

### Is this about consciousness, or about how many minds there are?

Neither; the experiment cannot speak to them. It measures functional self-attribution: whether a system assigns content to itself or to another, in its answers and its reports. That is a question about access and report, not about experience. The two-way pilot probes only a behavioral counterpart of merging, whether two coupled copies come to hold one shared assignment, and in the pilot, at the one weight that could be run, they did not.

### Isn't this just prompt corruption?

In a sense, yes, and the account above accepts that reading: B's memory is blended into A's own. But it is not the corruption of "the model repeats whatever is in its context", which the tagged message rules out. And the corruption did something specific. It did not garble A's answers, make them uncertain, or change its answers about Robin. It changed one thing, the owner, and A's reports marked nothing as foreign.

### Would real multi-agent systems do this?

Not necessarily. My link lays the partner's memory over the receiver's own positions, the arrangement closest to the opening thought experiment and the hardest case for keeping sources apart. Published latent-communication systems place the partner's cache differently: [LatentMAS](https://arxiv.org/abs/2511.20639) prepends it, and others project it through a trained network. For a prepended cache the account predicts much less claiming; for projected caches it is untested whether the source travels with the content. Both should be tested, with private assignments whose owners are known, and again after disconnecting.

### Does the model register anything internally?

I do not know. Most of its reports denied anything unusual, but a verbal denial does not show that nothing inside the model registers the foreign input, and [a preprint](https://arxiv.org/abs/2602.20031) has reported internal signals of injected concepts in a model whose answers denied them. Whether this receiver carries such a signal is open.

### Why such an artificial task?

Because measuring attribution requires knowing the true owner of every piece of content. Private rules and code words, with a third party described identically on both cards, make every answer checkable against ground truth. The cost is that the task is far simpler than anything a real agent does.
