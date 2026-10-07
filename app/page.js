import { Header, Footer, BostadKort } from "@/components/Delar";
import { hero, saFunkarDet, bostader, malgrupper, avslutning } from "@/content";

const rutStil = {
  bla: { ruta: "audience-blue", knapp: "btn-amber" },
  gron: { ruta: "audience-green", knapp: "btn-blue" },
  vit: { ruta: "audience-white", knapp: "btn-outline" },
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="container hero">
          <div className="hero-text">
            <h1>{hero.rubrik}</h1>
            <p className="lead">{hero.text}</p>
            <div className="btn-row">
              <a href={hero.knapp1.lank} className="btn btn-amber btn-lg">{hero.knapp1.text}</a>
              <a href={hero.knapp2.lank} className="btn btn-outline btn-lg">{hero.knapp2.text}</a>
            </div>
            <p className="small">{hero.liten}</p>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-image" style={hero.bild ? { backgroundImage: `url(${hero.bild})` } : undefined}>
                {!hero.bild && (
                  <svg width="300" height="230" viewBox="0 0 300 230" role="img" aria-label="Illustration av ett hus">
                    <rect x="0" y="200" width="300" height="30" fill="#A9CDB5" />
                    <circle cx="250" cy="60" r="26" fill="#fff" opacity="0.8" />
                    <rect x="60" y="100" width="180" height="104" rx="18" fill="#fff" />
                    <path d="M40 112 L150 30 L260 112" fill="none" stroke="var(--blue)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="90" y="130" width="40" height="34" rx="10" fill="var(--green-light)" />
                    <rect x="170" y="130" width="40" height="34" rx="10" fill="var(--green-light)" />
                    <rect x="132" y="150" width="36" height="54" rx="10" fill="var(--green)" />
                  </svg>
                )}
              </div>
              <div className="hero-card-body">
                <div className="card-title-serif">{hero.kortRubrik}</div>
                <div className="muted">{hero.kortInfo}</div>
              </div>
              <div className="badge-interest">
                <span className="dot" />
                <span>{hero.notis}</span>
              </div>
              <div className="badge-match">{hero.matchning}</div>
            </div>
          </div>
        </section>

        {/* Så funkar det */}
        <section className="band-white">
          <div className="container stack-lg">
            <h2 className="narrow">{saFunkarDet.rubrik}</h2>
            <div className="grid-3">
              {saFunkarDet.steg.map((s, i) => (
                <div key={s.rubrik} className="step">
                  <div className={`step-num ${i === saFunkarDet.steg.length - 1 ? "step-num-amber" : ""}`}>{i + 1}</div>
                  <h3>{s.rubrik}</h3>
                  <p className="muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bostäder */}
        <section className="container section stack-md">
          <div className="section-head">
            <h2>{bostader.rubrik}</h2>
            <a href={bostader.visaAlla.lank} className="link-strong">{bostader.visaAlla.text}</a>
          </div>
          <div className="grid-3">
            {bostader.lista.map((b) => (
              <BostadKort key={b.rubrik + b.info} b={b} />
            ))}
          </div>
        </section>

        {/* Målgrupper */}
        <section className="container section-tight">
          <div className="grid-3">
            {malgrupper.map((m) => {
              const stil = rutStil[m.stil] || rutStil.vit;
              return (
                <div key={m.rubrik} className={`audience ${stil.ruta}`}>
                  <h3>{m.rubrik}</h3>
                  <p>{m.text}</p>
                  <a href={m.knapp.lank} className={`btn ${stil.knapp}`}>{m.knapp.text}</a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Avslutning */}
        <section className="container section-tight">
          <div className="cta">
            <h2>{avslutning.rubrik}</h2>
            <a href={avslutning.knapp.lank} className="btn btn-blue btn-lg">{avslutning.knapp.text}</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
