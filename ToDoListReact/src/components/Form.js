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
        <div className=''>
          <input type='text' className='' placeholder='Task description' onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
        </div>
        <div className=''>
          <button type='submit' className=''>Submit</button>
        </div>
      </form>
    )}
}

export default Form;