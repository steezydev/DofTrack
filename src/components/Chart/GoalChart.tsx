import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";
import {numberWithSpaces} from '../../helpers/numbers'

interface IProps {
  percent: number;
  gems: number;
  goalGems?: number;
}

const circleSize = 130;

export default function GoalChart({percent, gems, goalGems = 0}: IProps) {
  const gemsString = numberWithSpaces(gems)

  return (
    <RadialBarChart
      width={circleSize}
      height={circleSize}
      cx={circleSize / 2}
      cy={circleSize / 2}
      innerRadius={60}
      outerRadius={80}
      barSize={10}
      data={[{name: 'Done', value: percent}]}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        dataKey="value"
        cornerRadius={circleSize / 2}
        fill="#5EDB79"
      />
      <text
        x={circleSize / 2}
        y={circleSize / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label text-xl"
      >
        {gemsString}
      </text>
    </RadialBarChart>
  );
}
