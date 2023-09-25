Goal: learn how to dynamically add classes and styles to a selection

### What is the issue with the `attr()` method?
- `attr()` replaces the exising attribute value if it exists
- visual: `class: foo` -> `attr('class','bar')` -> `class: bar`
- We lose the old class which can be a issue if we just want to add an extra class. 
- If you want to add an additional class practically, you can use the  `classed()` api


### What is the `classed()` method?
- An api that takes 2 arguments: string of the class name and a boolean 
- if 2nd argument is true, the class (argument 1) will be added to an element and else it will be removed from element
- Unlike attr, `classed()` only affects the new class we are passing into it

exercise: 
1. select the body tag with D3
2. append a new element
3. add two classes using d3 
4. add text within the element

### How do we add inline styles using D3?
- `style()` api is a transformation method that adds inline styles
- It takes in 2 arguments: CSS property, and it's value

exercise: 
1. add 1 inline style to selection from previous exercise


Caveats:
- MVP: We must understand what is returned by the methods (`select`, `selectAll`, and other transformation methods)
- Documentation will tell you the return values
- If a method select/create a element = new selection is returned
- If method changes a element/selection = same selection returned
- This helps for debugging later on!