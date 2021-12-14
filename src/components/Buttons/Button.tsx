type ButtonTypes = "start" | "stop";

interface IProps {
  type: ButtonTypes;
  action: any;
}

const buttonOptions = {
  start: {
    color: "bg-green",
    text: "Start",
  },
  stop: {
    color: "bg-red",
    text: "Stop",
  },
};

export default function ButtonStart({ type, action }: IProps) {
  const button = buttonOptions[type];

  return (
    <div
      className={`container cursor-pointer rounded-xl grid place-items-center max-w-[9rem] ${button.color}`}
      onClick={action}
    >
      <div className="p-2">
        <span className="font-medium text-white select-none">{button.text}</span>
      </div>
    </div>
  );
}
