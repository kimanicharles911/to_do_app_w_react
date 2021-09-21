/* I imported the useState react hook from the react library.  */
import { useState, useEffect } from "react";

/* I created the TasksDisplayAreaComponent functional component and destructured a prop from App.jsx file */
const TasksDisplayAreaComponent = ({liftedIncrementProp }) => {

  /* I created the addedTasks state variable that will be used to render added tasks to the client. */
  const [addedTasks, setAddedTasks] = useState();

  /* I created an arrow function that will execute all delete operations.
  It:
    1. Stored all tasks (from localStorage) in tasksArr.
    2. I then filtered from this above array the tasks that don't have the ID of the one whose button was clicked and then stored it in filteredTasksArr.
    3. I then set the addedTasks state variable to the filteredTasksArr.
    4. I also updated the localStorage allInputsObject item to be the same as filteredTasksArr.    
  */
  const deleteTodoHandler = (param) => {
    const tasksArr = JSON.parse(localStorage.getItem("allInputsObject"));
    const filteredTasksArr = tasksArr.filter(task => task.id !== param);
    setAddedTasks(filteredTasksArr);
    localStorage.setItem("allInputsObject", JSON.stringify(filteredTasksArr));
  }

  /* I utilized the useEffect hook to update the addedTasks state variable whenever a new todo task is added by listening to any changes in the increment state variable found in FormInputComponent.jsx via the liftedIncrementProp. */
  useEffect(() => {
    setAddedTasks(JSON.parse(localStorage.getItem("allInputsObject")));
  }, [liftedIncrementProp]);

  return(
    /* Below is the JSX used to render all the todo tasks added by a client.
    I first validate if the addedTasks has an iterable data type by preventing looping of null and undefined data types.
    I then used the map array method to iterate over every task.
    I used the object array index as the key.
    To enable deleting I used an onClick eventHandler with an arrow function to call the deleteTodoHandler function passing the task's ID as the parameter */
    <ul>
      {
        addedTasks !== null && addedTasks !== undefined && addedTasks.map((task, index) => {
          return <li key={index} className="card-text mt-3">{task.id}. {task.todoTask} &nbsp; <button type="button" className="btn-close btn-sm" onClick={() => deleteTodoHandler(task.id)}></button> </li>
        })
      }
    </ul>
  );
};
export default TasksDisplayAreaComponent;