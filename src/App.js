import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'
import './App.css';

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
      <main>
        <h1 className='my-20 text-8xl'>To do list React</h1>
        <Form addTask={this.addTask} />
        <div className='flex m-20'>
          <h1 className='text-3xl mr-9'>Filters</h1>
          <div className='btn-filters'>
            <button className='bg-zinc-600 border border-zinc-600 hover:bg-transparent backdrop-blur-sm hover:border-zinc-700 active:border-zinc-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20 mx-3' onClick={() => this.Filter('')}>All</button>
            <button className='bg-red-600 border border-red-600 hover:bg-transparent backdrop-blur-sm hover:border-red-700 active:border-red-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20 mx-3' onClick={() => this.Filter('To do')}>To do</button>
            <button className='bg-yellow-600 border border-yellow-600 hover:bg-transparent backdrop-blur-sm hover:border-yellow-700 active:border-yellow-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20 mx-3' onClick={() => this.Filter('Doing')}>Doing</button>
            <button className='bg-green-600 border border-green-600 hover:bg-transparent backdrop-blur-sm hover:border-green-700 active:border-green-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20 mx-3' onClick={() => this.Filter('Done')}> Done</button>
          </div>
       </div>
        <List
          tasks={filteredTasks}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </main>
    )
  }
}
export default App;
