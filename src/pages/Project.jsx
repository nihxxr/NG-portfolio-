import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { projectBySlug, projects } from "../data/projects";
import NotFound from "./NotFound";

function Section({ title, children }) {
  return (
    <section className="case-section">
      <h2>{title}</h2>
      <div className="case-body">{children}</div>
    </section>
  );
}

export default function Project() {
  const { slug } = useParams();
  const p = projectBySlug(slug);

  useEffect(() => {
    if (p) document.title = `${p.name} | Nihar Girish`;
    return () => { document.title = "Nihar Girish | AI Engineer"; };
  }, [p]);

  if (!p) return <NotFound />;
  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="case">
      <Link to="/#work" className="back" viewTransition>All work</Link>

      <header className="case-head">
        <h1 style={{ viewTransitionName: `title-${p.slug}` }}>{p.name}</h1>
        <p className="case-tagline">{p.tagline}</p>
        <dl className="case-meta">
          <div><dt>Year</dt><dd>{p.year}</dd></div>
          <div><dt>Role</dt><dd>{p.role}</dd></div>
          <div className="case-meta-wide"><dt>Stack</dt><dd>{p.stack.join(", ")}</dd></div>
        </dl>
        <div className="case-links">
          {p.links.map((l, n) => (
            <a key={l.href} className={n === 0 ? "btn" : "btn btn-ghost"} href={l.href}>{l.label}</a>
          ))}
        </div>
      </header>

      <figure className="case-cover" style={{ viewTransitionName: `shot-${p.slug}` }}>
        <img src={p.cover} alt={`${p.name} screenshot`} />
      </figure>

      <p className="case-stat"><b>{p.stat.value}</b> {p.stat.label}</p>

      <Section title="The problem">{p.problem.map((t) => <p key={t}>{t}</p>)}</Section>
      <Section title="What I built">{p.built.map((t) => <p key={t}>{t}</p>)}</Section>
      <Section title="How it works"><ul>{p.how.map((t) => <li key={t}>{t}</li>)}</ul></Section>
      <Section title="Results"><ul>{p.results.map((t) => <li key={t}>{t}</li>)}</ul></Section>
      <Section title="What I'd improve"><p>{p.honest}</p></Section>

      {p.gallery.length > 0 && (
        <section className="gallery" aria-label="More screenshots">
          {p.gallery.map((g) => (
            <figure key={g.src} className={g.mobile ? "shot-mobile" : ""}>
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>{g.alt}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <Link to={`/work/${next.slug}`} className="next" viewTransition>
        <span>Next project</span>
        <strong>{next.name}</strong>
      </Link>
    </article>
  );
}
