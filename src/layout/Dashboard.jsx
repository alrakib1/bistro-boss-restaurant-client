import { FaAlignJustify, FaBook, FaCalendar, FaHome, FaList, FaShoppingBag, FaShoppingCart,  FaUsers,  FaWallet } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineReviews } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const [cart] = useCart();

    //  TODO : get isAdmin value from database;

    const [isAdmin] = useAdmin();

  return (
    <div className="flex gap-10">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <p className="text-center font-bold text-2xl pt-3">Bistro Boss</p>
        <p className="text-center font-bold text-2xl pt-1 pb-3">Restaurant</p>
        <ul className="menu p-4 text-lg font-medium">
         {
          isAdmin ?<>
           <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <ImSpoonKnife/>
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
            <FaList />
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/managebookings">
            <FaBook />
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
            <FaUsers />
             All Users
            </NavLink>
          </li>
         
          
          </> : <>
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
          </>
         }
          <div className="divider">or</div>
          {/* shared nav links */}
          <li>
            <NavLink to="/">
              <FaHome/>
             Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
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
