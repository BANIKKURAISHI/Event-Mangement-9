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
            

            <div className="flex md:flex-row " data-aos='fade-up'>
              
                {
                    val.map(team=><Team key={team.id} team={team}></Team>)
                }

          </div>
        </div>
    );
};

export default Teams;