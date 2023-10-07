import { Outlet } from "react-router-dom";
import Navbar from "../Navbar and Footer/Navbar";
import Banner from "../Pages/Banner";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-[450px] ">
             <Banner></Banner>
             </div>
            <div className="-my-[800px] static  ">
             <Outlet></Outlet>
             </div>
            
             
        </div>
    );
};

export default MainLayout;