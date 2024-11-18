import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
`

const CardMain = styled.div`
    width: 140px;
    height: 210px;
    background-color: lightgray;
    border-radius: 3px;
`
const TextWrapper = styled.div`
    width: 140px;
    display: flex;
    flex-direction: column;
    height: 30px;
    gap: 2px;
`
const TitleBox = styled.div`
    height: 14px;
    background-color: lightgray;
    border-radius: 2px;
`
const ContentBox = styled.div`
    height: 14px;
    background-color: lightgray;
    border-radius: 2px;
`
export {Container, CardMain, TextWrapper, TitleBox, ContentBox}