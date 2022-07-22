import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
      clonedTask:[],
    }
  }
  addTask=(e)=>{
    const clonedTask=[...this.state.tasks, e.target.value];
    this.setState({
      tasks:clonedTask,
    })
  }
  onSubmitValue=(e)=>{
    e.preventDefault();
    this.setState({
      clonedTask: this.state.tasks[this.state.tasks.length-1]
    })
  }
  render () {
    {console.log(this.state.clonedTask)}
    return (
      <>
        <Form addTask={this.addTask} onSubmitValue={this.onSubmitValue}/>
      </>
    )
  }
}

export default App;
