import React, { useId } from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
    { label, type = "text", className = "", error, ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label
                    className="block mb-1 text-sm font-medium text-gray-700"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-4 py-2 rounded-lg bg-white text-black outline-none border border-gray-300 w-full 
                            focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all duration-200 
                            shadow-sm ${error ? "border-red-500" : "border-gray-300"} ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
});

export default Input;
