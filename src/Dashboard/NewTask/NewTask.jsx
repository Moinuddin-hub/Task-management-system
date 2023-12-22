import { useForm } from "react-hook-form";


const NewTask = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    
fetch('http://localhost:5000/users',{
    method:"POST",
    headers:{
     "content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
})
    }
    return (
       <div className=" ml-10 border mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="my-8">
            <div className="flex items-center gap-10">
        <div className="form-control w-full max-w-xs">
         <label className="label">
            <span className="label-text">Title:</span>  
            </label>
         <input 
         type="text"
         placeholder=""
         {...register("title")} 
       className="input input-bordered w-full max-w-xs"
         />
         </div> 
        <div className="form-control w-full max-w-xs">
         <label className="label">
            <span className="label-text">Dateline:</span>  
            </label>
         <input 
         type="date"
         placeholder=""
         {...register("dateline")} 
         className="input input-bordered w-full max-w-xs"
         />
         </div> 

       </div>
       <div className="flex items-center gap-10">
       <div className="form-control w-full max-w-xs">
         <label className="label">
            <span className="label-text">Description:</span>  
            </label>
            <textarea {...register("description")}  className="textarea textarea-bordered h-24 w-96 max-w-xs"> </textarea>  
         </div>
      
       <div className="form-control">
       <label>priority</label>
        <select {...register("priority")}  className="input input-bordered w-full max-w-xs">
          <option value="Low">Low</option>
          <option value="moderate">moderate</option>
          <option value="high">high</option>
        </select>
       </div>
       </div>
  
        <div className="flex justify-center ">
        <button className="btn btn-primary">Submit</button>
        </div>
      </form>
       </div>
    );
};

export default NewTask;