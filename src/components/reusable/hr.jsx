import React from 'react';

const HR = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={`w-full h-1 bg-red-700 rounded-xl ${className}`} // Full width horizontal line
        />
    );
};

export default HR;