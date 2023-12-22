import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";


const Navbar = () => {
    const{logOut,user}=UseAuth();
    console.log(user);
   const Menus=<>
          <li className="px-4"> <NavLink to='/home'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Home</NavLink></li>
         <li className="px-4"> <NavLink to='/viewTask'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                ViewTask</NavLink></li>
          <li className="px-4"> <NavLink to='/'className={({isActive})=>
                isActive? 'btn btn-primary btn-sm' :'btn btn-ghost btn-sm'}>
                Manage</NavLink></li>
       
      
    </>
    return (
        <>
       <div className="navbar  bg-gray-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {Menus}
      </ul>
    </div>
    <img src="https://i.ibb.co/JQG8R48/task.png" alt="" className="w-20 h-20" />

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
     {Menus}
    </ul>
  </div>
  <div className="navbar-end ">
  <div className="">
        {
                        user?.email ?    <div className="flex items-center">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                           
                  
                            </ul>
                        </div>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
  </div>
  </div>
</div>
        </>
      
    );
};

export default Navbar;