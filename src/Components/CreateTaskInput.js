import React, { Component } from 'react'

export default class CreateTaskInput extends Component {
  state = {
    value: ''
  }
  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <div className='create-task'>
        <input type="text" className='create-task__inp' value={this.state.value} onChange={this.handleChange}/>
        <button className='create-task__btn' onClick={this.handleTaskCreate}>Add task</button>
      </div>
    )
  }
}
