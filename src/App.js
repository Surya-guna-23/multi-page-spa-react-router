import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./pages/Error";
import Home from "./pages/Home";
import Productdetails from "./pages/Productdetails";
import Products from "./pages/Products";
import Rootlayout from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productid", element: <Productdetails /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
