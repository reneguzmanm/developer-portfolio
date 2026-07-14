import type { Technology } from "../../types/technology";
import TechBadge from "../ui/TechBadge";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: Technology[];
}

const ExperienceCard = ({
  company,
  role,
  period,
  achievements,
  technologies,
}: ExperienceCardProps) => {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">{role}</h3>
          <p className="text-blue-400">{company}</p>
        </div>

        <span className="text-sm text-slate-500">{period}</span>
      </div>

      <ul className="mt-6 space-y-3 text-slate-400">
        {achievements.map((achievement, index) => (
          <li
            key={`${company}-achievement-${index}`}
            className="flex items-start gap-3"
          >
            <span
              aria-hidden="true"
              className="mt-1 text-blue-400"
            >
              ✓
            </span>

            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <TechBadge
            key={technology.id}
            name={technology.name}
            icon={technology.icon}
          />
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;