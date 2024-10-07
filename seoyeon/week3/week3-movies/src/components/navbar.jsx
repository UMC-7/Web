import {Link} from "react-router-dom"
import styled from "styled-components"
const Navbar=()=>{
    return(
        <StyledNavBar>
            <Link to={'/'}>
                <StyledLogo>Youngcha</StyledLogo>
            </Link>
            <div>
            <Link to={'/login'}>
                <StyledLoginButton>로그인</StyledLoginButton>
            </Link>
            <Link to={'/signup'}>
                <StyledSignupButton>회원가입</StyledSignupButton>
            </Link>
            </div>
        </StyledNavBar>
    )
}
export default Navbar

const StyledNavBar=styled.nav`
    height: 45px;
    padding:10px;
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
const StyledSignupButtonOverlay=styled.div`
    
`