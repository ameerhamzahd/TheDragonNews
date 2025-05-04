import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Authentication from "../layouts/Authentication/Authentication";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "../provider/Private/PrivateRoute";
import Loader from "../components/Loader/Loader";

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
                    hydrateFallbackElement: Loader,
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
        {
            path: "/news-details/:id",
            element: 
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: Loader,
        },
        // {
        //     path: "/*",
        //     Component: 
        // },
    ]
);

export default router;