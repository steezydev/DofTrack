import React from "react";

export default function DeadlinePeaker() {
  return (
    <div className="container flex row gap-1 w-fit">
      <img
        className="object-scale-down w-4"
        src="/images/clock.png"
        alt="icon"
      />
      <span className="text-sm text-grey-dark">Time</span>
      <span className="grid place-items-center -ml-1">
        <svg
          width="16"
          height="16"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.42826 4.48841C7.24927 4.30942 6.95907 4.30942 6.78008 4.48841L5.5 5.76849L4.21992 4.48841C4.04093 4.30942 3.75073 4.30942 3.57174 4.48841C3.39275 4.6674 3.39275 4.9576 3.57174 5.13659L5.17591 6.74076C5.3549 6.91975 5.6451 6.91975 5.82409 6.74076L7.42826 5.13659C7.60725 4.9576 7.60725 4.6674 7.42826 4.48841Z"
            fill="#414141"
          />
        </svg>
      </span>
    </div>
  );
}
