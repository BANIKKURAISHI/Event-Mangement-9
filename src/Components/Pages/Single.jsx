import PropTypes from 'prop-types';

const Single = () => {
   
    return (
        <div>
            <div className='card w-72 mx-2 flex flex-row '>
              <img className='w-72 h-72' src="https://i.ibb.co/PmjVsxW/pexels-photo-169190.jpg" alt="log" />
              <img className='w-72 h-72 ' src="https://i.ibb.co/b7w0tt7/Bengali-Wedding.jpg"  alt="log" />
              <img  className='w-72 h-72' src="https://i.ibb.co/NtRvs9h/Anais-Events-6.jpg" alt="log" />
              <img className='w-72 h-72'  src="https://i.ibb.co/94dsch8/goods-cakes-1.jpg" alt="log"/>
              <img className='w-72 h-72'src="https://i.ibb.co/RQ0GP7Y/pexels-photo-1061744.jpg"   alt="log"/>
             
              <img className='w-72 h-72'  src="https://i.ibb.co/BsG0rTP/istockphoto-1186214696-612x612.jpg" alt="log"/>
              <img className='w-72 h-72'  src="https://i.ibb.co/zQwbTnh/Havertown-PA-catering.jpg " alt="" />
            </div>
        </div>
    );
};
Single.propTypes={
   team:PropTypes.object
}
export default Single;