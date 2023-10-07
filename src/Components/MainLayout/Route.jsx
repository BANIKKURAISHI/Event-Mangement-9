import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Error from "./Error";
import Home from "../Home/Home";
import Reg from "../Reg and Log in page/Reg";
import Login from "../Reg and Log in page/Login";


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

      
       ]

      },
    






])

export default myCreateRoute