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
        <h1 className='mx-3 my-3 text-xl'>To do list Managment in React</h1>
        <Form addTask={this.addTask} />
        <div>
        <h1 className='mx-3 my-3 text-lg'>Filters</h1>
        <div className=''>
          <button className='text-black-100 rounded-lg rounded-rg border border-black-100 mx-1.5 px-4 py-2' onClick={() => this.Filter('')}>All</button>
          <button className='text-red-500 rounded-lg rounded-rg border border-red-500 mx-1.5 px-4 py-2' onClick={() => this.Filter('To do')}>To do</button>
          <button className='text-yellow-400 rounded-lg rounded-rg border border-yellow-400 mx-1.5 px-4 py-2' onClick={() => this.Filter('Doing')}>Doing</button>
          <button className='text-green-600 rounded-lg rounded-rg border border-green-600 mx-1.5 px-4 py-2' onClick={() => this.Filter('Done')}> Done</button>
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
