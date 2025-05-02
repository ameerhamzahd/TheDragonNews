import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import Categories from "../pages/CategoryNews/CategoryNews";

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
                    Component: Categories
                },
            ]
        },
        // {
        //     path: "/auth",
        //     Component: 
        // },
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