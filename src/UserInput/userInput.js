import React from 'react';

const userinput = (props) => {
    return (
        <div>
        <p> This is an input by {props.name}</p>
            <p>{props.children}</p>
            <input type='text' value={props.name} onChange={props.changed}></input>
        </div>
            )
}

export default userinput;