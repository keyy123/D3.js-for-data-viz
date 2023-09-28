Goal: Learn about an old pattern in data vizs that still applies to D3
but is not encouraged to be used

### What is the update pattern?
- It is another way to work with the EUE selection
- You would work with each selection alone (update then enter ...)
- `join()` API solves this issue by working with all 3 at once while with the update pattern we work with all 3 separately in this order: update -> enter -> exit. (UEEx)


### How to make the update selection?
- To use the update selection pattern, we must NOT use `join` API
```
// copy & paste in js file
const data = [10,20,30,40,50]

const el = d3.select('ul')
    .selectAll('li')
    .data(data)
    .text(d => d)

console.log(el)
```
- We have to update the current selection (update selection) after data has been joined (using `data` API)
- When `data` API is called, it means the update pattern begins since we'll update our list items to show the numbers from data points
- If data points show up on li elements, we move on the the other selections


### The enter selection 
- To still use update pattern, we start a new line then call `enter()` API on the initial selection (`el` variable)
- All selection objects have a `enter` method which looks for `_enter` prop in current selection and return it if it exists
- We can only use `enter` and `exit` selections after calling `data()` method. `data` creates these selections for us. 
- `enter()` only returns enter selection while `join()` addes new elements for you based on the enter selection. 

exercise 1:
- Access the enter selection for the el variable 
- Append list elements to the DOM 
- output the data point joined to the element as text


### The exit selection 
- we do a similar process to `enter()` but with `exit()`
- update pattern is how ppl used to handle UEEx before the `join` API but movinf forwarrd we will use join since it is simpler 
- We looked at the update pattern b/c `join` abstracts some of the steps which is good for development but bad for learning. 

note: To learn new tools better, you need to learn what problem the tool solves AKA how do we do the thing we want without the tool? 

exercise 2:
- using prior code, return exit selection from `el` variable
- remove unneeded variables within exit selection


