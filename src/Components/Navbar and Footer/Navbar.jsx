import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../PROVIDER/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
   const [open,setOpen]=useState(false)
   const {user,logOut}=useContext(AuthContext)

   const logoutButton=()=>{
        logOut()
       .then(()=>toast('Logout success full'))
       .catch(error=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorCode ,errorMessage )
      })
   }

    const links=<div className="text-white">

<NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-red-600 text-center rounded-md"}>Home</NavLink>
<NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium  bg-red-600 text-center rounded-md"}>About us</NavLink>
<NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-red-600 text-center rounded-md"}>Contact Us</NavLink>
<NavLink to="/details" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium  bg-red-600 text-center rounded-md"}>Details</NavLink>

<NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-red-600 text-center rounded-md"}>Login</NavLink>
<NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 text-red text-xl  text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-red-600  text-center rounded-md"}>Registration</NavLink>
</div>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar my-5 bg-solid-400 rounded-md">
  <div className="navbar-start">
    <div onClick={()=>setOpen(!open)} className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {open&& 
        <div >
            <div className="flex flex-col my-3 mx-3">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2  my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-red-600 rounded-md"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2  my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-red-600  rounded-md"}>About us</NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2  my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center  text-xl font-medium bg-red-600  rounded-md"}>Contact Us</NavLink>
                <NavLink to="/details" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-red-600  rounded-md"}>Details</NavLink>
                <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 my-3 text-center  rounded-md text-red text-xl font-medium " : "p-2 mr-2  my-3  text-center text-xl font-medium  bg-red-600 rounded-md"}>Login</NavLink>
                <NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-rose-700 p-2 mr-2 my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-red-600  rounded-md"}>Registration</NavLink>
             </div>
        </div>
        }
      </ul>
    </div>
    <a className="normal-case font-bold text-rose-900 text-4xl">Weeding planner Agency</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  {
    user?<div>
        <h1 className="text-white text-xl bg-rose-700 border rounded-md p-3">{user.email}</h1>
        <button onClick={logoutButton}>Logout</button>
    </div>:
    <div>
      <Link to='/in'></Link>
    </div>
  }

</div>
<ToastContainer /> 
        </div>
    );
};

export default Navbar;