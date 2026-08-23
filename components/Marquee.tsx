import { techs } from "./techs";

interface Tech {
  name: string;
  url: string;
  fill: string;
  path: string;
}

function TechItem({ tech, title }: { tech: Tech; title: string }) {
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="tech flex items-center gap-3 whitespace-nowrap text-[1.05rem] font-semibold text-[var(--color-muted)] opacity-75 transition-colors duration-200 hover:text-[var(--color-ink)] hover:opacity-100 mx-[26px]"
      title={title}
      aria-label={`Visitar site de ${tech.name}`}
    >
      <svg className="h-[22px] w-[22px] shrink-0" viewBox="0 0 24 24" fill={tech.fill} role="img" aria-hidden="true">
        <path d={tech.path} />
      </svg>
      {tech.name}
    </a>
  );
}

function Group({ key }: { key: string }) {
  return (
    <span className="marquee__group inline-block" key={key}>
      {techs.map((t) => (
        <TechItem tech={t} key={t.name + key} title={`Visitar site de ${t.name}`} />
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden whitespace-nowrap border-y border-white/5 py-[22px]">
      <div className="marquee__track inline-block animate-[var(--animate-marquee)] will-change-transform">
        <Group key="a" />
        <Group key="b" />
      </div>
    </div>
  );
}