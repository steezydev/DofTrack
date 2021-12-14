export function addZeroBefore(n: number) {
  return (n < 10 ? "0" : "") + n;
}

export function secondsToHms(d: number) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor((d % 3600) / 60);
  let s = Math.floor((d % 3600) % 60);

  let hDisplay = h > 0 ? addZeroBefore(h) + ":" : "";
  let mDisplay = m > 0 ? addZeroBefore(m) + ":" : "00:";
  let sDisplay = s > 0 ? addZeroBefore(s) : "00";

  return hDisplay + mDisplay + sDisplay;
}
