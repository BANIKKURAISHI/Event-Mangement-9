import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Error from "./Error";
import Home from "../Home/Home";
import Reg from "../Reg and Log in page/Reg";
import Login from "../Reg and Log in page/Login";

import ContactUs from "../Pages/ContactUs";
import Details from "../Pages/Details";
import Private from "../PROVIDER/Private";
import Details2 from "../Pages/Details2";





const myCreateRoute=createBrowserRouter([
      {
       path:'/',
       element:<MainLayout></MainLayout>,
       errorElement:<Error></Error>,
       children:[
       {
            path:'/',
            loader:()=>fetch('/ServiceData.Json'),
            element:<Home></Home>,
         
       },
      
       {
            path:'/reg',
            element:<Reg></Reg>,
         
       },
       {
          path:'/in',
          element:<Login></Login>,
       
     },
     {
         
          path:'/contact',
          element:<Private><ContactUs></ContactUs></Private>,
       
     },
     {
          path:'/:id',
        
          element:<Private><Details></Details></Private>,
          loader:()=>fetch('/ServiceData.Json'),
     },

     {
          path:'/details',
          element:<Private><Details2></Details2></Private>,
          loader:()=>fetch('/ServiceData.Json'),
     }
     


      
       ]

      },
    






])

export default myCreateRoute