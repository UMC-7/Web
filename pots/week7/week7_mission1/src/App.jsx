import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./layouts/root-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import MainPage from "./pages/Main";
import MovieDetail from "./pages/MovieDetail";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, // index: true는 '/' 경로를 의미합니다.
        element: <MainPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movies",
        element: <Categories />,
      },
      {
        path: "/movies/now-playing",
        element: <NowPlaying />,
      },
      {
        path: "/movies/popular",
        element: <Popular />,
      },
      {
        path: "/movies/top-rated",
        element: <TopRated />,
      },
      {
        path: "/movies/up-coming",
        element: <UpComing />,
      },
      {
        path: "/movie/detail/:id",
        element: <MovieDetail />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;