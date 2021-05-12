import React, { Component } from 'react'
import Task from './Task'
import CreateTaskInput from './CreateTaskInput'

class TasksList extends Component {
  state = {
    tasks: [
      { text: 'Buy milk', done: false, id: 1},
      { text: 'Pick up Tom from airport', done: false, id: 2},
      { text: 'Visit party', done: false, id: 3},
      { text: 'Wash car', done: true, id: 4},
      { text: 'Buy meat', done: true, id: 5},
    ]
  };
  onCreate = text => {
    const { tasks } = this.state;
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    }
    const updatedTasks = tasks.concat(newTask);
    this.setState({
      tasks: updatedTasks
    })
  }
  handleTaskCheck = id => {
    const updatedTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    })
    this.setState({tasks: updatedTasks})
  }
  handleDeleteTask = id => {
    const updatedTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: updatedTasks})
  }
  render(){
    const {tasks} = this.state;
    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <ul className="tasks-list">
        <CreateTaskInput  onCreate={this.onCreate }/>
        {sortedList.map(task=>(
          <Task
            key={task.id}
            {...task}
            onChange={this.handleTaskCheck}
            onDelete={this.handleDeleteTask}/>
        ))}
      </ul>
    )
  }
}
export default TasksList