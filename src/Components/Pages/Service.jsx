
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineDollar} from "react-icons/ai"
const Service = ({service}) => {
    const {name,short_description,img,id,price}=service
    return (
        <div > 
          
                         <div className="card card-compact w-80 mx-10 bg-base-300 shadow-xl md:mx-20 mr-10 lg:w-96 ">
                         <figure><img src={img} alt="Shoes"className="w-96 h-52" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>{short_description}</p>
                         <p className='flex flex-row my-2 font-medium text-xl'> Price :{price} <span className='ml-1 my-1'><AiOutlineDollar></AiOutlineDollar></span></p>
                         </div>
                         <div className="card-actions justify-center mb-4">
                        <Link to={`/${id}`} ><button  className="btn  w-60 bg-red-300 ">Details</button></Link>    
                       </div>
            
        </div>
        </div>
    );
};

Service.propTypes={
    service:PropTypes.object
}

export default Service;