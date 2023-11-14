import {useState} from "react";
function  MyFunc()
{
     const[count,setCount] = useState(0)
     function changeCount()
     {
        if(count >10)
        {
            alert("hi");
        }
        else
        {
          setCount(count+1)
        }
     }
     
     return(
        <div>
            <h1>Welcome</h1>
            <hr />
            <h2>Count:{count}</h2>
            <button onClick={changeCount}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
     )
}
export default MyFunc;