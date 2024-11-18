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

export {Movie, Container, MovieInfoFonf}