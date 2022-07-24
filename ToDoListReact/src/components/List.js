import React from "react";

class List extends React.Component {
constructor(){
  super()
  this.state={
    edit:false,
  }
  }
  render () {
  return (
    <>
    <h1>LIST</h1>
    {!this.state.edit?(
      <ul>
        {this.props.tasks.map((task,i)=>(
          <>
          <li key={i}>{task.task} {task.status}</li>
          <button onClick={()=>this.props.deleteTask(i)}>Delete</button>
          <button onClick={()=>this.setState({edit:true})}>Edit</button>
          </>
        ))}
      </ul>
    ):(
      console.log("a")
    )}
    </>
  )
  }
}

export default List;