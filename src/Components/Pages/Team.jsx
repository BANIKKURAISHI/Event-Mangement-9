import PropTypes from 'prop-types';

const Team = ({team}) => {

    const {photo,name,title}=team
    return (
        <div>
             
            <div className="card w-80 h-80 rounded-full bg-base-300 shadow-2xl">
            <figure><img src={photo} className='w-52 h-52 rounded-full ' alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className=" text-center">{name}</h2>
            <p className='text-center'>{title}</p>
            
            </div>
            </div>
    </div>
    );
};


Team.propTypes={
    team:PropTypes.object
}
export default Team;