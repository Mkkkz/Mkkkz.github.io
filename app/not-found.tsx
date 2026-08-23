import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "404 — Miguel Inácio",
  description: "Página não encontrada.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
        <div className="max-w-[560px]">
          <span className="text-gradient mb-6 block text-[clamp(4.5rem,16vw,9rem)] font-extrabold leading-[0.9] tracking-tight">
            404
          </span>
          <h1 className="mb-3 text-[1.5rem] font-bold">Página não encontrada</h1>
          <p className="mx-auto mb-8 max-w-[42ch] text-[var(--color-muted)]">
            O conteúdo que você procura não existe ou foi movido para outro lugar.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#2b7fff,#1069d7)] px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-[filter] duration-200 hover:brightness-110"
          >
            Voltar para o início
          </a>
        </div>
      </main>
    </>
  );
}