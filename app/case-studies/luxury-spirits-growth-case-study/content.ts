// Case study markup (hero + article). The site Navbar and Footer wrap it in page.tsx.
export const luxurySpiritsHtml = String.raw`
<!-- HERO -->
  <header class="hero">
    <div class="container">
      <div class="content-container">
        
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/case-studies">Case Studies</a>
          <span>/</span>
          <span>Luxury Spirits & DTC Scaling</span>
        </div>

        <div class="tag-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Enterprise Shopify Engineering · High-Value Retention Architecture
        </div>

        <h1 class="hero-title">
          How PlusSquire Added <span class="highlight">+$438,000/Month</span> in High-Margin Retention Revenue to a Luxury DTC Brand
        </h1>

        <p class="hero-sub">
          How we re-engineered an enterprise Shopify store from monolithic promotional blasts to an 8-stage automated retention system, unlocking segmented non-buyer incentives and scaling total store revenue from $2.18M to over $5.12M/month.
        </p>

        <div class="hero-meta-strip">
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client: Luxury DTC Spirits & Lifestyle Brand
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Scope: 6-Month Full Rebuild & Scale
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Primary Lift: +$438,000.00 Net Monthly Retention
          </div>
        </div>

      </div>
    </div>
  </header>

  <!-- CONTENT -->
  <main class="container">
    <div class="content-container">

      <!-- HEADLINE CARD -->
      <section class="headline-card">
        <div class="headline-grid">
          <div class="stat-box">
            <span class="stat-label">Baseline Month</span>
            <strong class="stat-num">$2,180,000.00</strong>
            <span class="stat-meta">Monthly Store Revenue (Prior to Retention Rebuild)</span>
          </div>
          <div class="stat-arrow">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
          <div class="stat-box">
            <span class="stat-label">Scaled Monthly Performance</span>
            <strong class="stat-num final-val">$5,120,000.00</strong>
            <span class="stat-meta">Scaled Monthly Revenue (+$438,000/mo Retention Lift)</span>
          </div>
        </div>
        <div class="headline-notice">
          <strong>Strategic Context:</strong> The brand was already generating $2M+ monthly through heavy paid traffic, but their customer acquisition costs were rising. By turning their retention channels from a blunt promotional broadcast tool into a sophisticated multi-stage revenue engine, PlusSquire added <strong>$438,000 in net recurring monthly retention revenue</strong> while protecting luxury brand prestige and gross margins.
        </div>
      </section>

      <!-- EXECUTIVE SUMMARY -->
      <section class="article-section">
        <h2 class="section-title">The High-Volume Ceiling: What Held the Brand Back</h2>
        <p class="lead-p">
          Scaling a luxury Direct-to-Consumer business past $2 million per month requires an entirely different operational playbook than growing a $50K store. When this premier luxury spirits and lifestyle brand approached PlusSquire, their customer acquisition was operating at full throttle, but their back-end retention was leaking hundreds of thousands of dollars.
        </p>
        <p>
          Their retention program suffered from three fundamental structural flaws:
        </p>
        <div class="grid-3">
          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h4>Margin-Eroding Full Blasts</h4>
            <p>Every campaign was blasted to the full list with standard 15% discounts, unnecessarily giving away margin to VIP repeat buyers who were ready to purchase at full retail price.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <h4>Shallow 1-Email Automations</h4>
            <p>Their welcome and abandonment flows consisted of only 1 or 2 generic emails. If a prospect didn't buy immediately from email #1, they were dropped into the cold broadcast pool.</p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <h4>Friction at Shopify Checkout</h4>
            <p>Their Shopify cart drawer was static with no dynamic free shipping or gift-unlock tier bars, resulting in lower Average Order Value (AOV) and abandoned checkouts.</p>
          </div>
        </div>
      </section>

      <!-- VERIFIED SCORECARD -->
      <section class="article-section">
        <h2 class="section-title">The Retention Performance Scorecard</h2>
        <p>
          Here is how the metrics shifted across the 6-month rebuild:
        </p>

        <div class="scorecard-wrap">
          <div class="scorecard-header">
            <h3>Key Commercial & Retention Metrics</h3>
            <p>Baseline vs. Optimized Scale Window</p>
          </div>

          <div class="scorecard-row table-head">
            <div>Performance Metric</div>
            <div>Baseline Month</div>
            <div>Scaled Month</div>
            <div>Net Impact</div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Total Store Monthly Revenue</span>
              <span class="metric-sub">Shopify platform gross revenue</span>
            </div>
            <div class="val-before">$2,180,000.00</div>
            <div class="val-after">$5,120,000.00</div>
            <div><span class="val-change">+134.9%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Total Attributed Email & SMS</span>
              <span class="metric-sub">Combined retention engine under 1-day attribution</span>
            </div>
            <div class="val-before">$340,000.00</div>
            <div class="val-after">$778,000.00</div>
            <div><span class="val-change">+$438,000/mo</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Automated Flow Revenue Share</span>
              <span class="metric-sub">Percentage of total store revenue from flows</span>
            </div>
            <div class="val-before">4.1%</div>
            <div class="val-after">10.9%</div>
            <div><span class="val-change">+165.9%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Average Order Value (AOV)</span>
              <span class="metric-sub">Driven by Shopify tier-unlock cart bar & bundles</span>
            </div>
            <div class="val-before">$112.50</div>
            <div class="val-after">$133.30</div>
            <div><span class="val-change">+18.5%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Revenue Per Flow Entrant</span>
              <span class="metric-sub">Average value generated per customer entering flow</span>
            </div>
            <div class="val-before">$1.84</div>
            <div class="val-after">$4.92</div>
            <div><span class="val-change">+167.4%</span></div>
          </div>

          <div class="scorecard-row">
            <div>
              <span class="metric-title">Campaign Inbox Placement</span>
              <span class="metric-sub">Deliverability to primary inbox across Gmail & Apple</span>
            </div>
            <div class="val-before">86.2%</div>
            <div class="val-after">99.2%</div>
            <div><span class="val-change">+13.0%</span></div>
          </div>

          <div class="scorecard-footer">
            <strong>Data Integrity:</strong> Metrics are tracked under strict 1-day interaction windows with deduplicated order attribution. Flow expansions prioritized lifetime cohort monetization rather than vanity open rates.
          </div>
        </div>
      </section>

      <!-- THE 3 STRATEGIC PILLARS -->
      <section class="article-section">
        <h2 class="section-title">The Three Pillars That Added +$438,000/Month</h2>
        <p>
          PlusSquire implemented a three-tier retention architecture engineered specifically for high-ticket DTC brands:
        </p>

        <!-- PILLAR 1 -->
        <div class="flow-deep-dive">
          <div class="fdd-header">
            <span>PILLAR 01: ADVANCED FLOW ARCHITECTURE</span>
            <h3>Expanding 1-Email Triggers into 4–8+ Multi-Path Sequences</h3>
          </div>
          <div class="fdd-grid">
            <div class="fdd-card">
              <span class="fdd-tag">8-Step Sequence</span>
              <h4>High-Intent Welcome Path</h4>
              <p>Segmented dynamically by taste profile and collector tier. First 3 emails focus on craftsmanship and tasting notes before gentle non-buyer incentives appear.</p>
            </div>
            <div class="fdd-card">
              <span class="fdd-tag">6-Step Sequence</span>
              <h4>Tiered Abandonment Engine</h4>
              <p>Checkout and browse abandonment split by cart size (under $100 vs. $200+ VIPs). Dynamic cart rebuild URLs load pre-filled carts instantly on mobile.</p>
            </div>
            <div class="fdd-card">
              <span class="fdd-tag">5-Step Sequence</span>
              <h4>Replenishment & Pairing</h4>
              <p>Predictive timing triggers re-orders at day 45 and 60, recommending artisanal pairings and glassware based on previous purchases.</p>
            </div>
            <div class="fdd-card">
              <span class="fdd-tag">Continuous Tier</span>
              <h4>Collector VIP Club</h4>
              <p>High-LTV customers who purchased 3+ times receive early access to rare bottle allocations and invitation-only private cask drops.</p>
            </div>
          </div>
        </div>

        <!-- PILLAR 2 & 3 -->
        <div class="grid-2">
          <div class="feature-card">
            <div class="card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <h4>Pillar 2: Segmented Non-Buyer Discounting</h4>
            <p>
              We established an ironclad rule: discounts are exclusively for non-buyers to remove first-purchase friction. Existing buyers are instead incentivized with non-margin rewards: free engraved barware, complimentary express shipping, and exclusive batch access. This single rule preserved over $180,000 in gross margin.
            </p>
          </div>

          <div class="feature-card">
            <div class="card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h4>Pillar 3: Custom Shopify Engineering</h4>
            <p>
              Unlike standard email agencies, PlusSquire engineered the Shopify storefront to maximize email traffic conversion: building an interactive slide-cart with progressive tier unlock bars ("Add $25 for free shipping / Add $50 for premium cocktail shaker") and fine-tuning Core Web Vitals to 1.8s on mobile.
            </p>
          </div>
        </div>
      </section>

      <!-- 6-MONTH ROADMAP -->
      <section class="article-section">
        <h2 class="section-title">The 6-Month Phased Implementation Roadmap</h2>
        <p>
          How we structured the engagement from initial audit to enterprise scaling:
        </p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-badge">
              <span class="month-tag">Months 1–2</span>
              <span class="timeline-step">01</span>
            </div>
            <div class="timeline-content">
              <h3>Phase 1: Foundation & Flow Re-Architecture</h3>
              <p>Rebuilt the foundational 4 flows (Welcome, Abandoned Cart, Browse Abandonment, and Post-Purchase) expanding them to 6+ steps with luxury design and custom Liquid blocks.</p>
              <ul class="work-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Cleaned 120K dormant contacts to restore 99% deliverability</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Re-designed high-converting opt-in quiz on Shopify</li>
              </ul>
              <div class="timeline-footer">
                <strong>Result:</strong> Flow revenue lifted from $90K/mo to $220K/mo within 60 days.
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-badge">
              <span class="month-tag">Months 3–4</span>
              <span class="timeline-step">02</span>
            </div>
            <div class="timeline-content">
              <h3>Phase 2: Segmented Discounting & Shopify AOV Engineering</h3>
              <p>Removed sitewide promotional discounting. Engineered the dynamic Shopify cart drawer tier bar and launched automated replenishment cycles.</p>
              <ul class="work-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Ring-fenced discount codes exclusively for 1st-time prospects</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Shopify custom Liquid slide-cart with tier-unlock rewards</li>
              </ul>
              <div class="timeline-footer">
                <strong>Result:</strong> AOV rose from $112.50 to $133.30; repeat order rate increased by 28%.
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-badge">
              <span class="month-tag">Months 5–6</span>
              <span class="timeline-step">03</span>
            </div>
            <div class="timeline-content">
              <h3>Phase 3: VIP Allocations, Coordinated SMS & $5.12M Scaling</h3>
              <p>Launched the Collector VIP tier for rare bottle drops, orchestrated conversational SMS for instant product drops, and scaled campaigns smoothly into high-volume periods.</p>
              <ul class="work-list">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Conversational VIP SMS alerts selling out batches in under 4 hours</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Multi-tier holiday drop calendar without list fatigue</li>
              </ul>
              <div class="timeline-footer">
                <strong>Result:</strong> Scaled total store revenue to $5.12M/mo, adding +$438,000/mo net retention revenue.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIAL -->
      <section class="testimonial-box">
        <div class="stars">★★★★★</div>
        <blockquote class="testimonial-quote">
          “Before working with PlusSquire, we were burning our list with the same generic discounts every week. Zahidul and his team completely transformed our retention system. They didn't just build Klaviyo flows; they redesigned our Shopify cart experience, optimized our page speed, and built an automated VIP engine that generates over $775K every single month. They take complete ownership.”
        </blockquote>
        <div class="author-info">
          <div class="author-avatar">🧔</div>
          <div>
            <div class="author-name">Marcus V.</div>
            <div class="author-role">Co-Founder & COO, Luxury DTC Spirits Brand · Verified Upwork Review</div>
          </div>
        </div>
      </section>

      <!-- WHY PLUSSQUIRE -->
      <section class="why-section">
        <div style="text-align:center;max-width:650px;margin:0 auto 24px;">
          <h2>Why PlusSquire Over Traditional Retention Agencies?</h2>
          <p>Most email agencies don't touch Shopify code. Most developers don't understand lifecycle marketing. We deliver both under one roof.</p>
        </div>

        <div class="comp-table-wrap">
          <table class="comp-table">
            <thead>
              <tr>
                <th class="th-ps">✓ PlusSquire Full-Stack Growth</th>
                <th class="th-other">✗ Traditional Email Agencies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Shopify Liquid engineering & Klaviyo flows under one team</td>
                <td class="td-other"><span class="cross-icon">✗</span> "That's a dev problem, ask your web team to fix it"</td>
              </tr>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Segmented discounting that strictly protects your gross margins</td>
                <td class="td-other"><span class="cross-icon">✗</span> Slashing prices with sitewide discount codes on every send</td>
              </tr>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Deep 5–8 step multi-path flows based on customer cohorts</td>
                <td class="td-other"><span class="cross-icon">✗</span> Basic 1–2 email standard templates with no segmentation</td>
              </tr>
              <tr>
                <td class="td-ps"><span class="check-icon">✓</span> Full accountability: strategy, pixel-perfect code, QA & reporting</td>
                <td class="td-other"><span class="cross-icon">✗</span> Endless meetings and briefs requiring your daily supervision</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-banner">
        <h2>Ready to Add 20–40% in Automated Retention Revenue?</h2>
        <p>
          Whether your store is doing $100K or $2M+ per month, stop letting valuable traffic leak. Let PlusSquire build your custom Shopify growth engine.
        </p>
        <div class="cta-btns">
          <a class="btn-cta-main" href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book a Free 30-Min Retention Audit →</a>
          <a class="btn-cta-alt" href="https://wa.me/8801919130859" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </section>

    </div>
  </main>
`
