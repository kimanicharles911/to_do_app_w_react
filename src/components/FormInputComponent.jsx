/* I learnt how to push into array states from: https://stackoverflow.com/a/65506651/9497346 */
import { useState, useEffect } from "react";
const FormInputComponent = ({ addedToDosHandlerProp }) => {

  let [increment, setIncrement] = useState(1);

  const [allInputsObject, setAllInputsObject] = useState([]);
  
  const [inputFormToDoTask, setInputFormToDoTask] = useState("");


  const incrementFunc = () => {
    setIncrement(increment + 1);
  };

  const clearInputFormFunc = () => {
    setInputFormToDoTask("");  
  };
  const submitHandler = (event) => {
    event.preventDefault();
    incrementFunc();

    const newInputObject = {
      id: increment,
      todoTask: inputFormToDoTask
    };
    setAllInputsObject(oldArray => [...oldArray, newInputObject]);
    clearInputFormFunc();
  };

  useEffect(() => {
    if(allInputsObject.length > 0) addedToDosHandlerProp(allInputsObject);
  }, [allInputsObject]);

  return(
    <form className="needs-validation mt-3" id="form" onSubmit={submitHandler} novalidate>
      <div className="row g-3 mb-3 justify-content-center">
        <div className="col-sm-11">
          <label htmlFor="todoTaskInput" className="form-label">New To-do Task</label>
          <input type="text" className="form-control" id="todoTaskInput" value={inputFormToDoTask} onChange={ (event) => setInputFormToDoTask(event.target.value) } required/>
          <div className="invalid-feedback">To do Task is required</div>
        </div>
        <button className="btn btn-primary col-sm-6">Add</button>
      </div>
    </form>
  );
};


export default FormInputComponent;