import 'bootstrap';
import { list } from 'postcss';
import TodoList from './todolist';

const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#todosubmit');
const todoList = document.querySelector('#todo-list');
const deleteBtn = document.querySelector('#todo-delete-all');
const filterCompleted = document.querySelector('#todo-completed');
const filterUncompleted = document.querySelector('#todo-uncompleted');
const allBtn = document.querySelector('#todo-all');


class TodoApp extends TodoList {
  #list = {};

  constructor(form, todoList, deleteBtn, filterCompleted, filterUncompleted, allBtn, addBtn) {
    super();

  }
  
  createToDo(todo) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    listItem.id = todo.id; 
  }

  static createDeleteButton(listener) {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-delete');
    deleteButton.innerHTML = `<span class="todo-delete-item">Delete</span>`
    deleteButton.addEventListener('click', listener);
  
    return deleteButton; 
  }
 
  static createEditButton(listener) {
    const editButton = document.createElement('button');
    editButton.classList.add('todo-edit');
    editButton.innerHTML = `<span class="todo-edit-item">Delete</span>`;
    editButton.addEventListener('click', listener);
    
    return editButton;

  }

  static createTodoInput(todoText) {
    const todoInput = document.createElement('input');
    todoInput.classList.addEventListener('todo-item-input');
    todoInput.value = todoText;
    todoInput.readOnly = true;

    return todoInput;

  }





// function clearAll() {
//   todoList.innerHTML = '';
// }

// function createEl(e) {
//   e.preventDefault();
//   const li = document.createElement('li');
//   li.classList.add('todo-item');
//   li.innerText = input.value;
//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add('todo-delete');
//   deleteButton.innerText = 'Delete';
//   li.appendChild(deleteButton);
//   todoList.appendChild(li);
//   input.value = '';
// }

// function deleteCheck(e) {
//   const item = e.target;
//   if (item.classList[0] === 'todo-delete') {
//     const todo = item.parentElement;
//     todo.remove();
//   }
// }
// todoList.addEventListener('click', deleteCheck);
// deleteBtn.addEventListener('click', clearAll);
// addBtn.addEventListener('click', createEl);
