import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words2 = () => {
  useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className=' 'data-aos='fade-down'>
           <div className='border-t text-5xl fond-bold text-center rounded-e-lg opacity-100  p-4 bg-inherit text-opacity-100  text-emerald-900' >Make Your Weeding Beautiful ! </div>
        <div className='border-b text-4xl fond-bold rounded-md p-4 bg-inherit opacity-100 text-emerald-900 '  > All you’ll need to do is sit back, relax and enjoy!</div>
        {/* <div className='border  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-right'> We Make Every Moment Special for you  </div>
        <div className='border   rounded-md p-4 bg-red-600 text-white'  data-aos='fade-left'> This is my div </div>
        <div className='border  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-down'> This is my div </div> */}
        </div>
    );
};

export default Words2;