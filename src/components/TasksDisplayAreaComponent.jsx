import { useState, useEffect } from "react";

const TasksDisplayAreaComponent = ({ todosToDisplayProp, }) => {

  const [ renderedToDos, setRenderedToDos ] = useState((todosToDisplayProp));

  const deleteTodoHandler = (param) => {
    setRenderedToDos(renderedToDos.filter(renderedToDo => renderedToDo.id !== param ));
  }

  useEffect(() => {
    setRenderedToDos(todosToDisplayProp);
  }, [todosToDisplayProp])

  return(
    <ul>
      {
        renderedToDos.length > 0 && renderedToDos.map((item) => {
          return <li key={item.id} className="card-text mt-3">{item.id}. {item.todoTask} &nbsp; <button type="button" className="btn-close btn-sm" onClick={() => deleteTodoHandler(item.id)}></button> </li>
        })
      }
    </ul>
  );
};
export default TasksDisplayAreaComponent;