import { useContext} from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../PROVIDER/AuthProvider";
import { FcGoogle } from 'react-icons/fc'
const Login = () => {
     const {googleButton,singInButton}= useContext(AuthContext)

     const img ={
      backgroundImage:'url("https://i.ibb.co/DRHN5bz/HD-wallpaper-pink-tulips-loral-background.jpg")',
        opacity:1,
        height:600,
        weight:300,
        borderRadius:15,
     }
    
//-----------------------------------Direct sing in with  Google-----------------------
  const googleHandleButton=()=>{
             googleButton()
            .then(result=>{
                const user=result.user
                console.log(user)
                toast("Google Login is success full ")
            })
            .catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorCode ,errorMessage )
              })
  }
//------------------------------------sing in email and password --------------------------
const singInButtonEmailAndPassword=(e)=>{
                e.preventDefault()
                const form=new FormData(e.currentTarget)
                const email=form.get('email')
                const password =form.get('password')

               singInButton(email,password)
               .then(result=>{
                const user =result.user 
                toast("Login is success full ",user)
               })
               .catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorCode ,errorMessage )
                Navigate(location?.state?location.state:'/')
               })
}

    return (
        <div  >
           
                   <div  className="hero min-h-screen bg-base-200 ">
                   <div  style={img} className="hero-content flex-col ">
                   <div className="card ">
                   <h1 className="text-center  text-4xl  my-4 text-white font-bold">Login Now</h1>
                   <form onSubmit={singInButtonEmailAndPassword}  className="w-80 md:w-96 lg:w-96" >

                      <div className="form-control">
                      <label className="label">
                      <span className="label-text text-blue-800 font-bold" >Email</span>
                      </label>
                      <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                      </div>

                   <div className="form-control">
                   <label className="label">
                   <span className="label-text text-blue-800 font-bold">Password</span>
                   </label>
                   <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                   <label className="label">
                   <a href="#" className="label-text-alt link link-hover text-blue-800 font-bold">Forgot password?</a>
                   </label>
                   </div>
                   <div className="form-control mt-6">
                   <button className="btn btn-primary text-white">Login</button>
                   </div>

                   <div className="form-control mt-6">
                   <button onClick={googleHandleButton} className="btn btn-primary text-white "> <span className="text-2xl"><FcGoogle></FcGoogle></span> Login with Google</button>
                   </div>
                   </form>
                   <div><p className="text-2xl my-3 text-white">New Here ?Please <Link className="text-blue-900 underline mx-2 font-bold" to="/reg">Register</Link></p></div>
                   </div>
                   </div>
                   </div>
                   <ToastContainer /> 
                  </div>
    );
};

export default Login;