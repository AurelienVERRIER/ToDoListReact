import React from 'react';
import Form from './components/Form';
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
  render (){
    return (
      <>
        <Form addTask={this.addTask} />
      </>
    )
  }
}

export default App;
