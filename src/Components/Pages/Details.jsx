import {  useLoaderData, useParams } from "react-router-dom";
//import {saveStore } from "./Storage";




const Details = () => {
             const gives =useLoaderData()
             const {id} =useParams()
             const newId=parseInt(id)
             const give =gives.find(give=>give.id===newId)
             const {img,name,details}=give
            //  const buttonHandler=()=>{
            //  saveStore(newId)
              
            // }
        

    return (

           <div className="justify-center max-w-8xl  my-72 mx-[650px] ">

          
         <div className="card  w-[400px] bg-base-100 shadow-xl image-full">
                         <figure><img src={img} alt="Shoes" /></figure>
                         <div className="card-body my-20">
                         <h2 className="card-title text-3xl my-10">{name}</h2>
                         <div className="flex flex-row">
                         <h1>{details}</h1>
                         
                         </div>
                         </div>
                         </div>



  </div>





      
       
    );
};

export default Details;




//         <div className="card card-compact  bg-base-100 shadow-xl">
      //                    <figure><img src={img} alt="Shoes"className="w-full h-60" /></figure>
      //                    <div className="card-body">
      //                    <h2 className="card-title">{name}</h2>
      //                    <p>{details}</p>
      //                    <Link to="/details">  <button onClick={buttonHandler}>See More Details .....</button></Link>   
      //                    </div>
                               
      //         </div> */}
           
      // </div>   