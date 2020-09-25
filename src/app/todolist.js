import uniqid from 'uniqid';

export default class TodoList {
    #todos = [];

    get todo() {
      return this.#todos;
    }

    set todo(todos) {
      localStorage.setItem('todo', JSON.stringify(todos));
      this.#todos = todos;
    }

    constructor() {
      const storage = JSON.parse(localStorage.getItem('todos'));
      this.todos = storage || [];
    }

    // Добавить новую тудушку, на выходе принимаем text. Each todo is an object
    addTodo(text) {
      const todo = {
        id: uniqid(),
        text,
        isDone: 'false',
      };
      // adding more todos to the array
      this.#todos = [...this.#todos, todo];
      return todo;
    }

    // Remove the target todo. return todos with id != target id
    removeTodo(id) {
      this.todos = this.#todos.filter((todo) => todo.id !== id);
    }

    editTodo(id, text) {
      this.todos = this.#todos.map((todo) => {
        if (this.id === id) {
          return {
            ...todo,
            // if id is equal to this.id => change the text of todo to the new one from params
            text,
          };
        }
        return todo;
      });
    }

    // Filter todos Done/NotDone
    filterTodo(filter) {
      if (filter === 'completed') {
        return this.todos.filter((todo) => todo.isDone);
      }
      if (filter === 'uncompleted') {
        return this.todos.filter((todo) => todo.isDone);
      }
      return this.todo;
    }

    checkedTodo(id, isDone) {
      this.todos = this.#todos.map((todo) => {
        if (this.id === id) {
          return {
            ...todo,
            isDone,
          };
        }
        return todo;
      });
    }
}
