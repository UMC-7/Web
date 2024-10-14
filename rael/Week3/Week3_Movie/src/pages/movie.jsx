import TitleStyle from "../components/TitleStyle";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MoviePage = () => {
    return (
        <>
            <div><TitleStyle title="카테고리"/></div>
            <Container style={{display: "flex", flexDirection: "column"}}>
                <CategoriyLink to="now-playing">현재 상영중인</CategoriyLink>
                <CategoriyLink to="popular">인기있는</CategoriyLink>
                <CategoriyLink to="top-rated">높은 평가를 받은</CategoriyLink>
                <CategoriyLink to="up-coming">개봉 예정중인</CategoriyLink>
            </Container>
        </>
    );
};

export default MoviePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const CategoriyLink = styled(Link)`
    box-sizing: border-box;
    color: black;
    background: #ffffff;
    opacity: 0.7;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    text-decoration: none;
`