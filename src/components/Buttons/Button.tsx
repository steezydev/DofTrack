type ButtonTypes =
  | "start"
  | "stop"
  | "continue"
  | "close"
  | "signin"
  | "register"
  | "complete"
  | "save";

import buttonOptions from "../../constants/buttons";
import LoadingButton from "../Loading/LoadingButton";

export default function Button({
  type,
  action,
  loading = false,
}: {
  type: ButtonTypes;
  action: any;
  loading?: boolean;
}) {
  const button = buttonOptions[type];
  
  return (
    <div
      className={`container rounded-xl grid place-items-center max-w-[${
        button.width
      }] ${button.color} ${!loading && `${button.hover} cursor-pointer `}`}
      onClick={action}
    >
      <div className="p-2">
        {!loading ? (
          <span className="font-medium text-white select-none">
            {button.text}
          </span>
        ) : (
          <LoadingButton />
        )}
      </div>
    </div>
  );
}
