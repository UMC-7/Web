import styled from "styled-components"
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { MdMovie } from "react-icons/md";

const SideBar=()=>{
    return(
        <StyledSide>
            <SideBarItem to={'/search'} icon={FaSearch} label="찾기"/>
            <SideBarItem to={'/movies'} icon={MdMovie} label="영화"/>
        </StyledSide>
    )
}
export default SideBar

const SideBarItem=({icon:Icon, label, to})=>{
    return(
        <StyledSideBarItem to={to}>
            <Icon/>
            <StyledSideBarItemText>{label}</StyledSideBarItemText>
        </StyledSideBarItem>
    )
}

const StyledSide=styled.aside`
    position: fixed;
    display:flex;
    flex-direction: column;
    width: 230px;
    margin-top: 45px;
    left:0;
    top: 0;
    bottom: 0;
    padding:10px;
    box-sizing: border-box;
    background-color: #1b1b1b;
`
const StyledSideBarItem=styled(Link)`
    height: 15px;
    padding:10px;
    display: flex;
    align-items: center;
    color: white;
    text-decoration-line: none;
    &*{
        text-decoration: none;
    }
`
const StyledSideBarItemText=styled.div`
    margin-left: 10px;
    font-size: 13px;
`
