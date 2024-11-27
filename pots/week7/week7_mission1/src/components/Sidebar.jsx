import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  width: 200px;
  height: 100vh;
  background-color: black;
  //z-index: 500;
  position: fixed;
  left:0;
  `

const ButtonLink = styled(Link)`
  padding: 10px 20px;
  background-color: gray;
  margin-top:100px;
  color: white;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;


const Sidebar = () => {
  return(
    <StyledSidebar>
  <ButtonLink to={'/search'}>찾기</ButtonLink>
  <ButtonLink to={'/movies'}>영화</ButtonLink>
  </StyledSidebar>
  );
}

export default Sidebar; 