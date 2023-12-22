import { useLoaderData } from "react-router-dom";

const AllTask = () => {
   const task=useLoaderData();
    return (
        <div>
             <h2>Hello:{task.length}</h2>
        </div>
    );
};

export default AllTask;