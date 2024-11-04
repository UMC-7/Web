// sidebar.jsx
import {Link} from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import styled from 'styled-components';



const  Sidebar = () => {
    return (
        <StyledSidebar>
            <IoSearchSharp />
            <ButtonLink to='/search'>찾기</ButtonLink>
            <div></div>
            <BiSolidCameraMovie />
            <ButtonLink to='/view'>영화</ButtonLink>
        </StyledSidebar>
    );
}

export default Sidebar;

const StyledSidebar = styled.aside`

    width : 200px;
    height: 100%;
    background-color: black;
    position : fixed;
    left : 0;
    `;

const ButtonLink = styled(Link)`
    padding: 10px 20px;
    margin-top:100px;
    color: white;
    text-align: center;

`;
