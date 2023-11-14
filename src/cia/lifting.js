import react, { useState } from "react"

function Lift(props)
{
    const [name,setName] = useState("");
    const submitHandle = (e) => {
        e.preventDefault();
        props.getState(name);
    }
    return(
        <div>
            <form onSubmit={submitHandle}>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Lift;
// function App() {
//     const getState = (any) => {
//         console.log(any);
//     }
//     return (
//       <div>
//            <Lift getState={getState}/>
//       </div>
//     );
//   }