import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Root from "../Layout/Root";
import Register from "../Pages/Register";
import Dashboard from "../Dashboard/Dashboard";
import NewTask from "../Dashboard/NewTask/NewTask";
import AllTask from "../Dashboard/AllTask/AllTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      ,{
        path:'/register',
        element:<Register></Register>
      }
    ],
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
     children:[
    {
     path:'newTask',
     element:<NewTask></NewTask>   
    },
    {
        path:'allTask',
        element:<AllTask></AllTask>,
        loader:()=> fetch('http://localhost:5000/users'),
    }
  ]
  },

]);
export default router;
