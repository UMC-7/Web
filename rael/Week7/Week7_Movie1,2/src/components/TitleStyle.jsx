import styled from "styled-components";

const TitleStyle = (props) => {
    return (
        <>
            <Title>{props.title}</Title>
        </>
    );
};

export default TitleStyle;

const Title = styled.h1`
    font-weight: 600;
    color: white;
    margin: 10px;
`