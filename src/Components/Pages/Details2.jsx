import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreItem } from "./Storage";



const Details2 = () => {
    const myData=useLoaderData()

     const [items,setItems]=useState([])
     const [length,setLength]=useState(3)

   useEffect(()=>{
             const storeItem=getStoreItem()
             if(myData.length>0){
                const storeItem2=[]

                for(const store of storeItem){
                    const newStore =myData.find(data=>data.id===store)
                    if(newStore){
                        storeItem2.push(newStore)
                    }
                }
                setItems(storeItem2)
             }

   },[myData])


    return (
        <div>
            <ul>
             {
             items.slice(0,length).map(item=><li key={item.id}>
                         <div className="justify-center  my-72 mx-[650px] ">
                         <div className="card card-compact  w-[600px] h-[400px] bg-base-100 shadow-xl">
                         <figure><img src={item.img} alt="Shoes"className="w-full h-60" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{item.name}</h2>
                         <p>{item.details}</p>
                         </div>
                         </div>
                         </div>
                         </li>)

             }

                <div className={length > items.length  && 'hidden'}>
                <button onClick={()=>setLength(items.length)} className="text-2xl bg-rose-600 mx-[6vh] md:mx-[6vh]  lg:mx-[57vh]  my-20 p-4 text-white font-semibold rounded-xl ">See all</button>
            </div>

            </ul>
            
        </div>
    );
};

export default Details2;