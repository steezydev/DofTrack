import { useNavigate } from "react-router-dom";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="absolute top-3 left-3">
      <CircleMenu
        startAngle={0}
        rotationAngle={90}
        itemSize={2.7}
        radius={6}
      >
        <CircleMenuItem
          onClick={() => navigate(`/`)}
          tooltip="Home"
          tooltipPlacement="right"
        >
          
        </CircleMenuItem>
        <CircleMenuItem onClick={() => navigate(`/goals`)} tooltip="Goals"></CircleMenuItem>
        <CircleMenuItem onClick={() => alert("Clicked the item")} tooltip="Profile"></CircleMenuItem>
      </CircleMenu>
    </div>
  );
}
