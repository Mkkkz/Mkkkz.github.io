import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

interface Project {
  image: string;
  badge?: string;
  role: string;
  title: string;
  desc: string;
  techs: string[];
  site: string;
}

const projects: Project[] = [
  {
    image: "/assets/images/HavenCloud.png",
    badge: "Novo",
    role: "Plataforma",
    title: "HavenCloud",
    desc: "Projeto web voltado para hospedagem e infraestrutura.",
    techs: ["Next.js", "TypeScript", "Linux"],
    site: "https://havencloud.host",
  },
  {
    image: "/assets/images/LightBux.png",
    role: "Web Platform",
    title: "LightBux",
    desc: "Plataforma web própria para organizar produtos e serviços digitais.",
    techs: ["Next.js", "TypeScript", "Supabase"],
    site: "https://lightbux.online",
  },
  {
    image: "/assets/images/Motter-Cloud.png",
    role: "Website",
    title: "MotterCloud",
    desc: "Projeto web relacionado a cloud e hospedagem.",
    techs: ["Next.js", "Vercel"],
    site: "https://mottercloud.vercel.app",
  },
  {
    image: "/assets/images/MagmaKz.png",
    role: "Website",
    title: "MagmaKz",
    desc: "Projeto web desenvolvido anteriormente.",
    techs: ["JavaScript", "Vercel"],
    site: "https://magmakz.online",
  },
  {
    image: "/assets/images/ZokoInfo.png",
    role: "Website",
    title: "ZokoInfo",
    desc: "Projeto web desenvolvido para uma plataforma de informações.",
    techs: ["Next.js", "Supabase"],
    site: "https://zokoinfo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="py-[var(--space-section)]" id="projetos">
      <div className="mx-auto max-w-[var(--max-width)] px-7">
        <header className="mx-auto mb-16 max-w-[720px] text-center">
          <p className="mb-2 text-[0.95rem] font-medium text-[var(--color-muted)]">
            O que eu já fiz
          </p>
          <h2 className="text-[clamp(1.9rem,4.5vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
            Meus{" "}
            <span className="text-gradient font-script text-[1.18em] font-normal tracking-normal">
              trabalhos
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="group flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[var(--color-card)] transition-all duration-200 hover:-translate-y-[3px] hover:border-white/20 hover:bg-[var(--color-card-hover)]">
                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`Print do projeto ${p.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 546px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {p.badge && (
                    <span className="absolute left-[14px] top-[14px] rounded-full bg-[var(--color-danger)] px-3 py-[5px] text-[0.68rem] font-bold uppercase tracking-[0.1em] text-white">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">
                    {p.role}
                  </p>
                  <h3 className="mb-3 text-[1.5rem] font-bold tracking-tight">{p.title}</h3>
                  <p className="mb-5 flex-1 text-[0.92rem] text-[var(--color-muted)]">{p.desc}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {p.techs.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-[11px] py-[5px] text-[0.72rem] font-medium text-[var(--color-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div>
                    <a
                      href={p.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-nav)] px-[18px] py-[9px] text-[0.85rem] font-semibold text-white transition-[filter] duration-200 hover:brightness-[1.3]"
                    >
                      Visitar site
                      <ExternalLink size={14} aria-hidden="true" />
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