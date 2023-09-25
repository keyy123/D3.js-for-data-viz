goal: Learn about the enter selection from D3

* The data() API returns a new selection object BUT it has 2 new props: `_enter` and `_exit`. We want to learn about `_enter` today

### What is the enter selection? 
- Joining data is harder if ratio of data: elements is not 1 to 1
- If # elements > # data points = remove excess elements
- Else, add more elements
- `_enter` selection = a list of data items that have not been linked to an element
- In our case, if all the elements have data joined to them then _enter should be an empty list (all data is joined to a element)
- If there is less elements than data, the _enter will hold some nodes to show that not all data is joined
- [insert picture for nodes not linked here]
- Linked data is shown in `_group` while `_enter` will show unjoined data
- We use the `_enter` prop to let us know how many new elements we need to make to link data with


#### What is an enter node? (Tangent)
- It is a virtual element in D3 that does not use space on HTML Doc
- It is stored in memory 
- It does not hold content/attribute only data


### What is the `join()` method?
- an API that does 2 things: 1. Create a new element based on the argument, and 2. links the unused data (EnterNodes) from `_enter` to the new element
- It has only 1 argument: 'name of the HTML tag to create'

exercise: 
1. Make a list of data (max: 5 data points)
2. select all HTML elements of a specific tag using D3
3. Join the data to the specific HTML element while using all the unused data at same time
4. Print to the console

#### Why is the new points 'different'?
- The `join()` metho just creates the elements but it does not give them content/attributes (we can do that later)
- The data is linked to the new elements confirmed by checking `_group` prop BUT we see an issue in `_parents` prop
- In the code above, We use `selectAll` API from `d3` global object. This sets the `_parent` prop to the `<html>` element. `join()` then adds the new elements to the one's held in `_parents` which is why they are in the wrong location on the page. 
- Solution: We need to change the element in the `_parents` prop

### How to change the parent selection?
- We just need to use `select` API to pick the parent element with ned before using the `selectAll` API.
- The first time we use either selction API, the _parent = html tag but the second time we call either method, the _parent is the previous selection

exercise: 
1. select the desired parent element you to do add new items on
2. select all of the child elements you want to modify directly
3. join data to the child elements 
4. Create new elements using unused data 


### How to add text to the new element created from join API?

exercise:
1. Add text to the newly created elements from `join()`
hint: we learned this in a earlier branch


#### Why did it affect all the elements?
- `join` returns a new selection that merges `_groups` and `_enter` props together 
- This means the items with the used in unused data are the selection so if we change the text after this selection, we change all of the items within the _group and _enter 