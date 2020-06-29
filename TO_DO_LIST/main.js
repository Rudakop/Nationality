let prevInputValue

function init () {
  addEventsHandlers()
}

function addEventsHandlers () {
  const addButton = document.querySelector('.list-btn-add')
  const inputElement = document.querySelector('.list-input-field')
 
  addButton.addEventListener('click', addNewTask)
  inputElement.addEventListener('keyup', onChange)
}

function onChange (event) {
  const newValue = event.target.value

  if (prevInputValue === newValue) return

  const addButton = document.querySelector('.list-btn-add')

  prevInputValue = newValue

  // Disable addButton
  if (newValue === '') {
    addButton.setAttribute('disabled', true)
  } else {
    addButton.removeAttribute('disabled', false)
  }
}

function addNewTask () {
  const taskInputValue = document.querySelector('.list-input-field')?.value
  const taskPriority = document.querySelector('.list-input-priority')?.value

  console.log(taskInputValue, taskPriority)

  const newTaskElement = createTaskElement (taskInputValue, taskPriority)

  addNewTaskToToDoList(newTaskElement)
}

function createTaskElement (taskInputValue = "", taskPriority = 0) {
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

  liElement.appendChild(pElement)
  liElement.appendChild(spanElement)
  liElement.appendChild(buttonElement)

  return liElement
}

function addNewTaskToToDoList (newTaskElement) {
  const todoListElement = document.querySelector('.todo-list-container')

  todoListElement.appendChild(newTaskElement)  
}

init ()