import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words2 = () => {
  useEffect(() => {
        AOS.init(
          {
            offset:400,
            duration:1000,
        }
        );
      }, [])
    return (
        <div className=' 'data-aos='fade-right'>
           <div className='md:border-t text-5xl fond-bold text-center rounded-e-lg opacity-100  p-4 bg-inherit text-opacity-100  text-emerald-900' >Make Your Weeding Beautiful ! </div>
        <div className='md:border-b text-4xl fond-bold rounded-md p-4 bg-inherit opacity-100 text-emerald-900 '  > All you’ll need to do is sit back, relax and enjoy!</div>
      
        </div>
    );
};

export default Words2;