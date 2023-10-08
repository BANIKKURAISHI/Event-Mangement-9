
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {name,short_description,img,id}=service
    return (
        <div > 
          
                         <div className="card card-compact  w-96 bg-base-100 shadow-xl">
                         <figure><img src={img} alt="Shoes"className="w-96 h-52" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>{short_description}</p>
                         </div>
                         <div className="card-actions justify-center mb-4">
                        <Link to={`/details/${id}`} ><button  className="btn  w-3/4  bg-red-600 ">Details</button></Link>    
                       </div>
            
        </div>
        </div>
    );
};

Service.propTypes={
    service:PropTypes.object
}

export default Service;