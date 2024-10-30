import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from 'yup'

const RootLayout=()=>{
    //유효성 검사 (커스텀 에러 처리)
    const schema = yup.object().shape({
        email: yup.string().email('이메일 형식으로 입력해야 합니다').required('이메일을 입력하세요'),
        password: yup.string().min(8,'비밀번호는 8자리 이상입니다.').max(16,"비밀번호 16이하").required()
    })
    //useForm
    const {register, handleSubmit, formState: {errors}}=useForm({
        resolver: yupResolver(schema)
    })


    const onSubmit=(data)=>{
        console.log("폼 데이터 제출")
        console.log(data)
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type={'text'} {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type={'password'} {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input type={'submit'}/>
            </form>
        </>
    )
}
export default RootLayout