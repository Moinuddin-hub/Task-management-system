
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";
import Banner from "../Pages/Banner";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;