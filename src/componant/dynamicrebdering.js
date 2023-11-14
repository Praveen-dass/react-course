import { useState } from "react";

function DynamicRendering()
{
    const[isvalid,setval] = useState(false)
    if(isvalid)
    {
        return <h2>Test is passed</h2>
    }
    return (
        <div>
            <h2>No not passed</h2>
            <button onClick={()=>setval(true)}>Click me!</button>
        </div>
    )
}
export default DynamicRendering;