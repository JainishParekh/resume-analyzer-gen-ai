import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register_user/Register.jsx";
import Home from "./pages/home/Home.jsx";
import AuthLayout from "./layouts/auth/AuthLayout.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ]
    }
])