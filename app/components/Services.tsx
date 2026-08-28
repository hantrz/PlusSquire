import Link from 'next/link'
import { Send } from 'lucide-react'

function ShopifyIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
    </svg>
  )
}

function KlaviyoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size * (45.4 / 68)} viewBox="0 0 68 45.4" fill="currentColor" aria-hidden="true">
      <path d="M68,45.4 L0,45.4 L0,0 L68,0 L53.6,22.7 L68,45.4 Z" />
    </svg>
  )
}

const serviceCategories = [
  {
    id: 'shopify-engineering',
    label: 'Shopify Engineering',
    icon: ShopifyIcon,
    summary: 'Theme Development, Migration, Speed Optimization & Custom Features.',
    count: '4 services',
  },
  {
    id: 'klaviyo-management',
    label: 'Klaviyo Management',
    icon: KlaviyoIcon,
    summary: 'Klaviyo Setup, Flow Setup, Account Audit, Sign-Up Forms & SMS Campaigns.',
    count: '5 services',
  },
  {
    id: 'email-marketing',
    label: 'Email Marketing',
    icon: Send,
    summary: 'Email Design, Development, Campaigns & Automations.',
    count: '4 services',
  },
]

export default function Services() {
  return (
    <>
      <style>{`
        .services { background: var(--soft); padding: 96px 0; }

        .svc-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 24px;
        }

        /* Cards */
        .svc-card {
          position: relative; overflow: hidden;
          background: #fff; padding: 40px 32px;
          border: 1px solid var(--border); border-radius: 16px;
          cursor: pointer; transition: all 0.3s ease;
          text-decoration: none; display: block;
        }
        /* Animated green top border bar */
        .svc-card::before {
          content: ''; position: absolute; top: 0; left: 0;
          height: 3px; width: 0%; background: var(--g);
          transition: width 0.4s ease-in-out;
        }
        .svc-card:hover::before { width: 100%; }
        .svc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(30, 166, 114, 0.2);
          background: #f8fefb;
        }

        .svc-ico {
          width: 56px; height: 56px; background: var(--gl);
          border-radius: 14px; display: flex; align-items: center;
          justify-content: center; margin-bottom: 22px; color: var(--g);
        }
        .svc-count {
          font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em;
          color: var(--g); margin-bottom: 8px;
        }
        .svc-card h3 { font-size: 19px; margin-bottom: 10px; color: var(--ink); }
        .svc-card p { color: var(--ink3); font-size: 14px; line-height: 1.7; }
        .svc-arr { margin-top: 20px; color: var(--g); font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 6px; }
        .svc-card:hover .svc-arr { gap: 10px; }

        /* Bottom CTA */
        .svc-cta { text-align: center; margin-top: 48px; }

        @media(max-width:900px){ .svc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="services" id="services">
        <div className="wrap">
          <div className="sh-row">
            <h2>Full-stack Shopify <br />&amp; email, <em>under one roof.</em></h2>
            <p className="section-sub">From Shopify builds to email flows: every layer, fully covered.</p>
          </div>

          <div className="svc-grid">
            {serviceCategories.map((cat) => (
              <Link key={cat.id} href={`/services#${cat.id}`} className="svc-card">
                <div className="svc-ico"><cat.icon size={26} /></div>
                <div className="svc-count">{cat.count}</div>
                <h3>{cat.label}</h3>
                <p>{cat.summary}</p>
                <div className="svc-arr">View services →</div>
              </Link>
            ))}
          </div>

          <div className="svc-cta">
            <Link href="/services" className="link-more">All Services →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
