import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      filter: ''
    }
  }
  addTask = (description) => {
    const clonedTasks = {
      description: description,
      status: 'To do'
    }
    this.setState({ tasks: [clonedTasks, ...this.state.tasks] });
  }
  deleteTask = (index) => {
    const clonedTasks = this.state.tasks.filter((task, i) => i !== index);
    this.setState({ tasks: clonedTasks });
  }
  editTask = (index, description, status) => {
    const clonedTasks = [...this.state.tasks];
    clonedTasks[index].description = description;
    clonedTasks[index].status = status;
    this.setState({ tasks: clonedTasks });
  }
  Filter = (status) => {
    this.setState({ filter: status });
  }
  render() {
    const filteredTasks = this.state.tasks.filter(task => {
      return (
        task.status === this.state.filter || this.state.filter === '')
    });
    return (
      <div className=''>
        <h1 className=''>Todolist React</h1>
        <Form addTask={this.addTask} />
        <div>
        <h1>Filters</h1>
        <div className=''>
          <button className='' onClick={() => this.Filter('')}>All</button>
          <button className='' onClick={() => this.Filter('To do')}>To do</button>
          <button className='' onClick={() => this.Filter('Doing')}>Doing</button>
          <button className='' onClick={() => this.Filter('Done')}> Done</button>
        </div>
       </div>
        <List
          tasks={filteredTasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </div>
    )
  }
}
export default App;
