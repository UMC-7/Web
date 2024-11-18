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

const DetailContainer = styled.div`
    display: flex;
    width: 80%;
    height: 350px;
    background-color: rgb(230, 230, 230);
    border-radius: 10px;
    animation: ${skeleton} 3s 1s infinite linear alternate;
`

const CreditContailner = styled.div`
    background-color: black;
    color: white;
    width: 100vw;
    height: 100hw;

    h3, h5{
        text-align: left;
    }
`

const SkeletonList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export {DetailContainer, CreditContailner, SkeletonList}