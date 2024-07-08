import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
// import Success from "./pages/Success"; // Ensure this import is correct

const user = false; // Replace this with your actual user state logic

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:category",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    // path: "/success",
    // element: <Success />,
  },
  {
    path: "/login",
    element: user ? <Link to="/" /> : <Login />,
  },
  {
    path: "/register",
    element: user ? <Link to="/" /> : <Register />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
