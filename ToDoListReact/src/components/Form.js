import React from "react";

class Form extends React.Component {

render () {
  return (
    <>
      <form onSubmit={this.props.onSubmitValue}>
              <input onChange={this.props.addTask} placeholder={"Add your task"} />
              <button type="submit" name="taskSubmit">Submit</button>
      </form>
    </>
  )
  }
}


export default Form; 