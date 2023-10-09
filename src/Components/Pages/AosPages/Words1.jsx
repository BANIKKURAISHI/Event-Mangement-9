

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words1 = () => {
  useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className=' 'data-aos='zoom-in-up'>
           <div className='border-t text-4xl fond-bold text-center rounded-e-lg  p-4 bg-inherit text-opacity-100  text-red-600' >Congratulations! </div>
        <div className='border-b text-4xl fond-bold rounded-md p-4 bg-inherit opacity-100 text-red-600' >We know this dream to get Married is special.</div>
        {/* <div className='border  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-right'> We Make Every Moment Special for you  </div>
        <div className='border   rounded-md p-4 bg-red-600 text-white'  data-aos='fade-left'> This is my div </div>
        <div className='border  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-down'> This is my div </div> */}
        </div>
    );
};

export default Words1;