/* I imported:
1. the useState react hook from the react library.
2. the TasksDisplayAreaComponent & FormInputComponent
3. My custom stylesheet  */
import { useState } from "react";
import TasksDisplayAreaComponent from "./components/TasksDisplayAreaComponent.jsx";
import FormInputComponent from "./components/FormInputComponent.jsx";
import './App.css';
import "./components/style.css";

/* I converted the App functional component to be made by an arrow function since I love arrow functions compared to normal functions */
const App = () => {

  /* I store the increment state that will be lifted from the FormInputComponent in the below state variable. The increment state will be used to trigger a useEffect hook  in TasksDisplayAreaComponent that will update the todo tasks from the localStorage. */
  const [liftedIncrement, setLiftedIncrement] = useState();

  /* I created a function that will be used to lift the increment state found in FormInputComponent. I pass the function as a prop in where I add the FormInputComponent. */
  const dbEventHandler = (paramLiftedIncrement) => {
    setLiftedIncrement(paramLiftedIncrement);
  };

  return (
    /* My JSX highly utilizes bootstrap */
    <main className="container fluid">
      <div className="card mt-3" style={{width: 18 + "rem"}}>
        {/* I wrap the TasksDisplayAreaComponent & FormInputComponent in the below div. */}
        <div className="card-body">
          <h2 className="card-title">TODO</h2>
          {/* I pass the liftedIncrement state as a prop, it will be used to store the increment state that will be lifted from the FormInputComponent . The increment state will be used to trigger a useEffect hook  in TasksDisplayAreaComponent that will update the todo tasks from the localStorage. */}
          <TasksDisplayAreaComponent liftedIncrementProp={liftedIncrement} />
          {/* I passed the dbEventHandler function as a prop. It will be used to lift the increment state found in FormInputComponent. */}
          <FormInputComponent dbEventHandlerProp={dbEventHandler} />
        </div>
      </div>
    </main>
  );
}

export default App;