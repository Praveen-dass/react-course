import React, { useState } from 'react';

function App1() {
    // State for the object with a 'name' property
    const [myObject, setMyObject] = useState({ name: "Madras" });

    // State for the array
    const [myArray, setMyArray] = useState(["a", "e", "i", "o"]);

    // Function to modify the object and array
    const modifyObjectAndArray = () => {
        // Create a new object with the same properties as myObject
        let newObject = { ...myObject };

        // Modify the 'name' property of the new object
        newObject.name = "Chennai";

        // Update the state with the new object
        setMyObject(newObject);

        // Create a new array with the same elements as myArray
        let newArray = [...myArray];

        // Push (add) one element to the new array
        newArray.push("u");

        // Update the state with the new array
        setMyArray(newArray);

        // Log the values to the console
        console.log("Modified Object:", newObject);
        console.log("Modified Array:", newArray);

        // Display an alert message
        alert("Check the console output!");
    };

    return (
        <div>
            <h1>React Object and Array Assignment</h1>
            <button onClick={modifyObjectAndArray}>Modify Object and Array</button>
        </div>
    );
}

export default App1;
