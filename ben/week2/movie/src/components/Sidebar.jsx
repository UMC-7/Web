import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1a1a1a;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  color: white;
`;

const Logo = styled.h1`
  color: #E51013;
  margin-bottom: 40px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 20px;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleMoviesClick = () => {
    navigate('/movies');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <SidebarContainer>
      <Logo onClick={handleLogoClick}>YONGCHA</Logo>
      <NavButton onClick={handleSearchClick}>
        <BiSearch />
        찾기
      </NavButton>
      <NavButton onClick={handleMoviesClick}>
        <MdLocalMovies />
        영화
      </NavButton>
    </SidebarContainer>
  );
};

export default Sidebar; 