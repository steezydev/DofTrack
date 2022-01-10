import { useEffect, useRef, useState } from "react";

//Components
import IconTools from "../Icons/IconTools";
import ActionItem from "./ActionItem";

//Types
import { ActionItemData } from "../../types/TypesAction";

//Hooks
import useDropDown from '../../hooks/useDropDown'

interface IProps {
  actionItems: ActionItemData[]
}

export default function ActionMenu({ actionItems }: IProps) {
  const ref = useRef<any>();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [expanded,, handleDropClick] = useDropDown(ref, () => setIsFirstRender(false))

  return (
    <div
      ref={ref}
      className="absolute right-0 -top-1 text-grey-func flex flex-col px-2 items-end"
    >
      <div className="py-2 cursor-pointer " onClick={handleDropClick}>
        <IconTools />
      </div>
      <div
        className={`${expanded ? "scale-up-tr" : "scale-out-tr"} ${
          isFirstRender ? "hidden" : ""
        } arrowBox flex flex-col bg-[#fcfcfc] py-2 px-1 absolute top-10 border-gray-func border-2 rounded-md`}
      >
        {actionItems.map((item, i) => {
          return <ActionItem key={i} title={item.title} action={item.action} />;
        })}
      </div>
    </div>
  );
}
