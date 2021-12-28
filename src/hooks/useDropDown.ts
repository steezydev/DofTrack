import { useState, useEffect } from "react";

export default function useDropDown(ref: any, customAction = () => {}): any {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    customAction();
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (expanded && ref.current && !ref.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [expanded]);

  return [expanded, setExpanded, handleClick];
}
