const baseUrl = 'https://crudcrud.com/api/69c606e5329b4eb2a263d182fe0d8a17/tasks'

export const createTask = async taskData => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(taskData)
  })
  if (!response.ok) {
    throw new Error('Faild to create task')
  }
}

export const fetchTasksList = async () => {
  const response = await fetch(baseUrl)
  if (response.ok) {
    return response.json()
  }
  const tasks = undefined
  return tasks
}

export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(taskData)
  })
  if (!response.ok) {
    throw new Error('Faild to create task')
  }
}

export const deleteTask = async (taskId) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  })
  if (!response.ok) {
    throw new Error('Faild to create task')
  }
}