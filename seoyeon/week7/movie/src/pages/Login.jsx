import styled from "styled-components";
import {StyledOutletFont} from "../components/OutletStyle";
import useForm  from "../hooks/useForm";
import  {validateLogin}  from "../utils/validate"
import { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage=()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [result, setResult] = useState({})
    const navigate = useNavigate()


    const login = useForm({
        initialValues :{
            email: "",
            password:""
        }, 
        validate: validateLogin
    })


    const onSubmit = async()=>{
        console.log("데이터 제출", login.values);
        setIsLoading(true)
        setIsError(false)
        try{
            const response = await axios.post("http://localhost:3000/auth/login", login.values)
            console.log("login resp",response)

            if(response.status==201){
                setResult(response.data)
                console.log("login success", response)
                localStorage.setItem("accessToken",response.data.accessToken)
                localStorage.setItem("refreshToken", response.data.refreshToken)
                localStorage.setItem("name", login.values.email)

                //window.location.replace("/movies")
                navigate("/movies")
                
            } else {
                console.log("login fail", result)
            }
        } catch(e){
            setIsError(true)
            console.log("login error", e)
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        console.log("login result", result)
    },[result])

    return(
    <Container name="login container">
        <StyledOutletFont style={{display: "block"}}>로그인</StyledOutletFont>

        <StyledLoginInput type={'email'} placeholder="이메일을 입력하세요" {...login.getTextInputProps('email')}/>
        { login.touched.email &&login.error.email && <ErrorMessage >{login.error.email}</ErrorMessage>}
        <StyledLoginInput type ={'password'} placeholder="비밀번호를 입력하세요" {...login.getTextInputProps('password')}/>
        { login.touched.password &&login.error.password && <ErrorMessage >{login.error.password}</ErrorMessage>}
        
        <StyledInputSubmitButton onClick={onSubmit} disabled={login.error.email || login.error.password}>로그인</StyledInputSubmitButton>

        {isLoading&& <h2 style={{color: "white"}}>로딩중</h2>}
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



