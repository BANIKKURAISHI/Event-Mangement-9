import Words from "./AosPages/Words";
import Words1 from "./AosPages/Words1";
import Words3 from "./AosPages/Words3";
import Words2 from "./AosPages/Worsd2";



const Banner = () => {
    return (
        // <div className="max-w-7xl mx-auto">
        //     <img className="w-[1300px] h-[800px] opacity-70" src="" alt="" />
         
      

<div className="carousel mx-1 w-full md:w-[1070px]  lg:w-[1270px]  ">
<div id="slide1" className="carousel-item relative w-7xl  ">
  <img src="https://i.ibb.co/LxRQbc1/zoom-autumn-wedding-background-tmb.jpg" className="w-[420px]  md:w-[1070px]     lg:w-[1270px] h-[600px] " />
   
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   <a href="#slide4" className="btn btn-circle">❮</a> 
   <Words></Words>
    <a href="#slide2" className="btn btn-circle">❯</a>
   </div>
  
</div> 
<div id="slide2" className="carousel-item relative w-7xl">
  <img src="https://i.ibb.co/T1x0PsX/natural-wedding-photographer-yorkshire-pp-w1320-h880.jpg" className="w-[420px]  md:w-[1070px]  lg:w-[1270px]  h-[600px]" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
    <a href="#slide1" className="btn btn-circle">❮</a> 
    <Words1></Words1>
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide3" className="carousel-item relative w-7xl">
  <img src="https://i.ibb.co/sbHX972/075-photography-documentary-ireland-wedding.jpg" className="w-[420px]  md:w-[1070px]  lg:w-[1270px]  h-[600px]" />
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide2" className="btn btn-circle">❮</a> 
    <Words2></Words2>
    <a href="#slide4" className="btn btn-circle">❯</a>
  </div>
</div> 
<div id="slide4" className="carousel-item relative w-7xl">
  <img src="https://i.ibb.co/74YQVgY/The-Best-Wedding-Signs-for-Kids-one-fab-day.webp" className="w-[420px]  md:w-[1070px]  lg:w-[1270px]  h-[600px]" />
  
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  
    <a href="#slide3" className="btn btn-circle">❮</a> 
    <Words3></Words3>
    <a href="#slide1" className="btn btn-circle">❯</a>
   
  </div>
</div>
</div>


        
    );
};

export default Banner;