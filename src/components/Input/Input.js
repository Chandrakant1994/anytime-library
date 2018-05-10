import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input className={classes.InputElement} {...props} onChange={props.onInputChange}/>;
            break;
        case 'textarea': 
            inputElement = <textarea className={classes.InputElement} {...props} onChange={props.onInputChange}/>;
            break;
        case 'image':
            inputElement = <div><img className={classes.image} src={props.value} alt="Not available"/></div>;
            break;
        default:
            inputElement = <input className={classes.InputElement} type={props.inputtype} inputtype={props.inputtype} onChange={props.onInputChange}/>;
    }

    return (
        <div className='Input'>
            <label className={classes.Label}>{props.label}:</label>
            {inputElement}
        </div>
    )
}

export default Input;