import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { PiFilmSlateFill } from "react-icons/pi";

const Sidebar = () => {
    return (
        <MovieSide>
            <Logo>
                <h1 style={{}}>YOUNGCHA</h1>
            </Logo>
            <MenuList>
                <Button to='/search'><FaSearch/><span>찾기</span></Button>
                <Button to='/movie'><PiFilmSlateFill/><span>영화</span></Button>
            </MenuList>
        </MovieSide>
    );
};

export default Sidebar;

const MovieSide = styled.nav`
    width: 140px;
    height: 100%
    min-height: 100vh;
    padding: 30px;
    background-color: #141517;
`

const Logo = styled(Link)`
    text-decoration: none;
    
    h1{
        color: #FF0358;
        margin-bottom: 40px;
        font-size: 24px;
    }
`

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 10px;
`

const Button = styled(NavLink)`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        background-color: #444444;
    }

    span {
        margin-left: 10px;
    }
`