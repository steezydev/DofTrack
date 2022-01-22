interface IProps {
  action: () => void;
}

export default function ButtonsAddGoal({ action }: IProps) {
  return (
    <div
      onClick={action}
      className="cursor-pointer container rounded-xl max-w-2xl outline-2 outline-dashed outline-grey-darker grid place-items-center select-none hover:bg-[#d1d1d1] py-2"
    >
      <span className="font-bold text-3xl text-grey-darker">Add Dream</span>
    </div>
  );
}
