import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ErrorRoute from "./ErrorRoute";

const Body = () => {
  const appRoute = createBrowserRouter([
    { path: "/", errorElement: <ErrorRoute />, element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};
export default Body;
