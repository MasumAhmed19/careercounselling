import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import ServicePage from "../pages/ServicePage";
import CategoryCounselings from "../pages/CategoryCounselings";
import DetailPage from "../pages/DetailPage";
import AuthPage from "../pages/AuthPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

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
                element: <Navigate to="online" />, // Optional: Redirect logic here
            },
            {
                path: ':catName', // Relative path for `/service/:catName`
                element: <CategoryCounselings />,
            },
        ],
    },{
        path:'/detail/:detID',
        element: <DetailPage />
    },{
        path:'/auth',
        element:<AuthPage />,
        children:[
            {
                path:'login',
                element: <LoginPage />
            },{
                path:'signup',
                element: <RegistrationPage />
            }
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
