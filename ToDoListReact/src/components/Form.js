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
      <form onSubmit={this.handleSubmit}>
        <input type='text' className="w-96 px-5 h-8 font-semibold border border-slate-300 text-black rounded" placeholder='Task description' onChange={this.handleTaskDescriptionChange} value={this.state.task}/> 
        <button type='submit' className='h-9 px-5 font-semibold rounded bg-blue-700 text-white hover:bg-white hover:text-black hover:border-2 hover:border-black ml-2'>Submit</button>     
      </form>
    )}
}

export default Form;