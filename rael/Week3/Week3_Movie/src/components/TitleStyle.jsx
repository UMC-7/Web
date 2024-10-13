import styled from "styled-components";

const TitleStyle = (props) => {
    return (
        <>
            <Title>{props.title}</Title>
        </>
    );
};

export default TitleStyle;

const Title = styled.text`
    font-size: 25px;
    font-weight: 600;
    color: white;
    margin: 10px;
`