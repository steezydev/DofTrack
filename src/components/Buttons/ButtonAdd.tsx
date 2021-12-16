interface IProps {
  action: any;
}

export default function ButtonAdd({ action }: IProps) {
  return (
    <div onClick={action} className="container rounded-xl max-w-sm outline-2 outline-dashed outline-grey-darker grid place-items-center select-none hover:bg-[#d1d1d1]">
      <span className="font-bold text-3xl text-grey-darker">+</span>
    </div>
  );
}
