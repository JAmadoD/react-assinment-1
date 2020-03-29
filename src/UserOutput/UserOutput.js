import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> This is an output by {props.name} </p>
            <p>{props.children}</p>
            <input type='text' placeholder={props.name} onChange={props.changed}></input>
        </div>
    )
}

export default UserOutput;