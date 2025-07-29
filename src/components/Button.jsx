import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    hoverColor = "hover:bg-blue-700",
    className = "",
    disabled = false,
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ease-in-out 
                        ${bgColor} ${textColor} ${hoverColor} 
                        disabled:bg-gray-400 disabled:cursor-not-allowed 
                        shadow-md hover:shadow-lg ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
