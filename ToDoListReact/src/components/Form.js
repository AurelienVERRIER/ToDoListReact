import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      task: ''
    }}
  handleTaskDescriptionChange = (e) => {
    this.setState({ task: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  }
  render() {
    return (
      <form className='' onSubmit={this.handleSubmit}>
        
        <input type='text' className="ml-1.5 stext-gray outline outline-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg rounded-rg text-sm px-4 py-1.5 dark:focus:ring-blue-800" placeholder='Task description' onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
        
        
        <button type='submit' className='text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg rounded-rg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
        
      </form>
    )}
}

export default Form;