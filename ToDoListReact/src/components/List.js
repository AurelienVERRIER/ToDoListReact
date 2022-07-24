import React from "react";

class List extends React.Component {
  constructor(){
    super()
    this.state = { 
      editTask:'',
      editStatus:'',
      editIndex:null
    }
  }

  handleEdit=(e)=>{
    this.setState({
      editTask: e.target.value
    })
  }

  handleEdit=(e)=>{
    this.setState({
      editTask: e.target.value
    })
  }

  editTask=(i, task)=>{
    const newTask = e.target.value  
    
    this.setState({
      editTask: newTask         
      })
    }

  editStatus=()=>{
    const newStatus = 
    editStatus: newStatus
  }

render () {
  return (
    <>
    <h1>LIST</h1>
    <ul>
        {this.props.tasks.map((task,i)=>(
          <>
          <li key={i}>{task.task} {task.status}</li>
          <button onClick={()=>this.handleEdit(i, task)}>Edit</button>

          <button onClick={()=>this.props.deleteTask(i)}>Delete</button>
          
          </>
        
        ))}
    </ul>
    <article>
      <input type="checkbox" name="to do" value="toDo" >To do</input>
          
      <input type="checkbox" name="doing" value="doing" >Doing</input>
          
      <input type="checkbox" name="done" value="toDo" >Done</input>
    </article>
    
    </>
  )
  }
}

export default List;