// Create a "close" button and append it to each list item
//change var for let
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  li.appendChild(t);

  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("-");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



//let prevInputValue
//let totalTasks = 0

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

    
  if (prevInputValue === newValue) return

  const addButton = document.querySelector('.list-btn-add')

  
}
function updateTotalTasks () {
    totalTasks = document.querySelector('.todo-list-container').children.length
  }
function addNewTask () {
  const taskInputValue = document.querySelector('.list-input-field')?.value
  //const taskPriority = document.querySelector('.list-input-priority')?.value

  console.log(taskInputValue)//, taskPriority)

  const newTaskElement = createTaskElement (taskInputValue)//, taskPriority)

  addNewTaskToToDoList(newTaskElement)
  
}


function createTaskElement (taskInputValue = ""){//, taskPriority = 0) {
  const liElement = document.createElement('li')
  const pElement = document.createElement('p')
  const spanElement = document.createElement('span')
  const buttonElement = document.createElement('button')

  liElement.setAttribute('class', 'todo-task')
  pElement.setAttribute('class', 'common-border')
  //spanElement.setAttribute('class', `task-priority common-border priority-level-${taskPriority}`)
  buttonElement.setAttribute('class', `task-remove-btn common-border`)

  pElement.innerText = taskInputValue
  //spanElement.innerText = taskPriority
  buttonElement.innerText = '-'
  const taskId = totalTasks++

  buttonElement.addEventListener('click', function() {
    removeTask(taskId)
  })

  liElement.setAttribute('id', `task-${taskId}`)

  liElement.appendChild(pElement)
 // liElement.appendChild(spanElement)
  liElement.appendChild(buttonElement)

  return liElement
}

function addNewTaskToToDoList (newTaskElement) {
  const todoListElement = document.querySelector('.todo-list-container')

  todoListElement.appendChild(newTaskElement)  
}

init () 