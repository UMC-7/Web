// styled-components로 수정
// root-layout , navbar 최상단, sidebar와 outlet 가로축으로 배치
// navbar ; 로고만들기  로고클릭시 홈페이지 로 이동
// 로그인과 회원가입 버튼  ; hover시 색상이 달라지도록 로그인 버튼 클릭시 /login 페이지
// 회원가입 버튼시 /signup 페이지
// sidebar ; react-icons 라이브러리
// 찾기 버튼 클릭시 /search 

import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/home.jsx";
import NotFound from "./pages/not-found.jsx";
import View from "./components/view.jsx";
import RootLayout from "./layout/root-layout.jsx";
import LoginPage from './pages/login.jsx';
import SignPage from './pages/signup.jsx';
import SearchPage from './pages/search.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <NotFound/>,
        // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
        children: [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <HomePage/>
            },
            {
                // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
                path: 'view',
                element: <View/>,
                
            },
            {
                path: 'login', 
                element:<LoginPage/>
            },
            {
                path: 'signup',
                element:<SignPage/>
            },
            {
                path: 'search',
                element:<SearchPage/>
            }
        ]
    },

])

function App() {
    return <RouterProvider router={router}/>
}

export default App
