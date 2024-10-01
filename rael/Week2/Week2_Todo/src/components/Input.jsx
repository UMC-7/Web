import React from 'react';
import '../App.css';

const Input = ({classname, type, value, dvalue, onchange}) => {

    return (
        <input 
        className={classname}
        type={type}
        value={value}
        defaultValue={dvalue} 
        onChange={onchange}
        />
    )
  }
  
  export default Input