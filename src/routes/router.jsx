import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home/Home";
import NewsLayout from "../pages/NewsLayout/NewsLayout";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

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