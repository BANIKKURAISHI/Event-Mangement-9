import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
                   <div className="hero min-h-screen bg-base-200">
                   <div className="hero-content flex-col">
                   <div className="card ">
                   <h1 className="text-center  text-4xl text-blue-600 my-4">Login Now</h1>
                   <form className="w-96" >

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
                   <label className="label">
                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                   </label>
                   </div>
                   <div className="form-control mt-6">
                   <button className="btn btn-primary">Login</button>
                   </div>

                   <div className="form-control mt-6">
                   <button className="btn btn-primary">Login with Google</button>
                   </div>
                   </form>
                   <div><p className="text-2xl my-3">New Here ?Please <Link className="text-blue-700 mx-2" to="/reg">Register</Link></p></div>
                   </div>
                   </div>
                   </div>
                  </div>
    );
};

export default Login;