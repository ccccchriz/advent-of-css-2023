import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication.tsx";
import EditWishlist from "./pages/main/EditWishlist.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Authentication type="login" />,
  },
  {
    path: "/register",
    element: <Authentication type="register" />,
  },
  {
    path: "/invite",
    element: <Authentication type="invite" />,
  },
  {
    path: "/invite/decline",
    element: <Authentication type="decline" />,
  },
  {
    path: "/invite/accept",
    element: <Authentication type="accept" />,
  },
  {
    path: "/wishlist/edit",
    element: <EditWishlist />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
