"use strict";

const todoList = {
    todos: [],
    displayTodos: function () {
        this.todos.forEach(element => console.log(element));
        console.log('');
    },
    addTodos: function (todoText) {
        let completed = false;
        this.todos.push({todoText, completed});
        this.displayTodos();
    },
    changeTodos: function (value, position) {
        this.todos[position].todoText = value;
        this.displayTodos();
    },
    deleteTodos: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    completedTodo: function (position) {
        this.todos[position].completed = true;
        this.displayTodos();
    }
};

todoList.addTodos('testing');
todoList.addTodos('testing again');

todoList.changeTodos('I want to change value 1', 0);

todoList.deleteTodos(1);

todoList.completedTodo(0);

//I want to be able to toggle a todo as completed or not
//I want to display if a todo is completed or not