
import { Link, useNavigate } from 'react-router-dom';

import UseAuth from '../Hook/UseAuth';
import toast from 'react-hot-toast';
import GoogleLogin from './GoogleLogin';
const Register = () => {
    const { createUser, handleUpdateProfile } = UseAuth();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;

        // validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }
        // creating a new user
        createUser(email, password)
            .then(()=> {
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('User created successfully');
                        navigate('/login')
                    })
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
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                           <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;

