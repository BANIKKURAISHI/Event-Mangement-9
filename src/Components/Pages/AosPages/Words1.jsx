

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words1 = () => {
  useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className=' 'data-aos='fade-left'>
           <div className='md:border-t text-4xl fond-bold text-center rounded-e-lg  p-4 bg-inherit text-opacity-100  text-red-600' >Congratulations! </div>
        <div className='md:border-b text-4xl fond-bold rounded-md p-4 bg-inherit opacity-100 text-red-600' >We know this dream to get Married is special.</div>

        </div>
    );
};

export default Words1;