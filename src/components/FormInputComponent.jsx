/* I imported the useState react hook from the react library.  */
import { useState } from "react";

/* I created the FormInputComponent functional component and destructured a prop from App.jsx file */
const FormInputComponent = ({ dbEventHandlerProp }) => {

  /* I created the increment state variable that will be used to help assign every task a unique ID. I initialized it with 1 */
  let [increment, setIncrement] = useState(1);

  /* I create an empty array that will be used to store all the tasks in the localStorage .*/
  const allInputsObject = [];
  
  /* I created the inputFormToDoTask state variable and initialized it with an empty string. It will be used by an arrow function with an event handler to store the input when the form is submitted. I t will also be used to set the value of the input and to reset the form after submission. */
  const [inputFormToDoTask, setInputFormToDoTask] = useState("");

  /* I created an arrow function that will be used to increase the increment state variable by 1 . */
  const incrementFunc = () => {
    setIncrement(increment + 1);
  };

  /* I created an arrow function that will be used to clear the input by assigning the inputFormToDoTask state variable an empty string . */
  const clearInputFormFunc = () => {
    setInputFormToDoTask("");  
  };

  /* I created an arrow function that to handle form submission when the Add button is pressed.
    It:
      1. calls the increment function
      2. stores the most recent input in the newInputObject; assigning it two values one of id and the other the todo task description.
      3. I then initialize a localDbAllInputsObject variable that will be used to store to add the newInputObject variable to the all tasks.*/
  const submitHandler = (event) => {
    event.preventDefault();
    incrementFunc();

    const newInputObject = {
      id: increment,
      todoTask: inputFormToDoTask
    };

    let localDbAllInputsObject;

    /* If data on task already exist in the localStorage I retrieve the data and store it in the localDbAllInputsObject variable. 
    If the local storage has no tasks data I create an empty storage item from the localDbAllInputsObject variable. Then retrieve this data and store it in the localDbAllInputsObject variable. */
    if(localStorage.getItem("allInputsObject") !== undefined){
      localDbAllInputsObject = JSON.parse(localStorage.getItem("allInputsObject"));
    }else{
      localStorage.setItem("allInputsObject", JSON.stringify(allInputsObject));
      localDbAllInputsObject = JSON.parse(localStorage.getItem("allInputsObject"));    
    }
    /* In the case the localDbAllInputsObject variable is an empty array I set it's first value to be the newInputObject with the most recent todo task. If not I just push the newInputObject variable into it. 
    I then send back the tasks to the localStorage since they are now updated with the most recent task.
    I then clear  the form input.
    I finally lift the increment state variable to the App.jsx file via the dbEventHandlerProp. */
    localDbAllInputsObject === null ? localDbAllInputsObject = [newInputObject] : localDbAllInputsObject.push(newInputObject);

    localStorage.setItem("allInputsObject", JSON.stringify(localDbAllInputsObject));

    clearInputFormFunc();
    dbEventHandlerProp(increment);
  };

  return(
    /* This is the JSX of my form. It highly utilizes bootstrap. */
    <form className="needs-validation mt-3" id="form" onSubmit={submitHandler} novalidate>
      <div className="row g-3 mb-3 justify-content-center">
        <div className="col-sm-11">
          <label htmlFor="todoTaskInput" className="form-label">New To-do Task</label>
          {/* In the value property I set the most recently typed in value using the inputFormToDoTask state variable.
          I also us e the onChange eventListener to update the inputFormToDoTask state variable  */}
          <input type="text" className="form-control" id="todoTaskInput" value={inputFormToDoTask} onChange={ (event) => setInputFormToDoTask(event.target.value) } required/>
          <div className="invalid-feedback">To do Task is required</div>
        </div>
        <button className="btn btn-primary col-sm-6">Add</button>
      </div>
    </form>
  );
};


export default FormInputComponent;