import { useState } from "react";
import TasksDisplayAreaComponent from "./components/TasksDisplayAreaComponent.jsx"
import FormInputComponent from "./components/FormInputComponent.jsx";
import './App.css';
import "./components/style.css";

const App = () => {

  const [ todosToDisplay, setTodosToDisplay ] = useState({});


  const addedToDosHandler = (addedToDosArr) => {
    setTodosToDisplay(addedToDosArr);
  };

  return (
    <main className="container fluid">
      <div className="card mt-3" style={{width: 18 + "rem"}}>
        <div className="card-body">
          <h2 className="card-title">TODO</h2>
          <TasksDisplayAreaComponent todosToDisplayProp={todosToDisplay} />
          <FormInputComponent addedToDosHandlerProp={addedToDosHandler} />
        </div>
      </div>
    </main>
  );
}

export default App;