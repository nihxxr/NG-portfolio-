import { Link } from "react-router";
import BinaryRain from "../components/BinaryRain";
import ScanPhoto from "../components/ScanPhoto";
import Scramble from "../components/Scramble";
import Terminal from "../components/Terminal";
import { projects } from "../data/projects";
import { education, experience, links, moreProjects, skills } from "../data/site";

function WorkCard({ project, size }) {
  return (
    <Link to={`/work/${project.slug}`} viewTransition className={`card card-${size}`}>
      <span className="card-shot" style={{ viewTransitionName: `shot-${project.slug}` }}>
        <img src={project.card || project.cover} alt="" loading="lazy" style={{ objectPosition: project.coverPosition }} />
      </span>
      <span className="card-body">
        <Scramble text={project.name} className="card-title" style={{ viewTransitionName: `title-${project.slug}` }} onMount={false} duration={450} />
        <span className="card-tagline">{project.tagline}</span>
        <span className="card-stat"><b>{project.stat.value}</b> {project.stat.label}</span>
      </span>
    </Link>
  );
}

const SIZES = { asli: "hero", datasetfinder: "tall", "weather-risk": "wide", muse: "half", aq10: "half" };

export default function Home() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <BinaryRain className="rain" />
        <span className="orb orb-a" aria-hidden="true" />
        <span className="orb orb-b" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker" aria-hidden="true">&gt; ai_engineer.init()</p>
            <Scramble as="h1" text={"Nihar\nGirish"} className="hero-name" duration={1100} />
            <p className="hero-lede">I'm an AI engineer in Bengaluru. I build AI tools that explain their answers and get tested before they ship.</p>
            <p className="hero-status">AI Engineer at EngConvo. Starting a Master of IT in AI at James Cook University, Brisbane, in February 2027.</p>
            <div className="hero-actions">
              <a className="btn" href="#work">See my work</a>
              <a className="btn btn-ghost" href={`mailto:${links.email}`}>Email me</a>
            </div>
          </div>
          <ScanPhoto src="/nihar.webp" alt="Nihar Girish" />
        </div>
        <div className="hero-term"><Terminal /></div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <h2 id="work-title" className="section-title">Work</h2>
        <div className="bento">
          {projects.map((p) => <WorkCard key={p.slug} project={p} size={SIZES[p.slug]} />)}
        </div>
      </section>

      <section id="experience" className="section" aria-labelledby="exp-title">
        <h2 id="exp-title" className="section-title">Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.org}>
              <span className="timeline-when">{e.when}</span>
              <div>
                <h3>{e.role}, <span>{e.org}</span></h3>
                <p>{e.what}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <h2 id="skills-title" className="section-title">What I work with</h2>
        <div className="bento bento-skills">
          {skills.map((s) => (
            <div key={s.group} className={`tile ${s.wide ? "tile-wide" : ""}`}>
              <h3>{s.group}</h3>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="more-title">
        <h2 id="more-title" className="section-title">Other projects</h2>
        <ul className="more">
          {moreProjects.map((m) => (
            <li key={m.name}>
              <h3>{m.name}</h3>
              <p>{m.what}</p>
              <p className="more-stack">{m.stack}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="section about" aria-labelledby="about-title">
        <h2 id="about-title" className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I like problems where the model is only half the work. The other half is making it trustworthy: an honest evaluation, an explanation a non-technical person can follow, and an interface that works for the people who'll actually use it.</p>
            <p>Right now I build automation bots and an AI test portal at EngConvo. Before that I built GenAI bots for HR teams at Happiest Minds, an ad-copy tool at MyMuse, and backend APIs at Sconti.</p>
            <p>Outside code, I've run more than 60 large events and worked on marketing campaigns. That taught me to think about who's in the room before I think about the stack.</p>
          </div>
          <dl className="edu">
            {education.map((e) => (
              <div key={e.what}>
                <dt>{e.when}</dt>
                <dd><strong>{e.what}</strong><span>{e.where}</span></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="contact-title">Let's build something</h2>
        <p className="contact-lede">I'm open to AI engineering roles. I also take on freelance work for startups and small businesses: websites, WhatsApp and email automations, and internal AI tools.</p>
        <a className="contact-email" href={`mailto:${links.email}`}>{links.email}</a>
        <ul className="contact-links">
          <li><a href={links.linkedin}>LinkedIn</a></li>
          <li><a href={links.github}>GitHub</a></li>
        </ul>
      </section>
    </>
  );
}
