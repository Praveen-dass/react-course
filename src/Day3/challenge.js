// reactapp-explore/src/TaskList.js

import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
// reactapp-explore/src/App.js

// import React, { useState } from 'react';
// import TaskList from './TaskList';

// function App() {
//     const [tasks, setTasks] = useState([
//         { id: 1, text: 'Task 1', completed: false },
//         { id: 2, text: 'Task 2', completed: false },
//         // Add more tasks as needed
//     ]);

//     // Function to handle task deletion
//     const handleDeleteTask = (taskId) => {
//         const updatedTasks = tasks.filter((task) => task.id !== taskId);
//         setTasks(updatedTasks);
//     };

//     return (
//         <div>
//             <h1>Task List</h1>
//             <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
//         </div>
//     );
// }

// export default App;
