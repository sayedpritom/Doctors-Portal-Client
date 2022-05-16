import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">{props.text}</button>
        </div>
    );
};

export default Button;