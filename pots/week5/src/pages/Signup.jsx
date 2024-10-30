import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import styled from 'styled-components';

// yup 스키마 정의
const schema = yup.object().shape({
  email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일은 필수 입력 항목입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .max(16, '비밀번호는 최대 16자 이하이어야 합니다.')
    .required('비밀번호는 필수 입력 항목입니다.'),
});

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors, isValid }, setValue, trigger } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [touched, setTouched] = useState({ email: false, password: false });

  // 입력 필드 클릭 시 터치 상태 업데이트
  const handleFocus = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // 제출 함수
  const onSubmit = (data) => {
    console.log('폼 데이터 제출:', data);
  };

  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            type="email"
            {...register('email')}
            placeholder="이메일"
            onFocus={() => handleFocus('email')}
            onBlur={() => trigger('email')} // 이메일 필드에서 포커스 아웃 시 유효성 검사
          />
          {touched.email && errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </div>
        <div>
          <Input
            type="password"
            {...register('password')}
            placeholder="비밀번호"
            onFocus={() => handleFocus('password')}
            onBlur={() => trigger('password')} // 비밀번호 필드에서 포커스 아웃 시 유효성 검사
          />
          {touched.password && errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </div>
        <SignupButton type="submit" disabled={!isValid}>
          로그인
        </SignupButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignUpPage;

// 스타일 정의
const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;

const Input = styled.input`
  height: 40px;
  margin-bottom: 5px;
  padding: 0 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    outline: none;
    border-color: black;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 0 10px;
`;

const SignupButton = styled.button`
  height: 40px;
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'red')};
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'gray' : 'darkred')};
  }
`;