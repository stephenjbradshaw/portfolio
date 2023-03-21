import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import ProjectDetail from "./routes/ProjectDetail";
import Layout from "./routes/Layout";
import "./i18n/i18n";
// import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import About from "./routes/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      // {
      //   path: "projects",
      //   element: <Projects />,
      //   errorElement: <ErrorPage />,
      // },
      {
        path: "projects/:slug",
        element: <ProjectDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
