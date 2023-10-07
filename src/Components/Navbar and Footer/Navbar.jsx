import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
   const [open,setOpen]=useState(false)
    const links=<div>

<NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-purple-400 text-center rounded-md"}>Home</NavLink>
<NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium  bg-purple-400 text-center rounded-md"}>About us</NavLink>
<NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-purple-400 text-center rounded-md"}>Contact</NavLink>
<NavLink to="/details" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium  bg-purple-400 text-center rounded-md"}>Details</NavLink>
<NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 text-red text-xl text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-purple-400 text-center rounded-md"}>Login</NavLink>
<NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 text-red text-xl  text-center rounded-md font-medium" : "p-2 mr-2 text-xl font-medium bg-purple-400  text-center rounded-md"}>Registration</NavLink>
</div>
    return (
        <div>
            <div className="navbar ">
  <div className="navbar-start">
    <div onClick={()=>setOpen(!open)} className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {open&& 
        <div >
            <div className="flex flex-col my-3 mx-3">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2  my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-purple-400 rounded-md"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2  my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-purple-400  rounded-md"}>About us</NavLink>
                <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2  my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center  text-xl font-medium bg-purple-400  rounded-md"}>Contact</NavLink>
                <NavLink to="/details" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-purple-400  rounded-md"}>Details</NavLink>
                <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 my-3 text-center  rounded-md text-red text-xl font-medium " : "p-2 mr-2  my-3  text-center text-xl font-medium  bg-purple-400 rounded-md"}>Login</NavLink>
                <NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-yellow-300 p-2 mr-2 my-3 text-center rounded-md text-red text-xl font-medium " : "p-2 mr-2 my-3 text-center text-xl font-medium  bg-purple-400  rounded-md"}>Registration</NavLink>
             </div>
        </div>
        }
      </ul>
    </div>
    <a className="normal-case font-semibold text-red-400 text-2xl">Marriage Entrepreneur</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;