"use strict";

const todoList = {
    todos: [],
    displayTodos: function () {
        this.todos.forEach(element => console.log(element));
    },
    addTodos: function (todoText) {
        this.todos.push(todoText);
        this.displayTodos();
        console.log('');
    },
    changeTodos: function (value, position) {
        this.todos[position] = value;
        this.displayTodos();
        console.log('');
    },
    deleteTodos: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
        console.log('');
    }
};

todoList.addTodos('testing');
todoList.addTodos('testing again');

todoList.changeTodos('I want to change value 1', 0);

todoList.deleteTodos(1);