import { useEffect, useRef, useState } from "react";

//Components
import IconTools from "../Icons/IconTools";

interface ActionItem {
  title: string;
  action: any;
}

interface ActionItems {
  actionItems: ActionItem[];
}

function ActionItem({ title, action }: ActionItem) {
  return (
    <span
      onClick={action}
      className="hover:bg-[#f5f5f5] rounded-md px-1 text-grey-light cursor-pointer select-none"
    >
      {title}
    </span>
  );
}

export default function ActionMenu({ actionItems }: ActionItems) {
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
