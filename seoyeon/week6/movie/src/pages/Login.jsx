import styled from "styled-components";
import {StyledOutletFont} from "../components/OutletStyle";
import useForm  from "../hooks/useForm";
import  {validateLogin}  from "../utils/validate"

const LoginPage=()=>{
    const login = useForm({
        initialValues :{
            email: "",
            password:""
        }, 
        validate: validateLogin
    })


    /*const schema = yup.object().shape({
        email: yup.string().email("이메일 형식이 올바르지 않습니다").required("이메일 입력은 필수입니다"),
        password: yup.string().min(8, "비밀번호는 8자리 이상입니다").max(16, "비밀번호는 16자리 이하입니다").required()
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })*/

    const onSubmit = ()=>{
        console.log("데이터 제출", login.values);
    }

    return(
    <Container name="login container">
        <StyledOutletFont style={{display: "block"}}>로그인</StyledOutletFont>

        <StyledLoginInput type={'email'} placeholder="이메일을 입력하세요" {...login.getTextInputProps('email')}/>
        { login.touched.email &&login.error.email && <ErrorMessage >{login.error.email}</ErrorMessage>}
        <StyledLoginInput type ={'password'} placeholder="비밀번호를 입력하세요" {...login.getTextInputProps('password')}/>
        { login.touched.password &&login.error.password && <ErrorMessage >{login.error.password}</ErrorMessage>}
        
        <StyledInputSubmitButton onClick={onSubmit} disabled={login.error.email || login.error.password}>로그인</StyledInputSubmitButton>
    </Container>
    )   
}
export default LoginPage;

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



