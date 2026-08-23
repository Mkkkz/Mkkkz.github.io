import { MessageCircle } from "lucide-react";
import Contact from "../components/Contact";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Reveal from "../components/Reveal";
import { GithubIcon } from "../components/icons";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="hero relative overflow-hidden pb-20 pt-[calc(var(--nav-height)+90px)] text-center"
          id="hero"
        >
          <div className="pointer-events-none absolute -top-[180px] left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(43,127,255,0.18),transparent_70%)]" />

          <div className="relative mx-auto max-w-[var(--max-width)] px-7">
            <p className="mb-5 text-[0.95rem] font-medium text-[var(--color-muted)]">
              Seja bem-vindo ao meu site!
            </p>
            <h1 className="mb-[18px] text-[clamp(2.2rem,6.5vw,4rem)] font-bold leading-[1.12] tracking-tight">
              Olá, sou{" "}
              <span className="font-script text-[1.22em] font-normal tracking-normal">
                Miguel Inácio
              </span>
              <span className="text-gradient block">Desenvolvedor full stack</span>
            </h1>
            <p className="mx-auto mb-9 max-w-[52ch] text-[1.1rem] text-[var(--color-muted)]">
              Desenvolvo sites, aplicações web e sistemas completos, do front-end ao back-end, com
              foco em simplicidade e desempenho.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#2b7fff,#1069d7)] px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-[filter] duration-200 hover:brightness-110"
              >
                Vamos conversar
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-[0.95rem] font-semibold text-[var(--color-ink)] backdrop-blur transition-colors duration-200 hover:border-white/30 hover:bg-white/15"
              >
                Sobre mim
              </a>
            </div>

            <div className="relative mx-auto mt-16 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-[var(--color-card)] p-6">
                <strong className="block text-[1.9rem] font-bold tracking-tight text-[var(--color-accent)]">
                  15+
                </strong>
                <span className="mt-1 block text-[0.82rem] text-[var(--color-muted)]">
                  Projetos desenvolvidos
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[var(--color-card)] p-6">
                <strong className="block text-[1.9rem] font-bold tracking-tight text-[var(--color-accent)]">
                  30+
                </strong>
                <span className="mt-1 block text-[0.82rem] text-[var(--color-muted)]">
                  Clientes atendidos
                </span>
              </div>
              <div className="rounded-xl border border-white/10 bg-[var(--color-card)] p-6">
                <strong className="block text-[1.9rem] font-bold tracking-tight text-[var(--color-accent)]">
                  Full Stack
                </strong>
                <span className="mt-1 block text-[0.82rem] text-[var(--color-muted)]">
                  Front-end + Back-end
                </span>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* Sobre + Processo */}
        <section className="py-[var(--space-section)]" id="sobre">
          <div className="mx-auto max-w-[var(--max-width)] px-7">
            <header className="mx-auto mb-16 max-w-[720px] text-center">
              <p className="mb-2 text-[0.95rem] font-medium text-[var(--color-muted)]">Sobre</p>
              <h2 className="text-[clamp(1.9rem,4.5vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
                Quem sou eu e como trabalho
              </h2>
            </header>
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="mb-[18px] max-w-[55ch] text-[1.02rem] text-[var(--color-muted)]">
                  Comecei desenvolvendo projetos por curiosidade e, com o tempo, passei a transformar
                  essas ideias em projetos reais.
                </p>
                <p className="mb-[18px] max-w-[55ch] text-[1.02rem] text-[var(--color-muted)]">
                  Hoje trabalho principalmente com{" "}
                  <strong className="text-[var(--color-ink)]">desenvolvimento web</strong>, criando
                  sites, aplicações e sistemas completos — do front-end ao back-end.
                </p>
                <p className="max-w-[55ch] text-[1.02rem] text-[var(--color-muted)]">
                  Também mantenho projetos próprios e já desenvolvi soluções para diferentes clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  {
                    num: "01",
                    title: "Planejamento",
                    text: "Entendo o objetivo, as necessidades e o escopo do projeto.",
                    tools: ["Entrevista", "Escopo"],
                  },
                  {
                    num: "02",
                    title: "Estrutura",
                    text: "Defino a arquitetura, páginas, fluxo e banco de dados.",
                    tools: ["Arquitetura", "Fluxo"],
                  },
                  {
                    num: "03",
                    title: "Desenvolvimento",
                    text: "Construo o front-end, back-end e integrações necessárias.",
                    tools: ["Front-end", "Back-end"],
                  },
                  {
                    num: "04",
                    title: "Qualidade e Deploy",
                    text: "Verifico responsividade e desempenho, e publico em produção.",
                    tools: ["Responsividade", "Deploy"],
                  },
                ].map((s, i) => (
                  <Reveal key={s.num} delay={i * 0.08}>
                    <article className="rounded-[18px] border border-white/10 bg-[var(--color-card)] p-7 transition-all duration-200 hover:-translate-y-[3px] hover:border-white/20 hover:bg-[var(--color-card-hover)]">
                      <span className="mb-3.5 block font-mono text-[0.8rem] tracking-[0.05em] text-[var(--color-accent)]">
                        {s.num}
                      </span>
                      <h3 className="mb-2 text-[1.15rem] font-semibold">{s.title}</h3>
                      <p className="text-[0.9rem] text-[var(--color-muted)]">{s.text}</p>
                      <div className="mt-[18px] flex flex-wrap gap-2">
                        {s.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-[var(--color-card)] px-3 py-[5px] text-[0.78rem] font-medium text-[var(--color-muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-white/5" />

        <Projects />

        <div className="mx-auto max-w-[var(--max-width)] px-7">
          <Reveal>
            <section className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[var(--color-surface)] px-12 py-16 text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,127,255,0.12),transparent_70%)]" />
              <p className="relative mb-4 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                Seu projeto, sua ideia
              </p>
              <h2 className="relative mb-4 text-[clamp(1.8rem,4.5vw,2.6rem)] font-bold tracking-tight">
                Tem uma ideia? <span className="text-gradient">Vamos desenvolvê-la.</span>
              </h2>
              <p className="relative mx-auto mb-8 max-w-[52ch] text-[var(--color-muted)]">
                Desde a concepção até o deploy, posso construir seu site ou aplicação com foco em
                qualidade, performance e boa experiência.
              </p>
              <div className="relative mb-9 flex flex-wrap justify-center gap-2.5">
                {["Simplicidade", "Desempenho", "Design", "Parceria"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-[var(--color-card)] px-3.5 py-[7px] text-[0.8rem] font-medium text-[var(--color-muted)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="relative flex flex-wrap justify-center gap-3.5">
                <a
                  href="https://github.com/Mkkkz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-[0.95rem] font-semibold text-[var(--color-ink)] backdrop-blur transition-colors duration-200 hover:border-white/30 hover:bg-white/15"
                >
                  <GithubIcon size={16} className="text-[var(--color-ink)]" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#2b7fff,#1069d7)] px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-[filter] duration-200 hover:brightness-110"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Vamos conversar
                </a>
              </div>
            </section>
          </Reveal>
        </div>

        <hr className="mt-[var(--space-section)] border-white/5" />

        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-[var(--max-width)] px-7">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <span className="text-base font-bold">Miguel Inácio</span>
            <nav className="flex flex-wrap gap-[26px]" aria-label="Links de contato">
              <a
                href="https://github.com/Mkkkz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.88rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                GitHub
              </a>
              <a
                href="mailto:miguelinacio.dev@gmail.com"
                className="text-[0.88rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                E-mail
              </a>
              <span className="text-[0.88rem] text-[var(--color-muted)]">Discord</span>
            </nav>
          </div>
          <div className="mt-7 flex flex-wrap justify-between gap-4 border-t border-white/5 pt-6">
            <span className="text-[0.82rem] text-[var(--color-faint)]">
              © 2026 Miguel Inácio. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}