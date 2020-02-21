import React  from 'react';
import './Todo.css';

const Todo = ({task, removeTodo}) => {
  return (
    <li className="todo-item">
      {task.task}
      <button onClick={removeTodo}>X</button>
    </li>
  );
}

export default Todo;
