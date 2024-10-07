import styled from "styled-components"
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { MdMovie } from "react-icons/md";

const SideBar=()=>{
    return(
        <StyledSide>
            <Link to={'/search'}>
                <SideBarItem icon={FaSearch} label="찾기"/>
            </Link>
            <Link to={'/movies'}>
                <SideBarItem icon={MdMovie} label="영화"/>
            </Link>
        </StyledSide>
    )
}
export default SideBar

const SideBarItem=({icon:Icon, label})=>{
    return(
        <StyledSideBarItem>
            <Icon/>
            <div style={{marginLeft:'10px', fontSize:'13px'}}>{label}</div>
        </StyledSideBarItem>
    )
}

const StyledSide=styled.div`
    display:flex;
    flex-direction: column;
    width:230px;
    height: 100%;
    margin:0;
    padding:10px;
    background-color: #1b1b1b;
`
const StyledSideBarItem=styled.div`
    height: 15px;
    padding:10px;
    display: flex;
    align-items: center;
    color: white;
`
