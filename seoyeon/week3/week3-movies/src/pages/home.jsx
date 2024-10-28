import styled from "styled-components";
import {StyledOutletFont} from "../components/OutletStyle";

const HomePage=()=>{
    return(
        <Container>
            <StyledOutletFont>홈</StyledOutletFont>
        </Container>

    )
}
export default HomePage

const Container=styled.div`
    display: flex;
    top:0;
    bottom: 0;
`