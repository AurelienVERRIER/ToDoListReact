import React, { Component } from 'react'
class Edit extends Component {
  render() {
    const {editDescription,handleTaskDescriptionChange,handleStatusChange,handleSubmit,reset} = this.props
    return (
      <form className="backgroung background-black" onSubmit={handleSubmit}>
        
        <input className="mx-3 uppercase" type="text" value={editDescription} onChange={handleTaskDescriptionChange}/>

        <select className="mx-3 italic text-purple-500" onChange={handleStatusChange}>
          <option value="To do">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit" className="text-cyan-500 rounded-lg rounded-rg border border-cyan-500 mx-1.5 my-1.5 px-1.5 py-1">Submit</button>
        
        <button className="text-red-700 rounded-lg rounded-rg border border-red-907 mx-1.5 my-1.5 px-1.5 py-1" onClick={reset}>Cancel</button>
        
        
      </form>
    )}
}
export default Edit;