const rows = [
  {
    pro: 'Dedicated team on your brand every single week',
    con: 'New face assigned to your account every few months',
  },
  {
    pro: 'Strategy built around your revenue goals, not vanity metrics',
    con: "Monthly reports full of open rates that don't move the needle",
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
    con: 'Click rates and impressions with no business context',
  },
  {
    pro: 'Full-stack execution: copy, design, flows, and strategy',
    con: 'Siloed specialists who never talk to each other',
  },
]

const goodFit = [
  'Established brand ready to scale email revenue',
  'Values long-term partnership over cheap one-off work',
  'Wants a team that thinks, not just executes',
  'Open to honest strategy conversations',
  'Focused on business growth, not just email metrics',
]

const notFit = [
  'Looking for the cheapest option available',
  'Needs results overnight with no strategy budget',
  'Wants someone who just says yes to everything',
  'Not ready to invest in email as a revenue channel',
  'Prefers to micromanage every single email',
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

        /* Table */
        .wm-table-wrap {
          overflow-x: auto;
          border-radius: 20px;
          background: #2e3f55;
          padding-bottom: 32px;
          margin-bottom: 32px;
        }
        .wm-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 520px;
        }
        .wm-table thead tr {
          background: #1e293b;
        }
        .wm-table thead th {
          padding: 18px 28px;
          font-size: 1rem;
          font-weight: 700;
          text-align: left;
          width: 50%;
        }
        .wm-table thead th:first-child {
          border-right: 1px solid #334155;
        }
        .wm-th-pro { color: #4ade80; }
        .wm-th-con { color: #94a3b8; }
        .wm-table tbody tr {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: #2e3f55;
        }
        .wm-table tbody td {
          padding: 16px 28px;
          font-size: 0.9375rem;
          line-height: 1.6;
          vertical-align: top;
        }
        .wm-table tbody tr:last-child td {
          padding-bottom: 5px;
        }
        .wm-table tbody td:first-child {
          color: #e2e8f0;
          border-right: 1px solid #1e293b;
        }
        .wm-table tbody td:last-child {
          color: #94a3b8;
        }
        .wm-check {
          color: #16a34a;
          font-weight: 700;
          margin-right: 8px;
          flex-shrink: 0;
        }
        .wm-cross {
          color: #ef4444;
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
          background: linear-gradient(135deg, #052e16, #14532d);
          border: 1px solid #16a34a44;
        }
        .wm-card-bad {
          background: linear-gradient(135deg, #1c0a0a, #2d1414);
          border: 1px solid #ef444422;
        }
        .wm-card-title {
          font-size: 1.0625rem;
          font-weight: 700;
          margin: 0 0 18px;
        }
        .wm-card-good .wm-card-title { color: #16a34a; }
        .wm-card-bad  .wm-card-title { color: #ef4444; }
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
          color: #16a34a;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .wm-bullet-bad {
          color: #ef4444;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (max-width: 640px) {
          .wm-section { padding: 64px 0; }
          .wm-cards { grid-template-columns: 1fr; }
          .wm-card { padding: 22px 20px 26px; }
          .wm-table thead th,
          .wm-table tbody td { padding: 14px 16px; }
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
            <table className="wm-table">
              <thead>
                <tr>
                  <th className="wm-th-pro">✓&nbsp; PlusSquire</th>
                  <th className="wm-th-con">✗&nbsp; Other Agencies</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <span className="wm-cell">
                        <span className="wm-check">✓</span>
                        {row.pro}
                      </span>
                    </td>
                    <td>
                      <span className="wm-cell">
                        <span className="wm-cross">✗</span>
                        {row.con}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
