import {StyledOutletFont} from "../components/OutletStyle";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import { validateSignup } from "../utils/validate";

const SignupPage=()=>{
    const login = useForm({
        initialValues:{
            email: "",
            password:"",
            passwordCheck:""
        },
        validate: validateSignup
    })

    const submit=()=>{
        console.log(login.values)
    }

    return(
        <Container>
            <StyledOutletFont>회원가입</StyledOutletFont>
            <StyledLoginInput type={"email"} placeholder="이메일을 입력"{...login.getTextInputProps('email')}/>
            {login.touched.email && <ErrorMessage>{login.error.email}</ErrorMessage>}
            <StyledLoginInput type={"password"} placeholder="비밀번호를 입력" {...login.getTextInputProps("password")}/>
            {login.touched.password && <ErrorMessage>{login.error.password}</ErrorMessage>}
            <StyledLoginInput type={"password"} placeholder="비밀번호를 다시 입력" {...login.getTextInputProps("passwordCheck")}/>
            {login.touched.passwordCheck && <ErrorMessage>{login.error.passwordCheck}</ErrorMessage>}
            <StyledInputSubmitButton onClick={submit} disabled={login.error.email || login.error.password || login.error.passwordCheck}>제출</StyledInputSubmitButton>
        </Container>    
    )
}
export default SignupPage

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    flex: 1;
`
const StyledLoginInput = styled.input`
    display: block;
    width: 300px;
    padding: 10px;
    margin-bottom: 2px;
    border-radius: 5px;
`

const StyledInputSubmitButton = styled.button`
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #d30950;
    border-radius: 5px;
    text-align: center;
    text-justify: center;
    color: white;

    &:disabled{
        background-color: gray;
    }
`
const ErrorMessage = styled.p`
    color: red;
    margin-bottom: 10px;
    margin-top: 0;
`
