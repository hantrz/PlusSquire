const rows = [
  {
    pro: 'Dedicated team on your brand every single week',
    con: 'New face assigned to your account every few months',
  },
  {
    pro: 'Strategy built around your revenue goals, not vanity metrics',
    con: "Monthly reports full of vanity metrics that don't move the needle",
  },
  {
    pro: 'We only take clients we know we can grow',
    con: 'Will onboard any brand that swipes a card',
  },
  {
    pro: 'Proactive ideas and honest pushback when needed',
    con: 'Waiting for your brief before doing anything',
  },
  {
    pro: 'Every campaign tied to actual revenue impact',
    con: 'Clicks and impressions with no business context',
  },
  {
    pro: 'Full-stack execution: Shopify dev, copy, design, flows, and strategy',
    con: 'Siloed specialists who never talk to each other',
  },
]

const goodFit = [
  'Established brand ready to scale revenue across their store and inbox',
  'Values long-term partnership over cheap one-off work',
  'Wants a team that thinks, not just executes',
  'Open to honest strategy conversations',
  'Focused on business growth, not just vanity metrics',
]

const notFit = [
  'Looking for the cheapest option available',
  'Needs results overnight with no strategy budget',
  'Wants someone who just says yes to everything',
  'Not ready to invest in their store and inbox as revenue channels',
  'Prefers to micromanage every single deliverable',
]

export default function WhySquire() {
  return (
    <>
      <style>{`
        .wm-section {
          background: #f8fafb;
          padding: 96px 0;
        }
        .wm-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .wm-headline {
          font-size: clamp(1.875rem, 3.5vw, 2.5rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 14px;
        }
        .wm-subheadline {
          font-size: 1.125rem;
          color: #6b7280;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Table (built from divs + CSS grid, not <table> markup, so the
           mobile "stacked card" layout below doesn't hit the Safari/WebKit
           quirk where border-radius + overflow:hidden fail to clip a
           display:block'd <tr>) */
        .wm-table-wrap {
          overflow-x: auto;
          border-radius: 20px;
          background: var(--dark2);
          padding-bottom: 32px;
          margin-bottom: 32px;
        }
        .wm-table {
          width: 100%;
          min-width: 520px;
        }
        .wm-thead {
          display: grid; grid-template-columns: 1fr 1fr;
          background: var(--dark);
        }
        .wm-th-pro, .wm-th-con {
          padding: 18px 28px;
          font-size: 1rem;
          font-weight: 700;
        }
        .wm-th-pro { color: var(--g); border-right: 1px solid rgba(255, 255, 255, 0.08); }
        .wm-th-con { color: var(--ink4); }
        .wm-row {
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: var(--dark2);
        }
        .wm-row:last-child { padding-bottom: 5px; }
        .wm-td {
          padding: 16px 28px;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        .wm-td-pro {
          color: #e2e8f0;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }
        .wm-td-con {
          color: var(--ink4);
        }
        .wm-check {
          color: var(--g);
          font-weight: 700;
          margin-right: 8px;
          flex-shrink: 0;
        }
        .wm-cross {
          color: #c2645f;
          font-weight: 700;
          margin-right: 8px;
          flex-shrink: 0;
        }
        .wm-cell {
          display: flex;
          align-items: flex-start;
        }

        /* Fit cards */
        .wm-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 32px;
        }
        .wm-card {
          border-radius: 16px;
          padding: 28px 28px 32px;
        }
        .wm-card-good {
          background: linear-gradient(135deg, #0c2b1f, #123c2b);
          border: 1px solid rgba(30, 166, 114, .3);
        }
        .wm-card-bad {
          background: linear-gradient(135deg, #201412, #2c1a17);
          border: 1px solid rgba(194, 101, 95, .3);
        }
        .wm-card-title {
          font-size: 1.0625rem;
          font-weight: 700;
          margin: 0 0 18px;
        }
        .wm-card-good .wm-card-title { color: var(--g); }
        .wm-card-bad  .wm-card-title { color: #c2645f; }
        .wm-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .wm-card ul li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9375rem;
          color: #e2e8f0;
          line-height: 1.5;
        }
        .wm-bullet-good {
          color: var(--g);
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .wm-bullet-bad {
          color: #c2645f;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (max-width: 640px) {
          .wm-section { padding: 64px 0; }
          .wm-cards { grid-template-columns: 1fr; }
          .wm-card { padding: 22px 20px 26px; }

          /* Stack the comparison table into cards instead of a scrolling table */
          .wm-table-wrap { overflow-x: visible; padding-bottom: 16px; }
          .wm-table { min-width: 0; }
          .wm-thead { display: none; }
          .wm-row {
            display: block;
            border-top: none; border-radius: 12px; overflow: hidden;
            margin: 0 16px 12px;
          }
          .wm-row:last-child { margin-bottom: 0; }
          .wm-td { display: block; padding: 14px 16px; }
          .wm-td-pro, .wm-td-con { border-right: none; }
          .wm-row + .wm-row { border-top: 1px solid rgba(255, 255, 255, 0.08); }
          .wm-td::before {
            content: attr(data-label);
            display: block; font-size: 10px; font-weight: 700;
            text-transform: uppercase; letter-spacing: .06em;
            margin-bottom: 6px; opacity: .7;
          }
          .wm-td-pro::before { color: var(--g); }
          .wm-td-con::before { color: var(--ink4); }
        }
      `}</style>

      <section className="wm-section">
        <div className="wrap" style={{maxWidth:'1240px'}}>
          <div className="wm-header">
            <h2 className="wm-headline">Why PlusSquire over everyone else?</h2>
            <p className="wm-subheadline">
              Most agencies look the same on paper. Here&apos;s what actually separates us.
            </p>
          </div>

          <div className="wm-table-wrap">
            <div className="wm-table">
              <div className="wm-thead">
                <div className="wm-th-pro">✓&nbsp; PlusSquire</div>
                <div className="wm-th-con">✗&nbsp; Other Agencies</div>
              </div>
              {rows.map((row, i) => (
                <div className="wm-row" key={i}>
                  <div className="wm-td wm-td-pro" data-label="✓ PlusSquire">
                    <span className="wm-cell">
                      <span className="wm-check">✓</span>
                      {row.pro}
                    </span>
                  </div>
                  <div className="wm-td wm-td-con" data-label="✗ Other Agencies">
                    <span className="wm-cell">
                      <span className="wm-cross">✗</span>
                      {row.con}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wm-cards">
            <div className="wm-card wm-card-good">
              <p className="wm-card-title">✓ Good Fit</p>
              <ul>
                {goodFit.map((item) => (
                  <li key={item}>
                    <span className="wm-bullet-good">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="wm-card wm-card-bad">
              <p className="wm-card-title">✗ Not a Fit</p>
              <ul>
                {notFit.map((item) => (
                  <li key={item}>
                    <span className="wm-bullet-bad">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
