import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
        <p> This is an input by {props.name}</p>
            <p>{props.children}</p>
            <input type='text' placeholder={props.name} onChange={props.changed}></input>
        </div>
            )
}

export default UserInput;