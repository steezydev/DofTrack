import { ActionItemData } from "../../types/TypesAction";

export default function ActionItem({ title, action }: ActionItemData) {
  return (
    <span
      onClick={action}
      className="hover:bg-[#f3f3f3] rounded-md px-1 text-grey-light cursor-pointer select-none"
    >
      {title}
    </span>
  );
}
