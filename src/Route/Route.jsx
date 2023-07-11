import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from './../Home/Home';
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
import Resume from "../Resume/Resume";
import UpComing from "../UpComing/UpComing";
import About from "../About/About";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projects',
                element:<Projects></Projects>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/resume',
                element:<Resume></Resume>
            },
            {
                path:'/upcoming',
                element:<UpComing></UpComing>
            },
            {
                path:'/about',
                element:<About></About>
            },
          
        ]),
        
        
    },
])
export default router