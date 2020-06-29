let prevInputValue
let listOfTasks = []

function init () {
  addEventsHandlers()
  loadTasksFromStorage()
}

function addEventsHandlers () {
  const addButton = document.querySelector('.list-btn-add')
  const inputElement = document.querySelector('.list-input-field')
 
  addButton.addEventListener('click', addNewTask)
  inputElement.addEventListener('keyup', onChange)
}

function onChange (event) {
  const newValue = event?.target?.value

  // On press Enter
  if (event?.keyCode === 13 && newValue !== '' && newValue != null) {
    addNewTask()
    return
  }

  if (prevInputValue === newValue) return

  const addButton = document.querySelector('.list-btn-add')

  prevInputValue = newValue

  // Disable addButton
  if (newValue === '' || newValue == null ) {
    addButton.setAttribute('disabled', true)
  } else {
    addButton.removeAttribute('disabled', false)
  }
}

function addNewTask () {
  const taskId = Date.now()
  const taskInputValue = document.querySelector('.list-input-field')?.value
  const taskPriority = document.querySelector('.list-input-priority')?.value
  const newTaskElement = createTaskElement (taskId, taskInputValue, taskPriority)

  addNewTaskToToDoList(newTaskElement)
  saveTask(taskId, taskInputValue, taskPriority)
  resetInputState()
}

function resetInputState () {
  const inputElement = document.querySelector('.list-input-field')

  inputElement.value = ''
  inputElement.focus()
  
  onChange()
}

function removeTask (taskId) {
  const taskElement = document.querySelector(`#task-${taskId}`)

  if (taskElement) {
    taskElement.parentNode.removeChild(taskElement)

    listOfTasks = listOfTasks.filter(task => task.id !== taskId)
    setTasksToStorage()
  }
}

function createTaskElement (taskId, taskInputValue = "", taskPriority = 0) {
  const liElement = document.createElement('li')
  const pElement = document.createElement('p')
  const spanElement = document.createElement('span')
  const buttonElement = document.createElement('button')
  
  liElement.setAttribute('class', 'todo-task')
  pElement.setAttribute('class', 'common-border')
  spanElement.setAttribute('class', `task-priority common-border priority-level-${taskPriority}`)
  buttonElement.setAttribute('class', `task-remove-btn common-border`)
  
  pElement.innerText = taskInputValue
  spanElement.innerText = taskPriority
  buttonElement.innerText = '-'

  buttonElement.addEventListener('click', function() {
    removeTask(taskId)
  })
  
  liElement.setAttribute('id', `task-${taskId}`)

  liElement.appendChild(pElement)
  liElement.appendChild(spanElement)
  liElement.appendChild(buttonElement)

  return liElement
}

function addNewTaskToToDoList (newTaskElement) {
  const todoListElement = document.querySelector('.todo-list-container')

  todoListElement.appendChild(newTaskElement)  
}

function loadTasksFromStorage () {
  listOfTasks = getTasksFromStorage()

  listOfTasks.forEach(function (task) {
    const newTaskElement = createTaskElement (task.id, task.text, task.priority)

    addNewTaskToToDoList(newTaskElement)
  })
}

function saveTask(taskId, taskInputValue, taskPriority = 0) {
  const task = {
    id: taskId,
    text: taskInputValue,
    priority: taskPriority
  }

  listOfTasks.push(task)
  setTasksToStorage()
}

function getTasksFromStorage () {
  return JSON.parse(localStorage.getItem('tasks') || [])
}

function setTasksToStorage () {
  return localStorage.setItem('tasks', JSON.stringify(listOfTasks))
}

init ()