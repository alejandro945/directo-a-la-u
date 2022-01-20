import React from 'react';

const ACard = ({ children }) => {
    return (
        <div className="container-sm my-4 shadow-lg p-3 bg-body rounded text-center">
            {children}
        </div>
    )
};

export default ACard;
