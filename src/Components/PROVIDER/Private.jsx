
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user}=useContext(AuthContext)
   

     if(user){
          return children
    }
    return(
        <div>
            <Navigate to='/in'></Navigate>
        </div>
    )
}


Private.propTypes={
    children:PropTypes.node
}

export default Private;