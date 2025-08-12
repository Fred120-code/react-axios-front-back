import { createBrowserRouter } from "react-router-dom";
import EnterOtp from "../pages/Auth/EnterOtp";
import Invite from "../pages/Auth/Invite";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Welcome from "../pages/Auth/Welcome";
import NotFound from "../pages/NotFound";
import Layout from "../components/Auth/Layout";

export const router = createBrowserRouter([
    {
        path:"/auth",
        element: <Layout />,
        children: [
            {path: "welcome", element: <Welcome />},
            {path: "login", element: <Login />},
            {path: "register", element: <Register />},
            {path: "invite", element: <Invite />},
            {path: "enter-otp/:email", element: <EnterOtp />},
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])