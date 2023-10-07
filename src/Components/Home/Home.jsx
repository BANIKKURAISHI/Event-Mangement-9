import { useLoaderData } from "react-router-dom";
import Footer from "../Navbar and Footer/Footer";
import Service from "../Pages/Service";
import Background from "../Pages/Background";


const Home = () => {
    const data =useLoaderData()

 
    return (
        <div>
             <div className="static">
             <Background></Background>
             </div> 
            
           
            <h1 className="text-5xl mt-16 text-center font-semibold text-green-500 ">Our Services</h1>
             <div className="max-w-6xl mx-auto mt-10 mb-20  grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(service=><Service key={service.id} service={service}></Service>)
                }
             </div>
             <div>
           
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;