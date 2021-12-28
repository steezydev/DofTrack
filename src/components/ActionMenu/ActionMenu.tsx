import { useEffect, useRef, useState } from "react";

//Components
import IconTools from "../Icons/IconTools";
import ActionItem from "./ActionItem";

//Types
import { ActionItemData } from "../../types/TypesAction";

interface IProps {
  actionItems: ActionItemData[]
}

export default function ActionMenu({ actionItems }: IProps) {
  const ref = useRef<any>();

  const [expanded, setExpanded] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleClick = () => {
    setIsFirstRender(false);
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (expanded && ref.current && !ref.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [expanded]);

  return (
    <div
      ref={ref}
      className="absolute right-0 -top-1 text-grey-func flex flex-col px-2 items-end"
    >
      <div className="py-2 cursor-pointer " onClick={handleClick}>
        <IconTools />
      </div>
      <div
        className={`${expanded ? "scale-up-tr" : "scale-out-tr"} ${
          isFirstRender ? "hidden" : ""
        } arrowBox flex flex-col bg-white py-2 px-1 absolute top-10`}
      >
        {actionItems.map((item, i) => {
          return <ActionItem key={i} title={item.title} action={item.action} />;
        })}
      </div>
    </div>
  );
}
