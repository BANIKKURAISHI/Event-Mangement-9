import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words = () => {
  useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='grid grid-cols-2 justify-between '>
        <div className='border w-96 rounded-md p-4 bg-red-600 text-white' data-aos='fade-up'> This is my div </div>
        <div className='border w-96  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-right'> This is my div </div>
        <div className='border w-96   rounded-md p-4 bg-red-600 text-white'  data-aos='fade-left'> This is my div </div>
        <div className='border w-96  rounded-md p-4 bg-red-600 text-white'  data-aos='fade-down'> This is my div </div>
        </div>
    );
};

export default Words;