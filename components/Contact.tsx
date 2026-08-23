"use client";

import { Mail } from "lucide-react";
import { useState } from "react";
import { GithubIcon } from "./icons";

const EMAIL = "miguelinacio.dev@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    try {
      await navigator.clipboard.writeText(EMAIL);
      done();
    } catch {
      const ta = document.createElement("textarea");
      ta.value = EMAIL;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
      done();
    }
  };

  return (
    <section className="py-[var(--space-section)]" id="contato">
      <div className="mx-auto max-w-[var(--max-width)] px-7">
        <header className="mx-auto mb-16 max-w-[720px] text-center">
          <p className="mb-2 text-[0.95rem] font-medium text-[var(--color-muted)]">Contatos</p>
          <h2 className="text-[clamp(1.9rem,4.5vw,2.8rem)] font-bold leading-[1.15] tracking-tight">
            Me mostre suas ideias
          </h2>
        </header>

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h3 className="mb-6 text-[clamp(1.7rem,4vw,2.4rem)] font-bold leading-[1.2] tracking-tight">
              Vamos <span className="text-gradient">trabalhar juntos?</span>
            </h3>
            <p className="mb-8 max-w-[42ch] text-[var(--color-muted)]">
              Estou disponível para conversar sobre projetos, ideias ou oportunidades.
            </p>
            <div className="inline-flex flex-col gap-1 rounded-[18px] border border-white/10 bg-[var(--color-card)] p-7">
              <span className="mb-2 flex items-center gap-2 text-[0.78rem] font-semibold text-[var(--color-success)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-success)] animate-[var(--animate-ping)]" aria-hidden="true" />
                Disponível
              </span>
              <span className="font-script text-[1.5rem] font-normal leading-tight">
                Miguel Inácio
              </span>
              <span className="text-[0.9rem] text-[var(--color-muted)]">Desenvolvedor Full Stack</span>
              <span className="mt-2 font-mono text-[0.85rem] text-[var(--color-faint)]">
                Belo Horizonte, MG
              </span>
            </div>
            <div className="mt-5 flex flex-col gap-1">
              <a
                href="https://github.com/Mkkkz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 border-b border-white/5 py-3 text-[0.92rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <span>Github</span>
                <GithubIcon size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-between gap-4 border-b border-white/5 py-3 text-[0.92rem] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <span>E-mail</span>
                <Mail size={16} aria-hidden="true" />
              </a>
              <div className="flex items-center justify-between gap-4 border-b border-white/5 py-3 text-[0.92rem] text-[var(--color-muted)]">
                <span>Discord</span>
                <span className="text-[var(--color-faint)]">·</span>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] border border-white/10 bg-[var(--color-card)] p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-[18px] py-4">
              <span className="text-[0.78rem] uppercase tracking-[0.06em] text-[var(--color-faint)]">
                Meu E-mail
              </span>
              <span className="flex-1 break-all text-left text-[0.92rem] font-medium">{EMAIL}</span>
              <button
                className="whitespace-nowrap rounded-xl border border-white/10 px-[14px] py-2 text-[0.85rem] font-semibold text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)] hover:bg-accent/10"
                onClick={copyEmail}
                type="button"
              >
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>

            <p className="relative my-5 text-center text-[0.8rem] text-[var(--color-faint)] before:absolute before:left-0 before:top-1/2 before:h-px before:w-[40%] before:bg-white/10 after:absolute after:right-0 after:top-1/2 after:h-px after:w-[40%] after:bg-white/10">
              OU
            </p>

            <form className="flex flex-col gap-4" action={`mailto:${EMAIL}`} method="post" encType="text/plain">
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] text-[var(--color-muted)]" htmlFor="nome">
                  Nome
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-[0.95rem] text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-accent)] focus:outline-none"
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] text-[var(--color-muted)]" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-[0.95rem] text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-accent)] focus:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.85rem] text-[var(--color-muted)]" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  className="min-h-[120px] w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-[0.95rem] text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-faint)] focus:border-[var(--color-accent)] focus:outline-none"
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte sobre seu projeto..."
                  required
                ></textarea>
              </div>
              <button
                className="w-full rounded-full bg-[linear-gradient(135deg,#2b7fff,#1069d7)] px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-[filter] duration-200 hover:brightness-110"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}