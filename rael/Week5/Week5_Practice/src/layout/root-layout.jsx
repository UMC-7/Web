import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <Container>
            <Sidebar/>
            <Layout>
                <Navbar/>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
        </Container>
    );
};

export default RootLayout;

const Container = styled.div`
    display: flex;
    height: 100vh;
`

const Layout = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    flex: 1;
    background-color: #000;
    padding: 30px;
    overflow-y: auto;
`