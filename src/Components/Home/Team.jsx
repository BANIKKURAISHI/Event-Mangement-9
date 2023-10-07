import { useLoaderData } from "react-router-dom";


const Team = () => {
   const teams=useLoaderData()
   console.log(teams)
    return (
        <div>
            <h1 className="text-6xl">This is This is our team {teams}</h1>
        </div>
    );
};

export default Team;
