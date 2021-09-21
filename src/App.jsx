import { useState } from "react";
import TasksDisplayAreaComponent from "./components/TasksDisplayAreaComponent.jsx";
import FormInputComponent from "./components/FormInputComponent.jsx";
import './App.css';
import "./components/style.css";

const App = () => {

  const [liftedIncrement, setLiftedIncrement] = useState();

  const dbEventHandler = (paramLiftedIncrement) => {
    setLiftedIncrement(paramLiftedIncrement);
  };

  return (
    <main className="container fluid">
      <div className="card mt-3" style={{width: 18 + "rem"}}>
        <div className="card-body">
          <h2 className="card-title">TODO</h2>
          <TasksDisplayAreaComponent liftedIncrementProp={liftedIncrement} />
          <FormInputComponent dbEventHandlerProp={dbEventHandler} />
        </div>
      </div>
    </main>
  );
}

export default App;