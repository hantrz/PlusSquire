import { LayoutGrid, Zap, CheckCircle, Globe } from 'lucide-react'

const cards = [
  {
    icon: LayoutGrid,
    title: 'Full Ownership, Zero Headache',
    body: 'No briefing. No follow-ups. No micromanaging. We take complete ownership of your Shopify store and email channel from strategy to execution, so you stay focused on growing your business.',
  },
  {
    icon: Zap,
    title: 'Fast Wins, Then Scale',
    body: "We don't wait for perfection. We launch fast, track what works, and double down on results. You'll see real revenue impact within weeks, not months.",
  },
  {
    icon: CheckCircle,
    title: 'Results or We Walk',
    body: "We tie our work to your numbers. If the results aren't there, you're free to leave: no lock-in contracts, no fine print, no excuses.",
  },
  {
    icon: Globe,
    title: 'Your Entire Funnel, Covered',
    body: "From lead capture to post-purchase retention, we connect every touchpoint. Your store and your inbox aren't separate tactics here, they're one revenue system.",
  },
]

export default function NotJustEmail() {
  return (
    <>
      <style>{`
        .nje-section {
          background: #f8fafb;
          padding: 96px 0;
        }
        .nje-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .nje-headline {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .nje-headline-green {
          color: #16a34a;
        }
        .nje-subheadline {
          font-size: 1.125rem;
          color: #6b7280;
          margin: 0 auto;
          white-space: nowrap;
          line-height: 1.6;
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
          padding: 28px 24px 32px;
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
          box-shadow: 0 8px 30px rgba(30, 166, 114, 0.2);
          background: #f8fefb;
        }
        .nje-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          padding: 12px;
          margin-bottom: 20px;
        }
        .nje-card-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px;
        }
        .nje-card-body {
          font-size: 0.9375rem;
          color: #6b7280;
          line-height: 1.65;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .nje-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .nje-section { padding: 64px var(--px); }
          .nje-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="nje-section">
        <div className="wrap">
          <div className="nje-header">
            <h2 className="nje-headline">
              You&apos;re not buying{' '}
              <span className="nje-headline-green">&ldquo;tasks&rdquo;</span>
            </h2>
            <p className="nje-subheadline">
              You&apos;re investing in a revenue engine for your store and your inbox.
            </p>
          </div>

          <div className="nje-grid">
            {cards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="nje-card">
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
