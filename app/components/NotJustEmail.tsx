import { LayoutGrid, Zap, CheckCircle, Globe } from 'lucide-react'

const cards = [
  {
    icon: LayoutGrid,
    title: 'Full Ownership, Zero Headache',
    body: 'No briefing bottlenecks. No micromanaging. We take complete ownership of your Shopify store and Klaviyo channel from strategy to code so you stay focused on scaling.',
  },
  {
    icon: Zap,
    title: 'Fast Wins, Then Scale',
    body: "We don't wait months to ship. We launch high-impact store improvements and core revenue flows first, track attribution, and compound what converts.",
  },
  {
    icon: CheckCircle,
    title: 'Results or We Walk',
    body: "We tie every deliverable to measurable conversion and retention lift. No lock-in retainers, no bloated agency overhead, and zero excuses.",
  },
  {
    icon: Globe,
    title: 'Storefront + Inbox Unified',
    body: "From custom Shopify Liquid sections and speed optimization to 50+ client-tested HTML emails, your storefront and inbox operate as one revenue machine.",
  },
]

export default function NotJustEmail() {
  return (
    <>
      <style>{`
        .nje-section {
          background: var(--soft);
          padding: 96px 0;
        }
        .nje-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .nje-headline {
          font-size: clamp(2rem, 3.8vw, 2.75rem);
          font-weight: 800;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 0 0 14px;
        }
        .nje-headline-green {
          color: var(--g);
        }
        .nje-subheadline {
          font-size: 1.0625rem;
          color: var(--ink3);
          margin: 0 auto;
          max-width: 560px;
          line-height: 1.7;
        }
        .nje-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .nje-card {
          position: relative;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 30px 26px 32px;
          transition: all 0.3s ease;
        }
        .nje-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          height: 3px; width: 0%; background: var(--g);
          transition: width 0.4s ease-in-out;
        }
        .nje-card:hover::before { width: 100%; }
        .nje-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(30, 166, 114, 0.16);
          border-color: var(--gm);
        }
        .nje-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--g), var(--gd));
          padding: 12px;
          margin-bottom: 20px;
          box-shadow: 0 6px 16px rgba(30, 166, 114, 0.25);
        }
        .nje-card-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 10px;
        }
        .nje-card-body {
          font-size: 0.9375rem;
          color: var(--ink3);
          line-height: 1.68;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .nje-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .nje-section { padding: 64px 0; }
          .nje-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="nje-section">
        <div className="wrap">
          <div className="nje-header" data-reveal="up">
            <h2 className="nje-headline">
              You&apos;re not buying{' '}
              <span className="nje-headline-green">&ldquo;tasks&rdquo;</span>
            </h2>
            <p className="nje-subheadline">
              You&apos;re investing in a unified revenue engine across your Shopify storefront and Klaviyo inbox.
            </p>
          </div>

          <div className="nje-grid">
            {cards.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="nje-card" data-reveal="up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="nje-icon-wrap">
                  <Icon size={22} color="#fff" strokeWidth={2} />
                </div>
                <h3 className="nje-card-title">{title}</h3>
                <p className="nje-card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
