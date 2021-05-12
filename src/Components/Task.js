import React from 'react'

const Task = ({done, text, onChange, id, onDelete}) => {
  const listItemClasses = `list-item__text${done ? ' list-item__text--done': ''}`
  return (
    <li className='list-item'>
      <input type='checkbox' className='list-item__checkbox' value={done} defaultChecked={done} onChange={()=> onChange(id)}/>
      <span className={listItemClasses}>{text}</span>
      <button className='remove-btn' onClick={() => onDelete(id)}>x</button>
    </li>
  )
}
export default Task