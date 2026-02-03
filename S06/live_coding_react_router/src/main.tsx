import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorBoundary from "./components/error/ErrorBoundary.tsx";
import Home from "./components/home/Home.tsx";
import Layout from "./components/layout/Layout.tsx";
import Login from "./components/login/Login.tsx";
import Form from "./components/form/Form.tsx";
import User from "./components/user/User.tsx";
import { usersLoader } from "./utlis/conts.ts";
import UserDetails from "./components/user-details/UserDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Form />,
      },
      {
        path: "users",
        element: <User />,
        loader: usersLoader,
        children: [
          {
            path: ":id",
            element: <UserDetails />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
