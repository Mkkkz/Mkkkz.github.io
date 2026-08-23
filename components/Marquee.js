"use client";

export default function Marquee() {
  const techs = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "PostgreSQL",
    "Docker",
    "Linux",
    "Vercel",
    "Git",
  ];

  const group = (key) => (
    <span className="marquee__group" key={key}>
      {techs.map((t) => (
        <span className="tech" key={t + key}>
          <i aria-hidden="true">✦</i>
          {t}
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}