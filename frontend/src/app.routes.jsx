import { createBrowserRouter } from "react-router";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register_user/Register.jsx";
import Home from "./pages/home/Home.jsx";
import AuthLayout from "./layouts/auth/AuthLayout.jsx";
import PrivateRoutes from "./route-guards/privateRoutes.jsx";
import PublicRoutes from "./route-guards/publicRoutes.jsx";

export const router = createBrowserRouter([
    {
        element: <PrivateRoutes />,
        children: [{
            path: "/",
            element: <Home />
        }]
    },
    {
        element: <PublicRoutes />,
        children: [{
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
        ]
    }
])