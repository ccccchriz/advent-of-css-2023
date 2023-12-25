import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/authentication/Login.tsx";
import Register from "./pages/authentication/Register.tsx";
import Invite from "./pages/authentication/Invite.tsx";
import InviteAccept from "./pages/authentication/InviteAccept.tsx";
import InviteReject from "./pages/authentication/InviteReject.tsx";
import EditWishlist from "./pages/main/EditWishlist.tsx";
import { loader as rootLoader } from "./loader/loader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/invite",
    element: <Invite />,
  },
  {
    path: "/invite/decline",
    element: <InviteReject />,
  },
  {
    path: "/invite/accept",
    element: <InviteAccept />,
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
