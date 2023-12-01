import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../public/home/Home";
import Menu from "../public/shop/Menu";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<Menu/>
        }
      ]
    },
  ]);

  export default router;