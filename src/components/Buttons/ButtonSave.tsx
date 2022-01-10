import LoadingButton from "../Loading/LoadingButton";

interface IProps {
  action: () => void;
  loading?: boolean;
}

export default function ButtonSave({ action, loading = false }: IProps) {
  return (
    <div
      className={`container rounded-xl grid place-items-center max-w-[11rem] bg-blue ${
        !loading && "hover:bg-blue-hover cursor-pointer "
      }`}
      onClick={action}
    >
      <div className="p-2">
        {!loading ? (
          <span className="font-medium text-white select-none">Save</span>
        ) : (
          <LoadingButton />
        )}
      </div>
    </div>
  );
}
