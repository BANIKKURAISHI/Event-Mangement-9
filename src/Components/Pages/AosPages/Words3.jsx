
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Words3 = () => {
  useEffect(() => {
        AOS.init(
            {
                offset:400,
                duration:1000,
            }
        );
      }, [])
    return (
        <div data-aos='fade-left'>
           <div className='md:border-t text-4xl fond-extrabold text-center rounded-e-lg  p-4 bg-inherit text-opacity-100 text-black' >For Your Special Wedding</div>
           <div className='md:border-b text-4xl text-center fond-extrabold rounded-md p-4 bg-inherit  text-black  ' > If You Are Dreaming About Getting Married In Natural Environment... You Are In The Right Place!</div>
      
        </div>
    );
};

export default Words3;