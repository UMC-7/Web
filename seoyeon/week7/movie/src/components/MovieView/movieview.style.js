import { Link } from "react-router-dom"
import styled from "styled-components"

const Movie=styled(Link)`
    width: 120px;
    height: 100%;
    margin: 10px;
    position: relative;
    text-decoration: none;
`
const Container =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    top: 0;
    bottom: 0;
`
const MovieInfoFonf=styled.text`
    color: white;
    display: block;
`

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PageButton = styled.button`
    width: 50px;
    height: 30px;
    color: white;
    background-color: #d30950;
    &:disabled{
        background-color: gray;
    }
`

const PageButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`

export {Movie, Container, MovieInfoFonf, PageContainer, PageButton, PageButtonContainer}