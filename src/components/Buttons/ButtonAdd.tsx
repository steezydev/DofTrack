type Type = "TASK" | "GOAL" | "ACTIVITY";

const types = {
  TASK: "Add Task",
  GOAL: "Add Goal",
  ACTIVITY: "Add Activity",
};

interface IProps {
  type: Type;
  action: () => void;
}

export default function ButtonAdd({ type, action }: IProps) {
  return (
    <div
      onClick={action}
      className="cursor-pointer container rounded-xl max-w-sm outline-2 outline-dashed outline-grey-darker grid place-items-center select-none hover:bg-[#d1d1d1] py-2"
    >
      <span className="font-bold text-xl text-grey-darker">{types[type]}</span>
    </div>
  );
}
