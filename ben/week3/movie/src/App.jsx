import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home";
import MoviePage from "./pages/movie";
import NotFound from "./pages/not-found";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>홈 페이지입니다.</h1>,
        errorElement: <h1>페이지를 찾을 수 없습니다.</h1>
    },
    {
        path: '/movies',
        element: <h1>영화 페이지 입니다.</h1>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
