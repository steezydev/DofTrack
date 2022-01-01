import { useState, useRef, useEffect } from "react";

//Components
import TimerButton from "./TimerButton";

//Types
import {
  Timer,
  TimerFiled,
  TimerInterval,
  TimerOperation,
} from "../../types/TypesTimer";

//Helpers
import { addZeroBefore } from "../../helpers/time";

interface IProps {
  setTimer: (value: Timer) => void;
}

export default function TimerActivity({ setTimer }: IProps) {
  //Interval ref
  const timer = useRef<any>(null);

  function timeoutClear() {
    clearInterval(timer.current);
  }

  const [timerValue, setTimerValue] = useState<Timer>({
    HOURS: 0,
    MINUTES: 0,
  });

  //Handles timer change event on button click
  const handleIncrement = (
    field: TimerFiled,
    operation: TimerOperation,
    interval: TimerInterval
  ) => {
    changeTimer(field, operation, interval);
    timer.current = setInterval(
      () => changeTimer(field, operation, interval),
      300
    );
  };

  const changeTimer = (
    field: TimerFiled,
    operation: TimerOperation,
    interval: TimerInterval
  ) => {
    let op = operation == "INC" ? interval : -interval;

    // Prevents timer from going negative
    if (timerValue[field] == 0 && operation == "DEC") op = 0;

    //Prevents minutes from going above 45
    if (field == "MINUTES" && timerValue[field] == 45 && operation == "INC")
      op = 0;

    setTimerValue((prev) => {
      return { ...prev, [field]: prev[field] + op };
    });
  };

  useEffect(() => {
    setTimer(timerValue);
  }, [timerValue]);

  return (
    <div className=" flex items-center justify-center text-3xl text-blue my-5 ">
      <div className="flex flex-col items-center">
        <TimerButton
          text="+"
          clear={timeoutClear}
          operation={() => handleIncrement("HOURS", "INC", 1)}
        />
        <span className="text-6xl text-grey-darker">
          {addZeroBefore(timerValue.HOURS)}
        </span>
        <TimerButton
          text="-"
          clear={timeoutClear}
          operation={() => handleIncrement("HOURS", "DEC", 1)}
          hidden={timerValue.HOURS == 0 ? true : false}
        />
      </div>
      <span className="text-6xl text-grey-darker">:</span>
      <div className="flex flex-col items-center">
        <TimerButton
          text="+"
          clear={timeoutClear}
          operation={() => handleIncrement("MINUTES", "INC", 15)}
          hidden={timerValue.MINUTES == 45 ? true : false}
        />
        <span className="text-6xl text-grey-darker">
          {addZeroBefore(timerValue.MINUTES)}
        </span>
        <TimerButton
          text="-"
          clear={timeoutClear}
          operation={() => handleIncrement("MINUTES", "DEC", 15)}
          hidden={timerValue.MINUTES == 0 ? true : false}
        />
      </div>
    </div>
  );
}
