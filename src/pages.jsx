import { useState } from "react";
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
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 40 }}>
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
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 40 }}><div className="wrap">
        <p className="lead">{x.notFound}</p><a className="btn" href="/actualites">{x.back}</a>
      </div></section>
    );
  }
  const [c, h, d] = item;
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [x.newsTitle, "/actualites"], [c]]} title={h} />
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 40 }}>
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
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 40 }}>
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
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 40 }}><div className="wrap">
        <p className="lead">{x.jobNotFound}</p><a className="btn" href="/carrieres">{x.backJobs}</a>
      </div></section>
    );
  }
  return (
    <>
      <PageHead crumbs={[[x.home, "/"], [x.careersTitle, "/carrieres"], [j.title]]} title={j.title} />
      <section className="sec" style={{ paddingTop: 0, paddingBottom: 40 }}>
        <div className="wrap article">
          <div className="chips"><span>{j.type}</span><span>{j.place}</span></div>
          <p className="lead-job">{j.desc}</p>
          <h4 className="sub">{x.missions}</h4>
          <ul className="list">{j.missions.map((m) => <li key={m}>{m}</li>)}</ul>
          <h4 className="sub">{x.profileTitle}</h4>
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
