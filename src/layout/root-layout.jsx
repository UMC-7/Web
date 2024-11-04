import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import styled from "styled-components";

const NavbarDivComponent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
const SidebarDivComponent = styled.div`
    display: flex;
    flex: 1;
`;

const RootLayout = () => {
    return (
        <NavbarDivComponent>
            <Navbar />
            <SidebarDivComponent>
                <Sidebar />
                <Outlet />
            </SidebarDivComponent>
        </NavbarDivComponent>

    );
};


export default RootLayout;