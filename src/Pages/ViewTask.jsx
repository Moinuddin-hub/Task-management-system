
import { useLoaderData } from 'react-router-dom';

const ViewTask = () => {
    const task=useLoaderData();
    return (
        <>
        <div className="overflow-x-auto border-2 mt-8">
         <table border="1" className="table py-10  ">
       
        <thead>
         <tr className="ml-4 border-4">
           <th className="text-xl font-bold">No:</th>
           <th className="text-xl font-bold">Task</th>
            <th className="text-xl font-bold">DateLine:</th>
           <th className="text-xl font-bold">priority:</th>
            <th className="text-xl font-bold">Description</th>
         </tr>
      </thead>
    
   
   <tbody className='border-2'>
       {
           task.map((item,index)=><tr key={item._id}>
          
                   <td>{index+1}</td>
                   <td>{item.title}</td>
                   <td>{item.dateline}</td>
                   <button className="btn btn-primary"><td>{item.priority}</td></button>
                   <td>{item.description}</td>
         
           </tr>)
       }
        
     </tbody>
     </table>
     </div>
           </>
    );
};

export default ViewTask;