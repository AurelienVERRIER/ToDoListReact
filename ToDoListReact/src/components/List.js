import React from "react";
import '../App.css';

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
      <h1 className="" >TASK LIST</h1>
      <button>To Do</button>
      
      {!this.state.edit?
      
      (
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

// text-gray outline outline-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg rounded-rg text-sm px-4 py-1.5 dark:focus:ring-blue-800

// Filtre rouge ToDo
// className="text-red-500 rounded-lg rounded-rg outline outline-red-500 px-4 py-2"

// Filtre jaune Doing
// className="text-yellow-400 rounded-lg rounded-rg outline outline-yellow-400 px-4 py-2"

// Filtre vert Done
// className="text-green-600 rounded-lg rounded-rg outline outline-green-600 px-4 py-2"

// Filtre noir All
// text-black-100 rounded-lg rounded-rg outline outline-black-100 px-4 py-2"

// bouton modifier
// className="text-cyan-500 rounded-lg rounded-rg outline outline-cyan-500 px-4 py-2"

// bouton supprimer
// className="text-red-700 rounded-lg rounded-rg outline outline-red-907 px-4 py-2"

