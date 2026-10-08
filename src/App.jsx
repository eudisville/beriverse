import { useEffect, useState, useRef } from "react";
import { BRAND, T } from "./content.js";
import { EXTRA } from "./data.js";
import { useLocation } from "./router.js";
import { NewsPage, ArticlePage, CareersPage, JobPage } from "./pages.jsx";
import Logotype from "./assets/Logo.png";
import LogotypeT from "./assets/Logo I.png";

function Logo() {
  return (
    <a className="logo" href="/" aria-label={BRAND}>
      <img src={Logotype} alt={BRAND} />
    </a>
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
      <div className={`hero-img scene-${s.color}`} role="img" aria-label={s.title}></div>
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
            {cards.map(([h, p]) => (
              <article className="card" key={h}>
                <span className="sq" />
                <h3>{h}</h3>
                <p>{p}</p>
                <a className="link" href="/#top">{t.discover}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

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
          <div className="row gap-l wrapf">
            <img src={LogotypeT} alt="" style={{ width: "60px" }} />
            <nav className="flinks">{t.foot.map((f) => <a key={f} href="/">{f}</a>)}</nav>
          </div>
          <p>© {new Date().getFullYear()} {BRAND}. {t.rights}</p>
        </div>
      </footer>
    </>
  );
}
