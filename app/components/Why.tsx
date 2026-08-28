import Link from 'next/link'

const reasons = [
  { num: '01', title: 'Design, Dev & Automation Under One Roof', body: 'Unlike most agencies, we handle everything in-house: Shopify builds, pixel-perfect HTML, revenue-driving flows, and full automation setup. No handoffs. No miscommunication. Figma to inbox, start to finish.' },
  { num: '02', title: '13+ Years, 800+ Projects Delivered', body: 'We have built and delivered 800+ projects across Shopify builds and every type of email: campaigns, transactional, flows, and full automation series. That depth means fewer mistakes and faster results.' },
  { num: '03', title: 'Your Email Looks Perfect. Everywhere.', body: 'Gmail, Outlook, Apple Mail, Samsung Mail. Your emails will render flawlessly everywhere. We test across 50+ client and device combinations before every send.' },
  { num: '04', title: 'Revenue-First Approach', body: 'Every decision we make, from Shopify UX and page speed to subject lines, flow logic, and send timing, is driven by one question: will this make our client more money? Everything we build is designed to make you money.' },
]

export default function Why() {
  return (
    <>
      <style>{`
        .why { background: #fff; padding: 96px 0; }

        .why .section-sub { max-width: 780px; }

        /* Grid: separate cards with visible gaps */
        .why-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Cards */
        .why-card {
          position: relative; overflow: hidden;
          background: #fff; padding: 44px 40px;
          border: 1px solid var(--border); border-radius: 14px;
          transition: all 0.3s ease;
        }
        /* Animated green top border bar */
        .why-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          height: 3px; width: 0%; background: var(--g);
          transition: width 0.4s ease-in-out;
        }
        .why-card:hover::before { width: 100%; }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(30, 166, 114, 0.2);
          background: #f8fefb;
        }

        .why-num {
          font-family: var(--font-inter), sans-serif;
          font-size: 48px; font-weight: 800; color: var(--gl);
          line-height: 1; margin-bottom: 20px;
          -webkit-text-stroke: 2px var(--gm);
        }
        .why-card h3 { font-size: 19px; margin-bottom: 10px; color: var(--ink); }
        .why-card p { color: var(--ink3); font-size: 14.5px; line-height: 1.75; }

        /* Bottom banner */
        .why-full {
          grid-column: span 2;
          background: linear-gradient(135deg, #1ea672 0%, #17845b 100%) !important;
          padding: 36px 40px;
          border-radius: 14px;
        }
        .why-full::before { display: none; }
        .why-full:hover { transform: none; box-shadow: none; background: linear-gradient(135deg, #1ea672 0%, #17845b 100%) !important; }
        .why-full-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; max-width: 1000px; margin: 0 auto; width: 100%; }
        .why-full-text { min-width: 750px; flex-shrink: 0; }
        .why-full h3 { font-size: 22px; color: #fff; margin-bottom: 8px; }
        .why-full p { color: rgba(255,255,255,.75); font-size: 15px; line-height: 1.65; }
        @media(min-width:768px){ .why-full p { max-width: 700px; } }
        .why-full-btn { flex-shrink: 0; align-self: center; }

        .btn-white-sm {
          background: #fff; color: var(--gd);
          padding: 14px 28px; border-radius: 8px;
          font-size: 14px; font-weight: 700; text-decoration: none;
          flex-shrink: 0; white-space: nowrap; transition: box-shadow .18s;
        }
        .btn-white-sm:hover { box-shadow: 0 6px 20px rgba(0,0,0,.12); }

        @media(max-width:768px){
          .why-grid { grid-template-columns: 1fr; }
          .why-full { grid-column: span 1; }
          .why-full-inner { flex-direction: column; align-items: flex-start; }
          .why-full-text { min-width: unset; width: 100%; }
          .why-full p { max-width: 100%; }
        }
      `}</style>

      <section className="why">
        <div className="wrap">
          <div className="sh-row">
            <h2>More than an agency:<br />we&apos;re your <em>growth team.</em></h2>
            <p className="section-sub">Most email agencies don&apos;t touch Shopify. Most Shopify devs don&apos;t touch email.<br />We do both: strategy, design, development and automation, under one roof.</p>
          </div>
          <div className="why-grid">
            {reasons.map((r) => (
              <div key={r.num} className="why-card">
                <div className="why-num">{r.num}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
            <div className="why-card why-full">
              <div className="why-full-inner">
                <div className="why-full-text">
                  <h3>Stop juggling 3 vendors. We handle it all.</h3>
                  <p>Shopify development, email strategy, design, and automations, all under one roof.<br />Stop coordinating between your designer, developer, and strategist.</p>
                </div>
                <div className="why-full-btn">
                  <Link href="#contact" className="btn-white-sm">Work With Us →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
