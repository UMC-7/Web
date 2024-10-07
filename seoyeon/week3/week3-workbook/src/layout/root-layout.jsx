import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import styled from "styled-components";

const RootLayout=()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
};
export default RootLayout;

