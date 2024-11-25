import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [checkPwValid, setCheckPwValid] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (e.target.value.includes("@")) {
      setEmailValid(true);
      if (e.target.value.endsWith(".")) {
        setEmailValid(false);
      }
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    const inputValue = e.target.value;
    setPw(inputValue);

    const hasLetter = /[a-zA-Z]/.test(inputValue);
    const isValidLength = inputValue.length >= 8 && inputValue.length <= 16;

    if (hasLetter && isValidLength) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleCheckPw = (e) => {
    setCheckPw(e.target.value);

    if (e.target.value === pw) {
      setCheckPwValid(true);
    } else {
      setCheckPwValid(false);
    }
  };

  useEffect(() => {
    setAllValid(emailValid && pwValid && checkPwValid);
  }, [emailValid, pwValid, checkPwValid]);

  const navigate = useNavigate();


  //모두 valid 할 경우에만 submit이 가능하도록 handleSubmit 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailValid, pwValid, checkPwValid);
    if (allValid) {
      const userData = {
        email: email,
        password: pw,
        passwordCheck: checkPw
      };
      console.log("Sending data:", userData);
      fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('회원가입 성공');
        navigate('/login');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('회원가입 실패');
      });
    } else {
      alert('입력하신 정보를 다시 확인해주세요.');
    }
  };

  return (
    <SignupBlock>
      <h3>회원가입 페이지</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmail}
        />
        <div className="errorMessage">
          {!emailValid && <div>이메일을 반드시 입력해주세요.</div>}
        </div>

        <br />

        <input
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={handlePw}
          type="password"
        />
        <div className="errorMessage">
          {!pwValid && (
            <div>
              비밀번호 8자 이상
            </div>
          )}
        </div>
        <br />

        <input
          placeholder="비밀번호 확인"
          value={checkPw}
          onChange={handleCheckPw}
          type="password"
        />
        <div className="errorMessage">
          {!checkPwValid && (
            <div>비밀번호 검증 필수.</div>
          )}
        </div>
        <br />
        <br />
        <button
          type="submit"
        >
          제출하기
        </button>

        <br />
        <br />
        <br />

        <div className="exist">이미 아이디가 있으신가요?</div>
        <div className="goLogin">로그인 페이지로 이동하기</div>
      </form>
    </SignupBlock>
  );
};

export default SignupPage;

const SignupBlock = styled.div`
  color: white;
  text-align: center;

  input {
    width: 470px;
    height: 35px;
    border-radius: 50px;
    padding-left: 30px;
  }

  button {
    width: 500px;
    height: 45px;
    border-radius: 50px;
    background-color: white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }

  .errorMessage {
    font-size: 13px;
    color: red;
  }

  .exist {
    display: inline-block;
    margin-right: 20px;
    font-size: 0.9rem;
  }
  .goLogin {
    display: inline-block;
    margin-left: 20px;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;
