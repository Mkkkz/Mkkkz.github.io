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
  featured?: boolean;
}

const projects: Project[] = [
  {
    image: "/assets/images/MonsterEdu.png",
    role: "Projeto Conceitual — Frontend / UI & UX",
    title: "MonsterEdu",
    desc: "Landing page conceitual inspirada na identidade visual da Monster Energy, criada para praticar desenvolvimento frontend, direção visual, animações e experiências interativas.",
    techs: ["HTML", "CSS", "JavaScript", "Animações CSS", "Interações JS", "Design Responsivo"],
    site: "https://monsteredu.vercel.app",
    featured: true,
  },
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
            <Reveal
              key={p.title}
              className={p.featured ? "md:col-span-2" : undefined}
            >
              <article
                className={`group flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[var(--color-card)] transition-all duration-200 hover:-translate-y-[3px] hover:border-white/20 hover:bg-[var(--color-card-hover)] ${
                  p.featured ? "md:flex-row" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    p.featured
                      ? "h-[220px] md:h-auto md:min-h-[320px] md:w-[58%]"
                      : "h-[190px]"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={`Print do projeto ${p.title}`}
                    fill
                    sizes={
                      p.featured
                        ? "(max-width: 768px) 100vw, 650px"
                        : "(max-width: 768px) 100vw, 546px"
                    }
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
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
                  <p className="mb-5 flex-1 text-[0.92rem] leading-relaxed text-[var(--color-muted)]">
                    {p.desc}
                  </p>
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
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={p.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent-nav)] px-[18px] py-[9px] text-[0.85rem] font-semibold text-white transition-[filter] duration-200 hover:brightness-[1.3]"
                    >
                      Ver projeto
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                    {p.featured && (
                      <a
                        href="/monsteredu/"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-[18px] py-[9px] text-[0.85rem] font-semibold text-[var(--color-ink)] transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        Detalhes
                      </a>
                    )}
                  </div>
                  {p.featured && (
                    <p className="mt-4 text-[0.72rem] leading-relaxed text-[var(--color-faint)]">
                      Projeto conceitual desenvolvido para fins de estudo. Não possui vínculo oficial
                      com a Monster Energy.
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}