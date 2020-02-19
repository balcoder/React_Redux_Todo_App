import React  from 'react';

const Todo = ({task, removeTodo}) => {
  return (
    <li>
      {task.task}
      <button onClick={removeTodo}>X</button>
    </li>
  );
}

export default Todo;
