const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+/

function validateUser(values){
    const errors = {
        email: "",
        password:""
    }

    if(emailPattern.test(values.email)==false){
        errors.email = "이메일 형식이 맞지 않습니다"
    }
    if(values.password.length<8 || values.password.length>16){
        errors.password = "비밀번호는 8-16자리 입니다."
    }

    return errors
}

function validateLogin(values){
    return validateUser(values)
}

function validateSignup(values){
    const errors = {
        ...validateUser(values),
        passwordCheck:""
    }
    if(values.password !== values.passwordCheck){
        errors.passwordCheck = "비밀번호가 다릅니다."
    }
    return errors
}

export {validateLogin, validateSignup}