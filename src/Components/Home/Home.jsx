import { useLoaderData } from "react-router-dom";
import Footer from "../Navbar and Footer/Footer";
import Service from "../Pages/Service";
import Background from "../Pages/Background";
import Reviews from "../Pages/Reviews";
import Single from "../Pages/Single";



const Home = () => {
    const data =useLoaderData()
   
 
    return (
        <div className="max-w-8xl mx-auto">
             <div className="static">
             <Background></Background>
             <div className="-my-72">
             <Single></Single>
             </div>
            
             </div> 
             {/* <div className="-my-72"> */}
            
             {/* </div> */}
           
           <div className="my-80">
            <h1 className="text-5xl mt-16 text-start font-semibold mx-32  text-rose-500">Our Agency Services</h1>
             <div className="max-w-6xl mx-auto mt-10 mb-10  grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(service=><Service key={service.id} service={service}></Service>)
                }
             </div>
             </div>
             <div>
                <h1 className="text-5xl text-rose-500 text-start mb-6 mx-32">Our Previous Client Reviews</h1>
            <Reviews></Reviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;