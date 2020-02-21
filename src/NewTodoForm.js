import React, {Component} from 'react';

export default class NewTodoForm extends Component {
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
    if(this.state.task === ''){
      return
    } else {
      this.props.handleSubmit(this.state.task);
      e.target.reset();
      this.setState({
        task: ''
      });
      this.props.history.push('/todos');
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form className="form" onSubmit = {this.handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          id="task"
          onChange={this.handleChange}/>
        <button>Add Task</button>
      </form>
    );
  }
}
