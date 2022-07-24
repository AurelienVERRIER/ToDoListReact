import React, { Component } from 'react'
class Edit extends Component {
  render() {
    const {editDescription,handleTaskDescriptionChange,handleStatusChange,handleSubmit,reset} = this.props
    return (
      <form className="text-black mb-3 py-3 border-solid border-2 border-900 rounded-lg backdrop-blur-sm justify-between flex items-center px-5 shadow-lg shadow-stone-900/80 w-[100%] h-[80px]" onSubmit={handleSubmit}>
        
        <input className="mx-3 uppercase" type="text" value={editDescription} onChange={handleTaskDescriptionChange}/>

        <select className="mx-3 italic text-black-500" onChange={handleStatusChange}>
          <option value="To do">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit" className="border bg-blue-700 text-white hover:bg-transparent backdrop-blur-sm hover:border-blue-700 active:border-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20">Submit</button>
        
        <button className="bg-red-600 border border-red-600 hover:bg-transparent backdrop-blur-sm hover:border-red-700 active:border-red-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20" onClick={reset}>Cancel</button>
        
        
      </form>
    )}
}
export default Edit;