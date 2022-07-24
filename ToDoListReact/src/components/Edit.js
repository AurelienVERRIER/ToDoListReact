import React, { Component } from 'react'
class Edit extends Component {
  render() {
    const {editDescription,handleTaskDescriptionChange,handleStatusChange,handleSubmit,reset} = this.props
    return (
      <form className="" onSubmit={handleSubmit}>
        <div className="">
          <input type="text" value={editDescription} onChange={handleTaskDescriptionChange}/>
        </div>
        <div className="">
          <select className="" onChange={handleStatusChange}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="">
          <button className="" onClick={reset}>Cancel</button>
        </div>
        <div className="">
          <button type="submit" className="">Submit</button>
        </div>
      </form>
    )}
}
export default Edit;