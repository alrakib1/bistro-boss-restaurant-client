import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/DashBoard/Cart/Cart";


import PrivateRoute from "./PrivateRoute";
import Allusers from "../pages/DashBoard/Cart/Allusers/Allusers";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:
      [
        {
            path: '/',
            element: <Home></Home> ,
        },
        {
            path: '/menu',
            element: <Menu></Menu> ,
        },
        {
            path: '/order/:category',
            element: <Order></Order> ,
        },
        {
            path: '/login',
            element: <Login></Login> ,
        },
        {
            path: '/signup',
            element: <SignUp></SignUp> ,
        }
      ]
    },{
      path: 'dashboard',
      element: <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        // admin routes


        {
          path: 'users',
          element: <Allusers></Allusers>
        }
      ]
    }
  ]);

  export default router;