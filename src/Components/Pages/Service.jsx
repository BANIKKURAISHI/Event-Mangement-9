import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Service = ({service}) => {
    const {name,short_description,img}=service
    return (
        <div>
            <Link>
                         <div className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={img} alt="Shoes"className="w-96 h-52" /></figure>
                         <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>{short_description}</p>
                         </div>
                         </div>
             </Link> 
        </div>
    );
};

Service.propTypes={
    service:PropTypes.object
}

export default Service;