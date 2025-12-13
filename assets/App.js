const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'makan',
  dueDate: '2025-11-05',
  time: '12:00'
}, {
  name: 'minum',
  dueDate: '2025-11-05',
  time: '13:00'
}];


renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const value = todoList[i];
    const {name, dueDate, time} = value;
    const html = `
      <div class="name-button">${name} </div>
      <div class="dueDate-button">${dueDate}</div>
      <div class="time-button">${time}</div>
      <button onClick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button"><img class="bin-image" src="assets/images/trash.svg"></button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
 
  saveTodoList();
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const inputDateElement = document.querySelector('.js-date-input');
  const dueDate = inputDateElement.value

  const inputTimeElement = document.querySelector('.js-time-input');
  const time = inputTimeElement.value

  todoList.push({
    name,
    dueDate,
    time
  });

  inputElement.value = '';

  renderTodoList();
  saveTodoList();
}

function saveTodoList() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}