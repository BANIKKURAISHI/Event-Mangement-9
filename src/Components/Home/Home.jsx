import { useLoaderData } from "react-router-dom";
import Footer from "../Navbar and Footer/Footer";
import Service from "../Pages/Service";
import Background from "../Pages/Background";
import Reviews from "../Pages/Reviews";
import Single from "../Pages/Single";
import Teams from "../Pages/Teams";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const Home = () => {
    const data =useLoaderData()
   
    useEffect(() => {
        AOS.init(
            {
                offset:400,
                duration:2000,
            }
        );
      }, [])
 
    return (
        <div className="max-w-8xl mx-auto">
             <div className="static">
             <Background></Background>
             <div className="-my-6">
             <Single></Single>
             </div>
            
            
             </div> 

            
            
          <div className="my-24">
          <h1 className="text-4xl text-start mx-7 font-semibold text-rose-950  rounded-lg  lg:mx-80 my-10 ">Our Agency Services</h1>
          <hr className="max-w-7xl  mx-8 my-3  lg:mx-[370px] "/>
             <div className="max-w-7xl mx-auto  grid  md:grid-cols-2   gap-10  lg:grid-cols-3"  data-aos='fade-down'>
                {
                    data.map(service=><Service key={service.id} service={service}></Service>)
                }
             </div>
             </div >
             <div>
             <h1 className="text-4xl text-start  mx-8  font-semibold text-rose-950  rounded-lg lg:mx-[370px]   ">Our team Members</h1>
           <hr className="max-w-7xl  mx-8   lg:mx-[370px] "/>
             </div>

             <div className=" max-w-7xl mx-auto mt-10 mb-36 md:ml-40 lg:mx-[330px] ">
             <Teams></Teams>
             </div>
           
             <div className="mb-12 ">
                <h1 className="text-4xl text-start mx-7 mb-10 font-semibold text-rose-950  rounded-lg md:mx-36  lg:mx-[420px] ">Our Previous Client Reviews</h1>
               
            <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;