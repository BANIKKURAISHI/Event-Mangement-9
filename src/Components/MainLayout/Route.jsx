import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Error from "./Error";
import Home from "../Home/Home";
import Reg from "../Reg and Log in page/Reg";
import Login from "../Reg and Log in page/Login";
import Team from "../Home/Team";
import ContactUs from "../Pages/ContactUs";
import Details from "../Pages/Details";
import Private from "../PROVIDER/Private";



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
          path:'/',
          loader:()=>fetch('/team.Json'),
          element:<Team></Team>,
       
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
          path:'/details/:id',
        
          element:<Private><Details></Details></Private>,
          loader:()=>fetch('/ServiceData.Json'),
     }

      
       ]

      },
    






])

export default myCreateRoute