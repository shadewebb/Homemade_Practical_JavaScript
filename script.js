"use strict";

const todoList = {
    todos: ['test', 'test2', 'test3'],
    //Is this code good enough? Can I pass "this" to an arrow function somehow? 
    //Should a method use arrow functions?
    displayTodos: function () {
        this.todos.forEach(element => console.log(element));
    },
    //Arrow function in strict mode "this" does not work, must use todoList
    displayTodos2: () => todoList.todos.forEach(element => console.log(element))
};

// todoList.todos.push('test');
// todoList.todos.push('test2');


// todoList.displayTodos();

todoList.displayTodos2();