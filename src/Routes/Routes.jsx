import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Root from "../Layout/Root";
import Register from "../Pages/Register";
import Dashboard from "../Dashboard/Dashboard";
import NewTask from "../Dashboard/NewTask/NewTask";
import AllTask from "../Dashboard/AllTask/AllTask";
import Todo from "../Dashboard/Todo/Todo";
import ViewTask from "../Pages/ViewTask";

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
      },
      {
        path:'viewTask',
        element:<ViewTask></ViewTask>,
        loader:()=> fetch('https://task-management-server-khaki-five.vercel.app/users'),
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
        loader:()=> fetch('https://task-management-server-khaki-five.vercel.app/users'),
    },
    {
     path:'todo',
     element:<Todo></Todo>,
     loader:()=> fetch('https://task-management-server-khaki-five.vercel.app/users'),
    }
  ]
  },

]);
export default router;
