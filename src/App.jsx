import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Pages/Root";
import Main, { loadPosts } from "./Pages/Main";
import Info from "./Pages/Info";
import Details, { loadAll } from "./Pages/Details";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
        loader: loadPosts,
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: loadAll,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
