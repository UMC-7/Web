import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Navbar = () => {
  return (
    <StyledNav>
      <Logo>
      <LogoLink to={`/`}>YONGCHA</LogoLink>
      </Logo>
      <div>
        <ButtonLink to={'/login'}>로그인</ButtonLink>
        <ButtonLink to={'/signup'}>회원가입</ButtonLink>
      </div>
    </StyledNav>
  );
};

export default Navbar;


const StyledNav = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  //z-index: 1000;
  background-color: black;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: red;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: white; // 링크 기본 색상을 흰색으로 설정
  text-decoration: none;
  margin: 0 10px;
`;

const LogoLink = styled(StyledLink)`
  color: red; // 로고 링크에만 빨간색을 적용
  font-size: 2rem;
  font-weight: bold;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: gray;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;