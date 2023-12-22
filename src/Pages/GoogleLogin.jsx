
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const GoogleLogin = () => {

    const navigate = useNavigate()
    const { googleLogin } = useContext(AuthContext)


    const handleSocialLogin = (media) => {
        media()
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
                   <div className="divider">continue with</div>
              <div className="flex justify-around">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-neutral btn-sm">Google</button>
                

            </div>
        </>
    );
};

export default GoogleLogin;