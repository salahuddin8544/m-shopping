import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from './../Home/Home';
import MyCard from "../Pages/MyCard/MyCard";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import AllProducts from "../Dashboard/AllProducts/AllProducts";
import AllUser from "../Dashboard/AllUser/AllUser";
import PrivateRoute from "./PrivateRoute";
import ProductCart from "../Home/ProductCart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },

            ,
            {
                path:'/allproducts',
                element:<PrivateRoute> <MyCard></MyCard></PrivateRoute>,   
            },
            {
                path:'/allproducts/:id',
                element:<ProductCart></ProductCart>,
                loader:({params})=> fetch(`https://m-server-ashen.vercel.app//allproducts/${params.id}`) 
            },
            
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]),
        
        
    }
    ,{
   
            path:'/dahsboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'dahsboard/alusers',
                    element:<AllUser></AllUser>
                },
                {
                    path:'dashboard/allproducts',
                    element:<AllProducts></AllProducts>
                }
            // 
            ]
    },
])
export default router