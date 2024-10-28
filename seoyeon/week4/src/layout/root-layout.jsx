import styled from "styled-components"
import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"
import SideBar from "../components/side-bar"

const RootLayout=()=>{
    return(
        <StyledRootLayout name='rootLayout'>
            <Navbar/>
            <SideBar/>
            <StyledBelowNav>
                <Outlet/>
            </StyledBelowNav>
        </StyledRootLayout>

    )
}
export default RootLayout

const StyledRootLayout=styled.div`
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    margin:0 auto;
    padding:0;
    display: flex;
    flex-direction: column;
    height: 100vh;  //화면 전체 높이 차지 
`

const StyledBelowNav=styled.div`
    position: relative;
    margin-top: 45px;
    margin-left: 230px;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    background-color: black;
    padding:10px;
    box-sizing: border-box;
    flex: 1;    //부모 요소의 남은공간 채우게
`
