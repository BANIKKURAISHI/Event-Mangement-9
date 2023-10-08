import { Outlet } from "react-router-dom";
import Navbar from "../Navbar and Footer/Navbar";



const MainLayout = () => {
    return (
        <div className="max-w-8xl mx-auto">
           
            <Navbar></Navbar>
           
            <Outlet></Outlet>


        </div>
            
             
      
    );
};

export default MainLayout;