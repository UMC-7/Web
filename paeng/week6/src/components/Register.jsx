export default Register=({email, pw, checkPw})=>{
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData={
            email: email,
            password: pw,
            passwordCheck: checkPw
        };


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
            navigate('/login');
            alert('회원가입 성공');
          })
          .catch(error => {
            console.error('Error:', error);
          });

}
}

