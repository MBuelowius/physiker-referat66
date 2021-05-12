import React from 'react';
import './button.css';

function Button(props: any) {

    const { text, onClick } = props;

    return (
        <button className="Button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;