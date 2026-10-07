import { useEffect, useState } from "react";
import { BRAND, T } from "./content.js";
import Logotype from "./assets/Logo.png";
import LogotypeT from "./assets/Logo I.png";

function Logo() {
  return (
    <a className="logo" href="#top" aria-label={BRAND}>
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
      <div className={`hero-img scene-${s.color}`} role="img" aria-label={s.title}>
        {/* <svg viewBox="0 0 800 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
          <circle cx="620" cy="70" r="40" className="sun" />
          <path d="M0 220 Q200 150 400 210 T800 190 V300 H0Z" className="hill1" />
          <path d="M0 250 Q250 200 500 245 T800 235 V300 H0Z" className="hill2" />
          <g className="dish">
            <ellipse cx="170" cy="120" rx="80" ry="22" transform="rotate(-12 170 120)" />
            <rect x="163" y="130" width="14" height="110" />
          </g>
        </svg> */}
      </div>
      <div className="hero-card" key={i}>
        <h1>{s.title}</h1>
        <a className="btn" href="#expertise">{t.discover}</a>
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
  const t = T[lang];
  const cards = tab === 0 ? t.biz : t.pub;
  const anchors = ["#groupe", "#impact", "#expertise", "#actus"];

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  return (
    <>
      <div className="topbar">
        <div className="wrap row">
          <div className="row gap">
            <a className="orange b" href="#top">{t.top.biz}</a>
            <a className="b" href="#top">{t.top.pub}</a>
            <a className="b hide-s" href="#top">{t.top.sites} ▾</a>
            <a className="b hide-s" href="#top">{t.top.media}</a>
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
              {t.navRight.map((n) => <a key={n} href={n === t.navRight[2] ? "#carrieres" : "#top"}>{n}</a>)}
            </nav>
            <button className="icon" aria-label="Search">⌕</button>
            <button className="icon burger" aria-label="Menu" onClick={() => setMenu(!menu)}>☰</button>
          </div>
        </div>
      </header>

      <main>
        <Hero t={t} key={lang} />

        <section className="sec group" id="groupe">
          <div className="group-wrap">

            <div className="left">
              <h2>{t.nav[0]}</h2>
            </div>

            <div className="right">
              <p className="lead">{t.top.biz} {t.about}</p>
            </div>
          </div>

         <div className="img"></div>
        </section>

        <section className="sec" id="expertise">
          <div className="wrap">
            <h2>{t.expTitle}</h2>
            <div className="tabs" role="tablist">
              {t.tabs.map((x, k) => (
                <button key={x} role="tab" aria-selected={tab === k} className={tab === k ? "tab on" : "tab"} onClick={() => setTab(k)}>{x}</button>
              ))}
            </div>
            <div className="grid3">
              {cards.map(([h, p]) => (
                <article className="card" key={h}>
                  <span className="sq" />
                  <h3>{h}</h3>
                  <p>{p}</p>
                  <a className="link" href="#top">{t.discover}</a>
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
              {t.news.map(([c, h, d]) => (
                <article className="news" key={h}>
                  <div className="news-img" />
                  <small>{c} : {d}</small>
                  <h3>{h}</h3>
                  <a className="link" href="#top">{t.more}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec grey" id="carrieres">
          <div className="wrap split">
            <div>
              <h2>{t.careersTitle}</h2>
              <p className="lead">{t.careersText}</p>
              <a className="btn" href="#top">{t.careersBtn}</a>
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
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="row gap-l wrapf">
            <img src={LogotypeT} alt="" style={{ width: "60px" }} />
            <nav className="flinks">{t.foot.map((f) => <a key={f} href="#top">{f}</a>)}</nav>
          </div>
          <p>© {new Date().getFullYear()} {BRAND}. {t.rights}</p>
        </div>
      </footer>
    </>
  );
}
