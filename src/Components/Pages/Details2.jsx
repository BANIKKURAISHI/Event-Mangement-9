import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreItem } from "./Storage";



const Details2 = () => {
    const loads=useLoaderData() 
     console.log(loads)     
    const [values,setValues]=useState([])
   
//  useEffect(()=>{
//     const newGetItem=getStoreItem()
//     if (loads.length > 0){
//         const saveData=[]
//         for(const id of newGetItem){
//             const finding=loads.find(load=>load.id===id)
//             if(finding){
//                 saveData.push(finding) 
//             }
//     }
//     setValues(saveData)
 
//  }},[loads])
useEffect(()=>{
    const DonateId=getStoreItem()
    
    if(loads.length > 0){
        const donateApplied =[]
       for (const id of DonateId){
        const applied=loads(applied => applied.id === id)
        if(applied){
            donateApplied.push(applied)
        }
       }
       setValues(donateApplied)
        console.log(donateApplied)
    }
    
   },[loads])


    return (
        <div>
           {
            values.map(value=><li key={value.id}>
            <h1>{value.name}</h1>

            </li>)
           }
        </div>
    );
};

export default Details2;