import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home
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