import React from "react";

interface IProps {
  action?: any;
}

export default function ButtonComplete({action}: IProps) {
  return (
    <div
      className={`container cursor-pointer rounded-xl grid place-items-center max-w-[11rem] bg-green`}
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
