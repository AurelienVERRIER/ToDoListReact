import React, { Component } from 'react'
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
        <h1 className='mx-3 my-3 text-lg'>Task List</h1>
        <ul className=''>
          {this.props.tasks.map((task, index) => (
            <li key={index} className=''>
              {this.state.editIndex !== index ? (
                <>
                <span className='mx-3 uppercase'>{task.description}</span>

                <span className='mx-3 italic text-purple-500'>{task.status}</span>

                <button className="text-cyan-500 rounded-lg rounded-rg border border-cyan-500 mx-1.5 my-1.5 px-1.5 py-1" onClick={() => this.setEditIndex(index)}>Edit</button>
                 
                <button className="text-red-700 rounded-lg rounded-rg border border-red-907 mx-1.5 my-1.5 px-1.5 py-1" onClick={() => this.props.deleteTask(index)}>Delete</button>
                </>
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
