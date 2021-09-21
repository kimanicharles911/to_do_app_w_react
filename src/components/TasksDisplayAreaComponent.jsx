import { useState, useEffect } from "react";

const TasksDisplayAreaComponent = ({liftedIncrementProp }) => {

  const [addedTasks, setAddedTasks] = useState();

  const deleteTodoHandler = (param) => {
    const testArr = JSON.parse(localStorage.getItem("allInputsObject"));
    const filteredArr = testArr.filter(arr => arr.id !== param);
    setAddedTasks(filteredArr);
    localStorage.setItem("allInputsObject", JSON.stringify(filteredArr));
  }

  useEffect(() => {
    setAddedTasks(JSON.parse(localStorage.getItem("allInputsObject")));
  }, [liftedIncrementProp]);

  return(
    <ul>
      {
        addedTasks !== undefined && addedTasks.map((item) => {
          return <li key={item.id} className="card-text mt-3">{item.id}. {item.todoTask} &nbsp; <button type="button" className="btn-close btn-sm" onClick={() => deleteTodoHandler(item.id)}></button> </li>
        })
      }
    </ul>
  );
};
export default TasksDisplayAreaComponent;