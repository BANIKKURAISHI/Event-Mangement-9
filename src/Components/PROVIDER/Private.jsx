
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate,  } from 'react-router-dom';

const Private = ({children}) => {
    const{user}=useContext(AuthContext)
  // const location =useLocation()
    // if(loading){
    //     return (<span className="loading loading-dots loading-xs"></span>
    //     )
    // }
    //console.log(location)
  //  if(loading){return <span className="loading loading-spinner loading-lg"></span>}
    if(user){return children}
    return (
        <Navigate to="/in"></Navigate>
    );
}


Private.propTypes={
    children:PropTypes.node
}

export default Private;