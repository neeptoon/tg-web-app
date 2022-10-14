import React from 'react';


const Button = ({handleClick}) => {
    return (
        <>
            <button onClick={handleClick}>
                закрыть
            </button>
        </>
    );
};

export default Button;