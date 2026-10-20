'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import {
  ChevronDown,
  Search,
  X,
  ArrowUpRight,
  ListFilter,
  MessageSquare,
} from 'lucide-react'

type FAQItem = {
  id: string
  q: string
  a: string
  bullets?: string[]
}

type FAQCategory = {
  key: string
  label: string
  serviceHref?: string
  serviceName?: string
  questions: FAQItem[]
}

const categories: FAQCategory[] = [
  {
    key: 'getting-started',
    label: 'Getting Started & Onboarding',
    questions: [
      {
        id: 'gs-1',
        q: 'How do we get started with PlusSquire?',
        a: 'Getting started takes four straightforward steps: first, book a free discovery call or request a free audit through our website. Second, we review your Shopify store or Klaviyo account and send a clear proposal with scope, timeline, and fixed pricing. Third, once approved, we send collaborator/partner access requests and hold a kickoff call. Fourth, we begin execution with weekly milestone updates.',
      },
      {
        id: 'gs-2',
        q: 'What happens right after we sign off on a project?',
        a: 'Within 24 hours of agreement, we set up your dedicated project workspace (Slack, WhatsApp, or email—whichever your team prefers), request Shopify Collaborator or Klaviyo Partner access, collect your brand assets (logos, fonts, Figma files), and confirm your kickoff roadmap so production begins immediately without administrative lag.',
      },
      {
        id: 'gs-3',
        q: 'How quickly can you start working on our account?',
        a: 'For most audits, email templates, flow builds, and speed optimizations, we kick off within 1 to 3 business days. For full custom Shopify themes or platform migrations, discovery and architecture start within the same week of signing.',
      },
      {
        id: 'gs-4',
        q: 'What access do you need from our team to begin?',
        a: 'We never ask for your master passwords. For Shopify, we request a standard Collaborator request code restricted to the permissions needed (Themes, Products, or Apps). For Klaviyo or other ESPs, you simply invite our agency email as an Admin or Manager (or Analyst for a read-only free audit).',
      },
      {
        id: 'gs-5',
        q: 'How long do typical projects and implementations take?',
        a: 'Timelines depend on the service scope, and we always confirm exact delivery dates upfront:',
        bullets: [
          'Custom HTML Email Template or Single Flow: 2–4 business days',
          'Free Klaviyo Account Audit & Action Plan: 3–5 business days',
          'Full Klaviyo Account Setup & Core Flow Architecture: 2–3 weeks',
          'Shopify Speed Optimization: 5–10 business days',
          'Custom Shopify OS 2.0 Theme or Store Migration: 3–6 weeks',
        ],
      },
      {
        id: 'gs-6',
        q: 'Do you offer one-time projects or ongoing monthly retainers?',
        a: 'We offer both. You can hire us for a single defined project—such as a Klaviyo setup, deliverability repair, custom HTML email pack, or Shopify theme build—or partner with us on a monthly retainer for ongoing campaign management, continuous A/B testing, and store development.',
      },
    ],
  },
  {
    key: 'pricing-contracts',
    label: 'Pricing, Contracts & Ownership',
    questions: [
      {
        id: 'pc-1',
        q: 'How is your pricing structured?',
        a: 'We keep pricing transparent and predictable. Standard packages and starting rates are published directly on our Pricing page. After a quick review of your store or email program, we give you a fixed project quote or flat monthly retainer fee so you always know the exact investment before work starts.',
      },
      {
        id: 'pc-2',
        q: 'Are there any hidden fees or surprise add-ons?',
        a: 'Never. Every deliverable, revision round, and technical check included in your project is itemized in writing before we begin. If you ever request additional features outside the original scope, we quote and confirm them with you first.',
      },
      {
        id: 'pc-3',
        q: 'Do you require long-term contracts for monthly retainers?',
        a: 'No. We do not lock clients into rigid 6- or 12-month contracts. Our ongoing retainers run month-to-month because we believe our revenue results and execution speed should be the reason you stay—not a legal lock-in.',
      },
      {
        id: 'pc-4',
        q: 'Can we pause, scale up, or cancel our monthly plan?',
        a: 'Yes. You can upgrade your monthly send volume before peak seasons like BFCM, scale down during slower months, or pause/cancel your retainer with simple advance notice prior to the next billing cycle.',
      },
      {
        id: 'pc-5',
        q: 'How do payment schedules work for one-time projects?',
        a: 'Smaller one-time builds are split 50% upfront to reserve your production slot and 50% upon final approval and delivery. Larger Shopify theme builds or full migrations can be structured into three clear milestone payments.',
      },
      {
        id: 'pc-6',
        q: 'Who owns the Shopify code, Klaviyo flows, and email templates after delivery?',
        a: 'You own 100% of everything we build. All Klaviyo flows, segments, and templates are built directly inside your own account, and all custom Shopify Liquid themes and code belong entirely to your brand with zero licensing fees.',
      },
      {
        id: 'pc-7',
        q: 'Do you sign NDAs for brands and agency partners?',
        a: 'Yes. We routinely sign mutual Non-Disclosure Agreements (NDAs) for both direct DTC brands and white-label agency partners. Your store metrics, customer lists, and unreleased product launches remain strictly confidential.',
      },
    ],
  },
  {
    key: 'shopify-theme-development',
    label: 'Shopify Theme Development',
    serviceHref: '/services/shopify-theme-development',
    serviceName: 'Shopify Theme Development',
    questions: [
      {
        id: 'std-1',
        q: 'Can you build a 100% custom Shopify theme from our Figma design?',
        a: 'Yes. Translating Figma, Adobe XD, or Sketch designs into pixel-perfect, high-speed Shopify Online Store 2.0 themes is one of our core specialties. Every section is built with modular JSON schemas so your team can edit text, images, and layouts directly inside the Shopify Theme Editor without touching code.',
      },
      {
        id: 'std-2',
        q: 'Should we build a custom theme from scratch or customize a premium OS 2.0 theme?',
        a: 'It depends on your stage and budget. If you have a bespoke brand identity and custom UX requirements, a custom build gives you total design freedom and lean code. If you want to launch faster on a leaner budget, we can heavily customize a top-tier OS 2.0 foundation (like Dawn, Prestige, or Impulse) to look and feel completely unique to your brand.',
      },
      {
        id: 'std-3',
        q: 'How do you make sure a new Shopify theme actually converts visitors into buyers?',
        a: 'We build every storefront around eCommerce CRO fundamentals: mobile-first thumb-zone navigation, sticky add-to-cart bars, fast-loading product galleries, clear trust signals above the fold, slide-out cart drawers with free-shipping progress bars, and zero layout shifts during checkout.',
      },
      {
        id: 'std-4',
        q: 'Do you work with both standard Shopify plans and Shopify Plus?',
        a: 'Yes. We build and optimize stores across all Shopify tiers, including Shopify Plus stores requiring Checkout Extensibility customizations, B2B wholesale portals, multi-currency/multi-language markets, and custom discount logic.',
      },
      {
        id: 'std-5',
        q: 'Will our custom theme break when Shopify releases platform updates?',
        a: 'No. Because we strictly follow Shopify’s native Online Store 2.0 architecture, clean Liquid standards, and native section APIs rather than brittle third-party hacks, your theme remains stable and compatible with future Shopify releases.',
      },
    ],
  },
  {
    key: 'shopify-migration',
    label: 'Shopify Migration',
    serviceHref: '/services/shopify-migration',
    serviceName: 'Shopify Migration',
    questions: [
      {
        id: 'smg-1',
        q: 'Which platforms can you migrate onto Shopify?',
        a: 'We migrate stores to Shopify and Shopify Plus from WooCommerce, Magento (Adobe Commerce), BigCommerce, Wix, Squarespace, PrestaShop, Salesforce Commerce Cloud, and custom-coded databases.',
      },
      {
        id: 'smg-2',
        q: 'Will we lose our Google SEO rankings and organic traffic when migrating to Shopify?',
        a: 'No—protecting your organic search equity is a primary pillar of our migration process. We crawl every legacy URL, map 1-to-1 301 redirects to Shopify’s URL structure, preserve meta titles, descriptions, alt tags, canonical tags, and structured schema markup, and verify everything in Google Search Console at launch.',
      },
      {
        id: 'smg-3',
        q: 'What historical store data can be migrated to Shopify?',
        a: 'We migrate your complete catalog and store history cleanly so your operations continue without gaps:',
        bullets: [
          'Products, variants, SKUs, pricing, inventory levels, and collections',
          'Customer profiles, shipping/billing addresses, and lifetime spend tags',
          'Historical orders linked directly to customer accounts',
          'Blog posts, static pages, product reviews, and gift card/loyalty balances',
        ],
      },
      {
        id: 'smg-4',
        q: 'Will our live store experience downtime during the migration?',
        a: 'Zero downtime. Your current store stays live and continues taking orders while we build, migrate, and test your new Shopify store in a private staging environment. On launch day, we run a final delta sync of recent orders/customers and switch DNS records seamlessly.',
      },
      {
        id: 'smg-5',
        q: 'How do you handle our existing plugins and integrations when moving to Shopify?',
        a: 'Before we start, we audit every plugin on your legacy site and either replace it with native Shopify OS 2.0 features, connect the best-in-class Shopify app equivalent (including Klaviyo, review apps, subscriptions, and 3PLs), or code the functionality directly into your theme.',
      },
    ],
  },
  {
    key: 'shopify-speed-optimization',
    label: 'Shopify Speed Optimization',
    serviceHref: '/services/shopify-speed-optimization',
    serviceName: 'Shopify Speed Optimization',
    questions: [
      {
        id: 'sso-1',
        q: 'Why is my Shopify store loading slowly even on a modern theme?',
        a: 'Most Shopify slowdowns come from four culprits: leftover JavaScript injected by uninstalled or bloated third-party apps, render-blocking CSS/JS in the theme header, unoptimized hero images and video assets, and inefficient Liquid loops running on collection and product pages.',
      },
      {
        id: 'sso-2',
        q: 'How do you improve Core Web Vitals (LCP, INP, and CLS) on Shopify?',
        a: 'We optimize the real technical bottlenecks rather than using fake "speed booster" scripts: we preload critical hero assets for faster Largest Contentful Paint (LCP), defer non-essential third-party scripts to improve Interaction to Next Paint (INP), lock aspect ratios on dynamic elements to eliminate Cumulative Layout Shift (CLS), and refactor heavy Liquid templates.',
      },
      {
        id: 'sso-3',
        q: 'Will speed optimization change the look of our store or break our active apps?',
        a: 'No. All optimizations are first implemented and tested on a duplicate backup theme. Your visual design, tracking pixels (Meta, GA4, TikTok, Klaviyo), and essential store functionality remain 100% intact—just significantly faster.',
      },
      {
        id: 'sso-4',
        q: 'Can you remove leftover code from apps we already uninstalled?',
        a: 'Yes. Many Shopify apps inject script tags and snippets into `theme.liquid` that remain behind even after you delete the app. We audit your entire theme codebase, strip out orphaned app scripts, and replace simple app widgets with lightweight native code.',
      },
      {
        id: 'sso-5',
        q: 'How do you measure and prove the speed improvement?',
        a: 'Before touching a line of code, we record baseline benchmarks across Google PageSpeed Insights, Lighthouse, and GTmetrix on your homepage, collection page, and product page. After optimization, we deliver a before-and-after performance report showing exact load-time and Core Web Vitals gains.',
      },
    ],
  },
  {
    key: 'shopify-custom-features',
    label: 'Shopify App & Custom Features',
    serviceHref: '/services/shopify-custom-features',
    serviceName: 'Shopify App & Custom Features',
    questions: [
      {
        id: 'scf-1',
        q: 'What types of custom Shopify features can you build?',
        a: 'Everything from interactive bundle builders, build-your-own-box configurators, custom size calculators, tiered cart-drawer upsells, and dynamic free-gift logic to custom metaobject templates, wholesale pricing rules, and subscription portals.',
      },
      {
        id: 'scf-2',
        q: 'Can you build features natively into our theme so we can cancel expensive monthly apps?',
        a: 'Yes—this is one of the highest-ROI projects we run for Shopify brands. Many features that apps charge $30–$150/month for (announcement bars, sticky carts, tabs, bundle upsells, size guides, custom badges, free shipping meters) can be coded natively into your theme once, saving you thousands per year and improving site speed.',
      },
      {
        id: 'scf-3',
        q: 'Will our team be able to edit custom features from the Shopify Admin?',
        a: 'Always. Whenever we build a custom section or feature, we expose clean settings via Shopify Theme Settings, Section Schemas, or Product/Collection Metafields so your non-technical team can update copy, products, thresholds, and visuals effortlessly.',
      },
      {
        id: 'scf-4',
        q: 'Can you integrate Shopify with external APIs, ERPs, or 3PL fulfillment systems?',
        a: 'Yes. Beyond storefront Liquid and JavaScript, we build custom Shopify middleware, webhook listeners, and Admin/Storefront API integrations to sync inventory, custom order attributes, and customer data with your external tools.',
      },
      {
        id: 'scf-5',
        q: 'How do you test custom features before pushing them to our live store?',
        a: 'Every custom feature is developed in an isolated staging theme and tested across iOS Safari, Android Chrome, desktop browsers, and edge-case cart scenarios before you review and approve it for live publication.',
      },
    ],
  },
  {
    key: 'klaviyo-account-setup',
    label: 'Klaviyo Account Setup & Migration',
    serviceHref: '/services/klaviyo-account-setup',
    serviceName: 'Klaviyo Account Setup',
    questions: [
      {
        id: 'kas-1',
        q: 'What is included in a complete Klaviyo Account Setup?',
        a: 'Our Klaviyo Account Setup establishes your entire technical and creative foundation so you can send safely and profitably from day one:',
        bullets: [
          'Deep Shopify (or eCommerce platform) integration & web tracking verification',
          'Branded sending domain setup with SPF, DKIM, and DMARC authentication',
          'Subscriber list consolidation, suppression cleaning, and core behavioural segments',
          'Master mobile-first & dark-mode-ready brand email templates',
          'Custom sign-up form, preference page, and unsubscribe page styling',
        ],
      },
      {
        id: 'kas-2',
        q: 'What is the difference between Klaviyo Account Setup and Flow Setup?',
        a: 'Think of Account Setup as the technical foundation and infrastructure (DNS authentication, Shopify event tracking, list migration, segmentation, and master templates), while Flow Setup is the automated revenue engine built on top of that foundation (Welcome Series, Abandoned Cart, Browse Abandonment, Post-Purchase, Win-Back). New accounts usually combine both.',
      },
      {
        id: 'kas-3',
        q: 'Can you migrate our email program to Klaviyo from Mailchimp, Omnisend, ActiveCampaign, or HubSpot?',
        a: 'Yes. We handle full ESP-to-Klaviyo migrations, including exporting active subscribers, importing historical suppression/unsubscribe lists (so you never accidentally email unsubscribed users), recreating sign-up forms, rebuilding automations in Klaviyo, and warming up your sending domain.',
      },
      {
        id: 'kas-4',
        q: 'Why is Klaviyo our top recommendation for Shopify brands?',
        a: 'Klaviyo’s native Shopify integration syncs real-time product catalog data, historical order behaviour, viewed products, checkout events, and predictive CLV metrics deeper than general email tools—allowing far more accurate segmentation and higher revenue per recipient.',
      },
      {
        id: 'kas-5',
        q: 'How do you help keep our monthly Klaviyo software bill from getting bloated?',
        a: 'Klaviyo bills based on active profiles. As part of setup and ongoing hygiene, we configure automated Sunset Flows and suppression rules so unengaged, bounced, or bot profiles are regularly suppressed rather than inflating your monthly tier.',
      },
    ],
  },
  {
    key: 'flow-setup',
    label: 'Klaviyo Flow & Automation Setup',
    serviceHref: '/services/flow-setup',
    serviceName: 'Klaviyo Flow Setup',
    questions: [
      {
        id: 'fls-1',
        q: 'Which automated Klaviyo flows generate the most revenue for eCommerce stores?',
        a: 'While every store is unique, the highest-earning automated lifecycle foundation includes seven core flows:',
        bullets: [
          'Welcome Series (converts new subscribers while intent is highest)',
          'Abandoned Checkout Flow (recovers high-intent shoppers who reached checkout)',
          'Added-to-Cart & Browse Abandonment Flows (captures window shoppers earlier in the funnel)',
          'Post-Purchase Thank You & Cross-Sell Flow (turns one-time buyers into repeat customers)',
          'Customer Win-Back & Replenishment Flows (re-activates lapsed buyers at the right interval)',
          'VIP & Review/UGC Request Flows (rewards top spenders and builds social proof)',
          'Sunset Flow (cleans unengaged profiles automatically to protect deliverability)',
        ],
      },
      {
        id: 'fls-2',
        q: 'What is the difference between an Abandoned Cart flow and an Abandoned Checkout flow?',
        a: 'An Abandoned Checkout flow triggers only after a shopper enters their email on the checkout page. An Added-to-Cart flow triggers earlier—as soon as an identified subscriber clicks "Add to Cart" on a product page, even if they never start checkout. Running both (with smart exclusion filters so they never overlap) recovers significantly more revenue.',
      },
      {
        id: 'fls-3',
        q: 'How many emails should be inside a Welcome Series or Abandoned Cart flow?',
        a: 'For most DTC brands, a Welcome Series performs best with 3 to 4 emails (instant welcome/offer delivery, brand story & differentiators, social proof/bestsellers, and offer reminder). Abandoned Checkout flows typically perform best with 3 timed emails over 48–72 hours, using urgency and objection-handling before offering any discount.',
      },
      {
        id: 'fls-4',
        q: 'Do you use discounts in every flow, or can you build flows that protect profit margins?',
        a: 'We protect your margins first. We never train customers to abandon carts just to farm coupons. We use conditional splits based on cart value, first-time vs repeat buyer status, and product margins—relying on social proof, guarantees, and educational copy first, and reserving incentives only where they make financial sense.',
      },
      {
        id: 'fls-5',
        q: 'Do you handle everything for the flows—strategy, copywriting, design, and Klaviyo logic?',
        a: 'Yes, end to end. We map the flow triggers, time delays, conditional splits, and smart-sending filters, write conversion-focused copy in your brand voice, design and code the responsive emails, and test every dynamic product block inside Klaviyo.',
      },
      {
        id: 'fls-6',
        q: 'Can you optimize our existing flows instead of rebuilding everything from scratch?',
        a: 'Absolutely. If certain emails in your current Welcome or Cart flow are already converting well, we keep what works and add missing splits, additional touchpoints, A/B test variants, or upgraded designs around them.',
      },
    ],
  },
  {
    key: 'account-audit',
    label: 'Free Klaviyo Account Audit',
    serviceHref: '/services/account-audit',
    serviceName: 'Free Klaviyo Account Audit',
    questions: [
      {
        id: 'aud-1',
        q: 'Is your Klaviyo Account Audit really 100% free?',
        a: 'Yes. There is zero cost and zero obligation to hire us afterward. We perform a real human deep-dive into your account (not an automated PDF generator) and share a prioritized 90-day action plan that your team can keep and execute either way.',
      },
      {
        id: 'aud-2',
        q: 'What do you inspect during the Klaviyo Account Audit?',
        a: 'We audit over 50 checkpoints across five core pillars: (1) Technical Deliverability & DNS Authentication (SPF, DKIM, DMARC, bounce/spam rates), (2) List Health & Segmentation logic, (3) Flow-by-Flow performance & missed revenue triggers, (4) Campaign cadence, copy, mobile & dark-mode rendering, and (5) Sign-up form capture rates.',
      },
      {
        id: 'aud-3',
        q: 'Is our data safe when we grant access for an audit?',
        a: 'Completely safe. You only need to grant read-only "Analyst" access in Klaviyo. Nothing in your live account is edited, exported, or shared, and you can revoke access with one click as soon as the audit walkthrough is complete.',
      },
      {
        id: 'aud-4',
        q: 'How long does the audit take and what do we receive at the end?',
        a: 'Within 3 to 5 business days of receiving read-only access, we deliver a comprehensive scorecard and prioritized roadmap ranked by revenue impact vs implementation effort, accompanied by a live walkthrough call.',
      },
      {
        id: 'aud-5',
        q: 'If we want PlusSquire to fix the issues found in the audit, how does that work?',
        a: 'At the end of the audit walkthrough, if you’d like our team to implement the fixes, we provide a clear fixed-price project quote or monthly retainer option to execute the exact roadmap we just reviewed together.',
      },
    ],
  },
  {
    key: 'email-deliverability',
    label: 'Email Deliverability & Compliance',
    serviceHref: '/services/email-deliverability',
    serviceName: 'Email Deliverability Services',
    questions: [
      {
        id: 'edl-1',
        q: 'Why are our emails landing in the Spam folder or Gmail’s Promotions tab?',
        a: 'Emails land in Spam primarily due to unauthenticated sending domains (missing SPF, DKIM, or DMARC), mailing unengaged profiles, high spam complaint rates (>0.1%), or spam traps. Landing in Promotions is normal for heavy marketing blasts, but when primary inbox placement drops across the board, it signals weakened sender reputation that requires technical authentication and engagement tiering.',
      },
      {
        id: 'edl-2',
        q: 'What are the Google and Yahoo bulk sender requirements, and do you set them up?',
        a: 'Google and Yahoo require all bulk senders to authenticate emails with SPF, 2048-bit DKIM, and a published DMARC policy on a branded sending domain, include one-click List-Unsubscribe headers, and keep spam complaint rates strictly below 0.10% (and never above 0.30%). We configure and verify every single requirement end to end.',
      },
      {
        id: 'edl-3',
        q: 'How long does it take to repair a damaged sender reputation and recover open rates?',
        a: 'DNS authentication, branded sending domain setup, and list hygiene fixes are completed within 3–5 business days. Rebuilding your domain reputation with Gmail, Yahoo, and Outlook algorithms typically takes 2 to 4 weeks of guided sending to your most engaged 30–60 day segments.',
      },
      {
        id: 'edl-4',
        q: 'Do we have to stop sending emails completely while warming up our domain?',
        a: 'No. Your highest-converting automated flows (Welcome, Abandoned Checkout, Post-Purchase) stay active, and campaigns continue going to your warmest clickers and openers first while we systematically expand segment reach week by week.',
      },
      {
        id: 'edl-5',
        q: 'Will suppressing unengaged subscribers reduce our email revenue?',
        a: 'Quite the opposite—it protects and increases your revenue. Subscribers who haven’t opened an email in 180+ days rarely buy, but continuing to email them drags down your sender score and causes Gmail to route emails meant for your paying VIP customers into spam.',
      },
      {
        id: 'edl-6',
        q: 'How do you ensure our email program complies with GDPR, CAN-SPAM, and TCPA?',
        a: 'We enforce explicit opt-in consent collection on all sign-up forms, clear one-click unsubscribe links and physical mailing addresses in every footer, strict separation of transactional vs promotional sends, and compliant SMS opt-in disclaimers.',
      },
    ],
  },
  {
    key: 'sign-up-forms',
    label: 'Sign-Up Forms & List Growth',
    serviceHref: '/services/sign-up-forms',
    serviceName: 'Sign-Up Forms',
    questions: [
      {
        id: 'suf-1',
        q: 'How do you build pop-ups that convert at 5%–10%+ without annoying shoppers?',
        a: 'We replace generic instant pop-ups with behavioral triggers: timing forms after a visitor scrolls 35%–50% of the page or shows exit intent, matching the visual design seamlessly to your Shopify theme, and pairing a clear value proposition (mystery offer, tiered discount, or buyer guide) with frictionless mobile inputs.',
      },
      {
        id: 'suf-2',
        q: 'Can your forms collect both Email and SMS subscribers without hurting conversion rate?',
        a: 'Yes. We use multi-step (2-step) forms where Step 1 captures the email address first, and Step 2 optionally invites the subscriber to add their phone number for SMS VIP perks. That way, even if a shopper skips Step 2, you have already secured their email address.',
      },
      {
        id: 'suf-3',
        q: 'Will adding custom sign-up forms slow down our Shopify store?',
        a: 'No. We build forms directly inside Klaviyo’s native form engine (or lightweight embedded code) using optimized WebP graphics and web-safe fonts so there is zero additional third-party app script bloat.',
      },
      {
        id: 'suf-4',
        q: 'Can you show different pop-ups to new visitors vs returning customers?',
        a: 'Yes. We configure targeting rules so existing subscribers never see a "Sign up for 10% off" pop-up again, and returning cart abandoners or specific collection browsers see tailored messaging relevant to what they are shopping for.',
      },
      {
        id: 'suf-5',
        q: 'Do you A/B test sign-up forms after launch?',
        a: 'Yes. We continuously test headline hooks, offer structures (% off vs $ off vs free gift), time delays, and teaser buttons to steadily lift your visitor-to-subscriber submission rate.',
      },
    ],
  },
  {
    key: 'sms-campaigns',
    label: 'SMS & Omnichannel Marketing',
    serviceHref: '/services/sms-campaigns',
    serviceName: 'SMS Campaigns',
    questions: [
      {
        id: 'sms-1',
        q: 'Should we manage SMS inside Klaviyo or use a separate SMS platform?',
        a: 'For most Shopify brands, consolidating Email and SMS inside Klaviyo is the smartest move: you get unified revenue attribution (no double-counting conversions between two platforms), shared behavioral segments, and coordinated flows where SMS only sends if an email hasn’t been opened. We also support Postscript and Attentive if you already use them.',
      },
      {
        id: 'sms-2',
        q: 'How do you use SMS alongside email without spamming or fatiguing subscribers?',
        a: 'We treat SMS as a high-urgency VIP channel rather than repeating every email campaign. In automated flows, we use conditional splits so SMS reminders only go to subscribers who haven’t opened the email, and for broadcasts, we reserve SMS for flash sales, early VIP drops, and back-in-stock alerts.',
      },
      {
        id: 'sms-3',
        q: 'Which automated flows should include SMS touchpoints?',
        a: 'The highest-ROI SMS automations are Welcome Series (instant code delivery), Abandoned Checkout (1–2 hours after abandonment), Back-in-Stock alerts, Price-Drop alerts, and VIP Early Access launches.',
      },
      {
        id: 'sms-4',
        q: 'When should we send standard SMS text messages vs MMS (with images/GIFs)?',
        a: 'Standard 160-character SMS messages cost fewer credits and often feel more personal for quick cart reminders and text-only VIP codes. MMS (with product imagery) works best for new collection launches or visual hero products—and we A/B test both to maximize ROI per credit spent.',
      },
      {
        id: 'sms-5',
        q: 'How do you handle SMS legal compliance (TCPA, SHAFT, and Quiet Hours)?',
        a: 'We configure strict TCPA-compliant double consent checkboxes on forms and checkout, automated STOP/HELP keywords, recipient-timezone Quiet Hours (so texts never wake customers up at night), and smart-sending windows.',
      },
    ],
  },
  {
    key: 'email-design-development',
    label: 'Email Design & Custom HTML Development',
    serviceHref: '/services/email-design',
    serviceName: 'Email Design & HTML Coding',
    questions: [
      {
        id: 'edd-1',
        q: 'What is the difference between your Email Design service and Email Development service?',
        a: 'Email Design covers the visual direction, layout hierarchy, typography, product merchandising, and conversion UX created in Figma. Email Development is the technical hand-coding of responsive HTML/CSS (or hybrid Klaviyo templates) so those designs render flawlessly across every inbox client.',
      },
      {
        id: 'edd-2',
        q: 'Why not just use all-image emails exported from Canva or Figma?',
        a: 'All-image emails get clipped or throttled by spam filters, fail completely when images are blocked, cannot be read by screen readers, break in dark mode, and load slowly on mobile connections. We combine crisp visual graphics with live HTML text, bulletproof buttons, and dynamic product blocks for maximum deliverability and clicks.',
      },
      {
        id: 'edd-3',
        q: 'How do you make sure emails look great in Dark Mode and Microsoft Outlook?',
        a: 'With 13+ years of specialist HTML email coding experience, we write custom media queries, MSO conditional code for desktop Outlook, dark-mode meta tags, transparent PNG assets with subtle stroke outlines, and contrast-safe colour palettes tested across 90+ email clients via Litmus / Email on Acid.',
      },
      {
        id: 'edd-4',
        q: 'Can you build reusable modular templates that our internal team can edit without coding?',
        a: 'Yes. We build master modular template systems in Klaviyo, Mailchimp, HubSpot, or Campaign Monitor where your team can drag, drop, duplicate, and edit hero blocks, product grids, testimonials, and footers in minutes while staying 100% on-brand.',
      },
      {
        id: 'edd-5',
        q: 'How do you prevent Gmail from clipping long promotional emails?',
        a: 'Gmail clips any email whose raw HTML exceeds 102 KB, which also hides the tracking pixel and breaks open-rate reporting. We write ultra-clean, minified table-based HTML with zero bloated inline styles so even content-rich emails stay well under the 102 KB threshold.',
      },
      {
        id: 'edd-6',
        q: 'Can we send you our agency’s Figma designs to hand-code into responsive HTML or Klaviyo templates?',
        a: 'Yes! Many design studios and marketing agencies hire us specifically to convert their Figma, PSD, or XD files into pixel-perfect, Litmus-tested HTML emails or Klaviyo/HubSpot/Mailchimp templates with 24–48 hour turnaround.',
      },
    ],
  },
  {
    key: 'email-campaigns-automations',
    label: 'Email Campaigns & Multi-ESP Automations',
    serviceHref: '/services/email-campaigns',
    serviceName: 'Email Campaigns & Automations',
    questions: [
      {
        id: 'eca-1',
        q: 'How does your monthly Email Campaign management work from start to finish?',
        a: 'Every month we build a strategic promotional & content calendar aligned with your product launches, inventory priorities, and seasonal holidays. Once you approve the calendar topics, we write the copy, design and code the emails, build the target segments, schedule the sends, and report on revenue performance.',
      },
      {
        id: 'eca-2',
        q: 'How many email campaigns should an eCommerce brand send per week?',
        a: 'Most growing DTC brands hit their sweet spot sending 2 to 4 segmented campaigns per week—blending educational/storytelling content, social proof, product spotlights, and strategic promotions so your list stays engaged without burning out.',
      },
      {
        id: 'eca-3',
        q: 'How early do you start planning for Black Friday / Cyber Monday (BFCM) and Q4?',
        a: 'We start Q4 and BFCM preparation in September and October: cleaning lists, warming sender reputation, growing VIP early-access lists via pop-ups, and pre-building all November holiday campaigns and countdown flows so Peak Season runs stress-free.',
      },
      {
        id: 'eca-4',
        q: 'Do you write the email copy as well, or do we need to provide it?',
        a: 'We handle conversion copywriting in-house, tailored to your brand voice and customer psychology. If your team prefers to supply rough briefs or finished copy, we’re equally happy to collaborate around your workflow.',
      },
      {
        id: 'eca-5',
        q: 'Do you build email automations on platforms outside of Klaviyo?',
        a: 'Yes. Through our dedicated Email Automations & HTML Development services, we build complex multi-step journeys, drip sequences, and custom templates inside HubSpot, Mailchimp, ActiveCampaign, Omnisend, Campaign Monitor, Customer.io, and Salesforce Marketing Cloud.',
      },
    ],
  },
  {
    key: 'reporting-team-support',
    label: 'Reporting, A/B Testing & Our Team',
    serviceHref: '/services/reporting-improvement',
    serviceName: 'Reporting & Continuous Improvement',
    questions: [
      {
        id: 'rts-1',
        q: 'What does your monthly Reporting & Improvement retainer include?',
        a: 'Every month you receive a clear, plain-English performance report tracking total email/SMS attributed revenue, flow vs campaign split, revenue per recipient (RPR), list growth vs churn, and deliverability health—paired with a concrete optimization plan we execute the following month.',
      },
      {
        id: 'rts-2',
        q: 'How do you run ongoing A/B testing across our campaigns and flows?',
        a: 'We test one clear variable at a time so every send produces statistically valid learnings: subject lines and preview text for open rates, hero layout and CTA placement for click-through rates, send-time windows, and flow time delays or offer structures for revenue per recipient.',
      },
      {
        id: 'rts-3',
        q: 'How long does it take to see measurable ROI from email and retention work?',
        a: 'Quick wins from deliverability fixes, sign-up form upgrades, and core Abandoned Checkout / Welcome flows typically show measurable revenue lift within the first 14 to 30 days. Compounding retention gains (repeat purchase rate and LTV growth) build steadily over months 2 and 3.',
      },
      {
        id: 'rts-4',
        q: 'Who will actually work on our account—junior account managers or senior specialists?',
        a: 'You work directly with Founder Zahidul Islam (13+ years in Klaviyo, HTML email development & retention marketing, 752+ 5.0-star reviews on Upwork) and our senior Shopify & email specialists. Your account is never handed off to inexperienced juniors.',
      },
      {
        id: 'rts-5',
        q: 'How do we communicate with your team and what are your working hours?',
        a: 'We communicate via shared Slack channels, WhatsApp, email, and scheduled video walkthrough calls. We maintain daily overlap with US, UK, European, and Australian business hours with fast same-day response times.',
      },
      {
        id: 'rts-6',
        q: 'Do you partner with other agencies on a white-label or overflow basis?',
        a: 'Yes! We act as the behind-the-scenes Klaviyo, HTML Email Development, and Shopify execution partner for digital agencies in the US, UK, Canada, and Australia—working under strict NDA directly inside your Slack or project management tools.',
      },
    ],
  },
]

export default function FAQPage() {
  // Default open state: first question of the first category open (just like Flowium)
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'gs-1': true })
  const [activeCat, setActiveCat] = useState<string>(categories[0].key)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const searchContainerRef = useRef<HTMLDivElement>(null)
  const isManualScroll = useRef(false)

  // Toggle individual accordion item
  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  // Live search results across all categories
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    const matches: { id: string; q: string; catLabel: string; catKey: string }[] = []
    for (const cat of categories) {
      for (const item of cat.questions) {
        if (
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q) ||
          cat.label.toLowerCase().includes(q)
        ) {
          matches.push({
            id: item.id,
            q: item.q,
            catLabel: cat.label,
            catKey: cat.key,
          })
        }
      }
    }
    return matches
  }, [searchQuery])

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setSearchFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Scroll-spy IntersectionObserver to highlight active category in left sidebar
  useEffect(() => {
    const headings = categories
      .map((c) => document.getElementById(`cat-${c.key}`))
      .filter(Boolean) as HTMLElement[]

    if (!headings.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          const id = visible[0].target.id.replace('cat-', '')
          setActiveCat(id)
        }
      },
      {
        rootMargin: '-110px 0px -60% 0px',
        threshold: 0,
      }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  // Smooth scroll to a category section
  const scrollToCategory = (key: string) => {
    setActiveCat(key)
    setMobileDrawerOpen(false)
    const el = document.getElementById(`cat-${key}`)
    if (!el) return
    isManualScroll.current = true
    const y = el.getBoundingClientRect().top + window.scrollY - 104
    window.scrollTo({ top: y, behavior: 'smooth' })
    setTimeout(() => {
      isManualScroll.current = false
    }, 650)
  }

  // Click a search result: close popup, open that exact accordion, scroll to it
  const selectSearchResult = (id: string, catKey: string) => {
    setSearchFocused(false)
    setSearchQuery('')
    setActiveCat(catKey)
    setOpenIds({ [id]: true })

    setTimeout(() => {
      const el = document.getElementById(`faq-item-${id}`)
      if (el) {
        isManualScroll.current = true
        const y = el.getBoundingClientRect().top + window.scrollY - 130
        window.scrollTo({ top: y, behavior: 'smooth' })
        setTimeout(() => {
          isManualScroll.current = false
        }, 650)
      }
    }, 60)
  }

  // Highlight matching substring in search dropdown
  const highlightMatch = (text: string, query: string) => {
    const clean = query.trim()
    if (!clean) return text
    const idx = text.toLowerCase().indexOf(clean.toLowerCase())
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <strong style={{ color: 'var(--g)', fontWeight: 700 }}>
          {text.slice(idx, idx + clean.length)}
        </strong>
        {text.slice(idx + clean.length)}
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '68px' }}>
        <style>{`
          /* ── Hero Section (Flowium-inspired centered header + live search bar) ── */
          .flw-faq-hero {
            padding: 76px 0 68px;
            background:
              radial-gradient(ellipse at top left, rgba(30, 166, 114, 0.14) 0%, transparent 58%),
              radial-gradient(ellipse at bottom right, rgba(30, 166, 114, 0.12) 0%, transparent 58%),
              #f3faf7;
            border-bottom: 1px solid var(--border);
            position: relative;
          }
          .flw-faq-hero-inner {
            max-width: 780px;
            margin: 0 auto;
            text-align: center;
          }
          .flw-faq-divider {
            width: 50px;
            height: 4px;
            background: var(--g);
            border-radius: 20px;
            margin: 0 auto 20px;
          }
          .flw-faq-hero h1 {
            font-size: clamp(34px, 4.5vw, 56px);
            font-weight: 800;
            line-height: 1.12;
            color: var(--ink);
            margin-bottom: 16px;
            letter-spacing: -0.02em;
          }
          .flw-faq-hero-sub {
            font-size: 16.5px;
            color: var(--ink3);
            line-height: 1.7;
            max-width: 620px;
            margin: 0 auto 34px;
          }

          /* ── Live Search Input & Instant Popup ── */
          .flw-search-wrap {
            position: relative;
            max-width: 720px;
            margin: 0 auto;
            text-align: left;
          }
          .flw-search-box {
            position: relative;
            display: flex;
            align-items: center;
          }
          .flw-search-ico {
            position: absolute;
            left: 18px;
            color: var(--ink4);
            pointer-events: none;
            transition: color 0.18s ease;
          }
          .flw-search-box:focus-within .flw-search-ico {
            color: var(--g);
          }
          .flw-search-input {
            width: 100%;
            min-height: 54px;
            padding: 14px 48px 14px 50px;
            font-family: inherit;
            font-size: 15.5px;
            color: var(--ink);
            background: #ffffff;
            border: 1.5px solid #cbd8d2;
            border-radius: 10px;
            outline: none;
            box-shadow: 0 8px 24px rgba(15, 22, 35, 0.05);
            transition: border-color 0.18s ease, box-shadow 0.18s ease;
          }
          .flw-search-input::placeholder {
            color: var(--ink4);
          }
          .flw-search-input:focus {
            border-color: var(--g);
            box-shadow: 0 10px 30px rgba(30, 166, 114, 0.14);
          }
          .flw-search-clear {
            position: absolute;
            right: 14px;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: none;
            background: var(--soft);
            color: var(--ink3);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.15s ease, color 0.15s ease;
          }
          .flw-search-clear:hover {
            background: var(--gl);
            color: var(--gd);
          }

          .flw-search-popup {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            right: 0;
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 12px;
            box-shadow: 0 16px 40px rgba(15, 22, 35, 0.12);
            max-height: 320px;
            overflow-y: auto;
            padding: 12px;
            z-index: 60;
          }
          .flw-search-item {
            display: flex;
            flex-direction: column;
            gap: 3px;
            width: 100%;
            text-align: left;
            background: transparent;
            border: none;
            padding: 11px 14px;
            border-radius: 8px;
            cursor: pointer;
            font-family: inherit;
            transition: background 0.15s ease;
          }
          .flw-search-item:hover {
            background: #f2fbf7;
          }
          .flw-search-item-cat {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--g);
          }
          .flw-search-item-q {
            font-size: 14.5px;
            font-weight: 500;
            color: var(--ink);
            line-height: 1.45;
          }
          .flw-search-empty {
            padding: 18px 16px;
            text-align: center;
            font-size: 14.5px;
            color: var(--ink3);
          }

          /* ── Main 2-Column Content Layout (Left Sticky TOC + Center/Right Accordions) ── */
          .flw-faq-body {
            padding: 80px 0 110px;
            background: #ffffff;
          }
          .flw-faq-layout {
            display: grid;
            grid-template-columns: 310px minmax(0, 1fr);
            gap: 64px;
            align-items: start;
          }

          /* ── Left Sticky Sidebar ── */
          .flw-sidebar {
            position: sticky;
            top: 96px;
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            padding-right: 6px;
          }
          .flw-sidebar::-webkit-scrollbar {
            width: 4px;
          }
          .flw-sidebar::-webkit-scrollbar-thumb {
            background: var(--border);
            border-radius: 4px;
          }
          .flw-sidebar-title {
            font-size: 17px;
            font-weight: 700;
            color: var(--ink);
            margin-bottom: 18px;
            padding-left: 12px;
          }
          .flw-cat-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 3px;
          }
          .flw-cat-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            text-align: left;
            font-family: inherit;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.4;
            color: var(--ink2);
            background: transparent;
            border: none;
            border-left: 3px solid transparent;
            border-radius: 0 8px 8px 0;
            padding: 10px 14px 10px 12px;
            cursor: pointer;
            transition: background 0.16s ease, color 0.16s ease, border-color 0.16s ease;
          }
          .flw-cat-btn:hover {
            background: #f2fbf7;
            color: var(--g);
          }
          .flw-cat-btn.active {
            background: #eaf8f2;
            color: var(--ink);
            border-left-color: var(--g);
            font-weight: 700;
          }
          .flw-cat-count {
            font-size: 11.5px;
            font-weight: 700;
            color: var(--ink4);
            background: var(--soft);
            padding: 2px 8px;
            border-radius: 100px;
            flex-shrink: 0;
          }
          .flw-cat-btn.active .flw-cat-count {
            background: var(--g);
            color: #ffffff;
          }

          /* ── Mobile Sticky Category Trigger & Modal Drawer ── */
          .flw-mobile-cat-bar {
            display: none;
            margin-bottom: 28px;
          }
          .flw-mobile-cat-trigger {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #1ea672, #17845b);
            color: #ffffff;
            border: none;
            border-radius: 100px;
            padding: 12px 22px;
            font-family: inherit;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 10px 24px rgba(30, 166, 114, 0.25);
          }
          .flw-mobile-drawer-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(15, 22, 35, 0.65);
            backdrop-filter: blur(4px);
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .flw-mobile-drawer {
            background: #ffffff;
            width: 100%;
            max-width: 420px;
            max-height: 82vh;
            border-radius: 16px;
            padding: 24px 20px;
            overflow-y: auto;
            box-shadow: 0 24px 60px rgba(15, 22, 35, 0.25);
          }
          .flw-mobile-drawer-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border);
          }
          .flw-mobile-drawer-head h3 {
            font-size: 17px;
            font-weight: 700;
            color: var(--ink);
            margin: 0;
          }
          .flw-mobile-drawer-close {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid var(--border);
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--ink2);
          }

          /* ── Right/Center Category Sections & Accordions ── */
          .flw-content-col {
            min-width: 0;
          }
          .flw-cat-section {
            margin-bottom: 72px;
            scroll-margin-top: 104px;
          }
          .flw-cat-section:last-of-type {
            margin-bottom: 40px;
          }
          .flw-cat-header {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 24px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--border);
          }
          .flw-cat-header h2 {
            font-size: clamp(24px, 2.8vw, 34px);
            font-weight: 800;
            color: var(--ink);
            line-height: 1.25;
            margin: 0;
            letter-spacing: -0.015em;
          }
          .flw-service-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-size: 13.5px;
            font-weight: 700;
            color: var(--g);
            text-decoration: none;
            transition: color 0.15s ease, transform 0.15s ease;
          }
          .flw-service-link:hover {
            color: var(--gd);
            transform: translateX(2px);
          }

          .flw-acc-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .flw-acc-card {
            background: #ffffff;
            border: 1px solid #e3e8ee;
            border-radius: 10px;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            overflow: hidden;
          }
          .flw-acc-card:hover {
            border-color: #c5d6ce;
          }
          .flw-acc-card.open {
            border-color: rgba(30, 166, 114, 0.45);
            box-shadow: 0 7px 20px rgba(30, 166, 114, 0.11);
          }
          .flw-acc-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            text-align: left;
            background: transparent;
            border: none;
            padding: 19px 24px;
            font-family: inherit;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.45;
            color: var(--ink);
            cursor: pointer;
            transition: color 0.15s ease;
          }
          .flw-acc-btn:hover {
            color: var(--g);
          }
          .flw-acc-card.open .flw-acc-btn {
            color: var(--gd);
          }
          .flw-acc-chevron {
            flex-shrink: 0;
            color: var(--ink4);
            transition: transform 0.25s ease, color 0.15s ease;
          }
          .flw-acc-card.open .flw-acc-chevron {
            transform: rotate(180deg);
            color: var(--g);
          }

          .flw-acc-panel {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 0.25s ease;
          }
          .flw-acc-card.open .flw-acc-panel {
            grid-template-rows: 1fr;
          }
          .flw-acc-panel-inner {
            overflow: hidden;
          }
          .flw-acc-body {
            padding: 0 24px 22px;
            font-size: 15.5px;
            color: var(--ink2);
            line-height: 1.75;
          }
          .flw-acc-body p {
            margin: 0;
          }
          .flw-acc-bullets {
            list-style: none;
            padding: 0;
            margin: 12px 0 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          .flw-acc-bullets li {
            position: relative;
            padding-left: 18px;
            font-size: 15px;
            color: var(--ink2);
            line-height: 1.6;
          }
          .flw-acc-bullets li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 9px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--g);
          }

          /* ── Bottom Help Banner ── */
          .flw-faq-cta {
            margin-top: 56px;
            padding: 40px 36px;
            border-radius: 18px;
            background:
              radial-gradient(ellipse at top right, rgba(30, 166, 114, 0.14) 0%, transparent 60%),
              var(--soft);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 24px;
          }
          .flw-faq-cta-left {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            max-width: 540px;
          }
          .flw-faq-cta-ico {
            width: 46px;
            height: 46px;
            border-radius: 12px;
            background: var(--gl);
            color: var(--g);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .flw-faq-cta h3 {
            font-size: 20px;
            font-weight: 800;
            color: var(--ink);
            margin: 0 0 6px;
          }
          .flw-faq-cta p {
            font-size: 14.5px;
            color: var(--ink3);
            line-height: 1.6;
            margin: 0;
          }

          @media (max-width: 960px) {
            .flw-faq-layout {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            .flw-sidebar {
              display: none;
            }
            .flw-mobile-cat-bar {
              display: block;
              position: sticky;
              top: 78px;
              z-index: 30;
            }
          }

          @media (max-width: 600px) {
            .flw-faq-hero {
              padding: 56px 0 48px;
            }
            .flw-faq-body {
              padding: 48px 0 80px;
            }
            .flw-acc-btn {
              padding: 16px 18px;
              font-size: 15px;
            }
            .flw-acc-body {
              padding: 0 18px 18px;
              font-size: 14.5px;
            }
            .flw-faq-cta {
              padding: 28px 22px;
            }
          }
        `}</style>

        {/* ── Hero Section with Live Search ── */}
        <section className="flw-faq-hero">
          <div className="wrap flw-faq-hero-inner">
            <div className="flw-faq-divider" />
            <h1>Frequently Asked Questions</h1>
            <p className="flw-faq-hero-sub">
              Clear answers on how we work, pricing, and every Shopify, Klaviyo, and Email Marketing service we deliver at PlusSquire.
            </p>

            <div className="flw-search-wrap" ref={searchContainerRef}>
              <div className="flw-search-box">
                <Search size={19} className="flw-search-ico" />
                <input
                  type="text"
                  className="flw-search-input"
                  placeholder="Search any question, topic, or service (e.g., DMARC, migration, flows, pricing)..."
                  value={searchQuery}
                  onFocus={() => setSearchFocused(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setSearchFocused(true)
                  }}
                />
                {searchQuery && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    className="flw-search-clear"
                    onClick={() => setSearchQuery('')}
                  >
                    <X size={15} />
                  </button>
                )}
              </div>

              {searchFocused && searchQuery.trim().length > 0 && (
                <div className="flw-search-popup">
                  {searchResults.length > 0 ? (
                    searchResults.map((res) => (
                      <button
                        key={res.id}
                        type="button"
                        className="flw-search-item"
                        onClick={() => selectSearchResult(res.id, res.catKey)}
                      >
                        <span className="flw-search-item-cat">{res.catLabel}</span>
                        <span className="flw-search-item-q">
                          {highlightMatch(res.q, searchQuery)}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="flw-search-empty">
                      There are no results for &ldquo;<strong>{searchQuery}</strong>&rdquo;
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Main 2-Column FAQ Content ── */}
        <section className="flw-faq-body">
          <div className="wrap">
            {/* Mobile Category Trigger */}
            <div className="flw-mobile-cat-bar">
              <button
                type="button"
                className="flw-mobile-cat-trigger"
                onClick={() => setMobileDrawerOpen(true)}
              >
                <ListFilter size={17} />
                FAQ Categories
              </button>
            </div>

            {/* Mobile Category Modal Drawer */}
            {mobileDrawerOpen && (
              <div
                className="flw-mobile-drawer-backdrop"
                onClick={() => setMobileDrawerOpen(false)}
              >
                <div
                  className="flw-mobile-drawer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flw-mobile-drawer-head">
                    <h3>Go to category:</h3>
                    <button
                      type="button"
                      className="flw-mobile-drawer-close"
                      aria-label="Close category menu"
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <ul className="flw-cat-list">
                    {categories.map((cat) => (
                      <li key={cat.key}>
                        <button
                          type="button"
                          className={`flw-cat-btn${activeCat === cat.key ? ' active' : ''}`}
                          onClick={() => scrollToCategory(cat.key)}
                        >
                          <span>{cat.label}</span>
                          <span className="flw-cat-count">{cat.questions.length}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="flw-faq-layout">
              {/* Left Sticky Category Sidebar */}
              <aside className="flw-sidebar" aria-label="FAQ Categories">
                <div className="flw-sidebar-title">FAQ Categories:</div>
                <ul className="flw-cat-list">
                  {categories.map((cat) => (
                    <li key={cat.key}>
                      <button
                        type="button"
                        className={`flw-cat-btn${activeCat === cat.key ? ' active' : ''}`}
                        onClick={() => scrollToCategory(cat.key)}
                      >
                        <span>{cat.label}</span>
                        <span className="flw-cat-count">{cat.questions.length}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Center/Right Vertically Stacked Category Sections */}
              <div className="flw-content-col" id="faq-section-content">
                {categories.map((cat) => (
                  <div
                    key={cat.key}
                    id={`cat-${cat.key}`}
                    className="flw-cat-section"
                  >
                    <div className="flw-cat-header">
                      <h2>{cat.label}</h2>
                      {cat.serviceHref && (
                        <Link href={cat.serviceHref} className="flw-service-link">
                          Explore {cat.serviceName} <ArrowUpRight size={15} />
                        </Link>
                      )}
                    </div>

                    <div className="flw-acc-list">
                      {cat.questions.map((item) => {
                        const isOpen = !!openIds[item.id]
                        return (
                          <div
                            key={item.id}
                            id={`faq-item-${item.id}`}
                            className={`flw-acc-card${isOpen ? ' open' : ''}`}
                          >
                            <button
                              type="button"
                              className="flw-acc-btn"
                              aria-expanded={isOpen}
                              onClick={() => toggleItem(item.id)}
                            >
                              <span>{item.q}</span>
                              <ChevronDown size={19} className="flw-acc-chevron" />
                            </button>
                            <div className="flw-acc-panel">
                              <div className="flw-acc-panel-inner">
                                <div className="flw-acc-body">
                                  <p>{item.a}</p>
                                  {item.bullets && (
                                    <ul className="flw-acc-bullets">
                                      {item.bullets.map((b) => (
                                        <li key={b}>{b}</li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}

                {/* Bottom CTA Card */}
                <div className="flw-faq-cta">
                  <div className="flw-faq-cta-left">
                    <div className="flw-faq-cta-ico">
                      <MessageSquare size={22} />
                    </div>
                    <div>
                      <h3>Still have a specific question about your store?</h3>
                      <p>
                        Book a free 30-minute discovery call with Zahidul Islam to walk through your Shopify store or Klaviyo account directly.
                      </p>
                    </div>
                  </div>
                  <Link href="/#contact" className="btn-primary">
                    Book a Free Discovery Call →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
