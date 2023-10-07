import { Outlet } from "react-router-dom";
import Navbar from "../Navbar and Footer/Navbar";
import Slider from "../Pages/Slider";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-[450px] ">
             <Slider></Slider>
             </div>
            <div className="-my-[800px] static  ">
             <Outlet></Outlet>
             </div>
            
             
        </div>
    );
};

export default MainLayout;