import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;

    input {
        flex: 1;
        width: 30vw;
        font-size: 12px;
        margin-left: 70px;
        margin-top: 20px;
        //padding: 5px;
        padding-left: 15px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: 1px solid rgb(220,220,220);
        &:focus{
            outline: none;
        }
    }

    button {
        background-color: #d30950;
        color: white;
        padding: 15px;
        width: 100px;
        font-size: 12px;
        margin-right: 70px;
        margin-top: 20px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border: none;
        &:hover{
            background-color: #db4478;
        }
    }
`

const MovieGridContainer = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 20px;
`

export {SearchContainer, MovieGridContainer}