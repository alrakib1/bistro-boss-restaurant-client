import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const navOptions = (
    <>
      <li ><NavLink to='/'>Home</NavLink></li>
      <li ><NavLink to='/menu'>Menu</NavLink></li>
      <li ><NavLink to='/order/salad'>Order Food</NavLink></li>
      {user ? <><button onClick={()=>logOut()} className="btn-ghost">Logout</button></>  :<li ><NavLink to='/login'>Login</NavLink></li>}
      
    </>
  );
  return (
    <div className="navbar  max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-30 w-20 space-y-5 hover:cursor-pointer text-center"
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
