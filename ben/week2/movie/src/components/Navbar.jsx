import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1a1a1a;
`;

const Logo = styled(Link)`
  color: #ff0000;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled(Link)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0000;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <ButtonContainer>
        <StyledButton to="/login">로그인</StyledButton>
        <StyledButton to="/signup">회원가입</StyledButton>
      </ButtonContainer>
    </Nav>
  );
};

export default Navbar; 