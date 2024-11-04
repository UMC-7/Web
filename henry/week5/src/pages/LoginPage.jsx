//실습1 로그인 페이지 유효성 검사 구현.
//로그인 페이지 전체를 구성하는 컴포넌트(로그인 폼을 렌더링하는 메인 컴포넌트임.)

import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div style={{ width: '300px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
            <h2>로그인</h2>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
