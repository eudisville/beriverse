import { useEffect, useState, useRef } from "react";
import { BRAND, T, PARTNERS, EVENTS, EVENTS_PHOTO } from "./content.js";
import { EXTRA } from "./data.js";
import { useLocation } from "./router.js";
import { TEAM_TEXT } from "./team.js";
import { NewsPage, ArticlePage, CareersPage, JobPage, TeamPage } from "./pages.jsx";
import Logotype from "./assets/Logo.png";
import LogotypeT from "./assets/Noir Logo.png";

function Logo() {
  return (
    <a className="logo" href="/" aria-label={BRAND}>
      <img src={Logotype} alt={BRAND} />
    </a>
  );
}

function Laurel() {
  return (
    <svg className="laurel" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21c-.5 0-.9-.4-.9-.9V9.5a.9.9 0 0 1 1.8 0v10.6c0 .5-.4.9-.9.9z"/>
      <path d="M11 11C8.5 11 6.5 9 6.5 6.5c2.5 0 4.5 2 4.5 4.5zM13 11c2.5 0 4.5-2 4.5-4.5-2.5 0-4.5 2-4.5 4.5zM11 16c-2.5 0-4.5-2-4.5-4.5 2.5 0 4.5 2 4.5 4.5zM13 16c2.5 0 4.5-2 4.5-4.5-2.5 0-4.5 2-4.5 4.5z"/>
    </svg>
  );
}

function Hero({ t }) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setI((n) => (n + 1) % t.slides.length), 6000);
    return () => clearInterval(id);
  }, [playing, t.slides.length]);
  const s = t.slides[i];
  return (
    <section className="hero" id="top" aria-roledescription="carousel">
      <div className="hero-img" role="img" aria-label={s.title}>
        {t.slides.map((sl, n) => (
          <div key={n} className={`hero-slide scene-${sl.color}${n === i ? " on" : ""}`} />
        ))}
      </div>
      <div className="hero-card" key={i}>
        <h1>{s.title}</h1>
        <a className="btn" href="/#expertise">{t.discover}</a>
      </div>
      <div className="hero-ctrl">
        <button className="pill" onClick={() => setPlaying(!playing)} aria-label={playing ? t.pause : t.play}>
          {playing ? "❚❚" : "▶"}
        </button>
        <div className="pill dots">
          {t.slides.map((_, n) => (
            <button key={n} className={n === i ? "dot on" : "dot"} onClick={() => setI(n)} aria-label={`${t.slide} ${n + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState("fr");
  const [tab, setTab] = useState(0);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [sitesOpen, setSitesOpen] = useState(false);
  const sitesRef = useRef(null);
  const { path } = useLocation();

  const t = T[lang];
  const x = EXTRA[lang];
  const cards = tab === 0 ? t.biz : t.pub;
  // Liens du menu principal : A propos, Impact, Expertise → accueil ; Actualités → page dédiée
  const anchors = ["/#groupe", "/#impact", "/#expertise", "/actualites"];

  const externalSites = [
    { name: "Beriverse Academy", href: "https://academy.beriverse.fr/" },
    { name: "Beriverse English Center", href: "https://english.beriverse.fr/" },
    { name: "Beriverse Edge AI ", href: "https://english.beriverse.fr/" },
    ...(t.top.media ? [{ name: t.top.media, href: "/" }] : []),
  ];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { setMenu(false); }, [path]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (sitesRef.current && !sitesRef.current.contains(e.target)) setSitesOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const home = (
    <>
      <Hero t={t} key={lang} />

      <section className="sec group" id="groupe">
        <div className="group-wrap">
          <div className="left"><h2>{t.nav[0]}</h2></div>
          <div className="right"><p className="lead">{t.top.biz} {t.about}</p></div>
        </div>
        <div className="img"></div>
      </section>

      <section className="sec" id="expertise">
        <div className="wrap">
          <h2>{t.expTitle}</h2>
          <div className="tabs" role="tablist">
            {t.tabs.map((l, k) => (
              <button key={l} role="tab" aria-selected={tab === k} className={tab === k ? "tab on" : "tab"} onClick={() => setTab(k)}>{l}</button>
            ))}
          </div>
          <div className="grid3">
            {cards.map(([h, p, bgClass]) => (
              <article className={`card ${bgClass || ''}`} key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
                <a className="link" href="/#top" style={{ color: "white", borderBottom: "1px solid white" }}>{t.discover}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="sec">
        <div className="sec-itemps">
          <h1>Beriverse Association</h1>
          <p></p>
        </div>
      </section> */}

      <section className="sec black" id="impact">
        <div className="wrap">
          <h2>{t.figTitle}</h2>
          <div className="grid4">
            {t.figs.map(([n, l]) => (
              <div className="fig" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec partners" id="partenaires">
        <div className="wrap">
          <div className="partners-head">
            <span className="partners-label">{t.partnersLabel}</span>
            <h2>{t.partnersTitle}</h2>
          </div>
          <div className="partners-grid">
            {PARTNERS.map(({ name, logo }) => (
              <div className="partner" key={name}>
                <img src={logo} alt={name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec refs" id="references">
        <div className="wrap">
          <div className="refs-head">
            <span className="refs-label">{t.eventsLabel}</span>
            <p>{t.eventsText}</p>
          </div>
          <div className="refs-photo">
            <img src={EVENTS_PHOTO} alt="" loading="lazy" />
          </div>
          <div className="refs-grid">
            {EVENTS.map((e) => (
              <div className="ref-card" key={e.name}>
                <Laurel />
                <div className="ref-logo">
                  <img src={e.logo} alt={e.name} loading="lazy" />
                </div>
                <small>{e.year}</small>
                <strong>{e.title[lang]}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="actus">
        <div className="wrap">
          <h2>{t.newsTitle}</h2>
          <div className="grid3">
            {t.news.map(([c, h, d], k) => (
              <article className="news" key={h}>
                <div className="news-img" />
                <small>{c} : {d}</small>
                <h3>{h}</h3>
                <a className="link" href={`/actualites/${k}`}>{t.more}</a>
              </article>
            ))}
          </div>
          <p style={{ marginTop: 36 }}><a className="btn" href="/actualites">{x.allNews}</a></p>
        </div>
      </section>

      <section className="sec grey" id="carrieres">
        <div className="wrap split">
          <div>
            <h2>{t.careersTitle}</h2>
            <p className="lead">{t.careersText}</p>
            <a className="btn" href="/carrieres">{t.careersBtn}</a>
          </div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <h3>{t.contactTitle}</h3>
            <input required placeholder={t.name} aria-label={t.name} />
            <input required type="email" placeholder={t.email} aria-label={t.email} />
            <textarea required rows="3" placeholder={t.msg} aria-label={t.msg} />
            <button className="btn" type="submit">{t.send}</button>
            {sent && <p role="status" className="ok">{t.sent}</p>}
          </form>
        </div>
      </section>
    </>
  );

  // Choix de la page selon l'URL
  let page = home;
  if (path === "/actualites") page = <NewsPage t={t} x={x} />;
  else if (path.startsWith("/actualites/")) page = <ArticlePage t={t} x={x} id={Number(path.split("/")[2])} />;
  else if (path === "/equipe") page = <TeamPage x={x} lang={lang} />;
  else if (path === "/carrieres") page = <CareersPage t={t} x={x} />;
  else if (path.startsWith("/carrieres/")) page = <JobPage x={x} slug={path.split("/")[2]} />;

  return (
    <>
      <div className="topbar">
        <div className="wrap row">
          <div className="row gap">
            <a className="orange b" href="/">{t.top.biz}</a>
            <a className="b" href="/">{t.top.pub}</a>

            <div className="dropdown hide-s" ref={sitesRef}>
              <button type="button" className="b dropdown-btn" onClick={() => setSitesOpen(!sitesOpen)} aria-expanded={sitesOpen}>
                {t.top.sites} <span className={`arrow ${sitesOpen ? "open" : ""}`}>▾</span>
              </button>
              {sitesOpen && (
                <ul className="dropdown-menu">
                  {externalSites.map((site, index) => (
                    <li key={index}>
                      <a href={site.href} onClick={() => setSitesOpen(false)} target="_blank" rel="noopener noreferrer">{site.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {t.top.media && <a className="b hide-s" href="/">{t.top.media}</a>}
          </div>
          <div className="row gap">
            <span className="stock hide-s"><b>Côte</b> <span className="up">d'Ivoire</span></span>
            <div className="lang">
              <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")}>FR</button>
              <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            </div>
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="wrap row">
          <div className="row gap-l">
            <Logo />
            <nav className={menu ? "links open" : "links"}>
              {t.nav.map((n, k) => <a key={n} href={anchors[k]} onClick={() => setMenu(false)}>{n}</a>)}
              <a href="/equipe" onClick={() => setMenu(false)}>{TEAM_TEXT[lang].nav}</a>
            </nav>
          </div>
          <div className="row gap-l">
            <nav className="links right">
              {/* Le dernier lien de droite est toujours "Carrières" */}
              {t.navRight.map((n, k) => <a key={n} href={k === t.navRight.length - 1 ? "/carrieres" : "/"}>{n}</a>)}
            </nav>
            <button className="icon" aria-label="Search">⌕</button>
            <button className="icon burger" aria-label="Menu" onClick={() => setMenu(!menu)}>☰</button>
          </div>
        </div>
      </header>

      <main>{page}</main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot-main">
            <img src={LogotypeT} alt={BRAND} className="foot-logo" />
            <nav className="flinks" aria-label="Navigation de bas de page">
              {t.foot.map((f) => (
                <a key={f} href="#">{f}</a>
              ))}
            </nav>
          </div>

          <div className="foot-bottom">
            <p>© {new Date().getFullYear()} {BRAND}. {t.rights}</p>
            
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
