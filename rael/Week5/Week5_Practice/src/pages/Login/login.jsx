import TitleStyle from "../../components/TitleStyle";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validate";
import styled from "styled-components";

const LoginPage = () => {
    const login = useForm(
        {email: '', password: ''}, 
        validateLogin
    )

    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password);
    }

    const isFormValid = login.errors.email === '' && login.errors.password === '';
    console.log(login.errors);
    console.log(isFormValid);

    return (
        <Container>
            <Title>로그인</Title>
            <Input 
                error={login.touched.email && login.errors.email}
                type={'email'} 
                placeholder={'이메일을 입력해주세요!'} 
                {...login.getTextInputProps('email')}/>
            {login.touched.email && login.errors.email && <ErrorText>{login.errors.email}</ErrorText>}
            <Input 
                error={login.touched.password && login.errors.password}
                type={'password'} 
                placeholder={'비밀번호를 입력해주세요!'} 
                {...login.getTextInputProps('password')}/>
            {login.touched.password && login.errors.password && <ErrorText>{login.errors.password}</ErrorText>}

            <Login onClick={handlePressLogin} disabled={!isFormValid}>로그인</Login>
        </Container>
    );
};

export default LoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: white;
    margin-top: 80px;
    padding: 30px;
`

const Input = styled.input`
    margin: 10px;
    padding: 18px;
    width: 320px;
    border: 1px solid #ccc;
    border-radius: 7px;
    border: ${props => props.error ? '4px solid red' : '1px solid #ccc'};

    &:focus {
        border-color: #007bff;
    }

    &::placeholder {
        font-size: 16px;
        color: #999;
    }
`

const Login = styled.button`
    color: white;
    padding: 15px;
    margin: 10px;
    width: 365px;
    font-weight: 800;
    font-size: 15px;
    background-color: ${props => props.disabled ? '#ccc' : '#FF1183'};
    border-radius: 10px;
    text-decoration: none;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        background-color: ${props => props.disabled ? '#ccc' : 'lightgray'};
    }
`

const ErrorText = styled.h1`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`