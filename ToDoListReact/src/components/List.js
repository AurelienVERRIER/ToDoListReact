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
      <>
        <h1 className='mx-3 my-3 text-3xl'>Task List</h1>
        <ul className=''>
          {this.props.tasks.map((task, index) => (
            <li key={index} className='flex justify-between w-full'>
              {this.state.editIndex !== index ? (
                <div className='text-white mb-3 py-3 border-solid border-2 border-900 rounded-lg backdrop-blur-sm justify-between flex items-center px-5 shadow-lg shadow-stone-900/80 w-[100%] h-[80px]'>
                <span className='mx-3 uppercase w-[100%]'>{task.description}</span>

                <span className='mx-3 italic text-purple-500 w-[20%]'>{task.status}</span>

                <button className="border bg-blue-700 text-white hover:bg-transparent backdrop-blur-sm hover:border-blue-700 active:border-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20" onClick={() => this.setEditIndex(index)}>Edit</button>
                 
                <button className="bg-red-600 border border-red-600 hover:bg-transparent backdrop-blur-sm hover:border-red-700 active:border-red-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20" onClick={() => this.props.deleteTask(index)}>Delete</button>
                </div>
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
      </>
    )}
}
export default List
