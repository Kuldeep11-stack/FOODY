import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../public/home/Home";
import Menu from "../public/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../public/dashboard/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
     element: <Main/> ,
      
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
        },
        {
          path:'/update-profile',
          element: <UpdateProfile/>
        }
       
      ]
    },
    {
      path:"/signup",
      element: <Signup/>
    }
  ]);

  export default router;