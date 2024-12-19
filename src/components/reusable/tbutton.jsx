
import React from 'react';

const TButton = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`text-white rounded-full px-4 py-2 cursor-pointer bg-red-500 w-72 `} >
            {children}
        </button>
    );
};

export default TButton;
