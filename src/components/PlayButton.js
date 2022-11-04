import React from "react";

const PlayButton = ({ setIsPaused, isPausedRef }) => {
  return (
    <button
      onClick={() => {
        isPausedRef.current = false
        setIsPaused(false);
      }}
      className="bg-transparent text-white w-16 h-16 flex justify-center items-center rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-14"
      >
        <path
          fillRule="evenodd"
          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default PlayButton;
