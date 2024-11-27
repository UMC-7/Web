import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  font-size: 1.5rem;
  `


const Categories=()=>{
  return(
      <div style={{display:"flex", justifyContent:"space-between"}}>
          <StyledLink to="now-playing">현재상영중인</StyledLink>
          <StyledLink to="popular">인기있는</StyledLink>
          <StyledLink to="top-rated">높은평가를받은</StyledLink>
          <StyledLink to="up-coming">개봉예정중인</StyledLink>
      </div>
  )
};

export default Categories;  