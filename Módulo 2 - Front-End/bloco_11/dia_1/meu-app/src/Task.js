import React, { Component } from "react";

 class Tarefas extends Component {
  render() {
    const tasks = ['Javascript', 'React', 'HTML', 'CSS', 'Node', 'Mongo', 'Python'];
    return(
      <ol> 
        {tasks.map(task => <li> {task} </li>)} 
      </ol>);
  }
}

export default Tarefas;