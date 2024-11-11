import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if(storedName) {
            setName(storedName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setName('');
    };

    return (
        <MovieNav>
            {name ? (
                <>
                    <UserName>{name}님 안녕하세요</UserName>
                    <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
                </>
            ) : (
                <>
                    <LoginButton to='/login'>로그인</LoginButton>
                    <SignupButton to='/signup'>회원가입</SignupButton>
                </>
            )}
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

const UserName = styled.span`
    color: white;
    padding: 10px;
`