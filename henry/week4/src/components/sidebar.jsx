import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

const Sidebar = () => {
    return (
        <MovieSide>
                <Button to='/search'><FaSearch/><span>찾기</span></Button>
                <Button to='/movie'><MdMovie/><span>영화</span></Button>
        </MovieSide>
    );
};

export default Sidebar;

const MovieSide = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 100%;
    top: 60px;
    left: 0;
    padding-top: 100px;
    padding: 10px;
    background-color: #323232;
`

const Button = styled(NavLink)`
    color: white;
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: 900;
    font-size: 12px;
    text-decoration: none;
    &:hover {
        background-color: #444444;
    }

    span {
        margin-left: 8px;
    }
`