import React from 'react';
import '../App.css';

const Button = ({onclick, classname, text}) => {

    return (
      <button className={classname} onClick={onclick}>
        {text}
      </button>
    );
  };
  
  export default Button