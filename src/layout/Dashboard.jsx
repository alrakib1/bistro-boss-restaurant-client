import { FaAlignJustify, FaCalendar, FaHome, FaShoppingBag, FaShoppingCart,  FaWallet } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";

import { IoMdMail } from "react-icons/io";
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart();
  return (
    <div className="flex gap-10">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu p-4 text-lg font-medium">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <MdOutlineReviews/>
             Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaRegCalendarCheck/>
             My Bookings
            </NavLink>
          </li>
          <div className="divider">or</div>
          <li>
            <NavLink to="/">
              <FaHome/>
             Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaAlignJustify></FaAlignJustify>
            Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
            <FaShoppingBag/>
             Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
            <IoMdMail />
             Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 mt-10 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
