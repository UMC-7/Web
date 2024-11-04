//실습1 로그인 페이지 유효성 검사 구현.

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '../validation/validationSchema';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log("로그인 성공:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
                <input
                    type="email"
                    placeholder="이메일"
                    {...register("email")}
                    onBlur={() => trigger("email")}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <div>
                <input
                    type="password"
                    placeholder="비밀번호"
                    {...register("password")}
                    onBlur={() => trigger("password")}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
            <button type="submit" disabled={Object.keys(errors).length > 0}>
                로그인
            </button>
        </form>
    );
};

export default LoginForm;
