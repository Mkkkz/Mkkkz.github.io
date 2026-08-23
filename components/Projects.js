import Reveal from "./Reveal";

const projects = [
  {
    letter: "H",
    grad: "grad-haven",
    badge: "Novo",
    role: "Plataforma",
    title: "HavenCloud",
    desc: "Projeto web voltado para hospedagem e infraestrutura.",
    techs: ["Next.js", "TypeScript", "Linux"],
    site: "https://havencloud.host",
  },
  {
    letter: "L",
    grad: "grad-light",
    role: "Web Platform",
    title: "LightBux",
    desc: "Plataforma web própria para organizar produtos e serviços digitais.",
    techs: ["Next.js", "TypeScript", "Supabase"],
    site: "https://lightbux.online",
  },
  {
    letter: "M",
    grad: "grad-mott",
    role: "Website",
    title: "MotterCloud",
    desc: "Projeto web relacionado a cloud e hospedagem.",
    techs: ["Next.js", "Vercel"],
    site: "https://mottercloud.vercel.app",
  },
  {
    letter: "M",
    grad: "grad-magma",
    role: "Website",
    title: "MagmaKz",
    desc: "Projeto web desenvolvido anteriormente.",
    techs: ["JavaScript", "Vercel"],
    site: "https://magmakz.online",
  },
  {
    letter: "Z",
    grad: "grad-zoko",
    role: "Website",
    title: "ZokoInfo",
    desc: "Projeto web desenvolvido para uma plataforma de informações.",
    techs: ["Next.js", "Supabase"],
    site: "https://zokoinfo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">O que eu já fiz</p>
          <h2 className="section__title">Meus trabalhos</h2>
        </header>

        <div className="projects__grid">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="project">
                <div className="project__thumb">
                  <div className={`project__thumb-grad ${p.grad}`}>
                    <span className="project__thumb-letter">{p.letter}</span>
                  </div>
                  {p.badge && <span className="project__badge">{p.badge}</span>}
                </div>
                <div className="project__body">
                  <p className="project__role">{p.role}</p>
                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__desc">{p.desc}</p>
                  <div className="project__techs">
                    {p.techs.map((t) => (
                      <span className="project__tech" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project__links">
                    <a
                      href={p.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link project__link--site"
                    >
                      Visitar site
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}