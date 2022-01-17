type ButtonTypes = "start" | "stop" | "continue" | "close" | "signin" | "register" | "complete";

interface IProps {
  type: ButtonTypes;
  action: any;
}

import buttonOptions from '../../constants/buttons'

export default function Button({ type, action }: IProps) {
  const button = buttonOptions[type];

  return (
    <div
      className={`container cursor-pointer rounded-xl grid place-items-center max-w-[${button.width}] ${button.color} ${button.hover}`}
      onClick={action}
    >
      <div className="p-2">
        <span className="font-medium text-white select-none">{button.text}</span>
      </div>
    </div>
  );
}
