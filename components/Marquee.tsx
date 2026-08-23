import type { Tech } from "./techs";
import { techs } from "./techs";

function TechItem({ tech }: { tech: Tech }) {
  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-[26px] inline-flex items-center gap-3 whitespace-nowrap text-[1.05rem] font-semibold text-[var(--color-muted)] opacity-75 transition-colors duration-200 hover:text-[var(--color-ink)] hover:opacity-100"
      title={`Visitar site de ${tech.name}`}
      aria-label={`Visitar site de ${tech.name}`}
    >
      <svg
        className="h-[22px] w-[22px] shrink-0"
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
  return (
    <div
      className="group/marquee overflow-hidden border-y border-white/5 py-[22px]"
      aria-hidden="false"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((g) => (
          <div className="flex items-center" key={g} aria-hidden={g === 1}>
            {techs.map((t) => (
              <TechItem tech={t} key={`${g}-${t.name}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}