import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #141414;
  color: white;
`;

const SignupForm = styled.form`
  width: 300px;
  padding: 20px;
`;

const SignupInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #E51013;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #F40612;
  }
`;

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 구현
  };

  return (
    <SignupContainer>
      <h1>회원가입</h1>
      <SignupForm onSubmit={handleSubmit}>
        <SignupInput type="text" placeholder="이름" required />
        <SignupInput type="email" placeholder="이메일" required />
        <SignupInput type="password" placeholder="비밀번호" required />
        <SignupInput type="password" placeholder="비밀번호 확인" required />
        <SignupButton type="submit">회원가입</SignupButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup; 