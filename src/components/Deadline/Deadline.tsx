//Helpers
import { dateToString } from "../../helpers/time";

interface IProps {
  time: Date;
  isExpired?: boolean;
}

export default function Deadline({time, isExpired = false}: IProps) {
  return (
    <div className='container flex row gap-1 w-fit'>
      <img className="object-scale-down w-4" src="/images/clock.png" alt="icon" />
      <span className='text-sm text-grey-dark'>{dateToString(time)}</span>
    </div>
  )
}
