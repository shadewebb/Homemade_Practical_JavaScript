#### These are my notes on writing this app from scratch without referencing the lesson plan, previous program, and only performing research and forum posts.

# Version 1

### Problem 1. 
  
>I need to figure out how to create a testing and console environment locally. Tested this by creating an object and attempting to access this object using Chrome console on the local file, and using F5 to debug in Visual Studio Code. Neither VSC console nor Chrome console allow me to access the object, and declare that it is undefined. The code is correct as I can access the object using JS commands to console.log(todoList.todos); without an issue.

### Problem 2.

>I ran into a situation where I wanted to use forEach instead of a for loop, and I know that forEach is a higher order function which uses a callback function, which callback functions like map(), filter(), and so on usually use arrow functions. I noticed that my method only does one thing, which is returning the value of forEach, so it could be an arrow function as well. HOWEVER, this breaks the special variable `this` reference, since arrow functions have lexical scope, while functions have dynamic scope.

Do not use arrow functions as methods, this is incorrect practice and breaks the special variable `this`. In addition, arrow function should be preferred for callback functions since they are lexical scope and refer to the parent object's scope for what `this` should refer to, which is usually not the callback function itself, but a parent object or function. In short, use functions for methods, and use arrow functions for callbacks (in general).
