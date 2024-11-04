//실습1 로그인 페이지 유효성 검사 구현.
//yup을 사용하여 이메일과 비밀번호 유효성 검사 규칙 설정.


import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("올바른 이메일 형식이 아닙니다.")
        .required("이메일은 필수 입력 사항입니다."),
    password: yup
        .string()
        .min(8, "비밀번호는 최소 8자리 이상이어야 합니다.")
        .max(16, "비밀번호는 최대 16자리 이하이어야 합니다.")
        .required("비밀번호는 필수 입력 사항입니다."),
});

export default validationSchema;
