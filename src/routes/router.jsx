import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage />,
        
    }, 
    {
        path:'/blog',
        element:<BlogPage />
    },
    {
        path:'/about',
        element:<AboutPage />
    },
    {
        path:'/service',
        element:<ServicePage />        
    },
    {
        path:'/contact',
        element:<ContactPage />        
    },
    {
        path: '*',
        element: <ErrorPage />
    },
])

export default router;