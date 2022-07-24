import React, { Component } from 'react'
import Task from './Task'
import Edit from './Edit'

class List extends Component {
  constructor() {
    super()
    this.state = {
      editIndex: null,
      editDescription: '',
      editStatus: ''
    }}
  setEditIndex = (index) => {
    this.setState({
      editIndex: index,
      editDescription: this.props.tasks[index].description,
      editStatus: this.props.tasks[index].status
    })
  }
  handleTaskDescriptionChange = (e) => {
    this.setState({ editDescription: e.target.value })
  }
  handleStatusChange = (e) => {
    this.setState({ editStatus: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { editIndex, editDescription, editStatus } = this.state
    this.props.editTask(editIndex, editDescription, editStatus)
    this.reset()
  }
  reset = () => {
    this.setState({
      editIndex: null,
      editDescription: '',
      editStatus: ''
    })
  }
  render() {
    return (
      <div className=''>
        <h1>List</h1>
        <ul className=''>
          {this.props.tasks.map((task, index) => (
            <li key={index} className=''>
              {this.state.editIndex !== index ? (
                <Task
                  task={task}
                  index={index}
                  deleteTask={this.props.deleteTask}
                  setEditIndex={this.setEditIndex}
                />
              ) : (
                <Edit
                  editDescription={this.state.editDescription}
                  handleTaskDescriptionChange={this.handleTaskDescriptionChange}
                  handleStatusChange={this.handleStatusChange}
                  handleSubmit={this.handleSubmit}
                  reset={this.reset}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
}
export default List