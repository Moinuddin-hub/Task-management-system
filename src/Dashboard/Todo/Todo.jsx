import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Todo = () => {
    const task=useLoaderData();
    console.log(task);
    return (
        <div className="mt-10 ml-10">
            <div className="flex justify-around">
         <div className=" bg-orange-600 h-96">
           <h2 className="p-8 text-2xl font-bold ">to-do list</h2>
           {
            task.map(item=><Card key={item._id} item={item}></Card>)
           }


         </div>
         <div className="bg-orange-200 h-96">
          <h2 className="p-8 text-2xl font-bold ">ongoing list</h2>
         </div>
         <div className="bg-orange-400 h-96">
            <h2 className="p-8 text-2xl font-bold ">completed list.</h2>
         </div>
      </div>
        </div>
    );
};

export default Todo;