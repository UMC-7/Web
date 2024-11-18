import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {

    const fetchUserInfo = async() => {
        const response = await axios.get("/api/user-info", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`, 
            }, 
        });
        return response.data;
    };

    const {data: userInfo, isLoading, isError} = useQuery({
        queryFn: () => fetchUserInfo, 
        queryKey: ['userInfo'], 
        cacheTime: 300000,
        staleTime: 300000,  
        retry: false, // 에러 시 재시도 안 함
        enabled: !!localStorage.getItem("accessToken"),
    })

    // isPending: 데이터를 불러오는 중입니다. 데이터가 로딩중일때 IsPending true.
    // isLoading: 데이터를 불러오는 중이거나, 재시도 중일때 true가 된다.

    if (isLoading) {
        return <MovieNav>
            <h1 style={{color:'white'}}>Loading...</h1>
        </MovieNav>
    }
    
    if (isError) {
        return (
            <MovieNav>
                <LoginButton to="/login">로그인</LoginButton>
                <SignupButton to="/signup">회원가입</SignupButton>
            </MovieNav>
        );
    }

    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload(); // 로그아웃 후 새로고침 해줌.
    };

    return (
        <MovieNav>
            {userInfo?.name ? (
                <>
                    <UserName>{userInfo.name}님 안녕하세요</UserName>
                    <LoginButton onClick={handleLogout}>로그아웃</LoginButton>
                </>
            ) : (
                <>
                    <LoginButton to='/login'>로그인</LoginButton>
                    <SignupButton to='/signup'>회원가입</SignupButton>
                </>
            )}
        </MovieNav>
    );
};

export default Navbar;

const MovieNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding: 40px;
    background-color: #141517;
    gap: 20px;
`

const LoginButton = styled(Link)`
    color: white;
    padding: 10px;
    font-weight: 800;
    font-size: 15px;
    text-decoration: none;
    cursor: pointer;
`

const SignupButton = styled(Link)`
    color: white;
    padding: 10px;
    margin-right: 30px;
    font-weight: 800;
    font-size: 15px;
    background-color: #FF1183;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;

    &;hover {
        background-color: lightgray;
    }
`

const UserName = styled.span`
    color: white;
    padding: 10px;
`