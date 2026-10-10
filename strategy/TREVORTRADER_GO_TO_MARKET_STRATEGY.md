# TrevorTrader Go-to-Market & Sales Strategy

**Version:** 2.0 (October 2026). Supersedes v1, the October 2026 working strategy.  
**Status:** Working strategy for review. Not approved for launch.  
**Purpose:** Build an evidence-led trading software and media business.  
**Core principle:** Publish wins and losses, distinguish paper from live results, and never claim a proven edge without sufficient evidence.

### What changed from v1

| Area | v1 | v2 |
| --- | --- | --- |
| Lead product | Momentum scanner | **Trade review and exit analytics**, entered through a **Free Exit Audit** of the customer's own broker export |
| Pricing | Scanner $19, Signals $49, Autopilot $99 | **Recap $15/month** and **Pro $29/month**; scanner, signals and Autopilot deferred behind explicit gates |
| YouTube | Programming ideas | TrevorTrader Academy plan with cadence, verified YPP thresholds and a monetization timeline that does not depend on ad revenue |
| Sales | General funnel | Founding-member offer, referrals, free trials, and acquisition, conversion and retention targets |
| Advertising | Not covered | Test budgets, profitability requirements and stop rules |
| Sponsorships | One paragraph | Eligibility, pricing methodology, FTC disclosures and editorial independence |
| Execution | Phases without dates | 30/60/90-day roadmap with measurable milestones |

---

## 1. Positioning

TrevorTrader is two complementary businesses:

1. **Software:** Tools that show active traders what actually happened in their own trades, especially at the exit, using their real broker records.
2. **Media and education:** TrevorTrader Academy on YouTube, built around the silver-and-blue TrevorTrader BOT and its fully disclosed daily results.

**Why lead with exit analytics instead of a scanner:**

- **The customer's own data is the evidence.** An exit audit analyzes the customer's real fills. We don't have to persuade anyone that our signals work, and nothing in the product depends on TrevorTrader having a proven edge.
- **It reuses the BOT's own review discipline.** The Core research reviews every BOT trade from signal through entry, management and exit, and measures entry quality and exit-rule effects separately, so a favorable exit rule can't make a weak entry look good. Applying that same trade-level review to customers' trades is a product we can build and teach now. It isn't a claim that exits matter more than entries.
- **Lower regulatory and operational risk.** Describing past trades is a different activity from recommending future ones (see §10). A scanner and signals bring market-data redistribution, latency and advice questions that an analytics product mostly avoids.
- **A natural free entry point.** "Upload your broker export, see what your exits cost you" is concrete, quick to deliver and easy to explain in a video.

**Positioning line:** *Trade the strategy. Without emotion.* This describes rules-based review and execution, not guaranteed profitability.

**Product promise:** *See what your exits cost you, from your own broker records.*

## 2. Evidence commitments (non-negotiable)

These apply to every video, web page, ad, sponsorship and sales conversation:

1. **Verified results only.** BOT results shown publicly come from broker-reconciled fills or are labeled as paper, simulated or hypothetical, prominently and each time they appear.
2. **Losses are published.** Every BOT trading day is reported, including losing days, no-trade days and mistakes. Losing recaps are never deleted, unlisted or left out of the weekly totals.
3. **Net, not gross.** Results include fees, spreads and slippage, use entry at the ask and exit at the bid, and state the sample size.
4. **No cherry-picking in marketing.** Ads and thumbnails can't feature a single winning trade unless the period's full results appear alongside it.
5. **Realistic claims.** No "make money," "guaranteed," "proven edge," income claims or implied replicability. The Exit Audit describes past trades; it doesn't predict what a customer will earn.
6. **Customer data stays private.** Customer audit results are never published, or used as testimonials or case studies, without written opt-in consent and anonymization.

## 3. Customer segments

| Segment | Problem | First offer |
| --- | --- | --- |
| **Active self-directed traders** (primary) | Don't know whether their losses come from entries, exits, sizing or costs | Free Exit Audit → Recap |
| **Serious or systematic traders** | Want rule-level exit testing on their own trade history | Pro |
| **Academy viewers and learners** | Want to understand momentum trading, risk and exits | Free videos → Exit Audit when they have trades |
| **Future scanner and automation users** | Want ideas or execution | Waitlist only, until the gates in §4 are met |

Validate each segment with interviews and actual usage before expanding the product. The primary segment is the only one we build for in the first 90 days.

## 4. Product and pricing

### 4.1 Free Exit Audit (lead product)

- **Input:** The customer uploads a CSV export of executed trades from a supported broker. Start with two or three brokers, chosen from interview demand. TrevorTrader never asks for broker passwords, and no API connection is required at this stage.
- **Output:** A one-time report on up to 90 days of trades:
  - Exit efficiency: the share of each trade's maximum favorable excursion (MFE) that was captured
  - Give-back from peak, and maximum adverse excursion (MAE) compared with the stop
  - Hold time, and results by time of day and holding period
  - Fees and commissions, and an estimate of slippage where market data allows
  - The three largest "exit leaks," shown with charts of the customer's own trades
  - An optional **hypothetical** comparison against simple exit rules, clearly labeled as hypothetical, with no claim that it will hold in the future
- **Delivery:** Automated where reliable. During the beta, the founder reviews each report before it goes out, which doubles as customer research.
- **Data handling:** Strip account numbers and personal identifiers on upload, publish a retention period (for example, delete raw files after 30 days unless the customer subscribes), encrypt files in storage and in transit, and use data only to produce the customer's own reports.
- **Constraint:** MFE/MAE needs intraday historical price data for the instruments traded. Stocks come first. Options (including the 0DTE/1DTE SPY contracts the BOT trades) need historical options data, which may require OPRA-licensed sources and cost more. Confirm the data vendor's license allows deriving per-customer analytics before launch, and budget the cost per audit.

### 4.2 Paid tiers (pricing test)

| Tier | Price | Includes |
| --- | ---: | --- |
| **Free Exit Audit** | Free, one per customer | One-time 90-day report described above |
| **TrevorTrader Recap** | **$15/month** | Ongoing imports (weekly or daily), a personal weekly recap of the customer's trades, exit-efficiency trends, a trade journal with tags and notes, and the full BOT daily-recap archive with its reconciled data |
| **TrevorTrader Pro** | **$29/month** | Everything in Recap, plus an exit-rule lab (hypothetical tests of stop, target and trailing rules on the customer's own history), breakdowns by setup and tag, multiple accounts, data export and priority support |

- **These prices are hypotheses to test, not validated prices.** The test passes if at least **30% of paid customers choose Pro** and **monthly churn stays at or below 10%** over the first three billing cycles. If Pro uptake is under 15%, revisit what Pro includes before changing prices.
- **Annual plans:** Don't offer them until at least three months of retention data exist. Then test about two months free (for example, $150/year for Recap and $290/year for Pro).
- **Cost check before launch:** Market data, hosting, payment processing and support must leave **at least 70% gross margin** on each tier.

### 4.3 Deferred products (later, gated)

| Product | Earliest consideration | Gate |
| --- | --- | --- |
| Scanner | After 250 paying analytics customers | Licensed market data for redistribution, latency disclosures, and interview evidence that customers will pay for it |
| Signals + research | After the scanner is stable | Prospective (not backtested-only) validation over at least 100 trades, plus legal review of adviser obligations (§10) |
| Autopilot | Last | Everything above, plus broker API approval, kill switch, position limits, incident procedures, extensive live validation and qualified legal clearance |

The website may keep a waitlist for these products, but must not describe them as available or imply results.

## 5. TrevorTrader Academy (YouTube)

### 5.1 Role

The Academy is the top of the funnel and a media business in its own right. Its job, in order: build trust through transparent BOT results, teach exit discipline, and direct viewers to the Free Exit Audit.

### 5.2 Programming

| Format | Cadence | Length | Content |
| --- | --- | --- | --- |
| **Life of the BOT** daily recap | Each trading day | 3–5 min | What the BOT scanned, traded or skipped and why, entries and exits, net P&L after costs, and one lesson. No-trade and losing days are full episodes. |
| **BOT vs. Market** weekly | Weekly | 8–12 min | Trade count, win rate, net expectancy, drawdown, mistakes, rule changes and benchmark comparison |
| **Exit School** | Weekly | 8–15 min | Evergreen lessons on MFE/MAE, give-back, stop placement, scaling out and the costs of slippage |
| **Audit Breakdowns** | Every two weeks | 10–15 min | An anonymized Exit Audit, shown only with the customer's written consent |
| **Shorts** | 3–5 per week | < 60 s | Original excerpts that point to full episodes, not repetitive mass uploads |

The BOT head is the narrator and visual identity. Every video uses real decision logs, charts and reconciled fills, with original commentary. Charts and data shown must be within the data vendor's redistribution rights.

### 5.3 YouTube monetization requirements (checked October 2026)

YouTube Partner Program thresholds, as reported by multiple 2026 sources:

| Tier | Through Jan 31, 2027 | From Feb 1, 2027 (announced) |
| --- | --- | --- |
| **Fan funding** (memberships, Super Thanks/Chat, Shopping; no ad revenue) | 500 subscribers, 3 public uploads in last 90 days, and either 3,000 public watch hours in 12 months or 3M Shorts views in 90 days | Reported unchanged |
| **Ad revenue sharing** | 1,000 subscribers and either 4,000 public long-form watch hours in 12 months or 10M Shorts views in 90 days | **1,000 subscribers and either 8,000 watch hours in 12 months or 20M Shorts views in 90 days** for new applicants |

Other requirements include two-step verification, no active Community Guidelines strikes, a linked AdSense account, and living in an eligible country. Watch hours and Shorts views are separate routes that can't be combined, and Shorts views don't count toward watch hours. Reported revenue shares are 55% of long-form ad revenue and 45% of allocated Shorts revenue.

> **Verify before relying on these numbers.** The figures come from secondary sources (vidIQ, AIR Media-Tech, Search Engine Journal and others) that agree on the headline numbers. Confirm them on YouTube's own Help Center page ("YouTube Partner Program overview & eligibility") before planning around them. Sources disagree on how the 2027 Shorts rules apply to channels already in the program.

**Planning implication:** A new channel reaching 4,000 watch hours before February 1, 2027 is unlikely. **Plan for the 8,000-hour threshold, and don't count on ad revenue in the first 6–12 months.** The Academy's early value comes from Exit Audit signups and, once the audience exists, sponsorships, which don't require YPP membership.

Content rules to follow: YouTube's policies on inauthentic (formerly "reused" and repetitive) content, which make templated daily recaps a risk unless each one has substantial original analysis; policies on scams and deceptive practices in financial content; and advertiser-friendly guidelines, since aggressive income claims also lower ad suitability.

### 5.4 Audience growth targets (hypotheses)

| Metric | Day 30 | Day 60 | Day 90 |
| --- | ---: | ---: | ---: |
| Long-form videos published (cumulative) | 20 | 40 | 60 |
| Subscribers | 100 | 300 | 750 |
| Public watch hours (cumulative) | 150 | 600 | 1,500 |
| Average view duration on recaps | ≥ 40% | ≥ 45% | ≥ 45% |
| Video → website click-through (end screens, description links) | measured | ≥ 1% of views | ≥ 1.5% of views |

Every 30 days, review topics by retention and click-through. Drop formats that are below channel median on both for two consecutive months.

## 6. Sales system

### 6.1 Funnel

**YouTube / search / referrals → TrevorTrader.com → Free Exit Audit → email follow-up → 14-day Recap trial → Recap or Pro subscription → referrals.**

### 6.2 Offers

- **Founding members:** The first **100 paying customers** lock in **$10/month for Recap or $19/month for Pro** for as long as they stay continuously subscribed. In return, they're invited to a monthly feedback call and get early access to new features. Close the offer publicly at 100 members or 90 days after launch, whichever comes first, and don't extend it to manufacture urgency.
- **Free trial:** Recap and Pro each come with a **14-day trial** after the Free Exit Audit. Test card-required against no-card trials once there's enough volume (about 200 trials per arm). Send a reminder 3 days before the first charge, and make cancellation possible online in one step.
- **Referrals:** A paying customer who refers a new paying customer gets **one free month**, and the new customer gets **one free month** after their first paid month. Start with credits, not cash. Because rewards are a material connection under FTC rules, anyone who promotes TrevorTrader for a referral reward must disclose it (§8.3). Don't use referral leaderboards or reward people for posting performance.
- **No discounting beyond these offers** in the first 90 days, so the price test stays clean.

### 6.3 Customer acquisition

| Channel | Role | First 90 days |
| --- | --- | --- |
| Academy (YouTube) | Primary, organic | Daily recaps, plus Exit School episodes that end with a call to run an audit |
| Search / website | Organic | Exit-analytics guides ("what is MFE/MAE," "how to calculate give-back") on TrevorTrader.com |
| Communities | Organic, founder-led | Helpful posts and free audits in trading communities, within each community's self-promotion rules |
| Founder sales | Direct | 20+ customer interviews and personally delivered audits |
| Paid ads | Controlled test | Only after organic conversion data exists (§7) |
| Sponsorships | Revenue, not acquisition | Only after the §8 criteria are met |

### 6.4 Conversion and retention targets (hypotheses, revisited at Day 90)

| Funnel step | Target |
| --- | ---: |
| Website visitor → Exit Audit upload started | 3% |
| Upload started → audit delivered | 70% |
| Audit delivered → trial started | 25% |
| Trial → paid | 40% |
| **Audit delivered → paid** (combined) | **≈ 10%** |
| Paid mix: Pro share | ≥ 30% |
| Monthly logo churn, months 1–3 | ≤ 10% |
| Monthly logo churn, after month 3 | ≤ 6% |
| Weekly active paid users (imported or viewed a recap) | ≥ 60% |

### 6.5 Retention plan

- **Weekly habit:** An automated Sunday email with the customer's weekly recap and one exit insight.
- **Activation:** A customer counts as activated when they've imported a second statement within 14 days of their first. Contact non-activated trial users personally during the beta.
- **Cancellation:** One-step online cancellation, plus an optional one-question exit survey. No retention traps, and pausing a subscription is offered as an option.
- **Release notes:** Publish monthly, and highlight changes that came from customer requests.

## 7. Advertising

### 7.1 When to start

Don't spend on paid ads until **both** conditions hold:

1. At least **50 Exit Audits have been delivered organically**, giving a baseline audit-to-paid conversion rate.
2. Billing, trial reminders and cancellation have worked end to end for at least one full billing cycle.

### 7.2 Profitability requirements

Unit economics use **contribution margin** (revenue minus payment processing, market data, hosting and support per customer), not gross revenue.

| Metric (working assumptions) | Recap | Pro |
| --- | ---: | ---: |
| Price | $15 | $29 |
| Assumed contribution margin | ~$12 | ~$23 |
| Expected lifetime at 8% monthly churn | ~12.5 months | ~12.5 months |
| Lifetime contribution (LTV) | ~$150 | ~$290 |
| **Maximum CAC (LTV : CAC ≥ 3 : 1)** | **$50** | **$95** |

Rules for every campaign:

- **Blended CAC must be ≤ $50** at the first-90-day mix (about 70% Recap, 30% Pro, at founding prices where they apply). Founding-member pricing lowers LTV, so check CAC against founding prices while that offer is open.
- **CAC payback within 4 months** of contribution margin.
- Recompute the maximum CAC monthly using **observed** churn and margin, which replace the assumptions above as soon as they exist.

### 7.3 Test budgets

| Stage | Budget | Scope |
| --- | ---: | --- |
| Test 1 | **$300 per channel**, up to 2 channels at once, **$600 total** | YouTube video ads (in-feed/in-stream) promoting an Exit School episode or the Free Exit Audit; one search campaign on exit-analytics terms |
| Test 2 | Up to **$1,500/month** total | Only campaigns that passed Test 1 |
| Scale | Increase spend by up to **50% per month** | Only while blended CAC and payback stay within §7.2 |

**Hard cap:** Total ad spend stays at or below **$2,000 in the first 90 days**, whatever the results.

### 7.4 Stop rules

Stop or pause a campaign as soon as any of these is true:

1. **Spend reaches 2× the target CAC (about $100) with zero paid conversions**, or spend reaches the campaign's test budget with CAC above target.
2. **Cost per delivered audit is above $15** after at least 300 clicks (at 10% audit-to-paid conversion, that means CAC above $150).
3. **Trial-to-paid conversion from the campaign is below half the organic rate** after 20 trials.
4. **Refunds or chargebacks** above 5% of the campaign's paid customers.
5. **Any policy or claims problem:** ad disapproval for financial-services policy reasons, comments alleging misleading claims, or creative that drifts toward profit promises. Pause immediately and review.

Change only one variable at a time (creative, audience or offer). A stopped campaign can be relaunched once with new creative, but not twice in the same quarter.

### 7.5 Ad platform constraints

Google Ads and Meta both restrict financial-services ads, and may require advertiser verification or disallow claims about returns. Ad creative must follow §2: no income claims, no screenshots of winning trades without full results, and clear "education and analytics, not investment advice" framing.

## 8. Sponsorships

### 8.1 Eligibility

TrevorTrader will **consider** sponsors that meet all of these:

- Product relevant to traders or learners: brokers, journaling and charting tools, data vendors, education platforms, tax tools for traders, hardware and software
- Brokers and financial firms properly registered with relevant regulators (for example, FINRA/SIPC membership for U.S. broker-dealers)
- No guaranteed or advertised returns, and no "get rich" marketing
- We can test the product ourselves before agreeing to promote it
- Accept the editorial-independence terms in §8.4 in writing

TrevorTrader will **not accept**:

- Signal-selling or copy-trading groups, "trading bots" sold with performance claims, or managed-account offers
- Unregistered securities or tokens, offshore or unregulated brokers, and leveraged products marketed to beginners without proper risk disclosure
- Sponsors whose terms require positive results, specific trades or editorial approval
- Any sponsor that competes with or conflicts with a data or broker relationship we rely on for evidence, unless the conflict is disclosed and approved after review

### 8.2 Pricing methodology

Price integrations from **expected views**, not subscriber count:

> **Price = (expected 30-day views ÷ 1,000) × CPM rate × placement multiplier + usage-rights fee**

- **Expected 30-day views:** The median 30-day views of the last 10 long-form videos, or the specific series where the placement runs.
- **CPM rate:** Start with a hypothesis of **$25–$40 per 1,000 views** for a finance and trading audience. Test it in the first deals and adjust from what sponsors actually accept. Don't quote it as a market rate.
- **Placement multiplier:** 60–90 s integration = 1.0×; pre-roll mention (≤ 30 s) = 0.6×; dedicated video = 2.5–3×.
- **Usage-rights fee:** Extra if the sponsor wants to reuse the segment in its own ads (for example, +25% per 30 days of usage).
- **Minimum fee:** Set a floor so small deals still cover production time. Re-price quarterly from actual views, and give each sponsor a post-campaign report with views, click-throughs and retention.
- **Inventory cap:** No more than one sponsor per video, and no sponsor segment inside the trade-recap portion of Life of the BOT. Place it before or after the recap, clearly separated.

### 8.3 FTC disclosure requirements

Follow the FTC Endorsement Guides (16 CFR Part 255) and the FTC rule on consumer reviews and testimonials (16 CFR Part 465):

- **In the video:** Say it out loud ("This video is sponsored by …") **and** show it on screen at the start of the sponsored segment, not only in the description.
- **YouTube setting:** Check "My video contains paid promotion," which adds YouTube's paid-promotion label.
- **Description and pinned comment:** Disclose sponsorships and affiliate links above the "show more" fold.
- **Affiliate links and referral rewards** are material connections and need the same clear disclosure.
- **Honest opinions only:** Endorsements reflect real use, and no claims can be made that the sponsor couldn't substantiate itself. Don't post fake, bought or AI-generated reviews or testimonials, and don't suppress negative reviews.
- **Customer testimonials** must be typical or clearly qualified, and can't imply that results are typical when they aren't.

### 8.4 Editorial independence

Every sponsorship contract states:

1. The sponsor has **no review, approval or influence** over trading results, BOT decisions, recap content or the evidence dashboard.
2. The sponsor may check **factual claims about its own product** in the sponsored segment only.
3. TrevorTrader may **criticize** the sponsor's product in non-sponsored content, and will disclose the past relationship when doing so.
4. TrevorTrader may decline or end a sponsorship if it conflicts with the evidence commitments (§2).
5. A public **sponsors and affiliations page** on TrevorTrader.com lists current and past sponsors, affiliate relationships and any broker or data-vendor relationships.

## 9. 30/60/90-day roadmap

Day 0 = the date this strategy is approved. Every milestone is measurable; a missed milestone triggers review at the next checkpoint, not automatic delay of everything else.

### Days 1–30: Prove the audit

| Workstream | Milestone | Measure |
| --- | --- | --- |
| Product | Exit Audit MVP for **2 brokers' CSV exports** | 10 audits delivered, founder-reviewed |
| Research | Customer interviews | ≥ 15 interviews with active traders; top three exit pain points documented |
| Evidence | Public BOT evidence dashboard live with reconciled fills, losses and costs | Dashboard updated every trading day |
| Academy | Daily Life of the BOT recaps + first Exit School episodes | 20 long-form videos, ~100 subscribers |
| Website | Free Exit Audit landing page, privacy notice, risk disclosure, email capture | Page live; conversion tracking working |
| Compliance | Initial attorney consultation on §10 items | Written notes on the publisher's exclusion, data privacy and terms of service |
| Data | Market-data license confirmed for MFE/MAE analytics | Written vendor confirmation and cost per audit |

**Day 30 checkpoint:** Continue to paid launch only if at least 10 audits are delivered, **at least 5 audit recipients say they'd pay** for ongoing recaps, and data licensing is confirmed.

### Days 31–60: Launch paid tiers

| Workstream | Milestone | Measure |
| --- | --- | --- |
| Product | Recap ($15) and Pro ($29) live with billing, 14-day trial, reminders and one-step cancellation | End-to-end billing test passed |
| Sales | Founding-member offer open | **≥ 25 paying customers** |
| Product | Automated audits for at least 2 brokers | ≥ 50 audits delivered cumulative |
| Retention | Weekly recap email automated | ≥ 60% of paid customers active weekly |
| Referrals | Referral credits live | Referral share of new customers tracked |
| Academy | Weekly cadence held; first consented Audit Breakdown | 40 long-form videos, ~300 subscribers |
| Compliance | Terms of service, privacy policy, subscription terms reviewed by counsel | Published on site |

**Day 60 checkpoint:** Check trial→paid conversion against the 40% target, the Pro mix against 30%, and early churn. If audit→paid is under 5%, fix the product or offer before any paid ads.

### Days 61–90: Validate economics

| Workstream | Milestone | Measure |
| --- | --- | --- |
| Sales | Founding cohort growing | **≥ 75 paying customers**, ≥ 30% on Pro |
| Retention | First full cohort retention read | Month-1 churn ≤ 10% |
| Advertising | First paid test if §7.1 conditions are met | ≤ $600 spent; CAC measured against the $50 target; stop rules applied |
| Sponsorships | Media kit and sponsor policy page published; first outreach to eligible sponsors | ≥ 5 qualified conversations; signed deals only on §8.4 terms |
| Academy | 60 long-form videos; growth plan for the 8,000-hour YPP threshold | ~750 subscribers; ~1,500 cumulative watch hours |
| Product | Exit-rule lab (Pro) used | ≥ 50% of Pro customers run at least one test |
| Strategy | Day-90 review | Written review of pricing, the funnel, YouTube, ad results, and whether to start scanner research |

**Day 90 decision:** Continue, change or stop each workstream based on the scorecard in §11. Start scanner work only if analytics retention and margin targets are on track.

## 10. Financial regulatory considerations

> **Flagged for qualified legal review. This section is not legal advice.**

| Area | Consideration | Working approach |
| --- | --- | --- |
| **Investment adviser status** (Advisers Act; state laws) | Paid, personalized analysis of a customer's trades could look like personalized investment advice. The "publisher's exclusion" (*Lowe v. SEC*, 1985) generally covers impersonal, bona fide publications of general and regular circulation. Personalized audits may not qualify. | Describe what happened in past trades. Don't recommend specific securities, trades or position sizes. Label exit-rule tests as hypothetical. Confirm with counsel before launch, and again before signals. |
| **Hypothetical and backtested performance** | Regulators view hypothetical results as high-risk for misleading consumers. The SEC Marketing Rule applies to registered advisers, and the FTC Act applies to everyone. | Label prominently, disclose the method and limits, and never mix hypothetical with real results. Don't use hypothetical results in ads. |
| **Signals and automation** (future) | Very likely to raise adviser, broker-dealer or CFTC/NFA questions, depending on functionality and the instruments covered. | Deferred (§4.3), with legal clearance as a hard gate. |
| **Consumer protection** (FTC Act §5; state UDAP laws) | Deceptive claims, endorsements and testimonials | §2 and §8.3 |
| **Subscriptions and auto-renewal** (ROSCA; state auto-renewal laws such as California's) | Clear terms, consent, reminders and easy cancellation. Some states require online cancellation and renewal notices. | §6.2 and §6.5 already require these. Counsel to confirm state requirements. |
| **Data privacy and security** | Broker exports contain sensitive financial data. State privacy laws, breach-notification laws and FTC data-security expectations apply. | Minimize data, strip identifiers, keep a retention limit, encrypt, and publish a privacy policy. Counsel to assess GLBA applicability. |
| **Market data licensing** | Exchange and vendor licenses can restrict redistribution, display in videos and derived analytics. | Confirm in writing before audits launch and before charts appear in videos. |
| **Broker relationships** | Broker sponsorships or referral fees create conflicts, and may involve the broker's FINRA Rule 2210 obligations. | Disclose all relationships; editorial independence (§8.4). |
| **Taxes and business** | Sales tax on software subscriptions varies by state; also business insurance (E&O and cyber). | Use a billing provider with tax support; get insurance quotes before launch. |

"Education only" disclaimers don't by themselves remove regulatory obligations. What the product actually does is what counts.

## 11. Scorecard and decision gates

| Area | Day-90 KPI | Evidence needed before scaling |
| --- | --- | --- |
| Exit Audit | Audits delivered, delivery rate, audit→paid | ≥ 10% audit→paid sustained over 2 months |
| Subscriptions | Paying customers, Pro mix, churn, gross margin | ≥ 70% gross margin, churn ≤ 6% after month 3 |
| Academy | Videos, subscribers, watch hours, retention, click-through | Steady growth toward the YPP thresholds; consistent audit signups from video |
| Advertising | CAC, payback, stop-rule triggers | CAC ≤ $50 blended, payback ≤ 4 months |
| Sponsorships | Qualified conversations, signed deals, sponsor renewals | Renewals on §8.4 terms, with no editorial complaints |
| BOT research | Reconciled trades, net expectancy, drawdown | Prospective results across market conditions (≥ 100 trades per experiment) |
| Compliance | Counsel review completed | Written sign-off before each new product category |

## 12. Illustrative economics (not forecasts)

| Paying customers (70% Recap / 30% Pro) | MRR at list prices | MRR at founding prices |
| ---: | ---: | ---: |
| 100 | $1,920 | $1,270 |
| 250 | $4,800 | $3,175 |
| 1,000 | $19,200 | $12,700 |

These figures are before processing fees, data licenses, hosting, support, refunds, taxes and churn. A blended list price is about $19.20/month, so meaningful revenue depends on volume and retention, which is why acquisition cost discipline (§7) matters.

**YouTube ads:** Not modeled in the first 12 months because of the YPP thresholds (§5.3). Once monetized, the revenue depends on RPM, geography, the long-form versus Shorts mix and seasonality. Treat any RPM assumption as a scenario only.

## 13. Immediate next actions

1. Approve or revise this v2 strategy.
2. Choose the first two brokers for CSV import, based on the traders we interview.
3. Confirm market-data licensing for MFE/MAE analytics, and the cost per audit.
4. Build the Free Exit Audit landing page with privacy notice, risk disclosure and email capture.
5. Book the initial attorney consultation on §10.
6. Set up the daily data-to-video workflow for Life of the BOT and draft the first 10 Exit School titles.
7. Confirm current YouTube Partner Program requirements on YouTube's own Help Center.
8. Start customer interviews and deliver the first 10 founder-reviewed audits.

---

*Working strategy. Revenue, conversion and audience figures are hypotheses and scenarios, not projections or guarantees. TrevorTrader provides education and trade analytics, not investment advice. Trading involves substantial risk, including loss of capital. Past performance, real or hypothetical, does not guarantee future results.*
