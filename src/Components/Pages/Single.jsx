import PropTypes from 'prop-types';

const Single = () => {
   
    return (
        <div className='max-w-7xl mx-[310px]'>
            <div className='card w-56 mx-2 flex flex-row '>
              <img className='w-56 h-60' src="https://i.ibb.co/PmjVsxW/pexels-photo-169190.jpg" alt="log" />
             
              <img  className='w-60 h-60' src="https://i.ibb.co/NtRvs9h/Anais-Events-6.jpg" alt="log" />
              <img className='w-56 h-60'  src="https://i.ibb.co/BsG0rTP/istockphoto-1186214696-612x612.jpg" alt="log"/>
              <img className='w-60 h-60'  src="https://i.ibb.co/94dsch8/goods-cakes-1.jpg" alt="log"/>
              <img className='w-56 h-60' src="https://i.ibb.co/RQ0GP7Y/pexels-photo-1061744.jpg"   alt="log"/>
              <img className='w-60 h-60' src=" https://i.ibb.co/zQwbTnh/Havertown-PA-catering.jpg"   alt="log"/>
             
             
            </div>
        </div>
    );
};
Single.propTypes={
   team:PropTypes.object
}
export default Single;