import TitleStyle from "../components/TitleStyle";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MoviePage = () => {
    return (
        <div>
            <TitleStyle title="카테고리"/>
            <Container>
                <CategoryLink to="now-playing">
                    <StyledImg src="/현재 상영중인.jpg" alt="현재 상영중인"/>
                    <Category>현재 상영중인</Category>
                </CategoryLink>
                <CategoryLink to="popular">
                    <StyledImg src="/인기있는.jpg" alt="인기있는"/>
                    <Category>인기있는</Category>
                </CategoryLink>
                <CategoryLink to="top-rated">
                    <StyledImg src="/높은 평가를 받은.jpg" alt="높은 평가를 받은"/>
                    <Category>높은 평가를 받은</Category>
                </CategoryLink>
                <CategoryLink to="up-coming">
                    <StyledImg src="/개봉 예정중인.jpg" alt="개봉 예정중인"/>
                    <Category>개봉 예정중인</Category>
                </CategoryLink>
            </Container>
        </div>
    );
};

export default MoviePage;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;   
    margin-left: 20px;
`

const CategoryLink = styled(NavLink)`
    width: 250px;
    height: 250px;
    color: black;
    background: #ffffff;
    border-radius: 5px;
    margin: 10px;
    text-decoration: none;
    position: relative;
`

const Category = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 5px;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`;