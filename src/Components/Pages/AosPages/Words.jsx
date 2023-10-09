import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words = () => {
  useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos='fade-right'>
           <div className='border-t text-4xl fond-bold text-center rounded-e-lg  p-4 bg-inherit text-opacity-100  text-white' data-aos='fade-up'> Welcome to our Home page</div>
        <div className='border-b text-4xl fond-bold rounded-md p-4 bg-inherit  text-white' data-aos='fade-down'> Make a memorable day in your life</div>
        {/* <div className='border  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-right'> We Make Every Moment Special for you  </div>
        <div className='border   rounded-md p-4 bg-red-600 text-white'  data-aos='fade-left'> This is my div </div>
        <div className='border  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-down'> This is my div </div> */}
        </div>
    );
};

export default Words;