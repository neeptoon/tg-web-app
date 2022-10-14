import React from 'react';


export const Button = ({webAppClose, children}) => {
    return (
        <>
            <button onClick={webAppClose}>
                {children}
            </button>
        </>
    );
};

