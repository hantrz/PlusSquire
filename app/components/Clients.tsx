const clients = [
  'WonderCrunch','PureSport','WhiteningCo','Boyd & Co',
  'SleepDrops','FoxFolk','SkinnyFizz','Williams Warn',
  'Safe-Guard Products','Inaya Nutrition',
]

const platforms = [
  { name: 'Klaviyo',     logo: '/logos/klaviyo.svg',     noFilter: false, imgHeight: 36 },
  { name: 'Shopify',     logo: '/logos/shopify.svg',     noFilter: false, imgHeight: 36 },
  { name: 'HubSpot',     logo: '/logos/hubspot.svg',     noFilter: false, imgHeight: 44 },
  { name: 'Mailchimp',   logo: '/logos/mailchimp.svg',   noFilter: false, imgHeight: 44 },
  { name: 'Postscript',  logo: '/logos/postscript.svg',  noFilter: true,  imgHeight: 32 },
  { name: 'Attentive',   logo: '/logos/attentive.svg',   noFilter: false, imgHeight: 25 },
  { name: 'WooCommerce', logo: '/logos/woocommerce.svg', noFilter: true,  imgHeight: 35 },
  { name: 'BigCommerce', logo: '/logos/bigcommerce.svg', noFilter: false, imgHeight: 40 },
]

export default function Clients() {
  return (
    <>
      <style>{`
        .clients { background: var(--soft); padding: 56px 0; border-bottom: 1px solid var(--border); }
        .clients-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--px); }
        .clients-label { text-align: center; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: var(--ink4); margin-bottom: 36px; }
        .logo-strip { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 10px; }
        .logo-pill {
          background: #fff; border: 1px solid var(--border); border-radius: 100px;
          padding: 9px 22px; font-size: 13.5px; font-weight: 700; color: var(--ink3);
          font-family: 'Inter', sans-serif; letter-spacing: -.01em;
          transition: border-color .2s, color .2s; cursor: default;
        }
        .logo-pill:hover { border-color: var(--gm); color: var(--gd); }

        .platforms { background: var(--dark); padding: 64px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .platforms-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--px); text-align: center; }
        .platforms h3 { color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 10px; letter-spacing: -0.01em; }
        .platforms-sub { font-size: 14.5px; color: rgba(255,255,255,0.45); margin: 0 auto 44px; max-width: 520px; line-height: 1.75; }
        .platforms-row { display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
        .platform-item { display: flex; align-items: center; justify-content: center; }
        .platform-item img { width: auto; object-fit: contain; transform-origin: center; transition: filter 0.3s ease, opacity 0.3s ease, transform 0.3s ease; }

        .platform-item.inverted img { filter: brightness(0) invert(1); opacity: 0.8; }
        .platform-item.inverted img:hover { filter: brightness(0) invert(1) drop-shadow(0 0 8px rgba(28, 155, 112, 0.8)); opacity: 1; transform: scale(1.15); }

        .platform-item.natural img { opacity: 0.9; }
        .platform-item.natural img:hover { filter: drop-shadow(0 0 8px rgba(28, 155, 112, 0.8)); opacity: 1; transform: scale(1.15); }

        @media(max-width:768px){ .platforms-row { gap: 28px 36px; } }
      `}</style>

      <div className="clients">
        <div className="clients-inner">
          <p className="clients-label">Trusted by brands across eCommerce, SaaS &amp; Retail</p>
          <div className="logo-strip">
            {clients.map((c) => (
              <div key={c} className="logo-pill">{c}</div>
            ))}
          </div>
        </div>
      </div>

      <section className="platforms">
        <div className="platforms-inner">
          <h3>Works with the platforms you use</h3>
          <p className="platforms-sub">
            Primary focus on Shopify and Klaviyo. Experience across HubSpot, Mailchimp, ActiveCampaign, Omnisend, WooCommerce, BigCommerce, and 15+ more platforms.
          </p>
          <div className="platforms-row">
            {platforms.map((p) => (
              <div key={p.name} className={`platform-item ${p.noFilter ? 'natural' : 'inverted'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo}
                  alt={p.name}
                  width="auto"
                  height={p.imgHeight}
                  style={{ height: p.imgHeight, width: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
