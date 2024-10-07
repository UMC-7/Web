import styled from "styled-components"
import Navbar from "../components/navbar"
import {Outlet} from "react-router-dom"
import SideBar from "../components/side-bar"

const RootLayout=()=>{
    return(
        <StyledRootLayout name='rootLayout'>
            <Navbar/>
            <StyledBelowNav name='belowNav'>
                <SideBar/>
                <Outlet/>
            </StyledBelowNav>
        </StyledRootLayout>

    )
}
export default RootLayout

const StyledRootLayout=styled.div`
    width: 100%;
    height: 100vh;
    top:0;
    left:0;
    margin:0 auto;
    padding:0;
    display: flex;
    flex-direction: column;
`

const StyledBelowNav=styled.div`
    width: 100%;
    height: 100%;
    margin:0;
    padding:0;
    display:flex;
    flex-direction: row;
    flex: 0 1 auto;
`
