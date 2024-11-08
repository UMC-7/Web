const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// 공통 유효성 검사 로직
function validateEmail(email) {
    if (!emailPattern.test(email)) {
        return '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
    }
    return '';
}

function validatePassword(password) {
    if (password.length < 8 || password.length > 16) {
        return '비밀번호는 8 ~ 16자 사이로 입력해주세요!';
    }
    return '';
}

// 로그인 유효성 검사
function validateLogin(values) {
    const errors = {};

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validatePassword(values.password);
    if (passwordError) errors.password = passwordError;

    return errors;
}

// 회원가입 유효성 검사
function validateSignUp(values) {
    const errors = {};

    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const passwordError = validatePassword(values.password);
    if (passwordError) errors.password = passwordError;

    if (values.password !== values.passwordcheck) {
        errors.passwordcheck = '비밀번호가 일치하지 않습니다. 다시 확인해주세요!';
    }

    return errors;
}

export { validateLogin, validateSignUp };