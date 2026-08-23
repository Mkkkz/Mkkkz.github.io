import Navbar from "@/components/Navbar";

export const metadata = {
  title: "404 — Miguel Inácio",
  description: "Página não encontrada.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="notfound">
        <div className="container">
          <div>
            <span className="notfound__code">404</span>
            <h1 className="notfound__title">Página não encontrada</h1>
            <p className="notfound__text">
              O conteúdo que você procura não existe ou foi movido para outro lugar.
            </p>
            <a href="/" className="btn btn--primary">
              Voltar para o início
            </a>
          </div>
        </div>
      </main>
    </>
  );
}