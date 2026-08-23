import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero" id="hero">
          <div className="container hero__content">
            <p className="hero__welcome">Seja bem-vindo ao meu site!</p>
            <h1 className="hero__title">
              Olá, sou Miguel Inácio
              <span className="highlight">Desenvolvedor full stack</span>
            </h1>
            <p className="hero__sub">
              Desenvolvo sites, aplicações web e sistemas completos, do front-end ao back-end, com
              foco em simplicidade e desempenho.
            </p>
            <div className="hero__actions">
              <a href="#contato" className="btn btn--primary">
                Vamos conversar
              </a>
              <a href="#sobre" className="btn btn--glass">
                Sobre mim
              </a>
            </div>

            <div className="hero__stats" aria-label="Números principais">
              <div className="hero__stat">
                <strong className="hero__stat-value">15+</strong>
                <span className="hero__stat-label">Projetos desenvolvidos</span>
              </div>
              <div className="hero__stat">
                <strong className="hero__stat-value">30+</strong>
                <span className="hero__stat-label">Clientes atendidos</span>
              </div>
              <div className="hero__stat">
                <strong className="hero__stat-value">Full Stack</strong>
                <span className="hero__stat-label">Front-end + Back-end</span>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        {/* Sobre + Processo */}
        <section className="section" id="sobre">
          <div className="container">
            <header className="section__head">
              <p className="section__eyebrow">Sobre</p>
              <h2 className="section__title">Quem sou eu e como trabalho</h2>
            </header>
            <div className="about__grid">
              <div className="about__text">
                <p>
                  Comecei desenvolvendo projetos por curiosidade e, com o tempo, passei a transformar
                  essas ideias em projetos reais.
                </p>
                <p>
                  Hoje trabalho principalmente com <strong>desenvolvimento web</strong>, criando
                  sites, aplicações e sistemas completos — do front-end ao back-end.
                </p>
                <p>
                  Também mantenho projetos próprios e já desenvolvi soluções para diferentes clientes.
                </p>
              </div>

              <div className="process__grid">
                <Reveal>
                  <article className="process__step">
                    <span className="process__num">01</span>
                    <h3 className="process__title">Planejamento</h3>
                    <p className="process__text">Entendo o objetivo, as necessidades e o escopo do projeto.</p>
                    <div className="process__tools">
                      <span className="process__tool">Entrevista</span>
                      <span className="process__tool">Escopo</span>
                    </div>
                  </article>
                </Reveal>
                <Reveal>
                  <article className="process__step">
                    <span className="process__num">02</span>
                    <h3 className="process__title">Estrutura</h3>
                    <p className="process__text">Defino a arquitetura, páginas, fluxo e banco de dados.</p>
                    <div className="process__tools">
                      <span className="process__tool">Arquitetura</span>
                      <span className="process__tool">Fluxo</span>
                    </div>
                  </article>
                </Reveal>
                <Reveal>
                  <article className="process__step">
                    <span className="process__num">03</span>
                    <h3 className="process__title">Desenvolvimento</h3>
                    <p className="process__text">Construo o front-end, back-end e integrações necessárias.</p>
                    <div className="process__tools">
                      <span className="process__tool">Front-end</span>
                      <span className="process__tool">Back-end</span>
                    </div>
                  </article>
                </Reveal>
                <Reveal>
                  <article className="process__step">
                    <span className="process__num">04</span>
                    <h3 className="process__title">Qualidade e Deploy</h3>
                    <p className="process__text">Verifico responsividade e desempenho, e publico em produção.</p>
                    <div className="process__tools">
                      <span className="process__tool">Responsividade</span>
                      <span className="process__tool">Deploy</span>
                    </div>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" aria-hidden="true" />

        <Projects />

        <div className="container" style={{ marginTop: 0 }}>
          <Reveal>
            <section className="cta">
              <p className="cta__eyebrow">Seu projeto, sua ideia</p>
              <h2 className="cta__title">
                Tem uma ideia? <span className="highlight">Vamos desenvolvê-la.</span>
              </h2>
              <p className="cta__text">
                Desde a concepção até o deploy, posso construir seu site ou aplicação com foco em
                qualidade, performance e boa experiência.
              </p>
              <div className="cta__chips">
                <span className="chip">Simplicidade</span>
                <span className="chip">Desempenho</span>
                <span className="chip">Design</span>
                <span className="chip">Parceria</span>
              </div>
              <div className="cta__actions">
                <a
                  href="https://github.com/Mkkkz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--glass"
                >
                  GitHub
                </a>
                <a href="#contato" className="btn btn--primary">
                  Vamos conversar
                </a>
              </div>
            </section>
          </Reveal>
        </div>

        <hr className="divider" aria-hidden="true" />

        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <span className="footer__brand">Miguel Inácio</span>
            <nav className="footer__links" aria-label="Links de contato">
              <a href="https://github.com/Mkkkz" target="_blank" rel="noopener noreferrer" className="footer__link">
                GitHub
              </a>
              <a href="mailto:miguelinacio.dev@gmail.com" className="footer__link">
                E-mail
              </a>
              <span className="footer__link">Discord</span>
            </nav>
          </div>
          <div className="footer__bottom">
            <span className="footer__copy">© 2026 Miguel Inácio. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>
    </>
  );
}