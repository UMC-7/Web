import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <MovieNav>
            <Logo>
                <LogoLink to={'/'}>YOUNGCHA</LogoLink>
            </Logo>
            <Nav>
                <LoginButton to='/login'>로그인</LoginButton>
                <SignupButton to='/signup'>회원가입</SignupButton>
            </Nav>
        </MovieNav>
    );
};

export default Navbar;

const MovieNav = styled.nav`
    width: 100%;
    height: 55px;
    padding: 10px;
    top: 0;
    left: 0;
    background-color: #323232;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    display: inline-block;
    padding: 5px;
    margin: 5px;
    font-weight: 600;
    font-size: 25px;
`

const LogoLink = styled(Link)`
    color: #FF1183;
    text-decoration: none;
`

const Nav = styled.div`
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const LoginButton = styled(Link)`
    color: white;
    padding: 30px;
    font-weight: 800;
    font-size: 12px;
    text-decoration: none;
`

const SignupButton = styled(Link)`
    color: white;
    padding: 10px;
    margin-right: 30px;
    font-weight: 800;
    font-size: 12px;
    background-color: #FF1183;
    border-radius: 10px;
    text-decoration: none;
`