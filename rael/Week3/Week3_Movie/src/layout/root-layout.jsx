import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from "styled-components";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <ContentSection>
                <Sidebar/>
                <Outlet/>
            </ContentSection>
        </>
    );
};

export default RootLayout;

const ContentSection = styled.div`
    width: 100%
    height: 100%;
    display: flex;
    flex-direction: row;
    flex: 0 1 auto;
`