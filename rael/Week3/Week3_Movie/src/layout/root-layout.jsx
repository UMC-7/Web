import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <Container>
            <Navbar/>
            <Sidebar/>
            <Content>
                <Outlet/>
            </Content>
        </Container>
    );
};

export default RootLayout;

const Container = styled.div`
    display: flex;
    height: 100%;
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-left: 150px;
    padding: 30px;
    display: flex;
    background-color: #202020;
`