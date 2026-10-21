export type InsightSection = {
  id: string
  heading: string
  paragraphs: string[]
  bullets?: string[]
  proTip?: string
}

export type InsightArticle = {
  slug: string
  title: string
  excerpt: string
  category:
    | 'Klaviyo & Flows'
    | 'Email Deliverability'
    | 'Email Design & HTML'
    | 'Shopify Engineering'
    | 'SMS & Retention'
  date: string
  readTime: string
  heroImage: string
  heroAlt: string
  secondaryImage: string
  secondaryAlt: string
  relatedServiceSlug: string
  relatedServiceLabel: string
  keyTakeaways: string[]
  sections: InsightSection[]
}

export const INSIGHT_CATEGORIES = [
  'All',
  'Klaviyo & Flows',
  'Email Deliverability',
  'Email Design & HTML',
  'Shopify Engineering',
  'SMS & Retention',
] as const

export const INSIGHTS: InsightArticle[] = [
  {
    slug: 'klaviyo-flows-every-shopify-brand-needs',
    title: 'The 7 Revenue-Driving Klaviyo Flows Every Shopify Store Needs in 2026',
    excerpt:
      'Most DTC stores leave 15%–25% of their revenue on the table by running default 2-email sequences. Here is the exact 7-flow lifecycle architecture that generates 30%–45% of total store revenue on autopilot.',
    category: 'Klaviyo & Flows',
    date: 'April 14, 2026',
    readTime: '8 min read',
    heroImage: '/images/services/flow-setup/hero-flows-autopilot.jpg',
    heroAlt: 'Klaviyo automated revenue flow architecture dashboard for Shopify brands',
    secondaryImage: '/images/services/flow-setup/strategy-mapping.jpg',
    secondaryAlt: 'Lifecycle flow mapping showing triggers, conditional splits, and timing delays',
    relatedServiceSlug: 'flow-setup',
    relatedServiceLabel: 'Klaviyo Flow & Campaign Setup',
    keyTakeaways: [
      'Automated Klaviyo flows should consistently generate 18% to 25% of your total Shopify revenue before a single weekly campaign is sent.',
      'Splitting first-time visitors from repeat buyers inside your Welcome and Cart flows protects your profit margins from coupon abuse.',
      'Running separate Added-to-Cart and Abandoned Checkout triggers captures shoppers at two distinct intent stages without overlapping.',
      'Every revenue flow system needs an automated Sunset Flow at the back end to protect your sender reputation.',
    ],
    sections: [
      {
        id: 'why-default-flows-underperform',
        heading: '1. Why Default ESP Flows Leave Half the Revenue Behind',
        paragraphs: [
          'When we audit Klaviyo accounts for growing Shopify brands, we see the same pattern almost every week: the store has a single Welcome email and a basic 2-step Abandoned Checkout sequence switched on from a default template library. While those two automations bring in some baseline sales, they treat every visitor identically—whether someone is looking at a $24 accessory or a $320 bundle, or whether they are a brand-new prospect or a four-time VIP buyer.',
          'High-performing retention systems do not rely on sending more emails; they rely on matching the exact behavioral trigger to the shopper’s stage in the buying journey. When engineered properly, seven foundational flows work together to capture traffic, recover lost carts, accelerate second orders, and keep your list clean automatically.',
        ],
      },
      {
        id: 'the-pre-purchase-capture-engine',
        heading: '2. Pre-Purchase Capture: Welcome, Browse & Added-to-Cart Flows',
        paragraphs: [
          'The highest conversion window for any new subscriber is the first 48 hours after they opt in on your storefront. A single welcome email that simply drops a 10% discount code wastes that attention. Instead, a 4-part Welcome Series should deliver the offer immediately in Email 1, introduce your founder story and core product differentiators in Email 2, showcase top-reviewed bestsellers with UGC in Email 3, and close with a margin-safe urgency reminder in Email 4 (excluding anyone who has already purchased).',
          'Once a subscriber is on your list and returns to your store, two behavioral flows take over before checkout even begins: Site/Browse Abandonment (triggered when a subscriber views a product at least twice without adding to cart) and Added-to-Cart Abandonment (triggered via a custom Shopify snippet when they click "Add to Cart" but never initiate checkout).',
        ],
        bullets: [
          'Welcome Series (4 emails over 6 days): Targets 3.5%–6.0% placed order rate',
          'Browse Abandonment (2 emails): Soft, educational product reminders with zero discount',
          'Added-to-Cart Flow (2–3 emails): Captures mid-funnel intent 2 hours after cart addition',
        ],
        proTip:
          'Always add a flow filter to Browse Abandonment: "Has Added to Cart zero times since starting this flow" AND "Has Started Checkout zero times since starting this flow." That prevents a shopper from receiving three different abandonment emails on the same afternoon.',
      },
      {
        id: 'checkout-recovery-without-margin-erosion',
        heading: '3. High-Intent Checkout Recovery Without Margin Erosion',
        paragraphs: [
          'Shoppers who reach your Shopify checkout and enter their email have the highest buying intent in your entire funnel—yet nearly 70% of carts are abandoned due to shipping surprises, distraction, or hesitation. If your first Abandoned Checkout email immediately hands out a 15% discount code 30 minutes later, repeat shoppers will quickly learn to abandon their carts on purpose.',
          'Instead, structure your Abandoned Checkout flow using a conditional split based on Cart Value and Customer Purchase History. First-time buyers with high cart values can receive a timed incentive in Email 3 (48 hours post-abandonment), while existing customers receive social proof, guarantee reminders, and direct reply-to-support assistance without training them to wait for coupons.',
        ],
      },
      {
        id: 'post-purchase-winback-and-sunset',
        heading: '4. Post-Purchase, Win-Back & Automated Sunset Flows',
        paragraphs: [
          'Acquiring a customer on Meta or Google Ads is expensive; profitability happens on the second, third, and fourth orders. Your Post-Purchase flow should split first-time buyers from repeat buyers immediately after checkout. Before the package arrives, send product care or usage instructions to eliminate buyer’s remorse. Fourteen to twenty-one days after delivery, trigger a dynamic cross-sell recommendation paired with a review request.',
          'Finally, pair your Replenishment / Win-Back flow (timed to your average days-between-orders cycle, typically 45–75 days) with an automated Sunset Flow. If a subscriber has not opened or clicked an email in 120–150 days and ignores a final 2-step plain-text re-engagement sequence, tag and suppress them automatically so your deliverability stays above 99%.',
        ],
      },
    ],
  },
  {
    slug: 'email-deliverability-google-yahoo-sender-guide',
    title: 'Why Your Open Rates Dropped: The Complete SPF, DKIM, DMARC & Inbox Recovery Guide',
    excerpt:
      'If your Klaviyo open rates suddenly dipped below 30%, your copy isn’t the problem—inbox filters are routing you to Spam or Promotions. Here is our step-by-step technical recovery blueprint.',
    category: 'Email Deliverability',
    date: 'April 8, 2026',
    readTime: '9 min read',
    heroImage: '/images/services/email-deliverability/hero-email-deliverability.jpg',
    heroAlt: 'Email deliverability dashboard showing 99.4% primary inbox placement and 98/100 sender score',
    secondaryImage: '/images/services/email-deliverability/dns-authentication-compliance.jpg',
    secondaryAlt: 'SPF, DKIM 2048-bit, DMARC pass verification and branded sending domain matrix',
    relatedServiceSlug: 'email-deliverability',
    relatedServiceLabel: 'Email Deliverability Services',
    keyTakeaways: [
      'Google, Yahoo, and Apple Mail now strictly enforce SPF, 2048-bit DKIM, DMARC alignment, and One-Click List-Unsubscribe headers for bulk senders.',
      'A spam complaint rate above 0.10% in Google Postmaster Tools is the #1 trigger for sudden domain-wide spam throttling.',
      'Switching from a shared ESP domain to a dedicated branded sending domain requires a structured 30-day warm-up schedule.',
      'Suppressing unengaged 180-day profiles immediately lifts primary inbox placement for your actual paying customers.',
    ],
    sections: [
      {
        id: 'diagnosing-silent-deliverability-drops',
        heading: '1. Diagnosing Silent Revenue Leaks in the Inbox',
        paragraphs: [
          'Deliverability problems rarely announce themselves with an error banner inside your ESP. Your campaigns still show "99.5% Delivered" in Klaviyo—because "Delivered" only means the receiving mail server accepted the message, not that it placed the email in the subscriber’s Primary Inbox. Behind the scenes, Gmail, Yahoo, or Microsoft Outlook may be routing 40% to 70% of your sends straight to the Spam folder.',
          'To diagnose whether you have an inbox placement issue, inspect open rates segmented by mailbox provider (Gmail vs. Yahoo vs. Apple Mail/iCloud vs. Outlook) and connect your sending domain to Google Postmaster Tools. If Gmail open rates sit at 16% while Apple Mail sits at 48%, your domain reputation with Google has been downgraded.',
        ],
      },
      {
        id: 'dns-authentication-foundation',
        heading: '2. Configuring Branded Sending Domains: SPF, DKIM & DMARC',
        paragraphs: [
          'If you are still sending from a shared `klaviyomail.com` or `sendgrid.net` domain, your reputation is tied to thousands of other senders, and you fail DMARC domain alignment requirements for bulk senders. The very first technical step is setting up a dedicated Branded Sending Domain (such as `send.yourbrand.com`) in your DNS provider.',
          'Once your CNAME, NS, or TXT records are added, verify three cryptographic pillars: SPF (Sender Policy Framework) to authorize Klaviyo’s servers, 2048-bit DKIM (DomainKeys Identified Mail) to sign every outgoing header, and a DMARC record (`v=DMARC1; p=none; rua=mailto:...` transitioning to `p=quarantine`) to prove domain alignment.',
        ],
        bullets: [
          'Branded Sending Domain aligned with your root domain (`yourbrand.com`)',
          'SPF record with fewer than 10 DNS lookups to prevent `permerror` failures',
          '2048-bit DKIM cryptographic key verified and active',
          'DMARC policy published with aggregate reporting enabled',
          'RFC 8058 One-Click List-Unsubscribe headers active on all marketing sends',
        ],
      },
      {
        id: 'the-30-day-warmup-protocol',
        heading: '3. The 30-Day Guided Domain Warm-Up Protocol',
        paragraphs: [
          'One of the costliest mistakes eCommerce teams make is authenticating a brand-new sending domain on a Tuesday and blasting 80,000 subscribers on Wednesday. To mailbox algorithms, a sudden spike in volume from an unestablished subdomain looks identical to a phishing attack.',
          'Whenever we activate a new branded sending domain or recover a damaged sender score, we run a 30-day graduated warm-up: Week 1 activates high-engagement automated flows (Welcome, Abandoned Checkout) and sends campaigns exclusively to 14-day/30-day clickers. Week 2 expands to 30-day openers; Week 3 expands to 60-day engaged profiles; and Week 4 stabilizes at your core 90-day engaged cohort.',
        ],
        proTip:
          'Keep your Google Postmaster spam complaint rate strictly below 0.08% (and never above Google’s 0.10% warning threshold). Even 15 spam complaints out of 10,000 emails can trigger automated filtering.',
      },
      {
        id: 'engagement-tiering-and-list-hygiene',
        heading: '4. Engagement Tiering & Bot/Spam-Trap Removal',
        paragraphs: [
          'Mailbox providers judge your sender reputation primarily by how subscribers interact with your emails: opens, clicks, replies, folder moves from Promotions to Primary, and deletions without reading. When you mail 40,000 people who haven’t opened an email in nine months, your engagement ratio plummets.',
          'Replace "Full List" sends with a tiered segmentation matrix: send 3x/week to your 30–60 Day Engaged core, 1x/week (major launches/promos) to your 90–120 Day Engaged tier, and suppress anyone who passes through your Sunset Flow without clicking.',
        ],
      },
    ],
  },
  {
    slug: 'custom-html-email-vs-drag-and-drop-klaviyo',
    title: 'Hand-Coded HTML vs. Drag-and-Drop Emails: What Actually Converts Better (Without Clipping in Gmail)?',
    excerpt:
      'Canva image-slices and bloated drag-and-drop builders often trigger Gmail’s 102KB clipping limit and break in Dark Mode. Here is when to use custom HTML coding vs. modular hybrid templates.',
    category: 'Email Design & HTML',
    date: 'March 30, 2026',
    readTime: '7 min read',
    heroImage: '/images/services/email-development/hero-code-renders.jpg',
    heroAlt: 'Hand-coded responsive HTML email rendering across Gmail, Outlook, and Apple Mail',
    secondaryImage: '/images/services/email-development/cross-client-compatibility.jpg',
    secondaryAlt: 'Cross-client email compatibility testing matrix across 90+ devices and dark mode',
    relatedServiceSlug: 'email-development',
    relatedServiceLabel: 'Custom HTML Email Development',
    keyTakeaways: [
      'All-image emails exported from Figma or Canva suffer from slow mobile load times, broken dark-mode contrast, and accessibility failures.',
      'Gmail automatically clips any email whose underlying HTML file size exceeds 102 KB—hiding your footer, unsubscribe link, and open-tracking pixel.',
      'Hand-coded HTML/CSS templates reduce code bloat by up to 60% while unlocking pixel-perfect layouts in desktop Outlook and Apple Mail.',
      'The best setup for fast-moving eCommerce teams is a Hybrid Modular System: custom-coded HTML blocks saved inside Klaviyo’s universal library.',
    ],
    sections: [
      {
        id: 'the-hidden-cost-of-image-only-emails',
        heading: '1. The Hidden Problem with "All-Image" Figma & Canva Emails',
        paragraphs: [
          'Many design agencies create gorgeous email layouts in Figma, slice the entire canvas into four giant PNG or JPEG images, and drop them into Klaviyo. On a fast office Wi-Fi connection, it looks fine. On a shopper’s iPhone with weak cellular reception—or in corporate Outlook where images are blocked by default—the subscriber sees a blank screen.',
          'Worse yet, spam filters evaluate your text-to-image ratio. When an email contains zero live HTML text, screen readers cannot parse it, search inside the inbox fails, and any small text baked into an image becomes unreadable on a 375px mobile screen.',
        ],
      },
      {
        id: 'gmail-102kb-clipping-threshold',
        heading: '2. Why Gmail Clips Drag-and-Drop Emails at 102 KB',
        paragraphs: [
          'Have you ever opened a promotional email in Gmail and seen `[Message clipped] View entire message` at the bottom? Gmail strictly clips any email whose raw HTML code (not image file size, just the HTML text/markup itself) exceeds 102 kilobytes.',
          'Visual drag-and-drop builders wrap every single block, spacer, and column in dozens of nested `<div>` and `<table>` wrappers with repetitive inline styles. A 6-section promotional email built in a standard visual editor can easily hit 125 KB of HTML—causing Gmail to cut off your social proof, legal unsubscribe link (a CAN-SPAM violation risk), and Klaviyo’s open-tracking pixel. Hand-coded HTML achieves the exact same visual layout in 32–45 KB.',
        ],
        bullets: [
          'Keep raw HTML markup strictly below 85 KB (safe buffer under Gmail’s 102 KB clip limit)',
          'Use live HTML typography for body copy, subheads, and bulletproof VML/CSS buttons',
          'Include MSO conditional ghost tables (`<!--[if mso]>`) so desktop Outlook never breaks multi-column product grids',
        ],
      },
      {
        id: 'hybrid-modular-template-systems',
        heading: '3. The Best of Both Worlds: Hybrid Modular Email Systems',
        paragraphs: [
          'After 13+ years and 800+ email development projects, we recommend a hybrid approach for growing brands: use 100% custom hand-coded HTML for your high-revenue automated flows (Welcome, Abandoned Cart, Post-Purchase) and flagship product launches where every pixel, dark-mode rule, and kilobyte matters.',
          'Then, for your weekly promotional campaigns, we build a custom-coded Modular Master Template inside Klaviyo where live HTML text, dark-mode-safe containers, and responsive product grids are pre-engineered as drag-and-drop Universal Blocks for your internal marketing team.',
        ],
        proTip:
          'Before deploying any new master template or automated flow, run a pre-send render test across Litmus or Email on Acid covering iOS Mail (Light & Dark), Gmail App (Android & iOS), and Outlook 2019/365.',
      },
    ],
  },
  {
    slug: 'shopify-core-web-vitals-speed-optimization-playbook',
    title: 'How to Fix a Slow Shopify Store: Passing Core Web Vitals (LCP, INP & CLS) Without Breaking Your Theme',
    excerpt:
      'Every extra second of mobile load time costs 7%–12% in checkout conversion. Learn how we strip orphaned app scripts, optimize Liquid loops, and pass Google’s Core Web Vitals on Shopify OS 2.0.',
    category: 'Shopify Engineering',
    date: 'March 22, 2026',
    readTime: '8 min read',
    heroImage: '/images/services/shopify-speed-optimization/hero-results.jpg',
    heroAlt: 'Shopify speed optimization Core Web Vitals before and after performance results',
    secondaryImage: '/images/services/shopify-speed-optimization/app-bloat-cleanup.jpg',
    secondaryAlt: 'Cleaning third-party Shopify app JavaScript bloat and optimizing Liquid code',
    relatedServiceSlug: 'shopify-speed-optimization',
    relatedServiceLabel: 'Shopify Speed Optimization',
    keyTakeaways: [
      'Uninstalled Shopify apps often leave orphaned script tags and snippets inside `theme.liquid` that load on every page view.',
      'Fake "speed booster" apps that simply defer scripts on user mouse-move trick Lighthouse scores without improving real-user Core Web Vitals (CrUX data).',
      'Fixing Largest Contentful Paint (LCP < 2.5s) requires `fetchpriority="high"` on hero images and removing lazy-loading above the fold.',
      'Improving Interaction to Next Paint (INP < 200ms) requires auditing main-thread JavaScript from chat widgets, heatmaps, and tracking pixels.',
    ],
    sections: [
      {
        id: 'why-shopify-stores-slow-down',
        heading: '1. Why Fast Shopify Themes Become Sluggish Over Time',
        paragraphs: [
          'Even if your store launched on a clean Online Store 2.0 theme like Dawn or Prestige, twelve months of installing and testing marketing apps—reviews, upsell drawers, loyalty widgets, heatmaps, currency converters, and chat bubbles—gradually buries your storefront under 3 to 5 megabytes of external JavaScript.',
          'When a shopper taps your Meta or TikTok ad on a mobile connection, their phone’s CPU has to download, parse, and execute dozens of third-party scripts before the product gallery or "Add to Cart" button becomes interactive.',
        ],
      },
      {
        id: 'fixing-lcp-above-the-fold',
        heading: '2. Fixing Largest Contentful Paint (LCP Under 2.5 Seconds)',
        paragraphs: [
          'One of the most common mistakes we find in custom Shopify themes is applying `loading="lazy"` to every single image across the entire site—including the main homepage hero banner and the primary product gallery image on PDPs. Lazy-loading above-the-fold images forces the browser to wait until layout scripts finish before it even starts fetching the hero image.',
          'To cut LCP by 800ms to 1.5s immediately, remove `loading="lazy"` from the first section on the page, add `fetchpriority="high"` and `preload` links for the primary WebP/AVIF asset, and use Shopify’s `image_tag` filter with explicit `widths` and `sizes` attributes so mobile devices never download a 2400px desktop banner.',
        ],
        bullets: [
          'Set `loading="eager"` and `fetchpriority="high"` on hero banners and primary PDP images',
          'Preload critical brand fonts (`woff2`) and set `font-display: swap`',
          'Inline critical above-the-fold CSS and defer non-critical section stylesheets',
        ],
      },
      {
        id: 'solving-inp-and-app-script-bloat',
        heading: '3. Solving INP (<200ms) & Cleaning Orphaned App Code',
        paragraphs: [
          'Google replaced First Input Delay (FID) with Interaction to Next Paint (INP), which measures how quickly your page visually responds when a shopper taps a size swatch, opens the mobile menu, or clicks "Add to Cart." Poor INP scores are almost always caused by main-thread JavaScript blocking.',
          'We audit `theme.liquid`, `content_for_header`, and Shopify App Embeds to strip out leftover code from uninstalled apps, consolidate duplicate tracking pixels into Shopify’s native Customer Events sandbox, and replace heavy third-party widgets (like announcement bars, sticky add-to-cart, and free-shipping meters) with 2 KB of native Liquid and CSS.',
        ],
        proTip:
          'Never judge your store speed by a single synthetic test alone. Always verify field data in Google Search Console’s Core Web Vitals report (28-day CrUX real-user metrics) alongside Lighthouse.',
      },
    ],
  },
  {
    slug: 'abandoned-cart-vs-abandoned-checkout-klaviyo',
    title: 'Abandoned Cart vs. Added-to-Cart vs. Browse Abandonment: How to Recover 12%+ More Lost Checkout Revenue',
    excerpt:
      'Most Shopify stores only trigger emails when a shopper reaches the final checkout step. Learn how adding a custom Added-to-Cart event in Klaviyo captures 3x more high-intent shoppers.',
    category: 'Klaviyo & Flows',
    date: 'March 15, 2026',
    readTime: '7 min read',
    heroImage: '/images/services/flow-setup/abandoned-cart-browse.jpg',
    heroAlt: 'Klaviyo abandoned cart, checkout, and browse abandonment flow comparison',
    secondaryImage: '/images/services/account-audit/flow-automation-review.jpg',
    secondaryAlt: 'Flow gap analysis showing recovered revenue from added-to-cart and browse triggers',
    relatedServiceSlug: 'flow-setup',
    relatedServiceLabel: 'Klaviyo Flow Setup',
    keyTakeaways: [
      'Shopify’s default "Checkout Started" event only fires after a customer clicks Checkout—missing 60%+ of shoppers who click "Add to Cart" and leave.',
      'Adding a custom `Added to Cart` JavaScript listener in Klaviyo triggers recovery emails for any cookied subscriber who adds an item to their cart drawer.',
      'Smart exclusion filters ensure a customer never receives Browse, Cart, and Checkout emails at the same time.',
      'Dynamic cart-reconstruction links let shoppers restore their exact cart on mobile with a single tap.',
    ],
    sections: [
      {
        id: 'the-checkout-started-blindspot',
        heading: '1. The "Checkout Started" Blind Spot on Shopify',
        paragraphs: [
          'In Klaviyo’s standard Shopify integration, the native "Abandoned Cart" flow template is actually triggered by the `Checkout Started` metric—not when someone clicks the "Add to Cart" button on a product page or inside a slide-out cart drawer. That means if an existing subscriber visits your store, adds two items to their cart drawer, and closes the tab before clicking "Proceed to Checkout," your default flow never fires.',
          'By installing a lightweight `Added to Cart` event snippet tied to your theme’s AJAX cart drawer and product forms, we typically see 2.5x to 3.5x more profiles enter the cart recovery funnel every single month.',
        ],
      },
      {
        id: 'structuring-the-three-tier-abandonment-ladder',
        heading: '2. Structuring the 3-Tier Abandonment Ladder Without Overlap',
        paragraphs: [
          'When you run Site Abandonment, Browse Abandonment, Added-to-Cart, and Checkout Started simultaneously, strict flow filters are essential so subscribers never feel stalked or spammed. Each higher-intent trigger must automatically cancel any lower-intent flow.',
        ],
        bullets: [
          'Tier 1 — Browse Abandonment (Viewed Product): Delays 2 hours; cancels if Added to Cart, Checkout Started, or Placed Order',
          'Tier 2 — Added to Cart: Delays 1–2 hours; cancels if Checkout Started or Placed Order',
          'Tier 3 — Abandoned Checkout (Checkout Started): Delays 45–60 minutes; cancels only when Placed Order occurs',
        ],
        proTip:
          'Turn OFF Klaviyo’s global 16-hour Smart Sending on Email 1 of your Abandoned Checkout flow. If a subscriber opened your morning newsletter, clicked through to your store, and abandoned a $180 checkout at noon, Smart Sending would block your cart recovery email!',
      },
      {
        id: 'high-converting-recovery-anatomy',
        heading: '3. Anatomy of a High-Converting Cart Recovery Email',
        paragraphs: [
          'The highest-converting cart emails don’t look like heavy promotional flyers. They place the dynamic product image, title, variant/size, price, and a prominent "Return to Your Cart" button right above the fold on mobile, followed by 3 trust icons (free returns, fast shipping, money-back guarantee), real customer reviews, and a direct reply-to-support prompt.',
        ],
      },
    ],
  },
  {
    slug: 'zero-seo-loss-shopify-migration-checklist',
    title: 'Migrating from WooCommerce or Magento to Shopify: The Zero-SEO-Loss & Zero-Downtime Checklist',
    excerpt:
      'Replatforming to Shopify shouldn’t cost you years of organic Google rankings or historical customer data. Follow our engineering checklist for a seamless store migration.',
    category: 'Shopify Engineering',
    date: 'March 6, 2026',
    readTime: '9 min read',
    heroImage: '/images/services/shopify-migration/hero-cutover.jpg',
    heroAlt: 'Zero-downtime Shopify store migration and SEO redirect verification',
    secondaryImage: '/images/services/shopify-migration/data-migration-hub.jpg',
    secondaryAlt: 'Data migration pipeline moving products, customers, orders, and 301 redirects to Shopify',
    relatedServiceSlug: 'shopify-migration',
    relatedServiceLabel: 'Shopify Store Migration',
    keyTakeaways: [
      'Changing URL structures (e.g., `/product-category/shoes/` to `/collections/shoes`) without 1-to-1 301 redirects is the #1 cause of post-migration traffic drops.',
      'Historical order IDs, customer lifetime spend, and SKU relational data must be migrated in the correct sequence so Klaviyo segments stay accurate.',
      'A staging cutover with a final delta sync ensures zero lost orders and zero minutes of storefront downtime on launch day.',
      'Every legacy plugin should be audited before migration to replace bloated plugins with native Shopify OS 2.0 sections.',
    ],
    sections: [
      {
        id: 'why-migrations-lose-organic-traffic',
        heading: '1. Why Poorly Planned Store Migrations Lose Organic Traffic',
        paragraphs: [
          'WooCommerce, Magento, and BigCommerce allow completely arbitrary URL structures, whereas Shopify uses a clean, standardized routing structure (`/products/`, `/collections/`, `/pages/`, `/blogs/`). When an agency launches a new Shopify store without mapping every legacy URL to its new Shopify destination, Google encounters thousands of `404 Not Found` errors overnight.',
          'Before migrating a single product, we crawl your entire legacy domain using Screaming Frog, export your top-performing URLs from Google Search Console and Ahrefs, and build a verified 1-to-1 `301 Redirect` map imported directly into Shopify’s URL Redirects manager.',
        ],
      },
      {
        id: 'migrating-products-customers-and-orders',
        heading: '2. Migrating Products, Customers & Order History in the Right Order',
        paragraphs: [
          'In Shopify’s database architecture, relational order matters: Products and Variants must be imported first, followed by Customer Profiles, and finally Historical Orders—so every past order links automatically to the right customer profile and product SKU.',
        ],
        bullets: [
          'Preserve Meta Titles, Meta Descriptions, H1s, Image Alt Text, and JSON-LD Product Schema',
          'Migrate customer tags, lifetime spend totals, and marketing consent status for Klaviyo continuity',
          'Export and re-import verified product reviews (Judge.me, Okendo, Yotpo, Stamped) matched by SKU',
          'Run a Launch-Day Delta Sync to capture orders placed during the final 48 hours before DNS cutover',
        ],
        proTip:
          'Never delete your legacy WooCommerce or Magento server immediately after switching DNS. Keep it running on a staging subdomain for 30 days so your team can cross-reference any edge-case historical records.',
      },
    ],
  },
  {
    slug: 'dark-mode-email-design-guide-for-ecommerce',
    title: 'Designing for Dark Mode & Mobile Thumb Zones: How to Make Every Email Look Crisp in Apple Mail, Gmail & Outlook',
    excerpt:
      'Over 45% of eCommerce subscribers open emails in Dark Mode on mobile. Learn how to prevent inverted black-on-black logos, awkward white boxes, and unreadable CTAs.',
    category: 'Email Design & HTML',
    date: 'February 24, 2026',
    readTime: '7 min read',
    heroImage: '/images/services/email-design/hero-pixel-perfect.jpg',
    heroAlt: 'Pixel-perfect mobile-first and dark-mode email design showcase',
    secondaryImage: '/images/services/email-design/mobile-first-layout.jpg',
    secondaryAlt: 'Mobile-first email layout hierarchy and thumb-zone CTA optimization',
    relatedServiceSlug: 'email-design',
    relatedServiceLabel: 'eCommerce Email Design',
    keyTakeaways: [
      'Email clients handle Dark Mode in three completely different ways: No Change, Partial Color Inversion, and Forced Full Color Inversion (Gmail iOS).',
      'Black PNG logos without a subtle light stroke or dark-mode swap disappear completely against dark-mode backgrounds.',
      'Designing at a 375px–414px mobile viewport first increases click-through rates by 22%–35% compared to shrinking desktop layouts.',
      'Placing a primary CTA button inside the first 550px of vertical scroll captures high-intent scanners immediately.',
    ],
    sections: [
      {
        id: 'how-inbox-clients-invert-dark-mode',
        heading: '1. Why Gmail & Outlook Invert Your Brand Colors Unpredictably',
        paragraphs: [
          'Unlike web browsers that respect standard CSS rules consistently, inbox apps handle Dark Mode using proprietary algorithms. Apple Mail and iOS Mail support `@media (prefers-color-scheme: dark)` CSS queries, allowing developers to specify exact dark-mode background and text colors. Gmail on iOS and Android, however, ignores dark-mode media queries and forces a full color inversion on light backgrounds.',
          'If your brand logo is a transparent black PNG or your product cutouts sit inside solid white JPEG boxes, forced color inversion turns your header into an invisible black-on-charcoal smear surrounded by glaring white rectangles.',
        ],
      },
      {
        id: 'bulletproof-dark-mode-design-rules',
        heading: '2. 5 Rules for Bulletproof Dark-Mode Email Design',
        paragraphs: [
          'Whether an email is built in custom HTML or inside Klaviyo, applying five structural design practices ensures your emails look intentional in both Light and Dark modes:',
        ],
        bullets: [
          'Export transparent PNGs for product lifestyle cutouts or round the corners of lifestyle cards (`border-radius: 12px`) so containers look deliberate on dark backgrounds',
          'Add a subtle 1px–2px off-white outer glow or translucent pill behind dark wordmark logos, or use `@media (prefers-color-scheme: dark)` logo swapping in supported clients',
          'Avoid pure `#000000` and pure `#FFFFFF` in HTML backgrounds—use rich slate (`#0F1623`) and warm off-white (`#F8FAFC`) to soften automatic contrast inversions',
          'Use live HTML buttons with explicit border and background contrast rather than flat text links',
        ],
        proTip:
          'Include `<meta name="color-scheme" content="light dark">` and `<meta name="supported-color-schemes" content="light dark">` in your email `<head>` to unlock native dark-mode CSS control in Apple Mail and Outlook.',
      },
    ],
  },
  {
    slug: 'replace-expensive-shopify-apps-with-native-liquid',
    title: '7 Monthly Shopify Apps You Should Cancel Today (And Replace with Lightweight Native OS 2.0 Code)',
    excerpt:
      'Paying $400+/month for 15 single-feature Shopify apps drains your profit margin and tanks your page speed. Here are 7 common apps we replace with clean, one-time native Liquid sections.',
    category: 'Shopify Engineering',
    date: 'February 16, 2026',
    readTime: '6 min read',
    heroImage: '/images/services/shopify-custom-features/hero-custom-code.jpg',
    heroAlt: 'Custom native Shopify Liquid code replacing bloated monthly apps',
    secondaryImage: '/images/services/shopify-custom-features/theme-editor-blocks.jpg',
    secondaryAlt: 'Custom Shopify Online Store 2.0 theme editor blocks and metafield controls',
    relatedServiceSlug: 'shopify-custom-features',
    relatedServiceLabel: 'Shopify App & Custom Features',
    keyTakeaways: [
      'Each third-party storefront app adds external DNS lookups, CSS stylesheets, and blocking JavaScript to every visitor session.',
      'Shopify Online Store 2.0 Section Schemas and Product Metafields allow custom features to be 100% editable in the Theme Editor with zero recurring fees.',
      'Replacing 5–7 simple UI apps with native theme code typically saves $1,800–$4,500 per year while boosting mobile PageSpeed scores by 15–25 points.',
    ],
    sections: [
      {
        id: 'the-true-cost-of-single-feature-apps',
        heading: '1. The Double Penalty of Single-Feature Shopify Apps',
        paragraphs: [
          'Shopify’s App Store makes it tempting to install a $19/month app every time your marketing team wants a small UI feature: an announcement bar rotator, a sticky mobile Add-to-Cart bar, a free-shipping progress meter in the cart drawer, product page accordions, or "Frequently Bought Together" checkboxes.',
          'Before long, you are paying $350 to $600 every month in app subscriptions—and more importantly, each app loads its own external React/jQuery bundle onto your storefront, slowing down checkout for every customer.',
        ],
      },
      {
        id: 'seven-apps-to-replace-with-native-liquid',
        heading: '2. The 7 Apps We Most Frequently Replace with Native Theme Code',
        paragraphs: [
          'Using Shopify’s native Liquid engine, Metaobjects, Product Metafields, and the Ajax Cart API, all seven of these features can be coded directly into your theme in a few days with full Theme Customizer controls:',
        ],
        bullets: [
          '1. Sticky Mobile Add-to-Cart Bar with dynamic variant selector (~40 lines of vanilla JS)',
          '2. Slide-Out Cart Drawer Tiered Progress Bar (Free Shipping + Automatic Free Gift threshold)',
          '3. Product Page Tabs, Ingredients & Size-Guide Modals powered by Shopify Metafields',
          '4. Color Swatch & Sibling Product Switchers (linking separate color PDPs cleanly for SEO)',
          '5. Custom Bundle / "Build Your Own 3-Pack" Dynamic Discount Selector',
          '6. Rotating Countdown & Geo-Targeted Announcement Bars',
          '7. Trust Badges, Low-Stock Inventory Counters & Estimated Delivery Date Calculators',
        ],
        proTip:
          'Keep third-party apps only for complex backend infrastructure that requires external servers—like Klaviyo (Email/SMS), Judge.me/Okendo (Verified Reviews), Recharge/Skio (Subscriptions), and 3PL fulfillment.',
      },
    ],
  },
  {
    slug: 'rfm-segmentation-and-sunset-flows-klaviyo',
    title: 'Stop Blasting Your Full List: RFM Segmentation & Automated Sunset Flows That Lower Your Klaviyo Bill',
    excerpt:
      'Klaviyo bills by active profile count—meaning dead subscribers cost you money twice: once on your monthly software invoice and again in lost inbox placement. Here is how to segment smarter.',
    category: 'Email Deliverability',
    date: 'February 5, 2026',
    readTime: '8 min read',
    heroImage: '/images/services/email-deliverability/list-hygiene-sunset.jpg',
    heroAlt: 'Klaviyo list hygiene funnel separating engaged tiers from automated sunset flows',
    secondaryImage: '/images/services/account-audit/segmentation-targeting.jpg',
    secondaryAlt: 'RFM segmentation matrix showing VIP spenders, active clickers, at-risk and lapsed buyers',
    relatedServiceSlug: 'account-audit',
    relatedServiceLabel: 'Free Klaviyo Account Audit',
    keyTakeaways: [
      'Sending every campaign to "All Subscribers" inflates unsubscribe rates, damages Gmail domain reputation, and hides true VIP performance.',
      'RFM Segmentation (Recency, Frequency, Monetary value) isolates your top 10% spenders who often drive 40%+ of repeat revenue.',
      'Suppressing chronically unengaged profiles before your Klaviyo billing cycle date can reduce monthly software costs by 15%–30%.',
    ],
    sections: [
      {
        id: 'why-batch-and-blast-fails',
        heading: '1. Why "Batch and Blast" Kills Retention Margins',
        paragraphs: [
          'Since Klaviyo moved to active-profile tier billing, holding onto 50,000 unengaged email addresses from a three-year-old giveaway directly eats into your monthly profit margin. Worse, when you include those cold profiles in weekly campaign sends, Gmail sees a 9% open rate and starts filtering your emails away from your best customers.',
        ],
      },
      {
        id: 'building-your-rfm-and-engagement-matrix',
        heading: '2. Building Your Engagement & RFM Segment Matrix',
        paragraphs: [
          'Every healthy Klaviyo account needs two parallel sets of dynamic segments: Engagement Tiers (which control who is safe to mail) and RFM Lifecycle Tiers (which control what message and offer they receive).',
        ],
        bullets: [
          'Core Engaged (30–60 Days): Opened or clicked at least once in the last 60 days, or joined in the last 15 days',
          'Broad Engaged (90–120 Days): Used for major product launches, seasonal sales, and high-margin announcements',
          'VIP Champions (RFM): Placed 3+ orders OR lifetime spend > 2.5x your store AOV (receives early access, never public discount blasts)',
          'One-Time Buyers at Risk: Placed exactly 1 order 45–90 days ago and has not reordered yet',
          'Sunset Candidates: On list > 120 days, 0 orders, 0 opens/clicks in 120 days',
        ],
        proTip:
          'Schedule a bi-weekly profile hygiene check 3 days before your Klaviyo billing cycle resets. Suppressing hard bounces, role accounts, and completed Sunset Flow profiles keeps you in the lowest possible billing tier.',
      },
    ],
  },
  {
    slug: 'high-converting-popup-sign-up-forms-strategy',
    title: 'Beyond the 10%-Off Pop-Up: How 2-Step Forms & Zero-Party Quiz Data Convert 8%+ of Store Visitors',
    excerpt:
      'An instant pop-up that blocks the screen 1 second after a visitor lands converts poorly. Discover how behavioral triggers, mystery offers, and 2-step SMS capture double list growth.',
    category: 'SMS & Retention',
    date: 'January 26, 2026',
    readTime: '6 min read',
    heroImage: '/images/services/sign-up-forms/hero-popup-signups.jpg',
    heroAlt: 'High-converting Klaviyo sign-up pop-up form converting at 8.4%',
    secondaryImage: '/images/services/sign-up-forms/zero-party-data-capture.jpg',
    secondaryAlt: 'Zero-party data capture and multi-step email and SMS opt-in form',
    relatedServiceSlug: 'sign-up-forms',
    relatedServiceLabel: 'High-Converting Sign-Up Forms',
    keyTakeaways: [
      'Pop-ups triggered after 6–8 seconds or 35% page scroll convert up to 2.1x better than instant 0-second pop-ups.',
      'Multi-step forms (Step 1: Email + 1 Zero-Party Question → Step 2: Optional SMS) grow both lists without reducing Step 1 email capture.',
      'Adding a non-intrusive floating corner teaser lets visitors re-open the offer when they are ready to buy.',
    ],
    sections: [
      {
        id: 'why-generic-popups-underperform',
        heading: '1. Why Generic "10% Off" Pop-Ups Stall at 2% Conversion',
        paragraphs: [
          'Every paid click from Meta, Google, or TikTok costs real acquisition budget. If your sign-up form only converts 1.8% of new visitors into subscribers, 98.2% of that paid traffic leaves anonymously. Moving your opt-in rate from 2% to 8% quadruples the size of your Welcome Series audience without spending a single extra dollar on ads.',
        ],
      },
      {
        id: 'the-multi-step-zero-party-framework',
        heading: '2. The 3-Screen Multi-Step Form Framework',
        paragraphs: [
          'Instead of asking for Name, Email, Phone Number, and Birthday on one crowded screen, break the form into frictionless micro-steps inside Klaviyo:',
        ],
        bullets: [
          'Step 1 (Micro-Commitment / Zero-Party Data): Ask one tap-friendly question ("What are you shopping for today?") to personalize their Welcome Flow',
          'Step 2 (Email Capture): Unlock the primary offer (e.g., Mystery Gift, $15 Off First Order, or Free Express Shipping)',
          'Step 3 (Optional SMS Upgrade): Offer a bonus VIP perk or instant text code for adding their mobile number',
          'Step 4 (Instant Code Display): Show the copyable discount code directly inside the modal so shoppers don’t even have to leave your product page to check their inbox',
        ],
        proTip:
          'Always test "$ Off" (e.g., "Get $15 Off Your First Order") against "% Off" (e.g., "Get 10% Off") for stores with an AOV above $100. Concrete dollar amounts frequently outperform percentages by 25%–40% in A/B tests.',
      },
    ],
  },
  {
    slug: 'klaviyo-sms-and-email-omnichannel-orchestration',
    title: 'Combining Klaviyo Email & SMS Without Burning Out Your List: Attribution, Quiet Hours & VIP Drops',
    excerpt:
      'Sending the exact same blast on Email and SMS at the same hour is the fastest way to spike opt-outs. Learn how to orchestrate SMS and Email inside Klaviyo for maximum incremental revenue.',
    category: 'SMS & Retention',
    date: 'January 15, 2026',
    readTime: '7 min read',
    heroImage: '/images/services/sms-campaigns/hero-sms-revenue.jpg',
    heroAlt: 'Klaviyo SMS and Email omnichannel flow orchestration and attribution',
    secondaryImage: '/images/services/sms-campaigns/combined-attribution.jpg',
    secondaryAlt: 'Unified Klaviyo Email and SMS revenue attribution and compliance controls',
    relatedServiceSlug: 'sms-campaigns',
    relatedServiceLabel: 'Klaviyo SMS Campaigns',
    keyTakeaways: [
      'Consolidating Email and SMS under Klaviyo eliminates double-attributed conversions and lets flows branch based on whether an email was opened.',
      'SMS works best for high-urgency moments: Welcome code delivery, Abandoned Checkout step 1, Flash Sales, and VIP Back-in-Stock alerts.',
      'Strict TCPA compliance, Quiet Hours (8pm–11am recipient time), and 160-character discipline keep SMS ROI above 15x–25x.',
    ],
    sections: [
      {
        id: 'unified-attribution-vs-siloed-tools',
        heading: '1. Why Siloed Email and SMS Platforms Inflate Attribution',
        paragraphs: [
          'When you run email in Klaviyo and SMS in a separate standalone platform without unified attribution windows, both dashboards often claim 100% credit for the exact same $150 order—making your finance team wonder why reported channel revenue exceeds actual Shopify sales.',
          'By running both channels inside Klaviyo (or syncing events with strict last-touch rules), you can build intelligent conditional splits inside every flow: send an email first, wait 24 hours, check "Has Opened Email = False", and only send an SMS credit to shoppers who missed the email.',
        ],
      },
      {
        id: 'when-to-send-sms-vs-email',
        heading: '2. The Channel Matrix: When to Use SMS vs. Email',
        paragraphs: [
          'Email is your visual storytelling and merchandising workhorse; SMS is your intimate, high-urgency tap on the shoulder. Never copy-paste your 4x/week email calendar into SMS.',
        ],
        bullets: [
          'Use Email for: Educational storytelling, multi-product lookbooks, post-purchase guides, and weekly content digests',
          'Use SMS for: Instant Welcome code delivery, 1-hour Abandoned Checkout nudges, 2-hour VIP Early Access drops, and Final-Hours sale closing reminders',
          'Keep standard SMS under 160 characters (no emojis/special unicode that shrink the segment limit to 70 chars) to cut credit costs in half',
        ],
        proTip:
          'Create a dedicated "SMS VIP Early Access" segment and give SMS subscribers a 3-hour head start on limited-inventory product drops. Exclusivity keeps SMS unsubscribe rates under 0.5%.',
      },
    ],
  },
  {
    slug: 'bfcm-q4-email-and-shopify-readiness-blueprint',
    title: 'The 60-Day BFCM & Peak Season Blueprint: Warming Your Domain, Pre-Building VIP Flows & Stress-Testing Shopify',
    excerpt:
      'Black Friday & Cyber Monday are won in September and October—not Thanksgiving week. Use our 60-day technical checklist to prepare your domain, list, flows, and Shopify storefront for Q4.',
    category: 'Klaviyo & Flows',
    date: 'January 5, 2026',
    readTime: '9 min read',
    heroImage: '/images/services/email-campaigns/hero-campaign-results.jpg',
    heroAlt: 'BFCM and Q4 email campaign revenue calendar and performance dashboard',
    secondaryImage: '/images/services/email-deliverability/postmaster-inbox-monitoring.jpg',
    secondaryAlt: 'Pre-BFCM Postmaster domain reputation and high-volume sending readiness',
    relatedServiceSlug: 'email-campaigns',
    relatedServiceLabel: 'Email Campaign Management',
    keyTakeaways: [
      'Tripling your email volume on Black Friday without warming your sending domain in October can get your domain throttled mid-weekend.',
      'Pre-building a VIP Early Access waitlist pop-up 3–4 weeks before BFCM creates a guaranteed Day-1 revenue surge.',
      'Switching Abandoned Checkout time delays from 4 hours down to 30–45 minutes during Cyber Weekend recovers impulse shoppers before they buy elsewhere.',
      'Freezing third-party Shopify app installations 14 days before BFCM prevents unexpected checkout bugs during peak traffic.',
    ],
    sections: [
      {
        id: 'october-deliverability-and-list-warmup',
        heading: '1. 45–60 Days Out: Domain Warm-Up & VIP Waitlist Growth',
        paragraphs: [
          'Mailbox providers track your historical 30-day sending volume. If your brand normally mails 25,000 subscribers twice a week and suddenly blasts 150,000 dormant profiles three times on Black Friday, Gmail and Yahoo algorithms flag the volume spike immediately.',
          'Start ramping send volume gradually 45 days before Black Friday by expanding engaged segments cleanly, verifying DMARC alignment, and launching a dedicated "VIP Early Access" pop-up on your Shopify store to capture Q4 ad traffic ahead of time.',
        ],
      },
      {
        id: 'bfcm-flow-and-checkout-tuning',
        heading: '2. 14 Days Out: Peak-Season Flow & Shopify Checkout Tuning',
        paragraphs: [
          'During Black Friday through Cyber Monday, shoppers compare tabs rapidly and make buying decisions in minutes rather than days. A standard 4-day Abandoned Cart flow is far too slow for a 72-hour flash sale.',
        ],
        bullets: [
          'Clone your Abandoned Checkout & Cart flows into dedicated "BFCM Holiday Mode" versions with 30-minute, 4-hour, and 18-hour delays',
          'Update all flow banners and dynamic discount codes so automated emails never offer a smaller discount than your live sitewide BFCM sale',
          'Send a plain-text "Founder Note" email on Black Friday afternoon and Cyber Monday evening—plain-text emails often beat heavy graphic blasts in Primary inbox placement during Q4',
          'Audit your Shopify mobile checkout, slide-out cart upsells, and Core Web Vitals speed under load before freezing code changes',
        ],
        proTip:
          'Always schedule a 6pm "Resend to Non-Openers (Active on Site)" or "Clicked But Did Not Purchase" micro-segment send on Black Friday and Cyber Monday using a fresh subject line and plain-text layout.',
      },
    ],
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHTS.find((item) => item.slug === slug)
}
