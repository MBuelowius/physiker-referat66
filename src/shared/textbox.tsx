import React from 'react';
import './textbox.css';

function TextBox(props: any) {

    const { value, name, id, placeholder, onChange, title, hidden, isPassword } = props;

    let type;

    if(isPassword===true) {
        type = "password";
    }
    else {
        type = "textfield"
    }

    return (
        <div hidden={hidden}>
            <p>{title}</p>
            <input type={type} className="TextBox" value={value} name={name} id={id} placeholder={placeholder} onChange={onChange} />
        </div>

    );
}

export default TextBox;