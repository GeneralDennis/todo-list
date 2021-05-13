import React, { Component } from 'react'
import Task from './Task'
import CreateTaskInput from './CreateTaskInput'
import { createTask, deleteTask, fetchTasksList, updateTask } from '../tasksGateway';



class TasksList extends Component {
  state = {
    tasks: []
  };

  componentDidMount(){
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList()
    .then(tasks => {
      this.setState({
        tasks
      })
    })
  }

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask)
      .then(()=>{
        this.fetchTasks();
      })
  }

  handleTaskCheck = id => {
    const { done, text } = this.state.tasks.find(task => task._id === id);
    const updatedTask = {
      text,
      done: !done
    }
    updateTask(id, updatedTask)
      .then(()=>{
        this.fetchTasks()
      })
  }

  handleDeleteTask = id => {
    deleteTask(id)
    .then(()=>{
      this.fetchTasks()
    })
  }

  render(){
    const {tasks} = this.state;
    const sortedList = tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <ul className="tasks-list">
        <CreateTaskInput  onCreate={this.onCreate }/>
        {sortedList.map(task=>(
          <Task
            key={task._id}
            {...task}
            onChange={this.handleTaskCheck}
            onDelete={this.handleDeleteTask}/>
        ))}
      </ul>
    )
  }
}
export default TasksList