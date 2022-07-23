import React from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
    }
  }
  addTask=(task)=>{
    const clonedTask = {
      task: task,
      status: 'To do'
    }
    this.setState({ 
      tasks: [clonedTask, ...this.state.tasks] 
    })
  }

  deleteTask=(i)=>{
    const clonedTask = this.state.tasks.filter((task, index) =>
      index !== i)

    this.setState({
      tasks: clonedTask,
    })
  }
  
  render (){
    return (
      <>
        <Form addTask={this.addTask} />
        <List 
          tasks={this.state.tasks}
          deleteTask={this.state.deleteTask}
        />
      </>
    )
  }
}

export default App;
