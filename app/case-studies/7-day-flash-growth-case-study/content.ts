// Case study markup (hero + article). The site Navbar and Footer wrap it in page.tsx.
export const flashSaleHtml = String.raw`
<!-- HERO -->
  <header class="hero">
    <div class="container">
      <div class="content-container">
        
        <div class="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/case-studies">Case Studies</a>
          <span>/</span>
          <span>DTC Apparel 7-Day Flash Campaign</span>
        </div>

        <div class="tag-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          High-Velocity Flash Architecture · Email & SMS Synchronization
        </div>

        <h1 class="hero-title">
          How PlusSquire Generated <span class="highlight">$84,320.60 in 7 Days</span> for an Apparel Brand Without Burning the List
        </h1>

        <p class="hero-sub">
          The exact multi-channel sequence, dynamic buyer suppression rules, and Shopify slide-cart engineering that turned an ordinary mid-season release into a high-margin $84K+ flash revenue surge.
        </p>

        <div class="hero-meta-strip">
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Client: High-Growth DTC Fashion & Activewear Brand
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Execution Window: 7 Days (168 Hours)
          </div>
          <div class="meta-chip">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Overall Lift: +34.2% Total Weekly Store Sales
          </div>
        </div>

      </div>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="container">
    <div class="content-container">

      <!-- HEADLINE STATS -->
      <section class="headline-card">
        <div class="headline-grid">
          <div class="stat-box">
            <span class="stat-label">7-Day Generated Revenue</span>
            <strong class="stat-num final-val">$84,320.60</strong>
            <span class="stat-meta">Directly Attributed to Email + SMS</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Storewide Revenue Impact</span>
            <strong class="stat-num">+34.2%</strong>
            <span class="stat-meta">Lift Above Standard 7-Day Baseline</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">Purchaser Fatigue Rate</span>
            <strong class="stat-num" style="color:var(--g)">0%</strong>
            <span class="stat-meta">1,840 Buyers Automatically Suppressed</span>
          </div>
        </div>
        <div class="headline-notice">
          <strong>Campaign Insight:</strong> Most brands fear emailing frequently because they blast the whole list with the same offer. PlusSquire deployed a <strong>Dynamic Suppression Engine</strong>: the instant a customer purchased on Day 1 or Day 2, they were automatically excluded from subsequent campaign emails, keeping list complaints near zero (0.01%) while maximizing revenue.
        </div>
      </section>

      <!-- INFOGRAPHIC 1: REVENUE WATERFALL -->
      <section class="infographic-box">
        <div class="infographic-head">
          <span class="infographic-tag">Visual Infographic 01</span>
          <h3>The 7-Day Revenue Waterfall: Daily Momentum Breakdown</h3>
          <p>Tracking revenue generated each day of the campaign window ($84,320.60 Total)</p>
        </div>

        <!-- SVG CHART 1 -->
        <svg class="svg-graphic" viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="320" fill="#f8fafc" rx="14" />
          
          <!-- Grid lines -->
          <line x1="60" y1="50" x2="760" y2="50" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          <line x1="60" y1="97.5" x2="760" y2="97.5" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          <line x1="60" y1="145" x2="760" y2="145" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          <line x1="60" y1="192.5" x2="760" y2="192.5" stroke="#e2e8f0" stroke-dasharray="4 4"/>
          
          <!-- Y-Axis Labels (scale: $0 at y=240, $20k at y=50) -->
          <text x="50" y="55" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">$20k</text>
          <text x="50" y="102.5" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">$15k</text>
          <text x="50" y="150" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">$10k</text>
          <text x="50" y="197.5" fill="#94a3b8" font-size="11" font-weight="600" text-anchor="end">$5k</text>

          <!-- Bars: Day 1 to 7 -->
          <!-- Day 1: $18,450 -->
          <rect x="82" y="64.7" width="56" height="175.3" rx="6" fill="#1ea672" />
          <text x="110" y="54.7" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$18,450</text>
          <text x="110" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 1</text>
          <text x="110" y="275" fill="#64748b" font-size="10" text-anchor="middle">VIP Access</text>

          <!-- Day 2: $13,280 -->
          <rect x="182" y="113.8" width="56" height="126.2" rx="6" fill="#2ac98d" />
          <text x="210" y="103.8" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$13,280</text>
          <text x="210" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 2</text>
          <text x="210" y="275" fill="#64748b" font-size="10" text-anchor="middle">Public Launch</text>

          <!-- Day 3: $8,640 -->
          <rect x="282" y="157.9" width="56" height="82.1" rx="6" fill="#6ee7b7" />
          <text x="310" y="147.9" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$8,640</text>
          <text x="310" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 3</text>
          <text x="310" y="275" fill="#64748b" font-size="10" text-anchor="middle">Social Proof</text>

          <!-- Day 4: $9,860 -->
          <rect x="382" y="146.3" width="56" height="93.7" rx="6" fill="#34d399" />
          <text x="410" y="136.3" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$9,860</text>
          <text x="410" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 4</text>
          <text x="410" y="275" fill="#64748b" font-size="10" text-anchor="middle">Low Stock</text>

          <!-- Day 5: $10,940 -->
          <rect x="482" y="136.1" width="56" height="103.9" rx="6" fill="#34d399" />
          <text x="510" y="126.1" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$10,940</text>
          <text x="510" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 5</text>
          <text x="510" y="275" fill="#64748b" font-size="10" text-anchor="middle">Free Gift Tier</text>

          <!-- Day 6: $7,150 -->
          <rect x="582" y="172.1" width="56" height="67.9" rx="6" fill="#6ee7b7" />
          <text x="610" y="162.1" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$7,150</text>
          <text x="610" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 6</text>
          <text x="610" y="275" fill="#64748b" font-size="10" text-anchor="middle">Restock Alert</text>

          <!-- Day 7: $16,000 -->
          <rect x="682" y="88.0" width="56" height="152.0" rx="6" fill="#1ea672" />
          <text x="710" y="78.0" fill="#0f1623" font-size="12" font-weight="800" text-anchor="middle">$16,000</text>
          <text x="710" y="260" fill="#0f1623" font-size="12" font-weight="700" text-anchor="middle">Day 7</text>
          <text x="710" y="275" fill="#64748b" font-size="10" text-anchor="middle">Final Hours SMS</text>

          <!-- Bottom Baseline line -->
          <line x1="60" y1="240" x2="760" y2="240" stroke="#0f1623" stroke-width="1.5"/>
        </svg>
      </section>

      <!-- EXECUTIVE SUMMARY -->
      <section class="article-section">
        <h2 class="section-title">The Strategic Dilemma: Scaling Velocity vs. Protecting Deliverability</h2>
        <p class="lead-p">
          When this DTC fashion and activewear brand wanted to launch their mid-season collection, they faced a familiar dilemma: how to create immense commercial urgency and drive meaningful revenue without sending repetitive email blasts that ruin list health.
        </p>
        <p>
          Before partnering with PlusSquire, their promotional strategy was chaotic: single-blast emails sent to everyone, zero SMS integration, and identical messaging blasted to customers who had literally just bought the day before.
        </p>
        <p>
          PlusSquire designed and executed a synchronized <strong>7-Day High-Velocity Engine</strong> that combined behavioral list segmentation, live SMS drops, and custom Shopify cart tier unlocking.
        </p>
      </section>

      <!-- INFOGRAPHIC 2: MULTI-CHANNEL FLOWCHART & SUPPRESSION LOGIC -->
      <section class="infographic-box dark">
        <div class="infographic-head">
          <span class="infographic-tag">Visual Infographic 02</span>
          <h3 style="color:#fff">The Multi-Channel Cadence & Dynamic Suppression Logic</h3>
          <p>How Email and SMS were orchestrated without triggering inbox complaints</p>
        </div>

        <!-- SVG FLOWCHART 2 -->
        <svg class="svg-graphic" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="240" fill="#141a26" rx="14" />
          
          <!-- Node 1: Audience Entry -->
          <rect x="30" y="80" width="140" height="70" rx="10" fill="#1e293b" stroke="#334155" />
          <text x="100" y="112" fill="#38bdf8" font-size="12" font-weight="800" text-anchor="middle">AUDIENCE POOL</text>
          <text x="100" y="130" fill="#94a3b8" font-size="11" text-anchor="middle">Engaged 30/60 Days</text>

          <!-- Arrow 1 -->
          <line x1="170" y1="115" x2="220" y2="115" stroke="#1ea672" stroke-width="2.5" marker-end="url(#arrow)"/>
          
          <!-- Node 2: Email Drop -->
          <rect x="220" y="80" width="160" height="70" rx="10" fill="#0f291e" stroke="#1ea672" />
          <text x="300" y="108" fill="#1ea672" font-size="12" font-weight="800" text-anchor="middle">EMAIL MORNING DROP</text>
          <text x="300" y="126" fill="#e2e8f0" font-size="11" text-anchor="middle">Visual HTML Showcase</text>
          <text x="300" y="140" fill="#94a3b8" font-size="10" text-anchor="middle">Rich Aesthetic & Angles</text>

          <!-- Branching Arrow to Conversion Check -->
          <line x1="380" y1="115" x2="430" y2="115" stroke="#1ea672" stroke-width="2.5"/>

          <!-- Decision Node: Purchased? -->
          <polygon points="490,75 550,115 490,155 430,115" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="490" y="112" fill="#f59e0b" font-size="11" font-weight="800" text-anchor="middle">BOUGHT?</text>
          <text x="490" y="126" fill="#cbd5e1" font-size="10" text-anchor="middle">Order Placed</text>

          <!-- Yes Branch: Exclude from further emails -->
          <line x1="490" y1="75" x2="490" y2="35" stroke="#34d399" stroke-width="2"/>
          <line x1="490" y1="35" x2="620" y2="35" stroke="#34d399" stroke-width="2"/>
          <rect x="620" y="15" width="150" height="42" rx="8" fill="#064e3b" stroke="#34d399" />
          <text x="695" y="40" fill="#6ee7b7" font-size="11" font-weight="700" text-anchor="middle">✓ SUPPRESS LIST</text>

          <!-- No Branch: Continue to SMS Urgency -->
          <line x1="490" y1="155" x2="490" y2="195" stroke="#f43f5e" stroke-width="2"/>
          <line x1="490" y1="195" x2="620" y2="195" stroke="#f43f5e" stroke-width="2"/>
          <rect x="620" y="175" width="150" height="42" rx="8" fill="#4c0519" stroke="#f43f5e" />
          <text x="695" y="196" fill="#fda4af" font-size="11" font-weight="700" text-anchor="middle">SMS EVENING PING</text>
          <text x="695" y="209" fill="#fecdd3" font-size="9" text-anchor="middle">Conversational Urgency</text>
        </svg>
      </section>

      <!-- DAY-BY-DAY EXECUTION PLAYBOOK -->
      <section class="article-section">
        <h2 class="section-title">The 7-Day Tactical Playbook</h2>
        <p>
          Every single day had a distinct angle, audience filter, and commercial purpose:
        </p>

        <!-- DAY 1 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 01 · VIP Early Access</span>
            <span class="day-revenue-tag">$18,450.20</span>
          </div>
          <h3>Password-Protected VIP Drop</h3>
          <p>Sent exclusively to the top 20% LTV customers and high-engagement VIP tier. Instead of discounting, the incentive was exclusive 24-hour priority access to limited seasonal pieces before the general public.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> VIP Email + Priority SMS</div>
            <div><strong>Psychological Trigger:</strong> Exclusivity & Early Access</div>
          </div>
        </div>

        <!-- DAY 2 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 02 · General Launch</span>
            <span class="day-revenue-tag">$13,280.40</span>
          </div>
          <h3>Public Launch & Best-Seller Showcase</h3>
          <p>Opened to the wider Engaged 30/60-day lists with dynamic bundle builders in Shopify ("Buy the complete outfit and unlock free 2-day delivery"). Day 1 purchasers were automatically suppressed.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> Main Broadcast Email</div>
            <div><strong>Psychological Trigger:</strong> Freshness & Lifestyle Aspiration</div>
          </div>
        </div>

        <!-- DAY 3 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 03 · Social Proof</span>
            <span class="day-revenue-tag">$8,640.50</span>
          </div>
          <h3>UGC Styling & Community Reviews</h3>
          <p>Overcame hesitation for non-buyers by featuring real customer photos, fit guides, and 5-star styling reviews. Addressed sizing questions directly to remove purchase friction.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> Editorial Storytelling Email</div>
            <div><strong>Psychological Trigger:</strong> Validation & Fit Confidence</div>
          </div>
        </div>

        <!-- DAY 4 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 04 · Scarcity</span>
            <span class="day-revenue-tag">$9,860.00</span>
          </div>
          <h3>Low-Stock Inventory Urgency</h3>
          <p>Reported genuine real-time stock levels on high-demand sizes (Small and Medium). Leveraged dynamic Shopify stock counter tags inside the email design to create authentic FOMO.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> Targeted Email + Cart Abandonment SMS</div>
            <div><strong>Psychological Trigger:</strong> Loss Aversion & Scarcity</div>
          </div>
        </div>

        <!-- DAY 5 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 05 · AOV Booster</span>
            <span class="day-revenue-tag">$10,940.00</span>
          </div>
          <h3>Tier-Unlock Gift With Purchase (GWP)</h3>
          <p>To convert on-the-fence shoppers without slashing prices, we introduced a 24-hour bonus: orders over $120 unlocked a free luxury gym tote. Engineered live progress bars inside their Shopify slide-cart.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> Offer Push Email + Conversational SMS</div>
            <div><strong>Psychological Trigger:</strong> Perceived High-Value Bonus</div>
          </div>
        </div>

        <!-- DAY 6 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 06 · Restock</span>
            <span class="day-revenue-tag">$7,150.00</span>
          </div>
          <h3>Back-in-Stock Alerts & Second-Chance Recovery</h3>
          <p>Restocked the Small and Medium sizes that sold through on Day 4 and alerted the waitlist the moment inventory went live. Non-buyers who had abandoned carts earlier in the week received a gentle reminder that their size was back.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> Back-in-Stock Email + Waitlist SMS</div>
            <div><strong>Psychological Trigger:</strong> Renewed Availability & Second Chance</div>
          </div>
        </div>

        <!-- DAY 7 -->
        <div class="day-step-card">
          <div class="day-top-bar">
            <span class="day-badge">Day 07 · Deadline Surge</span>
            <span class="day-revenue-tag">$15,999.50</span>
          </div>
          <h3>Final Hours Countdown & 1-Hour Warning</h3>
          <p>A multi-touch deadline sequence: Morning reminder, 6-hour warning, and a final SMS 90 minutes before midnight. Generated the second-highest revenue day of the entire sequence.</p>
          <div class="day-tactics">
            <div><strong>Channel:</strong> 2 Emails + Final Cutoff SMS</div>
            <div><strong>Psychological Trigger:</strong> Imminent Expiration</div>
          </div>
        </div>
      </section>

      <!-- INFOGRAPHIC 3: SHOPIFY CART TIER ARCHITECTURE -->
      <section class="infographic-box">
        <div class="infographic-head">
          <span class="infographic-tag">Visual Infographic 03</span>
          <h3>Shopify Conversion Engine: The Progressive Tier-Unlock Slide-Cart</h3>
          <p>How PlusSquire engineered the storefront to lift Average Order Value to $128.40</p>
        </div>

        <!-- SVG CART SCHEMATIC 3 -->
        <svg class="svg-graphic" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="200" fill="#f8fafc" rx="14" stroke="#e2e8f0"/>
          
          <!-- Cart Progress Track -->
          <rect x="60" y="80" width="680" height="16" rx="8" fill="#e2e8f0" />
          <!-- Active fill: 75% -->
          <rect x="60" y="80" width="510" height="16" rx="8" fill="url(#gradTier)" />
          
          <defs>
            <linearGradient id="gradTier" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1ea672" />
              <stop offset="100%" stop-color="#34d399" />
            </linearGradient>
          </defs>

          <!-- Checkpoint 1: $75 Free Shipping (Unlocked) -->
          <circle cx="280" cy="88" r="14" fill="#1ea672" stroke="#fff" stroke-width="3"/>
          <text x="280" y="93" fill="#fff" font-size="12" font-weight="900" text-anchor="middle">✓</text>
          <text x="280" y="60" fill="#1ea672" font-size="12" font-weight="800" text-anchor="middle">Tier 1: Free Shipping</text>
          <text x="280" y="125" fill="#64748b" font-size="11" text-anchor="middle">$75 (Unlocked)</text>

          <!-- Checkpoint 2: $120 Free Tote Bag (Unlocked) -->
          <circle cx="570" cy="88" r="14" fill="#1ea672" stroke="#fff" stroke-width="3"/>
          <text x="570" y="93" fill="#fff" font-size="12" font-weight="900" text-anchor="middle">✓</text>
          <text x="570" y="60" fill="#1ea672" font-size="12" font-weight="800" text-anchor="middle">Tier 2: Luxury Tote Bag</text>
          <text x="570" y="125" fill="#64748b" font-size="11" text-anchor="middle">$120 (Unlocked)</text>

          <!-- Checkpoint 3: $160 Express Priority (Pending) -->
          <circle cx="740" cy="88" r="14" fill="#cbd5e1" stroke="#fff" stroke-width="3"/>
          <text x="740" y="92" fill="#64748b" font-size="11" font-weight="800" text-anchor="middle">3</text>
          <text x="710" y="60" fill="#64748b" font-size="12" font-weight="800" text-anchor="middle">Tier 3: Free Express</text>
          <text x="710" y="125" fill="#94a3b8" font-size="11" text-anchor="middle">$160 Goal</text>

          <!-- Banner callout -->
          <text x="400" y="170" fill="#0f1623" font-size="13" font-weight="700" text-anchor="middle">
            🔥 Result: 41% of purchasers added a second item to cross Tier 2, lifting cart value by +23.8%!
          </text>
        </svg>
      </section>

      <!-- TESTIMONIAL -->
      <section class="testimonial-box">
        <div class="testimonial-top-row">
          <div class="stars">★★★★★</div>
          <div class="testimonial-cat">Email + SMS Flash</div>
        </div>
        <blockquote class="testimonial-quote">
          “We were terrified of sending multiple emails in a single week. PlusSquire completely proved us wrong. Their buyer suppression logic meant our customers never felt spammed, and their Shopify cart drawer modification drove our highest AOV in company history. $84K in 7 days with zero customer complaints is remarkable.”
        </blockquote>
        <div class="author-info">
          <div class="author-avatar">ST</div>
          <div>
            <div class="author-name">Sarah T.</div>
            <div class="author-role">CEO &amp; Founder, DTC Fashion &amp; Activewear Brand</div>
            <div class="author-source">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              Verified Upwork Client
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-banner">
        <h2>Want a Turnkey Flash Revenue Surge for Your Brand?</h2>
        <p>
          Let PlusSquire design, build, and operate your high-velocity promotional engine with complete full-stack ownership.
        </p>
        <div class="cta-btns">
          <a class="btn-cta-main" href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book a Free 30-Min Strategy Call →</a>
          <a class="btn-cta-alt" href="https://wa.me/8801919130859" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
        </div>
      </section>

    </div>
  </main>
`
