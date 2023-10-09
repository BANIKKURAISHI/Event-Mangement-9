// import { useEffect, useState } from "react";

// import {getStore } from "./Storage";
// import { useLoaderData } from "react-router-dom";




// const Details2 = () => {
    
   
//     const loads=useLoaderData()

//     const [values,setValues]=useState([])
  
 
//     useEffect(()=>{
//      const storeId=getStore()
     
//      if(loads.length > 0){
//          const totalStoreCard =[]
//         for (const id of  storeId){
//          const given=loads.find(taken=>taken.id === id)
//          if(given){
//             totalStoreCard.push(given)
//          }
//         }
//         setValues(totalStoreCard)
//         // console.log(donates,donateApplied,DonateId)
//      }
     
//     },[loads])


//     return (
//         <div className="max-w-7xl mx-10 lg:mx-[550px]">
//            {
//             values.map(val=><li className="list-none mb-5" key={val.id}>
//               <div className="card w-80 md:w-[800px] glass">
//               <figure><img src={val.img} className="w-[800px] h-[400px]" alt="car!"/></figure>
//               <div className="card-body">
//               <h2 className="card-title">{val.name}</h2>
//               <p>{val.details}</p>
//               <div className="card-actions justify-end">
//               <button className="btn btn-primary">Go Back Previous Page</button>
//               </div>
//               </div>
//               </div>
          
//             </li>)
//            }
//         </div>
//     );
// };

// export default Details2;