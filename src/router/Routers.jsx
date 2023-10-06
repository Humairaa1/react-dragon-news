import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/home/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: ()=>fetch('news.json')
            },
            {
                path:"/newsDetails/:id",
                element:<NewsDetails></NewsDetails>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
      },
      
])
export default router;