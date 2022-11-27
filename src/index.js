import './styles.css';

import {Todo, TodoList} from './classes/index.js';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender Javascript!!!');
// todoList.nuevoTodo( tarea );

// console.log( todoList );
// crearTodoHtml( tarea );

// localStorage.setItem('mi-key','ABC123');
// sesisonStorage.setItem('mi-key','ABC123');

// setTimeout(()=>{
//     localStorage.removeItem
// }, 1500);

todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml); pro tip2

console.log('todos', todoList.todos);
