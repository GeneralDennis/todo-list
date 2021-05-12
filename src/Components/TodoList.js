import React from 'react'
import TasksList from './TasksList'

const TodoList = () => {
  return (
    <div className='todo-list'>
      <h1 className='title'>Todo List</h1>
      <TasksList />
    </div>
  )
}

export default TodoList