import { useEffect, useState,  } from "react";
import Team from "./Team";



const Teams = () => {
   
    const [val,setVal]=useState([])
 useEffect(()=>{
    fetch('/Team.Json')
    .then(res=>res.json())
    .then(data=>setVal(data))
    
 })


    
    return (
        <div >
            

            <div className="flex md:flex-row ">
              
                {
                    val.map(team=><Team key={team.id} team={team}></Team>)
                }

          </div>
        </div>
    );
};

export default Teams;