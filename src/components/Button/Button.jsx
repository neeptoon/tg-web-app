import React from 'react';


const Button = ({webAppClose, children}) => {
    return (
        <>
            <button onClick={webAppClose}>
                {children}
            </button>
        </>
    );
};

export default Button;