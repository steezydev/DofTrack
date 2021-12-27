interface IProps {
  action?: any;
}

export default function ButtonSave({action}: IProps) {
  return (
    <div
      className={`container cursor-pointer rounded-xl grid place-items-center max-w-[11rem] bg-blue hover:bg-blue-hover`}
      onClick={action}
    >
      <div className="p-2">
        <span className="font-medium text-white select-none">
          Save
        </span>
      </div>
    </div>
  );
}
