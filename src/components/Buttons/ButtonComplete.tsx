interface IProps {
  action?: any;
}

export default function ButtonComplete({action}: IProps) {
  return (
    <div
      className={`container cursor-pointer rounded-xl grid place-items-center max-w-[11rem] bg-green hover:bg-green-hover`}
      onClick={action}
    >
      <div className="p-2">
        <span className="font-medium text-white select-none">
          Complete
        </span>
      </div>
    </div>
  );
}
