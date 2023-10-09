import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../PROVIDER/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";



const Reg = () => {
        const {registrationButton}=useContext(AuthContext)

       const newRegistrationButton=(e) =>{
               e.preventDefault()
               const form=new FormData(e.currentTarget)
               const email=form.get('email')
               const name=form.get('name')
               const password =form.get('password')
              const photo =form.get('photo')


             console.log(photo ,email,password,name)
             if(password.length <6){
             toast('You must should given valid password' )
             return
               }
             else if (!/[A-Z0]/.test(password)){
             toast('You must should given valid password' )
             return 
              }
             else if (!/(?=.*[!@#$%^&*()_+])/.test(password)){
              toast('You must should given valid password' )
              return 
              }



             registrationButton(email,password)
             .then(result=>{
              toast('Your registration is success full',result)

              updateProfile(result.user, {
                displayName: name, photoURL: photo,
              }).then(() => {
                toast('Profile update ')
              })
             })
            
              .catch(error=>{
              const errorCode = error.code;
              const errorMessage = error.message;
              toast(errorCode ,errorMessage )
            })

              
       }

    return (
        <div>
            <ToastContainer /> 
             <div className="hero min-h-screen bg-base-200">
             <div className="hero-content flex-col">
             <div className="card ">
              <h1 className="text-center  text-4xl text-blue-600 my-4">Registration Now</h1>
             <form className="w-80 md:w-96 lg:w-96" onSubmit={newRegistrationButton} >
             <div className="form-control">
             <label className="label">
             <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
             </div>
               
             <div className="form-control">
                  <label className="label">
                  <span className="label-text">Photo Url</span>
                  </label>
                  <input type="url" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                  </div>

                  <div className="form-control">
                  <label className="label">
                  <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                  </div>

               <div className="form-control">
               <label className="label">
               <span className="label-text">Password</span>
               </label>
               <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                   
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    
               </form>
               <div><p className="text-2xl my-3">Already Have an account ?Please <Link className="text-blue-700 mx-2" to="/in">Login</Link></p></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Reg;