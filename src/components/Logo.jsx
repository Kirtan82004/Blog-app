import React from "react";

function Logo({ width = "120px" }) {
  return (
    <div className="flex items-center justify-center">
      <svg
        width={width}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-600"
      >
        <circle cx="50" cy="50" r="40" fill="currentColor" />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="white"
          fontFamily="Arial, sans-serif"
        >
          LOGO
        </text>
      </svg>
    </div>
  );
}

export default Logo;
