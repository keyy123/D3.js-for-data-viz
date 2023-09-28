Goal: Learn how to change `join()` APIs default actions using other functions 

### Why would we want to change `join()` behavior?
- We may want to customize our data-visuals like playing an animation when an element is entering or exiting the page
- Example of default join action:
```
const el = d3.select('ul')
    .selectAll('li)
    .data(data)
    .join('li')
    .text(d => d)
```
- We pass join a string of the element to create and join data from `_enter` to and elements in `_exit` to remove (default)
- We can customize `join` by passing in 3 optional functions: 1. Enter selection, Updating current selection, and exit selection

### How do we customize `join()` for enter selections?
- We can pass in a function using `enter` as the first parameter. D3 will recognize the first param as the enter selection. 
- This will stop `join` from adding a new element to the document BUT we have 100% creative control over what happens to the enter selection (first parameter)
```
const data = [10, 20, 30, 40, 50]

const el = d3.select('ul')
  .selectAll('li')
  .data(data)
  .join(
    enter => {
      return enter
    }
  )
  .text(d => d)


console.log(el)
```
- The code above creates a custom join behavior that just returns the enter selection and nothing else


exercise 1: Make a custom fxn that appends elements to the DOM
1. Using the code above, modify the custom join fxn to imitate default behavior of adding an list element to the DOM

hint: It's a selection method that allows you to add elements to a selection *look at the docs*

##### What is the `append()` API?
- It is a selection method (method on the selection obj) that let us create and add an element to the selection 
- It has 1 argument: HTML element to create and append
-d3.select('li').append('p')

#### Why is there only 2 results using `append()`?
- If you forget to return the enter selection, D3 will not merge the enter selection with the list (li) selection we have in the HTML Doc
- This means the 2 linked data pieces we see are the original selection items w/o the enter selection merged with it. 
- This means D3 does not know about the new li elements so this is why you should literally `return` the enter selection when making custom join functions
- This is a common mistake 


### Exercise: Custom join behavior
1. Make a d3 selection for a parent element
2. Select all of the parents child elements of a certian tag
3. link data to the elements 
4. create and append li elements to the parent selection and return the enter selection using a custom join function that adds an inline style of your choice
5. Set text content to the data point for each element


#### What are the benefits of using custom join functions?
- We can use different method to different selections, In the above exercise, The `style()` API will only affect the enter selection BUT not element that are updated (current selection) or exiting document 

### What is the update selection?
- The 2nd function we can pass to `join()` API is the `update` selection
- update selection = elements that are being updated AKA elements that already have data linked to them
- We can use update selection assuming we already have an enter selection function made. 
- The elements affected by `update` fxn can be found in the `_groups` prop of a selection 
```
basic example that should do nothing.
const el = d3.select('body')
    .selectAll('p')
    .data(data)
    .join(
        enter => {
            return enter.append('li);
        },
        update => return update
    )
```

exercise: 
1. modify the code from the example to select ul as parent element
2. select all li from parent element
3. link choose data to use for joining process 
4. link data to elements with a enter fxn that returns a enter selection which adds lis and links data to it and style text pink 
5. provide a update fxn that returns a update selection that styles the text color green
6. update text content to return a selection that will be like the prior selection but have text content that is the same as the data point

- The default behavior of `join()` API is to do nothing to the `update` selection/current existing elements (same as `update => return update`)
- If we decided to add inline styles to update, the existing HTML elements we coded would be affected (see solution to exercise 2)


### What is the exit section?
- the third and last function we can pass into `join()` is the exit selection fxn
- If we make define the fxn, D3 expects us to remove the element and return the selection 
- This fxn has only 1 argument: the exit selection
```
join(
    enter => enter.append('p'),
    update => update,
    exit => exit
)
```
- exit selection object has a method on it to remove elements in _exit called `remove()`
- Using `remove()` is default behavior for the exit selection
- If we had too many elements that were not linked to data then `remove` would have removed them from the DOM

Caveats:
1. The order of the functions matter: 1st function = enter, 2nd = update, 3rd = exit always

