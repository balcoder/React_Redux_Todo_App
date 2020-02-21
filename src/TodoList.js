import React, {Component} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import {connect} from 'react-redux';
import { addTodo, removeTodo } from './actionCreator';
import './TodoList.css';
import { Route } from 'react-router-dom';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);

  }

  handleAdd(val) {
    this.props.addTodo(val);
  }


  removeTodo(id){
    this.props.removeTodo(id);
  }

  render() {
    let todos = this.props.todos.map((task, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, task.id)}
        task={task}
        key={index} />
    ));

    return (
      <div>
        <Route path='/todos/new' component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd}/>
          )} />
        <Route exact path='/todos' component={() => (
          <div>
            <ul className="todo-list">{todos}</ul>
          </div>)
        }/>

      </div>

    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  }
}


//any time we connect redux to a component we have access to the dispacth fn from
//store
export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList);
