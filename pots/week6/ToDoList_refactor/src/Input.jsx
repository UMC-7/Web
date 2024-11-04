import React from 'react';

const Input = ({ value, onChange, className = '', type = 'text', defaultValue = '' }) => {
    return (
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
      />
    );
  };

export default Input;