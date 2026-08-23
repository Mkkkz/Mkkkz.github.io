"use client";

import { techs } from "./techs";

function TechItem({ tech, title }) {
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tech"
      title={title}
      aria-label={`Visitar site de ${tech.name}`}
    >
      <svg
        className="tech__logo"
        viewBox="0 0 24 24"
        fill={tech.fill}
        role="img"
        aria-hidden="true"
      >
        <path d={tech.path} />
      </svg>
      {tech.name}
    </a>
  );
}

export default function Marquee() {
  const group = (key) => (
    <span className="marquee__group" key={key}>
      {techs.map((t) => (
        <TechItem tech={t} key={t.name + key} title={`Visitar site de ${t.name}`} />
      ))}
    </span>
  );

  return (
    <div className="marquee">
      <div className="marquee__track">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}