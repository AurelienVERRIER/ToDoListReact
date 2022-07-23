import React from "react";
import App from "../App";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      task: ""
    }
  }
  handleTaskDescriptionChange=(e)=>{
    const clonedTask=[...this.state.task, e.target.value];
    this.setState({
      task: clonedTask,
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      task:this.state.task[this.state.task.length-1]
    })
  }
  render () {
  return (
    <>
      <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleTaskDescriptionChange} placeholder={"Add your task"} />
              <button type="submit" name="taskSubmit">Submit</button>
      </form>
    </>
  )
  }
}


export default Form; 