"use strict";

const todoList = {
    todos: ['test', 'test2', 'test3'],
    displayTodos: function () {
        this.todos.forEach(element => console.log(element));
    },
};

// todoList.todos.push('test');
// todoList.todos.push('test2');


// todoList.displayTodos();

todoList.displayTodos2();