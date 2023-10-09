import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Reviews = () => {

    useEffect(() => {
        AOS.init(
            {
                offset:400,
                duration:2000,
            }
        );
      }, [])
    return (
    <div className="max-w-7xl mx-auto md:mx-60 w-96  lg:mx-96">
            <div className="flex flex-col w-80  md:flex-row" data-aos='fade-right'>
            <div className=" bg-red-500 w-80 mx-10 card card-side lg:w-[500px] h-96 shadow-xl ">
            <figure><img className=" w-[1600px] h-full" src="https://i.ibb.co/r6qmy2Y/wedding-couple-in-french-chateau.jpg" alt="Album"/></figure>
            <p  className="text-md  text-white font-medium mr-1 ml-1 text-justify">Lauren and Cathy worked with us for our wedding and I could not have asked for a better duo to be with us throughout our planning process and wedding day. They are so professional and knowledgable. Anything I had questions on or had concerns about they had already thought of and dealt with.</p>
            </div>

            <div className="bg-red-500 w-80 mx-10 my-4  card card-side lg:w-[500px] h-96 shadow-xl" data-aos='fade-left'>
            <figure><img className=" w-[1600px] h-full" src="https://i.ibb.co/YZRKZfn/images-3.jpg" alt="Album"/></figure>
            <p  className="text-md text-white mr-1 ml-1 text-justify">As a professional mix DJ I am blessed with the opportunity to work with many planners for many different types of events (weddings, corporate, etc). I really enjoyed working with Lauren on the Just About Love planning team! She was very precise and detail oriented - comes to wedding planing! </p>
            </div>

    </div>


           
           
            
     <div className="flex  flex-col w-80  md:flex-row  my-5">
            <div className="mx-10 bg-red-500 w-80 card card-side lg:w-[500px] h-96 shadow-xl " data-aos='fade-left'>
            <p  className="text-md text-white mr-1 ml-1 text-justify">I cannot say enough good things about Just About Love!!They are super thorough and worked so hard to make sure our day was perfect and that we had the best time. They checked in with us each month leading up to our wedding and even provided recommendations for a few vendors we still needed to book.</p>
            <figure><img className=" w-[1600px] h-full" src="https://i.ibb.co/SfLm4Sv/photo-1591604466107-ec97de577aff.jpg"/></figure>
             </div>


            <div className="bg-red-500 w-80  mx-10 my-3 card card-side lg:w-[500px] h-96 shadow-xl"  data-aos='fade-right'>
            <p className="text-md text-white mr-1 ml-1 text-justify">I absolutely recommend booking Cathy and Lauren if you want to have the best wedding ever and stress free planning! Their monthly check ins saved us as we didn’t have any idea how many details truly go into a wedding. They made sure all of the vendors were on the same page and really brought everything together.! </p>
            <figure><img className=" w-[1600px] h-full"  src="https://i.ibb.co/Hd4P4Zp/photo-1611106211090-8f3c79eb8552.jpg"/></figure>
           </div>

     </div>
        </div>
    );
}

export default Reviews;