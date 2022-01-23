import ButtonsAddGoal from "../../components/Buttons/ButtonsAddGoal";

//Modals
import { showNewGoal } from "../../modal/showModal";

import { DreamData } from "../../types/TypesDream";

export default function PageDreamEmpty({ dreamData }: { dreamData: DreamData }) {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10">
      <span className="text-2xl text-grey-darker font-medium">
        You don't have any goals yet :(
      </span>
      <ButtonsAddGoal action={() => showNewGoal(dreamData.id, dreamData.title)} />
    </div>
  );
}
