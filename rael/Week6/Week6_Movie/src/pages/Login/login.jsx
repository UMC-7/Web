import { useNavigate } from "react-router-dom";
import TitleStyle from "../../components/TitleStyle";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validate";
import styled from "styled-components";

const LoginPage = () => {
    const login = useForm(
        {email: '', password: ''}, 
        validateLogin
    )

    const navigate = useNavigate();

    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password);

        if (!login.values.email) {
            alert('이메일을 입력해주세요!');
            return;
        }
        
        fetch('http://localhost:3000/auth/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }, 
            body: JSON.stringify({email: login.values.email, password: login.values.password})
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Login Success:', data);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('accessToken', data.accessToken);
            // 로컬스토리지에 리프레쉬토큰, 엑세스토큰 저장함.

            const name = login.values.email.substring(0, login.values.email.indexOf('@'));
            localStorage.setItem('name', name);
            // 로컬스토리지에 이메일 @전까지 substring해서 name으로 저장함.

            alert('로그인이 완료되었습니다.');
            navigate('/');
            window.location.reload();
            // 새로고침을 해야 화면이 바뀌므로, reload해줌.
        })
        .catch(error => {
            console.log('Login Error', error);
            alert('로그인에 실패하였습니다.');
        });
    }

    const isFormValid = Object.keys(login.errors).length === 0;
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