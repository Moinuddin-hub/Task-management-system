import { NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";


const Dashboard = () => {
    const {user}=UseAuth();
    return (
        <div className="flex">
        <div className="w-64 min-h-screen bg-orange-600">
            <ul className="menu">
              
                    <div className="flex items-center">
                        <div className="">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-20">
                                <div className="w-20 rounded-full  ">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-700 rounded-box w-60">
                                <li>
                                    <button className="btn btn-sm bg-yellow-600 text-sm font-bold">{user.displayName}</button>

                                </li>
                           
                  
                            </ul>
                        </div>
                        </div>
                <li> <NavLink to="/dashboard/newTask">create new tasks</NavLink></li>
                <li> <NavLink to="/dashboard/allTask">see previous tasks</NavLink></li>
                <li> <NavLink to="/dashboard/users">Manage Users</NavLink></li>
               
        <div className="divider">OR</div>
        <li> <NavLink to="/home">Home page</NavLink></li>
        </ul>
        </div>
       
        <div className="flex-1">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;