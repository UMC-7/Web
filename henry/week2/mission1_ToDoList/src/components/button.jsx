import React from 'react';

const Button = ({
  onClick,
  children = null,
  text = '',
  type = 'button',
  className = '',
}) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children || text} {/* children 우선, 없으면 text 사용 */}
    </button>
  );
};

export default Button;
