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
    const clonedTask=[...this.state.tasks,this.state.task];
    this.setState({
      tasks:clonedTask,
    })
  }
  render () {
    return (
      <>
        <Form addTask={this.addTask} tasks={this.state.tasks}/>
      </>
    )
  }
}

export default App;
