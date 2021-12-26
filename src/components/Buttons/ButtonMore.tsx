import { useNavigate } from 'react-router-dom';

interface IProps {
  goalId: string;
}

export default function ButtonMore({goalId} : IProps) {

  const navigate = useNavigate();

  const openGoalPage = () => {
    navigate(`/goal/${goalId}`);
  };

  return (
    <div onClick={openGoalPage} className="container rounded-xl max-w-sm grid place-items-center select-none hover:bg-[#d1d1d1]">
      <span className="font-bold text-3xl text-grey-darker">More...</span>
    </div>
  );
}
