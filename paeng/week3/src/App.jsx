import View from "./components/view";
import RootLayout from "./layouts/root-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import NowPlaying from "./pages/NowPlaying";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
    children: [
      {
        // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
        index: true,
        element: <View />,
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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
