Goal: Learn how to use data within an element to modify HTML elements

### How to output the data?
- We can use `text` API to do more than update a node's text with a static string, we can pass a callback to it. 
`.text(d => d)` means we are taking the data (d) joined to the element and passing it as a value.
- all transformation methods can use a function instead of a static string as a value. 
- we can use arrow functions *makes it easier to read* or write normal function declarations which let's us use `this` keyword. 
