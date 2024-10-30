import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #141414;
`;

const SidebarWrapper = styled.aside`
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #1a1a1a;
  z-index: 100;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-left: 250px; // Sidebar 너비만큼 여백
  min-height: 100vh;
  position: relative;
`;

const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 250px); // Sidebar 너비만큼 제외
  height: 60px;
  background-color: rgba(26, 26, 26, 0.9);
  z-index: 90;
`;

const MainContent = styled.main`
  padding: 80px 20px 20px; // 상단에 Navbar 높이만큼 패딩
  width: 100%;
  min-height: calc(100vh - 60px); // Navbar 높이만큼 제외
`;

const RootLayout = () => {
  return (
    <LayoutContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentContainer>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentContainer>
    </LayoutContainer>
  );
};

export default RootLayout; 