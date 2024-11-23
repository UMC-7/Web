import React from 'react';

const Input = ({
  className,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  onChange,
}) => {
  return (
    <input
      className={className}   // 스타일링 클래스명
      type={type}             // 입력 필드 타입
      value={value}           // 제어형 값
      defaultValue={defaultValue} // 비제어형 초기값
      placeholder={placeholder} // 입력 힌트
      onChange={onChange}     // 값 변경 이벤트 핸들러
    />
  );
};

export default Input;
