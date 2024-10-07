import styled from 'styled-components';
const CustomButton=()=>{

    return (
        <FirstStyledSweetPotato color={'red'}>
            커스텀버튼
        </FirstStyledSweetPotato>
    );
}
export default CustomButton;

const FirstStyledSweetPotato=styled.button`
    background-color:${props => props.color ||'purple'};
    color:white;
    border:none;
    padding:20px;
    border-radius: 5px;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
`