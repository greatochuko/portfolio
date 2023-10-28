import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Stack from "./pages/Stack";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects/:projectName", element: <ProjectDetail /> },
      { path: "/stack", element: <Stack /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
