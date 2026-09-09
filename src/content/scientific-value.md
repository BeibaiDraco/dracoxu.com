On September 8, 2026, [OpenAI announced a proposed proof](https://openai.com/index/navier-stokes-solution/) addressing the Navier–Stokes Millennium Prize Problem, accompanied by a Lean formalization. The claimed result concerns a smooth, externally driven fluid flow whose velocity becomes unbounded in finite time. It addresses the forced breakdown alternatives in the [official problem](https://www.claymath.org/wp-content/uploads/2022/06/navierstokes.pdf).

Imagine following this trajectory much further. AI helps resolve every Millennium Prize Problem. Which mathematical question should come next?

**I argue that scientific value itself should become a central research problem in developing AI scientists.** We need to explain what makes a contribution worth recognizing, how to compare different kinds of advance, and how far those judgments can be made explicit enough to check.

A famous list gives us a place to start. The work itself changes what can follow. A proof can introduce a method, uncover a connection, or make a previously inaccessible question tractable. We might want a different proof of the same theorem because it reveals something the first proof concealed. Generating another conjecture is easy to imagine; explaining why it deserves years of attention is a much harder achievement.

Terence Tao's [*What Is Good Mathematics?*](https://arxiv.org/abs/math/0702396) considers this variety: problem solving, theory building, new techniques, connections, exposition. Their relative importance depends partly on the state of a field. In his recent [*Mathematics in the Age of AI*](https://arxiv.org/html/2608.16753v1), he asks what happens when solving and verifying problems can be accelerated more readily than the work of understanding and absorbing their solutions. We have to examine the goals that these activities have served together.

The question extends across science. Suppose AI becomes capable of answering far more of the questions we give it. Compute, experiments, and human attention will still be finite. OpenAI reports roughly 10,000 concurrent agents in its Navier–Stokes group. With systems operating at that scale, deciding what to investigate has consequences well beyond the wording of a prompt.

And the problem continues after the research is done. What did a study establish? Why does it matter? How should a new explanation be compared with a more reliable measurement? In [*AI Can Learn Scientific Taste*](https://arxiv.org/abs/2603.14473v3), citation-based comparisons train a Scientific Judge whose preferences then supply rewards for a Scientific Thinker. Its evaluations help determine what the next system learns to produce. Human review of AI work, AI review of human work, and AI review of other AI systems all face a question about the achievements their judgments encourage.

Scientists develop considerable judgment through research and criticism. [Polanyi's account of scientific communities](https://polanyisociety.org/primary-resources-the-republic-of-science/) describes how such expertise sustains scientific appraisal. But the ability to recognize good work can outrun our ability to explain what makes it good. We could teach a machine to reproduce our evaluations while leaving their underlying commitments largely implicit.

Imagine that we could predict a scientist's evaluations perfectly. We would still have to decide which evaluations an AI scientist should learn to satisfy. Two evaluators might agree on everything a study established, yet disagree because one rewards only new answers while the other also credits stronger evidence for an existing answer. Better prediction would faithfully preserve their disagreement.

**Agreement with scientists cannot, by itself, settle what science should pursue.** If a community overlooks a contribution, a perfect imitation of its judgments would reproduce the omission. Expert deliberation and domain methods can supply reasons to correct it. Why, then, seek a general theory?

Because those reasons have consequences beyond the case in which they arise. If novelty deserves credit, we need to explain why a first proof counts and a copy does not. If stronger evidence deserves credit, an unchanged answer can still mark an advance. When several studies depend on the same result, their value cannot be understood entirely in isolation. These are shared questions about what a contribution is, how contributions relate, and why their differences matter. Developing a theory would make these connections a subject of research, so that judgments across cases can constrain and correct one another. AI scientists make this especially pressing as evaluation reaches beyond familiar tasks and feeds back into what research gets done.

<span id="what-does-a-study-add"></span>
<span id="what-should-a-theory-of-scientific-value-explain"></span>

## What would a theory of scientific value explain?

We should aim for a theory broad enough to address any new scientific contribution, including kinds of research we have not yet encountered. It should explain why a proof, a new relationship, and a better experiment can each advance science, and derive judgments beyond the examples used to develop it. When a comparison remains open, it should identify why. This general account of contribution and importance would connect different achievements through shared principles; whether they support a common numerical scale is a further question.

Such a theory needs a subject matter. I would start with the change a study makes to a scientific background: the claims and relationships already established, the evidence supporting them, and the proofs and methods actually available. A study can add a relationship, repair a reason for accepting one, or establish a way to answer a previously inaccessible question. To evaluate that change, the theory must connect its scientific description to principles explaining why it matters. An evaluator's verdict is then a conclusion to be justified within the theory.

My starting commitment is that finding out what is true of a subject, and how its properties depend on one another, is a central aim of science. Establishing a supported relationship accomplishes part of that aim before it wins approval or produces an application. This gives a reason to recognize an achievement. It also makes demands on the theory: its judgments must track what has been established about the subject, with what support, rather than simply how many results have been reported.

<figure id="figure-theory">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/scientific-value/theory-mobile.svg" />
<img src="/images/writing/scientific-value/theory-desktop.svg" alt="A proposed theory connects descriptions of what research changes with justified principles of scientific value. Together they support judgments across studies. Unfamiliar achievements and counterexamples can challenge the descriptions and principles themselves." loading="lazy" />
</picture>
<figcaption>A general theory would connect an account of what research changes to reasons for valuing those changes. The same principles would have consequences across different studies; unfamiliar achievements could expose defects in either the account or the principles.</figcaption>
</figure>

Even specifying that object is difficult. Suppose a conjecture follows from accepted axioms but no proof is available. Its first usable proof can be a major achievement, although the axioms' logical consequences have not changed. A background that treated every consequence as already established would erase the contribution. Conversely, copying the same proof, with no gain in access or use, does not establish the result again. A theory must explain both judgments using a consistent account of what was already available.

Hodgkin and Huxley's [1952 study](https://doi.org/10.1113/jphysiol.1952.sp004764) puts another demand on that account. Measurements at different fixed membrane voltages helped them establish how readily ionic currents passed over time at each voltage. Equations built from those relationships reproduced the electrical pulse traveling along a nerve and its propagation, with additional physical measurements where needed. The achievement included the dependencies connecting the measurements and the pulse. A list of reproduced observations would leave those dependencies out.

The equations below describe a feedback loop: voltage changes how the gating variables evolve; these variables set ionic conductances, and the resulting currents change voltage. Describing propagation also requires electrical coupling along the nerve.

<div id="hh-equations" class="hh-model" role="group" aria-label="Hodgkin–Huxley model equations">
<math display="block" aria-label="Total current equals capacitive current plus sodium, potassium, and leak currents"><mi>I</mi><mo>=</mo><msub><mi>C</mi><mi>M</mi></msub><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><msub><mi>I</mi><mtext>Na</mtext></msub><mo>+</mo><msub><mi>I</mi><mi>K</mi></msub><mo>+</mo><msub><mi>I</mi><mi>l</mi></msub></math>
<div class="hh-currents">
<math aria-label="Sodium current"><msub><mi>I</mi><mtext>Na</mtext></msub><mo>=</mo><msub><mover><mi>g</mi><mo>¯</mo></mover><mtext>Na</mtext></msub><msup><mi>m</mi><mn>3</mn></msup><mi>h</mi><mo>(</mo><mi>V</mi><mo>−</mo><msub><mi>V</mi><mtext>Na</mtext></msub><mo>)</mo></math>
<math aria-label="Potassium current"><msub><mi>I</mi><mi>K</mi></msub><mo>=</mo><msub><mover><mi>g</mi><mo>¯</mo></mover><mi>K</mi></msub><msup><mi>n</mi><mn>4</mn></msup><mo>(</mo><mi>V</mi><mo>−</mo><msub><mi>V</mi><mi>K</mi></msub><mo>)</mo></math>
<math aria-label="Leak current"><msub><mi>I</mi><mi>l</mi></msub><mo>=</mo><msub><mover><mi>g</mi><mo>¯</mo></mover><mi>l</mi></msub><mo>(</mo><mi>V</mi><mo>−</mo><msub><mi>V</mi><mi>l</mi></msub><mo>)</mo></math>
</div>
<math display="block" aria-label="Each gating variable evolves with voltage-dependent opening and closing rates"><mfrac><mrow><mi>d</mi><mi>q</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>α</mi><mi>q</mi></msub><mo>(</mo><mi>V</mi><mo>)</mo><mo>(</mo><mn>1</mn><mo>−</mo><mi>q</mi><mo>)</mo><mo>−</mo><msub><mi>β</mi><mi>q</mi></msub><mo>(</mo><mi>V</mi><mo>)</mo><mi>q</mi></math>
<p class="hh-symbols"><i>V</i> is voltage relative to rest; <i>C</i><sub>M</sub> is membrane capacitance per unit area, describing its ability to store charge. The currents are also per unit area: sodium (Na), potassium (K), and a residual “leak” (<i>l</i>). Each <i>V</i> with a subscript is the voltage at which that current vanishes; the barred <i>g</i>s set conductance scales. The variables <i>m</i>, <i>h</i>, and <i>n</i>, between 0 and 1, describe sodium activation, sodium availability, and potassium activation. The last equation applies to each (<i>q</i>), with voltage-dependent rates α and β.</p>
<p class="hh-convention">Original sign convention: depolarization makes <i>V</i> negative; inward membrane current is positive. The three gating equations are grouped into one for readability.</p>
</div>

<figure id="figure-hh">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/scientific-value/hh-mobile.svg" />
<img src="/images/writing/scientific-value/hh-desktop.svg" alt="Controlled membrane-current measurements support conductance relationships; equations built from them connect to the nerve pulse and its propagation. Experimental support and model derivation are different steps." loading="lazy" />
</picture>
<figcaption>Measurements support relationships; those relationships support further inferences. This schematic separates experimental support from model derivation. Reproducing the nerve pulse did not determine every microscopic mechanism behind membrane permeability.</figcaption>
</figure>

A common account must also accommodate relationships that are hard to understand intuitively. In [models of neural rhythms](https://elifesciences.org/articles/56261), a joint account of plausible conductances can preserve dependencies lost by listing their separate ranges, conditional on the model and its assumptions. [Cao and Yamins](https://doi.org/10.1016/j.cogsys.2024.101244) defend mechanistic explanations that depart from familiar expectations of intelligibility, while requiring an appropriate correspondence between model and target. I regard a supported relationship as a contribution before an intuitive explanation is available. Making it understandable can add a further achievement.

A common representation would need to record more than the claim at the end of a study: how that claim concerns its subject, what supports it, and which usable methods connect the two. These relations let us distinguish new content, new support, and new capabilities without assigning credit anew whenever they are redescribed.

Identifying these changes is still some distance from explaining their value. A genuinely new true result can be slight; two substantial advances can matter for different reasons. The theory must explain importance as well as recognize contributions. Before attempting that broader comparison, we can ask what even one defensible value judgment would require. An unchanged answer, obtained on stronger grounds, is a revealing place to begin.

<span id="the-same-answer-with-better-reasons"></span>
<span id="how-much-can-we-prove-about-value"></span>
<span id="can-scientific-value-judgments-be-proved"></span>

## What would justify a scientific value judgment?

Suppose two investigations reach the same answer, but the second overcomes a real weakness in the first investigation's evidence. Does it add scientific value? One could value the stronger evidence only for its prospects of leading to further true conclusions. I would credit the genuine improvement in support as an achievement in its own right. The disagreement concerns what science has accomplished even when its answer to the original question stays the same.

Bell experiments make the scientific difference precise. They investigate whether correlations between separated systems can be explained by *local* mechanisms: each laboratory's outcome depends on its own measurement choice and on shared hidden variables, independent of those choices. Quantum theory predicts correlations exceeding the limits of these explanations.

In one version, called CHSH, each of two laboratories chooses between settings 0 and 1 and records +1 or −1. For each setting pair, the average product of the outcomes measures agreement: matches contribute +1, mismatches −1. Add the correlations for 00, 01, and 10, then subtract the correlation for 11. Under the local assumptions, the score's magnitude is at most 2. But [selective detection](https://arxiv.org/abs/1407.0363) can make the recorded trials a misleading sample.

In the first panel below, shared hidden variables carry labels specifying when each detector reports a result. The four label pairs are equally likely and independent of the measurement choices. Each laboratory retains a trial only when its setting matches its label; a trial enters the correlation only when both report. Every setting pair retains one quarter of the trials, but a different quarter. The outputs can be assigned in advance so that, within the retained groups, they agree 80% of the time for 00, 01, and 10, and 20% for 11. Those proportions give correlations of 0.6, 0.6, 0.6, and −0.6: a correctly calculated score of 2.4. These are exact model averages; finite records also require statistical error control. The score alone does not establish the intended conclusion.

<figure id="figure-bell">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/scientific-value/bell-mobile.svg" />
<img src="/images/writing/scientific-value/bell-desktop.svg" alt="First panel: different setting pairs retain different quarters of a shared hidden population, producing a CHSH score of 2.4 in a local model. Separate second panel: a broader valid guarantee includes a relevant selection mechanism omitted by a narrower guarantee." loading="lazy" />
</picture>
<figcaption>The first panel is a mathematical construction, not experimental data. The second depicts a separate comparison between informative studies of the same question, each with valid error control at the same level. The broader guarantee addresses a relevant vulnerability. Region size measures neither probability nor scientific value. <a href="/papers/scientific-value-2026-09-08.pdf#page=11">Appendix A</a> supplies the construction and conditions.</figcaption>
</figure>

A [2015 experiment led by Hensen](https://arxiv.org/abs/1508.05949) addressed detection and locality loopholes together. A preparation signal identified valid trials independently of the later measurement choices, and each valid trial received an outcome at both laboratories. The timing prevented a signal traveling at or below the speed of light from carrying one laboratory's choice to the other before its outcome was recorded. The experiment's conclusion could withstand explanations that a less protected design would leave open.

The second panel sets up a separate comparison between two informative studies of the same question, against the same background. Each bounds the probability of wrongly rejecting a local mechanism, at the same error level. One guarantee covers a restricted class of mechanisms. The other covers a wider class, including a relevant selection mechanism that could undermine the restricted inference. The improvement concerns the range of explanations the evidence can withstand; it does not follow merely from a higher score or a longer list of controlled variables.

A scientific conclusion attributes something to its subject. An unresolved selection mechanism leaves a specific reason to doubt whether the observation supports that attribution. The stronger study has established an error guarantee that covers this vulnerability while retaining informative evidence. That extends the conditions under which its method can support the conclusion, even if no further discovery follows. I take this extension to be part of successful scientific inquiry, deserving credit now. The value principle I would carry beyond Bell is therefore: **resolving a genuine vulnerability in the support for a scientific answer deserves recognition, even when that answer is unchanged.** This is a commitment about the scope of scientific achievement. It requires informative evidence; a procedure that never concludes anything can avoid errors without achieving this improvement.

The principle has consequences for other research. A replication that overcomes an instrument-specific vulnerability can earn credit through the same reason; copying the original evidence cannot. A study may retain credit for a real improvement in error protection even if its particular conclusion later proves false. The false claim loses its standing as established content. If the supposed improvement itself depended on a false premise, its credit must also be reconsidered. The theory has to follow the achievement through these different outcomes.

A value judgment now has a structure that can be examined: scientific premises establish the improvement; a value principle explains why it merits recognition; an argument connects the two. The paper proposes a form in which such a judgment could be made precise:

<div id="value-judgment" class="value-judgment" role="group" aria-label="A proposed form for a scientific value judgment">
<math display="block" aria-label="From premises Gamma, value principles F, and scientific background K, argument pi establishes that study A is no worse than study B on aspect d for questions Q"><mi>Γ</mi><mo>;</mo><mi>F</mi><mo>;</mo><mi>K</mi><mo>⊢</mo><mi>π</mi><mo>:</mo><mi>A</mi><msub><mo>≽</mo><mrow><mi>d</mi><mo>,</mo><mi>Q</mi></mrow></msub><mi>B</mi></math>
<p class="judgment-reading">Given the stated background, premises, and value principles, an argument establishes that study A is <em>no worse than</em> study B on one aspect of the questions under study.</p>
<dl class="judgment-key">
<div><dt>What the judgment assumes</dt><dd><i>K</i> is the scientific background; Γ the empirical and mathematical premises about the studies; <i>F</i> the value principles.</dd></div>
<div><dt>How it follows</dt><dd>π labels the argument. The symbol ⊢ means that the judgment is derivable from those commitments.</dd></div>
<div><dt>What it compares</dt><dd>A ≽<sub><i>d</i>,<i>Q</i></sub> B means that A is no worse than B on aspect <i>d</i> for questions <i>Q</i>.</dd></div>
</dl>
</div>

In the Bell comparison, let A be the study with the wider valid guarantee and B the study with the narrower one. The questions concern local explanations of the correlations; the aspect is evidential coverage. The premises specify the mechanisms and error guarantees, including the requirement for informative evidence. The value principle credits overcoming the genuine vulnerability. Together, these would support a comparison on that aspect. Precision, cost, and other achievements can still affect the overall comparison. Writing the principle as an axiom would expose its role, while leaving its justification open to criticism.

**Scientific value judgments should themselves bear a burden of proof.** Where the argument can be formalized, an independent checker could verify the claimed consequence. [Proof-carrying code](https://doi.org/10.1145/263699.263712) provides an engineering precedent for checking a producer's proof against an explicit specification. Measurements must support the empirical premises; scientific and philosophical arguments must support the value principles. This would give us access to the grounds of a judgment even when no individual can retrace the whole research process. Human and learned evaluators could both contribute such arguments.

## How general could such a theory be?

The Bell judgment identifies one kind of value. A general theory must explain how its reason relates to the reasons for valuing a new connection, a proof, or a new experimental capability. Simply assigning a separate weight to every type would leave the central question to whoever chose the weights. The ambition is to derive some of these relations from the scientific differences themselves, together with principles we can defend.

Consider two corrections to assumptions underlying accepted results. Each initially repairs the support for one conclusion. If the second correction also repairs a different inference in another area, there is a further reason to value it: its effect reaches more of what we take to be established. Rewriting the first conclusion in ten equivalent ways supplies no such reason. A principle crediting improvements in support must therefore track the dependencies that were repaired, rather than the number of claims reporting them. A unification can matter through a different dependence, explaining why previously separate relationships hold together. A theory should explain how these dependencies affect importance, and what can justify comparing their effects.

There is mathematical precedent for deriving a comparison without first choosing a universal score. Suppose a system has two unknown binary properties, x and y, with all four combinations possible. A reveals x; B reveals y; C reveals both. C can reproduce A or B by discarding a bit. A cannot reproduce B: observing x = 0 leaves both 00 and 01 possible, although B distinguishes them. The reverse also fails.

<figure id="figure-information">
<picture>
<source media="(max-width: 760px)" srcset="/images/writing/scientific-value/information-mobile.svg" />
<img src="/images/writing/scientific-value/information-desktop.svg" alt="Four equally likely states, 00, 01, 10, and 11. A distinguishes x but not y, B distinguishes y but not x, and C distinguishes all four states. C can simulate A or B by discarding one bit; A and B cannot simulate each other." loading="lazy" />
</picture>
<figcaption>Each grouping contains states the observation cannot distinguish. C preserves both capabilities; A and B each supply a capability the other lacks. This is an information comparison under the stated model, with acquisition and processing costs set aside. The example uses four equally likely states. See <a href="/papers/scientific-value-2026-09-08.pdf#page=12">Appendix B</a>.</figcaption>
</figure>

[Blackwell's theory of experiments](https://doi.org/10.1214/aoms/1177729032) generalizes this idea. In the finite setting, suppose one rule, possibly using randomness, converts C's observations into observations with exactly A's distribution for every underlying state, without knowing that state. Anyone using C can reproduce every decision procedure available after A. For any finite decision problem and prior over states, the smallest achievable average decision cost is therefore no greater with C, setting acquisition and processing costs aside. A single mathematical relation constrains a whole class of comparisons.

A and B each reveal one bit, yet supply different capabilities. Under this information criterion they are proved incomparable, which differs from equality and from an unanswered comparison. The relation is a *preorder*; grouping equivalent experiments gives a *partial order*. To obtain a scientific value judgment, we would also need a reason to value the capabilities: for questions about the same target, I would credit preserving existing, supported distinctions while adding a relevant one. An unrelated random bit does not improve what can be established about that target. Choosing between x and y, or entirely different questions, requires further reasons.

That is the difficult step a general theory must confront. Can principles about scientific relationships and their support yield comparisons across questions without taking each question's importance as an unexplained input? [Fanelli's information-compression account of knowledge](https://eprints.lse.ac.uk/100106/3/rsos.181055.pdf) is one existing quantitative proposal to investigate. A candidate theory should explain which scientific differences its quantities capture, what value commitments they embody, and which judgments follow. Mathematical elegance alone cannot establish that it has measured the intended value.

Nor is it settled how many demands a general theory can satisfy together. A precise meaning, a procedure that evaluates every study, an independently checkable argument, and a complete ranking are different achievements. We should investigate when a common numerical scale can preserve the justified comparisons, which requirements conflict, and what guarantees an approximation could retain. Proving a limit would be a substantive result if it identified the assumptions responsible. Local constructions like Blackwell's make part of the ambition concrete; they leave its reach across science to be established.

<span id="when-science-changes-the-standard"></span>
<span id="when-science-challenges-the-theory"></span>

## When science changes the terms of evaluation

A general theory faces a further difficulty: science changes the concepts with which achievements are described. Suppose an evaluator awards scientific credit to a mechanistic model only when every component has an intuitive explanation. A model that establishes a supported relationship without meeting that requirement can challenge the rule itself. If the evaluator applied the rule correctly, repairing the software would preserve the exclusion. The value principle is what needs defending or revising, in response to an achievement it initially fails to reward.

The information example separates two sorts of change. Initially, studies might be assessed only on their ability to establish x. A then outperforms B on that aspect. An investigation showing that y distinguishes relevant mechanisms that agree on x gives a reason to include y. Under a rule requiring no loss on any included aspect, A and B become incomparable. The scientific background has expanded and the overall assessment changes, while the old comparison concerning x remains valid.

Changing the principle that demands intuitive understanding is a deeper revision: it changes what qualifies for scientific credit. Rules can specify what such a revision must justify and which earlier judgments survive, without listing every future dimension. But the admission rules can themselves be challenged. Restrictive rules may preserve old exclusions; unrestricted revision allows an evaluator to redefine success around its favored result. A theory has to explain both how it can learn from an unexpected achievement and why that learning is more than permission to change its answer.

Tao's emphasis on community understanding brings this back to mathematical practice. Explaining a result so others can use it deserves credit; I also regard a supported relationship as a contribution before its full assimilation. A theory must account for these achievements and defend the trade-offs it makes. Its limits matter for exploration too. Labeling unfamiliar work “not yet assessed” will not, by itself, give it the opportunity to reveal what the current theory misses.

<span id="when-evaluations-guide-research"></span>
<span id="from-value-judgments-to-research-objectives"></span>

## From evaluation to research choices

AI scientists will act while these theoretical questions remain open. OpenAI reports that, after an intermediate result on the related Euler equations, researchers judged Navier–Stokes more promising and redirected agents from other problems. An existing achievement changed the prospects of further ones. Research choices depend on those prospects and costs as well as on the value of what has already been established.

This creates another obligation for a value theory. [DiscoveryBench](https://proceedings.iclr.cc/paper_files/paper/2025/file/0d70af566e69f1dfb687791ecf955e28-Paper-Conference.pdf) evaluates the recovery of verified hypotheses from supplied data. Imagine extending the task to an agent that chooses how to collect evidence. Two investigations return the same relationship, but one overcomes a sampling vulnerability. An answer-only reward gives the added protection no credit; subtracting its extra cost can actively discourage it. A scientifically defensible contribution can disappear when the objective omits the difference that made it valuable.

Even correct evaluations can be used badly. Suppose checkable certificates establish that A has value *at least 1* and B has value *at least 2* on an agreed scale. Both are true when A's actual value is 100 and B's is 2. Maximizing the certified lower bound selects B. Upper bounds can sometimes resolve the comparison: if B's minimum exceeds A's maximum, B is better on that scale. [Appendix D](/papers/scientific-value-2026-09-08.pdf#page=13) develops the example. The objective must respect what an assessment actually establishes.

Practical objectives will have to work with incomplete comparisons, uncertain evidence, and changing scientific backgrounds. [Multiobjective decision methods](https://www.cs.ox.ac.uk/people/shimon.whiteson/pubs/roijersjair13.pdf) provide ways to retain alternatives, but their number can grow rapidly. Evidence may arrive too late, and constructing a certificate may cost more than checking it. Developing useful losses, verifiers, and selection rules is part of the research program. Cheaper learned estimates may help; their benefits and failures need to be tested under the optimization they guide.

<span id="a-research-task-for-the-people-building-ai-scientists"></span>

## Building the theory

The first task is to construct accounts of scientific contribution that can survive their own consequences. These accounts must track what evidence and methods actually make available, including relationships established jointly by several studies. When a combination enables an inference neither study supports alone, the theory must explain that contribution before assuming its value is the sum of isolated scores. If a change of wording alone multiplies their value, the account has mistaken its representation for the achievement.

The next task is to propose principles that constrain importance, then work out what they jointly imply. A theory should make us commit to some judgments and give reasons to reject others, including judgments that initially feel attractive. For example, can a principle crediting the repair of shared assumptions explain why one correction reaches further than another, while resisting an artificial multiplication of downstream claims? Can it be combined with a principle valuing explanatory unification? If every comparison still requires its desired answer to be supplied as a weight, the theory has left importance unexplained. If two defensible sets of principles disagree, locating the commitment responsible would itself clarify the dispute.

Scientific practice must be able to challenge the resulting theories. Experts may recognize an achievement that the rules omit; an explicit argument may expose a prejudice that experts share. Historical and contemporary cases can test whether a principle identifies an actual scientific difference or rewards a description of one. Experiments can undermine the premises of a particular judgment. Philosophical criticism can challenge the reason for valuing the difference. Agreement with reviewers cannot be the sole standard for a theory intended, in part, to explain when reviewers are mistaken.

Solving the famous problems would leave us with new relationships, methods, and questions that their original formulations did not anticipate. Which of those developments should science pursue, and on what grounds?
