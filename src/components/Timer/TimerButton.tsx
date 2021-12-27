interface IProps {
    text: "+" | "-";
    clear: any;
    operation: any;
    hidden?: boolean;
  }

export default function TimerButton({
  text,
  clear,
  operation,
  hidden = false,
}: IProps) {
  return (
    <span
      className={`p-2 select-none ${
        hidden ? "text-grey-light opacity-30" : "cursor-pointer"
      }`}
      onMouseLeave={clear}
      onMouseUp={clear}
      onMouseDown={operation}
    >
      {text}
    </span>
  );
}
