import React from 'react'

const Task = ({done, text, onChange, _id, onDelete}) => {
  const listItemClasses = `list-item__text${done ? ' list-item__text--done': ''}`
  return (
    <li className='list-item'>
      <input type='checkbox' className='list-item__checkbox' value={done} defaultChecked={done} onChange={()=> onChange(_id)}/>
      <span className={listItemClasses}>{text}</span>
      <button className='remove-btn' onClick={() => onDelete(_id)}>x</button>
    </li>
  )
}
export default Task