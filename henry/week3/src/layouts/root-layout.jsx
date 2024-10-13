import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Container = styled.div`
margin-top: 100px;
margin-left: 200px;
`


const RootLayout = () => {
    return (
        <div >
            <Navbar />
            <Sidebar />
            <Container>
            <Outlet />
            </Container>
        </div>
    );
};

export default RootLayout;
