// navbar.jsx
import {Link} from "react-router-dom";
import styled from "styled-components";

const LogoLink = styled(Link)`
  color: #F349AA; /* 분홍색 적용 */
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #D26AAF; /* hover 시 색상 변화 */
  }
`;
const StyledNav = styled.nav`
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0 ;
  left: 0 ;
  background-color: black ;
  display: flex ;
  justify-content: space-between;
`;
const Logo = styled.div`
  color: red ;

`;
const ButtonLink = styled(Link)`
  color: white;
`;


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
