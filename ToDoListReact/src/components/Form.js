import React from "react";

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      task: '',
    }
  }
  handleTaskDescriptionChange=(e)=>{
    this.setState({
       task: e.target.value 
      })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addTask(this.state.task)
    this.setState({
      task: '' 
    })
  }
  render () {
  return (
    <>
      <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleTaskDescriptionChange} value={this.state.task} placeholder={"Add your task"} />
              <button type="submit" name="taskSubmit">Submit</button>
      </form>
    </>
  )
  }
}


export default Form; 