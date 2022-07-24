import React, { Component } from 'react'

class Task extends Component {
  render() {
    const { task, index, deleteTask, setEditIndex } = this.props
    return (
      <div className="">
        <div className="">
          <span>{task.description}</span>
        </div>
        <div className="">
          <span>{task.status}</span>
        </div>
        <div className="">
          <button className="" onClick={() => setEditIndex(index)}>Edit</button>
        </div>
        <div className="">
          <button className="" onClick={() => deleteTask(index)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Task