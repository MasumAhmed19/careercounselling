import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import CategoryCounselings from "../pages/CategoryCounselings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/blog',
        element: <BlogPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/service',
        element: <ServicePage />,
        children: [
            {
                path: '', // Matches the parent route `/service`
                element: <Navigate to="/service/online" />, // Optional: Redirect logic here
            },
            {
                path: '/service/:catName', // Relative path for `/service/:catName`
                element: <CategoryCounselings />,
            },
        ],
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
