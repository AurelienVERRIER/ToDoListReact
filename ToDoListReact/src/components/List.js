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
    {console.log(this.props.tasks)}
    <button onClick={this.props.deleteTask} >Delete</button>
    </>
  )
  }
}

export default List;