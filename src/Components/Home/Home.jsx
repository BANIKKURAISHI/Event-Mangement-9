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

            
            
          <div className="my-40">
          <h1 className="text-4xl text-start mx-[320px] mb-5 font-semibold text-rose-950  rounded-lg ">Our Agency Services</h1>
             <div className="max-w-7xl mx-auto  grid gap-10 md:grid-cols-2 lg:grid-cols-3"  data-aos='fade-down'>
                {
                    data.map(service=><Service key={service.id} service={service}></Service>)
                }
             </div>
             </div >
             <div>
             <h1 className="text-4xl text-start mx-[350px]  font-semibold text-rose-950  rounded-lg   ">Our team Members</h1>
             </div>

             <div className=" max-w-7xl mx-auto mt-10 mb-36">
             <Teams></Teams>
             </div>
           
             <div className="mb-12 ">
                <h1 className="text-4xl text-start mx-[350px] mb-10 font-semibold text-rose-950  rounded-lg   ">Our Previous Client Reviews</h1>
            <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;