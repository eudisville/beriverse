import { useState } from "react";
import { MEMBERS, TEAM_TEXT } from "./team.js";
import "./pages.css";

function PageHead({ crumbs, title, intro }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map(([l, h], k) => (h ? <a key={k} href={h}>{l}</a> : <span key={k}>{l}</span>))}
        </nav>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}

export function NewsPage({ t, x }) {
  const [cat, setCat] = useState("all");
  const cats = [...new Set(t.news.map((n) => n[0]))];
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [x.newsTitle]]} title={x.newsTitle} intro={x.newsIntro} />
      <section className="sec">
        <div className="wrap">
          <div className="tabs">
            {["all", ...cats].map((c) => (
              <button key={c} className={cat === c ? "tab on" : "tab"} onClick={() => setCat(c)}>{c === "all" ? x.all : c}</button>
            ))}
          </div>
          <div className="grid3">
            {t.news.map(([c, h, d], k) => (cat === "all" || cat === c) && (
              <article className="news" key={h}>
                <div className={`news-img art-${k % 3}`} />
                <small>{c} : {d}</small>
                <h3>{h}</h3>
                <a className="link" href={`/actualites/${k}`}>{t.more}</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ArticlePage({ t, x, id }) {
  const item = t.news[id];
  if (!item) {
    return (
      <section className="sec"><div className="wrap">
        <p className="lead">{x.notFound}</p><a className="btn" href="/actualites">{x.back}</a>
      </div></section>
    );
  }
  const [c, h, d] = item;
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [x.newsTitle, "/actualites"], [c]]} title={h} />
      <section className="sec">
        <div className="wrap article">
          <small className="meta">{c} : {d}</small>
          <div className={`art-hero art-${id % 3}`} />
          {(x.newsBody[id] || []).map((p, k) => <p key={k}>{p}</p>)}
          <a className="link" href="/actualites">{x.back}</a>
          <h2 className="also">{x.others}</h2>
          <div className="grid3">
            {t.news.map(([c2, h2, d2], k) => k !== id && (
              <article className="news" key={h2}>
                <small>{c2} : {d2}</small>
                <h3>{h2}</h3>
                <a className="link" href={`/actualites/${k}`}>{t.more}</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function CareersPage({ t, x }) {
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [x.careersTitle]]} title={x.careersTitle} intro={x.careersIntro} />
      <section className="sec">
        <div className="wrap">
          <h2>{x.whyTitle}</h2>
          <div className="grid3">
            {x.why.map(([h, p]) => (
              <article className="card" key={h}><span className="sq" /><h3>{h}</h3><p>{p}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="sec grey" id="offres">
        <div className="wrap">
          <h2>{x.jobsTitle}</h2>
          {x.jobs.map((j) => (
            <article className="job" key={j.title}>
              <div>
                <h3><a href={`/carrieres/${j.slug}`}>{j.title}</a></h3>
                <div className="chips"><span>{j.type}</span><span>{j.place}</span></div>
                <p>{j.desc}</p>
              </div>
              <div className="job-actions">
                <a className="btn" href={`/carrieres/${j.slug}`}>{x.viewJob}</a>
              </div>
            </article>
          ))}
          <div className="spont">
            <h3>{x.spont}</h3>
            <p>{x.spontText}</p>
            <a className="link" href={`mailto:${x.email}`}>{x.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}

export function JobPage({ x, slug }) {
  const j = x.jobs.find((o) => o.slug === slug);
  if (!j) {
    return (
      <section className="sec"><div className="wrap">
        <p className="lead">{x.jobNotFound}</p><a className="btn" href="/carrieres">{x.backJobs}</a>
      </div></section>
    );
  }
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [x.careersTitle, "/carrieres"], [j.title]]} title={j.title} />
      <section className="sec">
        <div className="wrap article">
          <div className="chips"><span>{j.type}</span><span>{j.place}</span></div>
          <p className="lead-job">{j.desc}</p>
          <h2 className="sub">{x.missions}</h2>
          <ul className="list">{j.missions.map((m) => <li key={m}>{m}</li>)}</ul>
          <h2 className="sub">{x.profileTitle}</h2>
          <ul className="list">{j.profile.map((m) => <li key={m}>{m}</li>)}</ul>
          <p>
            <a className="btn" href={`mailto:${x.email}?subject=${encodeURIComponent(x.subject + j.title)}`}>{x.apply}</a>
          </p>
          <a className="link" href="/carrieres">{x.backJobs}</a>
        </div>
      </section>
    </>
  );
}

export function TeamPage({ x, lang }) {
  const tt = TEAM_TEXT[lang];
  const [dept, setDept] = useState("all");
  const used = Object.keys(tt.depts).filter((d) => MEMBERS.some((m) => m.dept === d));
  const initials = (n) => n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [tt.title]]} title={tt.title} intro={tt.intro} />
      <section className="sec">
        <div className="wrap">
          <div className="tabs">
            {["all", ...used].map((d) => (
              <button key={d} className={dept === d ? "tab on" : "tab"} onClick={() => setDept(d)}>{d === "all" ? tt.all : tt.depts[d]}</button>
            ))}
          </div>
          <div className="team-grid">
            {MEMBERS.map((m, k) => (dept === "all" || dept === m.dept) && (
              <article className="member" key={k}>
                {m.photo ? <img className="avatar" src={m.photo} alt={m.name} loading="lazy" /> : <div className="avatar ph" aria-hidden="true">{initials(m.name)}</div>}
                <h3>{m.name}</h3>
                <strong className="role">{m.role[lang]}</strong>
                {/* <p>{m.bio[lang]}</p> */}
                {m.linkedin && (
                  <a className="social" href={m.linkedin} target="_blank" rel="noopener noreferrer"
                    aria-label={`LinkedIn – ${m.name}`} title="LinkedIn">
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
