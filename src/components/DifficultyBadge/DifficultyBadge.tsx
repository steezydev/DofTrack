import { Difficulties } from "../../types/difficulties";

interface IProps {
  difficulty: Difficulties;
}

const badgeOptions = {
  hard: {
    icon: "fire",
    text: "Hard",
  },
  medium: {
    icon: "sweat",
    text: "Medium",
  },
  easy: {
    icon: "wind",
    text: "Easy",
  },
};

export default function DifficultyBadge({ difficulty }: IProps) {
  const badge = badgeOptions[difficulty]

  return (
    <div className="container flex row gap-1 w-fit select-none">
      <img
        className="object-scale-down w-4"
        src={`/images/${badge.icon}.png`}
        alt="icon"
      />
      <span className="text-sm text-grey-dark">{badge.text}</span>
    </div>
  );
}
