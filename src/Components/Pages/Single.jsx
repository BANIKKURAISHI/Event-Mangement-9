
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Single = () => {

    useEffect(() => {
        AOS.init(
            {
                offset:400,
                duration:2000,
            }
        );
      }, [])
   
    return (
        <div className='max-w-7xl mx-[310px]'>
            <div className='card w-56 mx-2 flex flex-row '>
              <img className='w-56 h-60' src="https://i.ibb.co/PmjVsxW/pexels-photo-169190.jpg" data-aos='fade-right' alt="log" />
              <img  className='w-60 h-60' src="https://i.ibb.co/NtRvs9h/Anais-Events-6.jpg" data-aos='fade-left' alt="log" />
              <img className='w-56 h-60'  src="https://i.ibb.co/BsG0rTP/istockphoto-1186214696-612x612.jpg"  data-aos='fade-right' alt="log"/>
              <img className='w-60 h-60'  src="https://i.ibb.co/94dsch8/goods-cakes-1.jpg" data-aos='fade-left' alt="log"/>
              <img className='w-56 h-60' src="https://i.ibb.co/RQ0GP7Y/pexels-photo-1061744.jpg"   data-aos='fade-right' alt="log"/>
              <img className='w-60 h-60' src=" https://i.ibb.co/zQwbTnh/Havertown-PA-catering.jpg"  data-aos='fade-down'  alt="log"/>
             
             
            </div>
        </div>
    );
};

export default Single;