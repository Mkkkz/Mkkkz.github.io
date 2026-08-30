import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "MonsterEdu — Projeto Conceitual | Miguel Inácio",
  description:
    "Projeto conceitual de frontend criado para explorar UI, animações e experiências interativas.",
  openGraph: {
    title: "MonsterEdu — Projeto Conceitual | Miguel Inácio",
    description:
      "Projeto conceitual de frontend criado para explorar UI, animações e experiências interativas.",
    url: "https://mkkkz.github.io/monsteredu/",
    type: "article",
  },
};

export default function MonsterEduPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      {/* Header simples */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur">
        <div className="mx-auto flex max-w-[var(--max-width)] items-center justify-between px-7 py-5">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <a
            href="https://monsteredu.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-nav)] px-5 py-2 text-sm font-semibold text-white transition-[filter] hover:brightness-125"
          >
            Ver projeto
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-[var(--max-width)] px-7 py-12 md:py-16">
        {/* Hero */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Projeto Conceitual — Frontend / UI &amp; UX
          </p>
          <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] font-extrabold leading-[0.95] tracking-tight">
            MONSTER<span className="text-gradient font-script text-[1.15em] font-normal tracking-normal">Edu</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-[var(--color-muted)]">
            Projeto conceitual desenvolvido para explorar experiências modernas de frontend.
          </p>
        </div>

        {/* Preview */}
        <div className="mx-auto mt-10 max-w-[980px] overflow-hidden rounded-[18px] border border-white/10 bg-[var(--color-card)]">
          <div className="relative aspect-[1862/912] w-full overflow-hidden">
            <Image
              src="/assets/images/MonsterEdu.png"
              alt="Preview do projeto MonsterEdu"
              fill
              sizes="(max-width: 768px) 100vw, 980px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Grid de detalhes */}
        <div className="mx-auto mt-14 grid max-w-[980px] grid-cols-1 gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
          {/* Esquerda: Objetivo */}
          <div>
            <h2 className="mb-4 text-[1.35rem] font-bold tracking-tight">Objetivo</h2>
            <p className="leading-relaxed text-[var(--color-muted)]">
              O objetivo foi explorar como uma landing page de uma marca de bebidas poderia
              utilizar animações, composição visual, elementos 3D e microinterações para criar uma
              experiência mais imersiva.
            </p>

            <h2 className="mb-4 mt-10 text-[1.35rem] font-bold tracking-tight">Resultado</h2>
            <p className="leading-relaxed text-[var(--color-muted)]">
              Uma landing page visualmente impactante, com foco em direção de arte, hierarquia clara
              e interações que reforçam a identidade da marca sem comprometer performance ou
              responsividade.
            </p>

            <p className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.78rem] leading-relaxed text-[var(--color-faint)]">
              Projeto conceitual desenvolvido para fins de estudo. Não possui vínculo oficial com a
              Monster Energy.
            </p>
          </div>

          {/* Direita: Tecnologias + Interações */}
          <div className="space-y-10">
            <div>
              <h2 className="mb-4 text-[1.35rem] font-bold tracking-tight">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Animações CSS", "Interações JS", "Design Responsivo"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[0.8rem] font-medium text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-[1.35rem] font-bold tracking-tight">Interações</h2>
              <ul className="space-y-2.5 text-[0.95rem] text-[var(--color-muted)]">
                <li className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Animações de entrada suaves
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Interação com produtos — rotação e destaque
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Efeitos de hover e transições elegantes
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Layout totalmente responsivo
                </li>
                <li className="flex gap-3">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  Composição visual dinâmica com elementos em camadas
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mx-auto mt-14 max-w-[980px] rounded-[18px] border border-white/10 bg-[var(--color-card)] px-8 py-10 text-center">
          <p className="mx-auto max-w-[42ch] text-[var(--color-muted)]">
            Gostou do conceito? Explore o projeto ao vivo ou volte para ver os demais trabalhos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://monsteredu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-nav)] px-6 py-3 text-sm font-semibold text-white transition-[filter] hover:brightness-125"
            >
              Ver projeto ao vivo
              <ExternalLink size={14} />
            </a>
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/10"
            >
              Outros projetos
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}