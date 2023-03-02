import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavError from "./routes/NavError";
import Home from "./routes/Home";
import ProjectDetail from "./routes/ProjectDetail";
import Layout from "./routes/Layout";
import "./i18n/i18n";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NavError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
