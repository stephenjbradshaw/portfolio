import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/RouteError";
import Home from "./routes/Home";
import ProjectDetail from "./routes/ProjectDetail";
import Root from "./routes/Root";
import "./i18n/i18n";
import Projects from "./routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "projects/:projectId",
        element: <ProjectDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
