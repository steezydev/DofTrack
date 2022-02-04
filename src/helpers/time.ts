import { Timer } from "../types/TypesTimer";

export function addZeroBefore(n: number): string {
  return (n < 10 ? "0" : "") + n;
}

export function timerToSeconds(timer: Timer) {
  return timer.HOURS * 60 * 60 + timer.MINUTES * 60;
}

export function secondsToHms(d: number): {hours: string, minutes: string, seconds: string} {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let s = Math.floor((d % 3600) % 60);

  let hDisplay = h > 0 ? addZeroBefore(h) + ":" : "00:";
  let mDisplay = m > 0 ? addZeroBefore(m) + "" : "00";
  let sDisplay = s > 0 ? ":" + addZeroBefore(s) : ":00";

  return {
    hours: hDisplay,
    minutes: mDisplay,
    seconds: sDisplay,
  };

  //return hDisplay + mDisplay + sDisplay;
}

export function dateToString(date: Date): string {
  const year = date.getFullYear();
  const month = addZeroBefore(date.getMonth() + 1);
  const day = addZeroBefore(date.getDate());

  return day + "/" + month + "/" + year;
}

export function getDifferenceInDays (date: Date): number { 
  const target = new Date(new Date(date).getFullYear(),new Date(date).getMonth() , new Date(date).getDate())
  const today = new Date(new Date().getFullYear(),new Date().getMonth() , new Date().getDate())
  const diffTime = today.getTime() - target.getTime();

  console.log(today)
  
  return diffTime / (1000 * 3600 * 24) < 0 ? 0 : diffTime / (1000 * 3600 * 24) ;
}
