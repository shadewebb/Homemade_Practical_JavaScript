"use strict";

const todoList = {
    todos: [],
    displayTodos: function () {
        this.todos.forEach(element => console.log(element));
    }
};

todoList.todos.push('test');
todoList.todos.push('test2');


todoList.displayTodos();