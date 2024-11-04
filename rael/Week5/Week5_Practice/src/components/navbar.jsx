import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    return (
        <MovieNav>
                <LoginButton to='/login'>로그인</LoginButton>
                <SignupButton to='/signup'>회원가입</SignupButton>
        </MovieNav>
    );
};

export default Navbar;

const MovieNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding: 40px;
    background-color: #141517;
    gap: 20px;
`

const LoginButton = styled(Link)`
    color: white;
    padding: 10px;
    font-weight: 800;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
`

const SignupButton = styled(Link)`
    color: white;
    padding: 10px;
    margin-right: 30px;
    font-weight: 800;
    font-size: 15px;
    background-color: #FF1183;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;

    &;hover {
        background-color: lightgray;
    }
`