import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      type: 'ADD_TODO',
      task: this.state.task
    });
    this.setState({
      task: ''
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {    
    let todos = this.props.todos.map((task, index) => (
      <Todo task={task} key={index} />
    ));

    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}/>
          <button>Add Task</button>
        </form>
        <ul>
        {todos}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  }
}
//any time we connect redux to a component we access to the dispacth fn from
//store
export default connect(mapStateToProps)(TodoList);
