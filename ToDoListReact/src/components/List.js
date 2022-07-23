import React from "react";

class List extends React.Component {
  // construcor(){
  //   super()
  //   this.state = { 
  //   }
  // }

render () {
  return (
    <>
    <h1>LIST</h1>
    <ul>
        {this.props.tasks.map((task,i)=>(
          <>
          <li key={i}>{task.task}</li>
          <button onClick={()=>this.props.deleteTask(i)}>Delete</button>
          </>
        ))}
    </ul>
    </>
  )
  }
}

export default List;