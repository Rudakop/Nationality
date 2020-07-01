let prevInputValue
let totalTasks = 0

function init () {
  addEventsHandlers()
  updateTotalTasks()
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
function updateTotalTasks () {
    totalTasks = document.querySelector('.todo-list-container').children.length
  }
function addNewTask () {
  const taskInputValue = document.querySelector('.list-input-field')?.value
  const taskPriority = document.querySelector('.list-input-priority')?.value

  console.log(taskInputValue, taskPriority)

  const newTaskElement = createTaskElement (taskInputValue, taskPriority)

  addNewTaskToToDoList(newTaskElement)
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
  }
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
  const taskId = totalTasks++

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

init () 