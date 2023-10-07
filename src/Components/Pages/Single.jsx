import PropTypes from 'prop-types';

const Single = ({team}) => {
    const {photo,name} =team
    return (
        <div>
             <div className="avatar">
             <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
             <img src={photo} />
             </div>
             </div>
             <h1>{name}</h1>
        </div>
    );
};
Single.propTypes={
   team:PropTypes.object
}
export default Single;