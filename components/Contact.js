"use client";

import { useState } from "react";

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
      } catch {}
      document.body.removeChild(ta);
      done();
    }
  };

  return (
    <section className="section" id="contato">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">Contatos</p>
          <h2 className="section__title">Me mostre suas ideias</h2>
        </header>

        <div className="contact__wrap">
          <div>
            <h3 className="contact__head">
              Vamos <span className="highlight">trabalhar juntos?</span>
            </h3>
            <p className="contact__intro">
              Estou disponível para conversar sobre projetos, ideias ou oportunidades.
            </p>
            <div className="contact__card">
              <span className="contact__card-badge">Disponível</span>
              <span className="contact__card-name">Miguel Inácio</span>
              <span className="contact__card-role">Desenvolvedor Full Stack</span>
              <span className="contact__card-loc">Belo Horizonte, MG</span>
            </div>
            <div className="contact__socials">
              <a
                href="https://github.com/Mkkkz"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social"
              >
                <span>Github</span>
                <span className="icon" aria-hidden="true">↗</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="contact__social">
                <span>E-mail</span>
                <span className="icon" aria-hidden="true">↗</span>
              </a>
              <div className="contact__social">
                <span>Discord</span>
                <span className="icon" aria-hidden="true">·</span>
              </div>
            </div>
          </div>

          <div className="contact__form">
            <div className="contact__email">
              <span className="contact__email-label">Meu E-mail</span>
              <span className="contact__email-value">{EMAIL}</span>
              <button className="contact__email-copy" onClick={copyEmail} type="button">
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>

            <p className="contact__or">OU</p>

            <form
              className="form"
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
            >
              <div className="form__field">
                <label className="form__label" htmlFor="nome">
                  Nome
                </label>
                <input className="form__input" type="text" id="nome" name="nome" placeholder="Seu nome" required />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="email">
                  E-mail
                </label>
                <input className="form__input" type="email" id="email" name="email" placeholder="seu@email.com" required />
              </div>
              <div className="form__field">
                <label className="form__label" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  className="form__textarea"
                  id="mensagem"
                  name="mensagem"
                  placeholder="Conte sobre seu projeto..."
                  required
                ></textarea>
              </div>
              <button className="btn btn--primary" type="submit" style={{ width: "100%" }}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}