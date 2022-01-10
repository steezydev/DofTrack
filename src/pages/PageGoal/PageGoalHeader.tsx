import React from "react";

import NavBar from "../../components/Nav/NavBar";

//Types
import { GoalData } from "../../types/TypesGoal";
import { ILink } from "../../types/TypesLinks";

export default function PageGoalHeader({
  goalData,
  goalPageLinks,
}: {
  goalData: GoalData;
  goalPageLinks: ILink[];
}) {
  return (
    <div className="animate-fade-in">
      <header className="p-4 mb-3">
        <h1 className="text-center text-4xl font-bold">{goalData.title}</h1>
        <div className="flex justify-center gap-1">
          <h2 className="text-center text-2xl">
            {goalData.gems} / {goalData.goalGems}{" "}
          </h2>
          <img className="object-scale-down w-6" src="/images/gem.png"></img>
        </div>
      </header>

      <NavBar links={goalPageLinks} />
    </div>
  );
}
