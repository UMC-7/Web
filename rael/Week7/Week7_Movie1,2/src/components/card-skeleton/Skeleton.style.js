import styled, {keyframes} from "styled-components";

const skeleton = keyframes`
    0% {
        opacity: 1;
    }
    30% {
        opacity: 0.7;
    }
    50% {
        opacity: 0.4;
    }
    80% {
        opacity: 0.7;
    }
    100% {
        opacity: 1;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`

const Main = styled.div`
    width: 150px;
    height: 210px;
    background-color: rgb(230, 230, 230);
    border-radius: 10px;
    overflow: hidden;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

const TextWrapper = styled.div`
    width: 150px;
    height: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    gap: 3px;
`

const TitleBox = styled.div`
    background-color: rgb(230, 230, 230);
    height: 14px;
    border-radius: 4px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

const DescriptionBox = styled.div`
    background-color: rgb(230, 230, 230);
    height: 10px;
    border-radius: 3px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

export {Container, Main, TextWrapper, TitleBox, DescriptionBox}