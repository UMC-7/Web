import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"



const Navbar = () =>{

    const [name, setName] = useState('')

    useEffect(()=>{
        const storedName: string | null = localStorage.getItem('name')
        if(storedName) {
            setName(storedName)
            console.log("navbar", "setName"+storedName)
        }
    },[]);

    const handleLogout = ()=>{
        localStorage.removeItem('name');
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        setName('')
    }


    return(
        <StyledNavBar>
            <Link to={'/'}>
                <StyledLogo>Youngcha</StyledLogo>
            </Link>
            <div>
            {name?
                <div>
                    <StyledLoginButton>{name}</StyledLoginButton>
                    <StyledLoginButton onClick={handleLogout}>로그아웃</StyledLoginButton>
                </div>
            :
                <div>
                    <Link to={'/login'}>
                        <StyledLoginButton>로그인</StyledLoginButton>
                    </Link>
                    <Link to={'/signup'}>
                        <StyledSignupButton>회원가입</StyledSignupButton>
                    </Link>
                </  div>
            }
        
            </div>
        </StyledNavBar>
    )
}

const StyledNavBar=styled.nav`
position:fixed;
    top:0;
    left:0;
    right: 0;
    height: 45px;
    padding:10px;
    box-sizing: border-box;
    padding-left: 20px;
    background-color: #1b1b1b;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const StyledLogo=styled.button`
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    height: 100%;
    padding:0;
    margin:0;
    background-color: transparent;
    color: #d30950;
    border:none;
`
const StyledLoginButton=styled.button`
    font-size: 12px;
    margin:5px;
    color:white;
    background-color: transparent;
    text-decoration: none;
    border:none;
`
const StyledSignupButton=styled.button`
    font-size: 12px;
    padding:7px;
    margin:5px;
    color:white;
    background-color: #d30950;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: #db4478;
    }
`