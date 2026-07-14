import type { Technology } from "../../types/technology";

type TechBadgeProps = Pick<Technology, "name" | "icon">;

const TechBadge = ({ name, icon: Icon }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-200">
      <Icon
        aria-hidden="true"
        className="text-base"
      />

      <span>{name}</span>
    </span>
  );
};

export default TechBadge;