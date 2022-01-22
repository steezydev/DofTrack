import ButtonsAddDream from "../../components/Buttons/ButtonsAddDream";

//Modals
import { showNewGoal } from "../../modal/showModal";

export default function PageGoalsEmpty() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10">
      <span className="text-2xl text-grey-darker font-medium">
        Do you have any dreams?
      </span>
      <ButtonsAddDream action={showNewGoal} />
    </div>
  );
}