// src/components/Button.jsx

import React from 'react';

const Button = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`border border-gray-600 rounded-full px-4 py-2 cursor-pointer hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-400 `} >
            {children}
        </button>
    );
};

export default Button;