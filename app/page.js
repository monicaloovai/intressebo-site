import Logo from "@/components/Logo";

// Byt varumärkesnamn här – det används överallt på sidan.
const BRAND = "intressebo";

const listings = [
  { title: "Lägenhet, [ORT]", meta: "3 rum, 74 m²", interest: "8 intresserade", tint: "var(--green-light)" },
  { title: "Radhus, [ORT]", meta: "4 rum, 108 m²", interest: "15 intresserade", tint: "var(--blue-light)" },
  { title: "Fritidshus, [ORT]", meta: "3 rum, 62 m²", interest: "5 intresserade", tint: "var(--amber-light)" },
];

const steps = [
  { title: "Lägg upp gratis", text: "Beskriv din bostad och ladda upp några bilder. Det tar några minuter." },
  { title: "Se intresset", text: "Köpare som söker just det du har matchas mot din bostad, och du ser hur många de är." },
  { title: "Välj nästa steg", text: "Sälj med vårt AI-marknadsföringspaket eller bli kontaktad av en mäklare. Du bestämmer." },
];

export default function Home() {
  return (
    <>
      <header className="container nav">
        <a href="/" className="brand">
          <Logo />
          <span>{BRAND}</span>
        </a>
        <nav className="nav-links">
          <a href="#">Sälj</a>
          <a href="#">Hitta bostad</a>
          <a href="#">För mäklare</a>
          <a href="#" className="link-blue">Logga in</a>
          <a href="#" className="btn btn-amber">Testa intresset</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="container hero">
          <div className="hero-text">
            <h1>Hur många vill ha ditt hem?</h1>
            <p className="lead">
              Lägg upp din bostad gratis och se hur många köpare som är intresserade, innan du bestämmer dig för att sälja.
            </p>
            <div className="btn-row">
              <a href="#" className="btn btn-amber btn-lg">Testa intresset gratis</a>
              <a href="#" className="btn btn-outline btn-lg">Jag letar bostad</a>
            </div>
            <p className="small">Gratis att lägga upp. Inget krav på att sälja.</p>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-image">
                <svg width="300" height="230" viewBox="0 0 300 230" role="img" aria-label="Illustration av ett hus">
                  <rect x="0" y="200" width="300" height="30" fill="#A9CDB5" />
                  <circle cx="250" cy="60" r="26" fill="#fff" opacity="0.8" />
                  <rect x="60" y="100" width="180" height="104" rx="18" fill="#fff" />
                  <path d="M40 112 L150 30 L260 112" fill="none" stroke="var(--blue)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="90" y="130" width="40" height="34" rx="10" fill="var(--green-light)" />
                  <rect x="170" y="130" width="40" height="34" rx="10" fill="var(--green-light)" />
                  <rect x="132" y="150" width="36" height="54" rx="10" fill="var(--green)" />
                </svg>
              </div>
              <div className="hero-card-body">
                <div className="card-title-serif">Villa, [ORT]</div>
                <div className="muted">5 rum, 142 m², tomt 820 m²</div>
              </div>
              <div className="badge-interest">
                <span className="dot" />
                <span>12 intresserade köpare</span>
              </div>
              <div className="badge-match">Ny matchning: söker villa i [ORT]</div>
            </div>
          </div>
        </section>

        {/* Så funkar det */}
        <section className="band-white">
          <div className="container stack-lg">
            <h2 className="narrow">Från nyfiken till såld, i din egen takt</h2>
            <div className="grid-3">
              {steps.map((s, i) => (
                <div key={s.title} className="step">
                  <div className={`step-num ${i === 2 ? "step-num-amber" : ""}`}>{i + 1}</div>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bostäder */}
        <section className="container section stack-md">
          <div className="section-head">
            <h2>Bostäder som väcker intresse</h2>
            <a href="#" className="link-strong">Visa alla bostäder</a>
          </div>
          <div className="grid-3">
            {listings.map((l) => (
              <article key={l.title} className="listing">
                <div className="listing-image" style={{ background: l.tint }}>
                  <span className="pill">
                    <span className="dot dot-sm" />
                    {l.interest}
                  </span>
                </div>
                <div className="listing-body">
                  <div className="listing-title">{l.title}</div>
                  <div className="muted">{l.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Målgrupper */}
        <section className="container section-tight">
          <div className="grid-3">
            <div className="audience audience-blue">
              <h3>Säljer du?</h3>
              <p>Se vad köparna tycker innan du anlitar någon. Helt utan förpliktelser.</p>
              <a href="#" className="btn btn-amber">Testa intresset</a>
            </div>
            <div className="audience audience-green">
              <h3>Letar du bostad?</h3>
              <p>Berätta vad du söker så matchar vi dig med bostäder, även innan de kommer ut på marknaden.</p>
              <a href="#" className="btn btn-blue">Skapa bevakning</a>
            </div>
            <div className="audience audience-white">
              <h3>Är du mäklare?</h3>
              <p>Skapa ett gratis konto och få kontakt med säljare som redan funderar på att sälja.</p>
              <a href="#" className="btn btn-outline">Skapa mäklarkonto</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container section-tight">
          <div className="cta">
            <h2>Ditt hem kan redan ha spekulanter.</h2>
            <a href="#" className="btn btn-blue btn-lg">Kolla intresset gratis</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="footer-brand">{BRAND}</span>
          <div className="footer-links">
            <a href="#">Om oss</a>
            <a href="#">Kontakt</a>
            <a href="#">Integritet</a>
          </div>
        </div>
      </footer>
    </>
  );
}
