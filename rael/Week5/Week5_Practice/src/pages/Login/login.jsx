import TitleStyle from "../../components/TitleStyle";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const LoginPage = () => {
    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!').required(),
        password: yup.string().min(8, '비밀번호는 8~16자 사이로 입력해주세요!').max(16, '비밀번호는 8~16자 사이로 입력해주세요!').required(),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출');
        console.log(data);
    }

    return (
        <>
            <TitleStyle title="로그인"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email")}/>
                <p style={{color: 'red', fontSize: '13px'}}>{errors.email?.message}</p>
                <input type='password' {...register('password')}/>
                <p style={{color: 'red', fontSize: '13px'}}>{errors.password?.message}</p>
                <button onClick={handleSubmit}>로그인</button>
            </form>
        </>
    );
};

export default LoginPage;