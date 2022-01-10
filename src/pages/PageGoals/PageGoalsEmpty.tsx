import ButtonsAddGoal from "../../components/Buttons/ButtonsAddGoal";

export default function PageGoalsEmpty() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-10">
      <span className="text-2xl text-grey-darker font-medium">
        You don't have any goals yet :(
      </span>
      <ButtonsAddGoal action={() => {}} />
    </div>
  );
}