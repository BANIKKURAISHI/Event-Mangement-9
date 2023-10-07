

const Background = () => {

    const Img={
        backgroundImage: 'url("https://i.ibb.co/bX9ydXH/011b72f6f07fff87c7d6c4f2390c0534.jpg")',
        opacity:100,
        height:1200
       }
    return (
        <div>
            
           <div style={Img} className="bg-no-repeat static  bg-cover opacity-40 ">
           </div>
    
        </div>
    );
};

export default Background;







