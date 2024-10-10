import GlobalStyles from "./styles/GlobalStyles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import MainSection from "./components/MainSection/MainSection";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/portfolio",
          element: <MainSection />,
          children: [
            {
              path: "about",
              element: <About />,
            },
            {
              path: "project",
              element: <Projects />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
