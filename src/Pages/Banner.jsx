import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen w-1/2 lg:w-full mt-9" style={{backgroundImage: 'url(https://i.ibb.co/S3FcLFW/Best-Task-Management-Software-Platforms.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Task Management</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Link to='/login'><button className="btn btn-primary">Let’s Explore</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
