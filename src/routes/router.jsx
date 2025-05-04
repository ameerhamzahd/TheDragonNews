import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Authentication from "../layouts/Authentication/Authentication";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home,
            children: [
                {
                    index: true,
                    Component: NewsLayout
                },
                {
                    path: "/category/:id",
                    Component: CategoryNews,
                    loader: () => fetch("/news.json"),
                },
            ]
        },
        {
            path: "/auth",
            Component: Authentication,
            children: [
                {
                    path:"/auth/login",
                    Component: Login
                },
                {
                    path:"/auth/register",
                    Component: Register
                },
            ]
        },
        // {
        //     path: "/news",
        //     Component: 
        // },
        // {
        //     path: "/*",
        //     Component: 
        // },
    ]
);

export default router;