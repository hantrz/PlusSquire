// Case study markup (hero + article). The site Navbar and Footer wrap it in page.tsx.
export const caseStudyHtml = String.raw`
<!-- HERO SECTION -->
  <header class="hero">
    <div class="container">
      <div class="content-container">
        
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/case-studies">Case Studies</a>
          <span>/</span>
          <span>DTC Skincare Growth</span>
        </div>

        <div class="tag-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Shopify Engineering · Klaviyo Automation · Growth Architecture
        </div>

        <h1 class="hero-title">
          How We Scaled a DTC Skincare Brand From <span class="highlight">$142K to $1.86M/Month</span> Through Full-Stack Retention
        </h1>

        <p class="hero-sub">
          The complete 90-day retention framework, custom Shopify UX engineering, and multi-channel attribution model that transformed an established clean skincare brand into an automated $574K+ monthly retention engine.
        </p>

        <div class="hero-meta-strip">
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client: Premium DTC Skincare Brand
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Execution: 90-Day Transformation
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Attribution: Strict 1-Day Interaction Window
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Delivered by: PlusSquire Core Team
          </div>
        </div>

      </div>
    </div>
  </header>

  <!-- MAIN ARTICLE -->
  <main class="container">
    <div class="content-container">

      <!-- HEADLINE RESULT CARD -->
      <section class="headline-card">
        <div class="headline-grid">
          <div class="stat-box">
            <span class="stat-label">Baseline Month</span>
            <strong class="stat-num">$142,380.50</strong>
            <span class="stat-meta">Monthly Store Revenue (September Baseline)</span>
          </div>
          <div class="stat-arrow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
          <div class="stat-box">
            <span class="stat-label">Peak Q4 Scale Window</span>
            <strong class="stat-num final-val">$1,864,520.00</strong>
            <span class="stat-meta">Monthly Store Revenue (Nov 20 – Dec 20 Window)</span>
          </div>
        </div>
        <div class="headline-notice">
          <strong>Transparent Attribution Notice:</strong> The top-line figure reflects total Shopify platform sales during peak season scaling. In accordance with PlusSquire’s rigorous reporting principles, we separate top-line store growth from directly attributed retention revenue. Below, you will find exact channel metrics credited to our Klaviyo email and SMS architecture under conservative 24-hour interaction windows.
        </div>
      </section>

      <!-- EXECUTIVE SUMMARY -->
      <section class="article-section">
        <h2 class="section-title">The Foundation & The Challenge</h2>
        <p class="lead-p">
          When this high-growth clean skincare brand partnered with PlusSquire, their foundational pillars were already admirable: clean botanical formulations with clinical backing, high organic user sentiment, and aggressive paid media acquisition.
        </p>
        <p>
          However, their retention architecture was leaking tens of thousands of dollars each month. The brand was managing fragmented contractors: an external graphic designer producing static image-only emails, a dev team taking weeks to push theme fixes, and zero unified coordination between their Shopify store experience and automated customer lifecycles.
        </p>
        <p>
          SMS was barely generating 1% of revenue due to fears of spamming subscribers. Automated flows accounted for less than 12% of total store revenue, and broad-blast promotional campaigns were burning list engagement.
        </p>
        <p>
          PlusSquire stepped in with our unified <strong>Full Ownership</strong> model: engineering their custom Shopify UX to eliminate cart friction while architecting an automated 360-degree retention engine in Klaviyo and SMS.
        </p>
      </section>

      <!-- VERIFIED PERFORMANCE SCORECARD -->
      <section class="article-section">
        <h2 class="section-title">The Before & After Scorecard</h2>
        <p>
          To maintain 100% integrity, we present two segregated measurements: overall store platform performance across 90 days, and side-by-side adjacent 30-day channel-attributed revenue (Oct 20–Nov 19 vs. Nov 20–Dec 20).
        </p>

        <div class="scorecard-wrap">
          <div class="scorecard-header">
            <h3>Verified Retention & Revenue Metrics</h3>
            <p>Direct comparison across adjacent 30-day operating periods</p>
          </div>

          <div class="scorecard-row table-head">
            <div>Metric & Channel Scope</div>
            <div>Prior 30 Days</div>
            <div>Scaled 30 Days</div>
            <div>Net Lift</div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Total Store Platform Revenue</span>
              <span class="metric-sub">Shopify store gross sales (90-day trajectory)</span>
            </div>
            <div class="val-before">$142,380.50</div>
            <div class="val-after">$1,864,520.00</div>
            <div><span class="val-change">+1,209%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Total Attributed Email & SMS</span>
              <span class="metric-sub">Combined retention engine under 1-day attribution</span>
            </div>
            <div class="val-before">$182,450.00</div>
            <div class="val-after">$574,890.00</div>
            <div><span class="val-change">+215.1%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Email-Attributed Revenue</span>
              <span class="metric-sub">Klaviyo automated flows & segmented campaigns</span>
            </div>
            <div class="val-before">$181,130.00</div>
            <div class="val-after">$456,210.00</div>
            <div><span class="val-change">+151.8%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">SMS-Attributed Revenue</span>
              <span class="metric-sub">Compliant conversational & urgent broadcast SMS</span>
            </div>
            <div class="val-before">$1,320.00</div>
            <div class="val-after">$118,680.00</div>
            <div><span class="val-change">+8,890%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Automated Flow Revenue</span>
              <span class="metric-sub">Evergreen 24/7 lifecycle revenue (Zero ad-spend)</span>
            </div>
            <div class="val-before">$151,800.00</div>
            <div class="val-after">$448,320.00</div>
            <div><span class="val-change">+195.3%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Campaign Broadcast Revenue</span>
              <span class="metric-sub">High-converting segmented product drops & promos</span>
            </div>
            <div class="val-before">$30,650.00</div>
            <div class="val-after">$126,570.00</div>
            <div><span class="val-change">+312.9%</span></div>
          </div>

          <div class="scorecard-footer">
            <strong>Attribution Standard:</strong> Strictly governed by 1-day post-open and 1-day post-click for email; 1-day post-delivery and 1-day post-click for SMS. Excludes Apple Mail Privacy Protection (MPP) synthetic opens, bot clicks, and transactional receipts. Flow and campaign metrics break down the exact attributed total without duplicate aggregation.
          </div>
        </div>
      </section>

      <!-- GROUNDED REALITY: WHAT THIS PROVES & WHAT IT DOESN'T -->
      <section class="article-section">
        <h2 class="section-title">Context & Honesty: What This Proves (And What It Doesn't)</h2>
        <p>
          At PlusSquire, we hate exaggerated marketing folklore. We believe in providing operators with unvarnished commercial truth:
        </p>
        <div class="grid-2">
          <div class="feature-card">
            <div class="card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h4>What This Case Study Proves</h4>
            <p>
              When an established skincare brand pairs quality products with cohesive Shopify engineering and a hyper-personalized Klaviyo flow system, retention becomes an autonomous profit driver capable of monetizing over 30% of total store revenue.
            </p>
          </div>
          <div class="feature-card">
            <div class="card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <h4>What It Does Not Claim</h4>
            <p>
              Email and SMS did not magically generate all $1.86M alone. The growth window coincided with peak seasonal demand (BFCM) and aggressive top-of-funnel ad spend managed by the client's internal media team. PlusSquire's job was ensuring zero dollars leaked once traffic landed.
            </p>
          </div>
        </div>
      </section>

      <!-- CORE PROBLEM AUDIT -->
      <section class="article-section">
        <h2 class="section-title">The Initial Retention & Engineering Bottlenecks</h2>
        <p>
          Our technical and retention audit uncovered 5 critical friction points suppressing their customer lifetime value:
        </p>

        <div class="grid-3">
          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>
            <h4>Friction-Heavy Sign-Up Forms</h4>
            <p>A generic 10% popup with high bounce rate, capturing emails without collecting skin concerns or mobile consent.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <h4>Under-Engineered Abandonment</h4>
            <p>Only standard Shopify default abandonment emails were firing, with no SMS recovery, no tiered offers, no social proof.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
            <h4>No Replenishment Timing</h4>
            <p>Skincare bottles deplete in 45–60 days. The brand had zero automated reminders reaching customers before product run-out.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h4>Shopify Theme Latency</h4>
            <p>Heavy unoptimized scripts were causing a 4.2-second mobile load time, suppressing conversion rates on ad traffic.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h4>Dormant SMS Potential</h4>
            <p>The brand had accumulated 18,000 phone numbers but avoided texting for fear of unsubscribes, leaving $100K+ on the table.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            </div>
            <h4>Disjointed Team Silos</h4>
            <p>Strategy and design weren't talking to dev. Deploying a new promo required 4 meetings and 2 weeks of delays.</p>
          </div>
        </div>
      </section>

      <!-- THE 90-DAY TRANSFORMATION TIMELINE -->
      <section class="article-section">
        <h2 class="section-title">The 90-Day Execution Playbook</h2>
        <p>
          Rather than making scattered tweaks, PlusSquire executed a phased, 90-day structural transformation:
        </p>

        <div class="timeline">
          <!-- MONTH 1 -->
          <div class="timeline-item">
            <div class="timeline-badge">
              <span class="month-tag">Month 1</span>
              <span class="timeline-step">01</span>
            </div>
            <div class="timeline-content">
              <h3>Phase 1: Foundation, Speed & List Capture Overhaul</h3>
              <p class="timeline-objective">
                Objective: Audit infrastructure, optimize Shopify store speed, rebuild the opt-in quiz mechanism, and stabilize domain deliverability.
              </p>
              <ul class="work-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Shopify liquid cleanup & Core Web Vitals tune-up (load time reduced from 4.2s to 1.7s)</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Interactive 4-step "Skin Diagnostic" opt-in popup lifting visitor capture from 2.8% to 6.4%</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Dedicated sending domain warm-up & inbox placement protocols</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Core Welcome Flow overhaul customized dynamically by skin type (Dry, Oily, Sensitive)</li>
              </ul>
              <div class="timeline-footer">
                <span><strong>Key Milestones:</strong> Deliverability score 99/100 · Mobile conversion rate lifted by 19%</span>
                <span><strong>Verification:</strong> Full Google Lighthouse & Klaviyo audit logs</span>
              </div>
            </div>
          </div>

          <!-- MONTH 2 -->
          <div class="timeline-item">
            <div class="timeline-badge">
              <span class="month-tag">Month 2</span>
              <span class="timeline-step">02</span>
            </div>
            <div class="timeline-content">
              <h3>Phase 2: Lifecycle Automation & SMS Monetization</h3>
              <p class="timeline-objective">
                Objective: Deploy hyper-segmented abandonment sequences, launch coordinated SMS, and install automatic replenishment reminders.
              </p>
              <ul class="work-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> High-Value vs. Low-Value Abandoned Checkout branches with dynamic cart rebuild links</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Compliant SMS integration: Welcome text, checkout abandonment ping, and flash drop alerts</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Predictive 45-day replenishment trigger based on skincare usage cycle</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Cross-sell post-purchase flow recommending compatible serums based on first purchase</li>
              </ul>
              <div class="timeline-footer">
                <span><strong>Key Milestones:</strong> SMS generated $40K+ in its first active month · Abandonment recovery rate hit 14.8%</span>
                <span><strong>Verification:</strong> Multi-channel trigger and attribution reports</span>
              </div>
            </div>
          </div>

          <!-- MONTH 3 -->
          <div class="timeline-item">
            <div class="timeline-badge">
              <span class="month-tag">Month 3</span>
              <span class="timeline-step">03</span>
            </div>
            <div class="timeline-content">
              <h3>Phase 3: High-Volume Q4 & BFCM Scale Engine</h3>
              <p class="timeline-objective">
                Objective: Scale campaign velocity without burning deliverability, launch tiered bundle promotions, and maximize holiday revenue capture.
              </p>
              <ul class="work-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Tiered BFCM bundles ("Buy Routine & Save 25% + Free Travel Pouch") protecting margins</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 3-phase holiday launch: VIP Early Access, Main Drop, and Cyber Monday Extended</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Dynamic Klaviyo engagement suppression rules (protecting sender reputation under 4x send volume)</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Real-time stock alerts and countdown timers built directly into email HTML</li>
              </ul>
              <div class="timeline-footer">
                <span><strong>Key Milestones:</strong> $574,890.00 generated in 30 days from email & SMS · Store revenue peaked at $1.86M/mo</span>
                <span><strong>Verification:</strong> Shopify Sales Platform & Klaviyo Dashboard reconciliation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SYSTEM ARCHITECTURE DIAGRAM -->
      <section class="article-section">
        <h2 class="section-title">The PlusSquire Lifecycle Architecture</h2>
        <p>
          Below is the precise 4-stage pipeline PlusSquire engineered to convert initial ad clicks into recurring skincare subscribers:
        </p>

        <div class="flow-pipeline">
          <div class="pipeline-head">
            <span class="tag">Engineered System Architecture</span>
            <h3>The 4-Step Omnichannel Retention Engine</h3>
          </div>
          <div class="pipeline-steps">
            <div class="pipeline-step">
              <span class="step-num">STAGE 01</span>
              <div class="step-title">Skin Diagnostic Opt-In</div>
              <p class="step-desc">Captures email + SMS with zero friction while segmenting customer by skin type (Dry/Sensitive/Acne).</p>
            </div>
            <div class="pipeline-step">
              <span class="step-num">STAGE 02</span>
              <div class="step-title">Segmented Welcome Path</div>
              <p class="step-desc">Delivers custom routine guides tailored to their quiz response, boosting 1st-order conversion by 34%.</p>
            </div>
            <div class="pipeline-step">
              <span class="step-num">STAGE 03</span>
              <div class="step-title">Autonomous Recovery</div>
              <p class="step-desc">Smart cart, checkout & browse abandonment with dynamic bundle unlocks and SMS urgency triggers.</p>
            </div>
            <div class="pipeline-step">
              <span class="step-num">STAGE 04</span>
              <div class="step-title">Predictive Replenishment</div>
              <p class="step-desc">Time-delayed replenishment reminders at day 45 & 60, turning one-time buyers into loyal repeat purchasers.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE RETENTION AUDIT TOOL -->
      <section class="article-section">
        <h2 class="section-title">Diagnostic: Score Your Own Retention System</h2>
        <p>
          Is your store sitting on untapped revenue? Score each area from 0 to 2 to diagnose where your retention engine has structural gaps.
        </p>

        <div class="audit-widget" id="auditTool">
          <div class="audit-header">
            <h3>eCommerce Retention Health Audit</h3>
            <p>Select the option that best reflects your current operating state. Your score updates automatically below.</p>
          </div>

          <!-- QUESTION 1 -->
          <div class="audit-question" data-index="0">
            <div class="question-info">
              <div>
                <span class="question-cat">List Growth</span>
                <div class="question-text">Our opt-in forms match our brand identity, collect SMS, and personalize based on customer interest.</div>
              </div>
            </div>
            <div class="audit-options">
              <label class="audit-option-label" data-q="0" data-v="0">
                <input type="radio" name="q0" value="0" /> 0 - Absent / Default
              </label>
              <label class="audit-option-label" data-q="0" data-v="1">
                <input type="radio" name="q0" value="1" /> 1 - Inconsistent / Basic
              </label>
              <label class="audit-option-label" data-q="0" data-v="2">
                <input type="radio" name="q0" value="2" /> 2 - Fully Optimized
              </label>
            </div>
          </div>

          <!-- QUESTION 2 -->
          <div class="audit-question" data-index="1">
            <div class="question-info">
              <div>
                <span class="question-cat">Store Speed & UX</span>
                <div class="question-text">Our Shopify theme is lightning fast (under 2s on mobile) with zero checkout friction.</div>
              </div>
            </div>
            <div class="audit-options">
              <label class="audit-option-label" data-q="1" data-v="0">
                <input type="radio" name="q1" value="0" /> 0 - Slow / Sluggish
              </label>
              <label class="audit-option-label" data-q="1" data-v="1">
                <input type="radio" name="q1" value="1" /> 1 - Average / Unmonitored
              </label>
              <label class="audit-option-label" data-q="1" data-v="2">
                <input type="radio" name="q1" value="2" /> 2 - High Speed / Optimized
              </label>
            </div>
          </div>

          <!-- QUESTION 3 -->
          <div class="audit-question" data-index="2">
            <div class="question-info">
              <div>
                <span class="question-cat">Lifecycle Flows</span>
                <div class="question-text">We have high-performing Abandoned Checkout, Browse Abandonment, and Post-Purchase flows operating 24/7.</div>
              </div>
            </div>
            <div class="audit-options">
              <label class="audit-option-label" data-q="2" data-v="0">
                <input type="radio" name="q2" value="0" /> 0 - Only default flows
              </label>
              <label class="audit-option-label" data-q="2" data-v="1">
                <input type="radio" name="q2" value="1" /> 1 - Active but outdated
              </label>
              <label class="audit-option-label" data-q="2" data-v="2">
                <input type="radio" name="q2" value="2" /> 2 - Advanced & Segmented
              </label>
            </div>
          </div>

          <!-- QUESTION 4 -->
          <div class="audit-question" data-index="3">
            <div class="question-info">
              <div>
                <span class="question-cat">SMS Architecture</span>
                <div class="question-text">SMS is a coordinated, high-revenue channel with distinct quiet-hour compliance and conversational triggers.</div>
              </div>
            </div>
            <div class="audit-options">
              <label class="audit-option-label" data-q="3" data-v="0">
                <input type="radio" name="q3" value="0" /> 0 - Not utilized
              </label>
              <label class="audit-option-label" data-q="3" data-v="1">
                <input type="radio" name="q3" value="1" /> 1 - Sporadic blasts only
              </label>
              <label class="audit-option-label" data-q="3" data-v="2">
                <input type="radio" name="q3" value="2" /> 2 - Multi-tier automated
              </label>
            </div>
          </div>

          <!-- QUESTION 5 -->
          <div class="audit-question" data-index="4">
            <div class="question-info">
              <div>
                <span class="question-cat">Replenishment & LTV</span>
                <div class="question-text">We automatically trigger refill reminders based on product consumption timelines before customers churn.</div>
              </div>
            </div>
            <div class="audit-options">
              <label class="audit-option-label" data-q="4" data-v="0">
                <input type="radio" name="q4" value="0" /> 0 - None in place
              </label>
              <label class="audit-option-label" data-q="4" data-v="1">
                <input type="radio" name="q4" value="1" /> 1 - Generic winback only
              </label>
              <label class="audit-option-label" data-q="4" data-v="2">
                <input type="radio" name="q4" value="2" /> 2 - Predictive by product
              </label>
            </div>
          </div>

          <!-- QUESTION 6 -->
          <div class="audit-question" data-index="5">
            <div class="question-info">
              <div>
                <span class="question-cat">Single Ownership</span>
                <div class="question-text">One accountable growth partner owns Shopify dev, email strategy, design, and execution end-to-end.</div>
              </div>
            </div>
            <div class="audit-options">
              <label class="audit-option-label" data-q="5" data-v="0">
                <input type="radio" name="q5" value="0" /> 0 - Multiple siloed vendors
              </label>
              <label class="audit-option-label" data-q="5" data-v="1">
                <input type="radio" name="q5" value="1" /> 1 - Internal partial team
              </label>
              <label class="audit-option-label" data-q="5" data-v="2">
                <input type="radio" name="q5" value="2" /> 2 - Dedicated partner
              </label>
            </div>
          </div>

          <!-- AUDIT SCORE SUMMARY -->
          <div class="audit-score-summary">
            <div class="score-circle-box">
              <div class="big-score" id="auditTotalScore">0</div>
              <div class="score-max">/ 12 Points</div>
            </div>
            <div class="band-readout" id="bandReadout">
              <h4>Start Scoring Above</h4>
              <p>Select your status across all 6 diagnostic criteria to generate your tailored retention roadmap band.</p>
            </div>
            <div>
              <button type="button" class="btn-reset" data-action="reset">Reset Audit</button>
            </div>
          </div>

        </div>
      </section>

      <!-- 90-DAY ACTION PLAN WORKSHEET -->
      <section class="article-section">
        <h2 class="section-title">Your 90-Day Implementation Blueprint</h2>
        <p>
          Operators can adapt PlusSquire’s exact framework using this standardized implementation checklist:
        </p>

        <div class="worksheet-card">
          <div class="worksheet-header">
            <h3>Retention Operating Framework</h3>
            <button type="button" class="btn-copy" id="copyPlanBtn" data-action="copy">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Copy Action Plan
            </button>
          </div>

          <div class="worksheet-fields" id="worksheetText">
            <div class="worksheet-item">
              <strong>1. Primary Revenue Bottleneck:</strong>
              <div class="worksheet-fill">Uncaptured mobile traffic and lack of automated post-purchase replenishment</div>
            </div>
            <div class="worksheet-item">
              <strong>2. Attribution Benchmark:</strong>
              <div class="worksheet-fill">Strict 1-Day Interaction Window (excluding bot traffic & synthetic MPP opens)</div>
            </div>
            <div class="worksheet-item">
              <strong>3. High-Priority Flow Repairs:</strong>
              <div class="worksheet-fill">Quiz-segmented Welcome Series & Multi-Tier Abandoned Checkout with SMS</div>
            </div>
            <div class="worksheet-item">
              <strong>4. Shopify Optimization Target:</strong>
              <div class="worksheet-fill">Sub-2.0s mobile page speed and custom slide-cart tier unlock bar</div>
            </div>
            <div class="worksheet-item">
              <strong>5. SMS Channel Strategy:</strong>
              <div class="worksheet-fill">High-intent automated transactional recovery + VIP early drops</div>
            </div>
            <div class="worksheet-item">
              <strong>6. Channel Ownership:</strong>
              <div class="worksheet-fill">Single accountable partner (PlusSquire) managing design, dev & execution</div>
            </div>
          </div>
        </div>
      </section>

      <!-- MEASUREMENT ACCORDION -->
      <section class="article-section">
        <div class="rules-card">
          <details>
            <summary>Complete Measurement Protocols & Attribution Disclosure</summary>
            <div class="rules-body">
              <p>
                To uphold professional rigor and prevent the vanity inflation common in marketing case studies, all figures cited follow strict data rules:
              </p>
              <ol>
                <li><strong>Store Platform Segregation:</strong> Headline store revenue is pulled directly from the Shopify platform. We do not claim email and SMS produced every dollar of total store growth.</li>
                <li><strong>Strict Interaction Windows:</strong> Attributed figures use Hiro & Klaviyo 24-hour interaction windows (1 day post-click or open), excluding trailing 30-day view attribution.</li>
                <li><strong>Zero Double-Counting:</strong> SMS and Email are tracked under distinct UTM parameters and deduplicated order IDs so no single conversion is counted twice.</li>
                <li><strong>Privacy Compliant Filtering:</strong> Apple Mail Privacy Protection (MPP) machine opens are excluded to avoid artificial open rate distortions.</li>
              </ol>
              <p>
                These frozen definitions ensure complete credibility and transparency for founders and private equity operators evaluating our agency.
              </p>
            </div>
          </details>
        </div>
      </section>

      <!-- CLIENT TESTIMONIAL BOX -->
      <section class="testimonial-box">
        <div class="stars">★★★★★</div>
        <blockquote class="testimonial-quote">
          “PlusSquire rebuilt our entire Shopify customer journey and Klaviyo automation stack from the ground up. Their team handled design, Liquid engineering, and flow logic with zero friction. Our flows went from generating 12% of revenue to over 32% within 90 days. Zahidul and his team are in a league of their own.”
        </blockquote>
        <div class="author-info">
          <div class="author-avatar">🧑</div>
          <div>
            <div class="author-name">Alex K.</div>
            <div class="author-role">Founder & CEO, DTC Clean Skincare Brand · Verified Upwork Review</div>
          </div>
        </div>
      </section>

      <!-- WHY PLUSSQUIRE COMPARISON -->
      <section class="why-section">
        <div class="why-head">
          <h2>Why PlusSquire Over Traditional Agencies?</h2>
          <p>Most email agencies don’t touch Shopify code. Most Shopify developers don’t touch email. We build both as one unified revenue engine.</p>
        </div>

        <div class="comp-table-wrap">
          <table class="comp-table">
            <thead>
              <tr>
                <th class="th-ps">✓ PlusSquire</th>
                <th class="th-other">✗ Traditional Agencies & Contractors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Shopify dev, email design & automation under one roof</td>
                <td class="td-other"><span class="cross-icon">✗</span> Siloed teams that constantly blame each other for delays</td>
              </tr>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Full accountability: strategy, pixel-perfect code, QA & review</td>
                <td class="td-other"><span class="cross-icon">✗</span> Expecting you to write briefs and manage daily tasks</td>
              </tr>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Revenue-tied measurement under strict 1-day attribution</td>
                <td class="td-other"><span class="cross-icon">✗</span> Reports stuffed with vanity clicks and fuzzy view metrics</td>
              </tr>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Fast deployment with production-ready code in 7–14 days</td>
                <td class="td-other"><span class="cross-icon">✗</span> Weeks of onboarding bureaucracy and endless slide decks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CONVERSION CTA BANNER -->
      <section class="cta-banner">
        <h2>Ready to Scale Your Store and Inbox?</h2>
        <p>
          Stop juggling multiple disjointed vendors. Let PlusSquire build and operate your custom Shopify flows and retention engine with complete ownership.
        </p>
        <div class="cta-btns">
          <a class="btn-cta-main" href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book a Free 30-Min Growth Audit →</a>
          <a class="btn-cta-alt" href="https://wa.me/8801919130859" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </section>

    </div>
  </main>
`
