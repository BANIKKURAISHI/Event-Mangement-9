import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words = () => {
  useEffect(() => {
        AOS.init(
          {
            offset:400,
            duration:1000,
        }
        );
      }, [])
    return (
        <div data-aos='fade-right'>
           <div className=' md:border-t text-4xl fond-bold text-center rounded-e-lg  p-4 bg-inherit text-opacity-100  text-white' data-aos='fade-up'> Welcome to our WebSite</div>
        <div className=' md:border-b text-4xl fond-bold rounded-md p-4 bg-inherit  text-white' data-aos='fade-down'> Make a memorable day in your life</div>
      
        </div>
    );
};

export default Words;