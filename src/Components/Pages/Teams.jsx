import { useEffect, useState,  } from "react";
import Team from "./Team";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Teams = () => {
   
    const [val,setVal]=useState([])
 useEffect(()=>{
    fetch('/Team.Json')
    .then(res=>res.json())
    .then(data=>setVal(data))
    AOS.init(
        {
            offset:400,
            duration:2000,
        }
    );
    

    
 },[])


    
    return (
        <div >
            

            <div className="grid grid-cols-1  mx-7  md:grid-cols-2 gap-20 lg:grid-cols-4 " data-aos='fade-up'>
              
                {
                    val.map(team=><Team key={team.id} team={team}></Team>)
                }

          </div>
        </div>
    );
};

export default Teams;