import './styles/styles.scss';

import 'bootstrap';

const input = document.getElementById('todo-input');
const addBtn = document.querySelector('#todosubmit');
const todoList = document.getElementById('todo-list');
const deleteBtn = document.getElementById('todo-delete-all');

// function removeTask(el) {
//   const remove = el.target.parentNode;
//   const {
//     parentNode,
//   } = remove;
//   const todoListist = parentNode.parentNode;
//   ulist.removeChild(parentNode);
// }

function clearAll() {
  todoList.innerHTML = '';
}

function createEl(e) {
  e.preventDefault();
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.innerText = input.value;
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('todo-delete');
  deleteButton.innerText = 'Delete';
  li.appendChild(deleteButton);
  todoList.appendChild(li);
  input.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === 'todo-delete') {
    const todo = item.parentElement;
    todo.remove();
  }
}
todoList.addEventListener('click', deleteCheck);
deleteBtn.addEventListener('click', clearAll);
addBtn.addEventListener('click', createEl);
