import React, { useId, forwardRef } from "react";

const Select = forwardRef(function Select(
  { options, label, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-medium mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          {...props}
          id={id}
          ref={ref}
          className={`px-3 py-2 rounded-lg bg-white text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 w-full appearance-none ${className}`}
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
          ⌄
        </div>
      </div>
    </div>
  );
});

export default Select;
