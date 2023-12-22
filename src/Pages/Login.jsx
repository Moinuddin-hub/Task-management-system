import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import GoogleLogin from "./GoogleLogin";
import UseAuth from "../Hook/UseAuth";

const Login = () => {
    const navigate = useNavigate();
    const { signIn } = UseAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const email = event.target.email.value;
        const password = event.target.password.value;


        // validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }


        // creating a new user
        signIn(email, password)
            .then(() => {
                toast.success('User logged in successfully');
                navigate('/dashboard')
            })
            .catch(error => {
                toast.error(error.message)
            })




    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
              
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                           <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;