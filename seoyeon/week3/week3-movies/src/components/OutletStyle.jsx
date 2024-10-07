import styled from "styled-components"
const OutletLayout=(props)=>{
    return(
        <StyledOutletLayout>
            <StyledOutletFont>{props.title}</StyledOutletFont>
        </StyledOutletLayout>

    )
}
const StyledOutletLayout=styled.div`
    width: 100%;
    padding:10px;
    background-color: black;
`
const StyledOutletFont=styled.text`
    font-size: 30px;
    color:white;
    margin:10px;
`
export {StyledOutletLayout,StyledOutletFont}
