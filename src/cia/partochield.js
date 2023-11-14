import React from "react"
function Form(props)
{
    return(
        <div>
            {props.name};
        </div>
    )
}
export default Form;
// function App() {
//     const [name,setName] = useState("Hello World");
//     return (
//       <div>
//            <Form name={name} />
//       </div>
//     );
//   }