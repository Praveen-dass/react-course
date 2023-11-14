import React, { useState } from "react"
import "../App.css";
export default function Todo()
{
    const [list,setlist] = useState(['udumalpet','covai']);
    const [item,setitem] = useState('');
    const handleadd = () =>{
        setlist([...list,item])
        setitem('')
    }
    return(
        <div className="bg">
            <h1 >TODO LIST</h1>
            <hr />
                <h2>Enter Your City Name</h2>
                <input 
                style={{borderRadius:'25px'}}
                type="text"
                value={item}
                onChange={(e) => {setitem(e.target.value) }} 
                />
                <button onClick={handleadd} className="but">Add</button>
                <h2>List Of Cities:</h2>
                <ul className="lis">
                    {
                        list.map((item,i)=>(
                            <li key={i}>{item}</li>
                        ))
                    }
                </ul>
        </div>
    )
}