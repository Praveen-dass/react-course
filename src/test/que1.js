import {useState} from "react";
function  MyFunction()
{
     const[count,setCount] = useState(0)
     function changeCount()
     {
        setCount(count+1)
     }
     
     return(
        <div>
            <h1>Welcome To MY Counter React App</h1>
            <hr />
            <h2>Count:{count}</h2>
            <button onClick={changeCount}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
     )
}
export default MyFunction;