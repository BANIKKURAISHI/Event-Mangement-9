import {  useLoaderData, useParams } from "react-router-dom";



const Details = () => {
             const gives =useLoaderData()
             const {id} =useParams()
             const newId=parseInt(id)
            const give =gives.find(give=>give.id===newId)
             const {img,name,details}=give

            

    return (

        <div className="justify-center max-w-8xl  my-72 mx-[650px] ">
              <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img} alt="Shoes"className="w-full h-60" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>{details}</p>
                         </div>
                               
              </div>
           
      </div>   
       
    );
};

export default Details;