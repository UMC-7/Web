import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #141414;
  color: white;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
`;

const LoginButton = styled.button`
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

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 구현
  };

  return (
    <LoginContainer>
      <h1>로그인</h1>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput type="email" placeholder="이메일" required />
        <LoginInput type="password" placeholder="비밀번호" required />
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;