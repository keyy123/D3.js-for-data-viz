Goal: Learn how to select elements from HTML doc with D3

### What are selections?
- Objects that represent an HTML element from the document
- This lets us add, delete, and change elements

### How to make a selection?
- Browser already has functions like `document.querySelector()`
- D3 has its own version of these browser selection functions such as `d3.select()`
- You see that d3's version of selection makes it a little easier to pick elements
- NOTE: it's not clear when it's better to use `d3.select()` vs `document.querySelector()`

Exercise: 
1. Use `document.querySelector` to select the `body` tag and print to console 'Vanilla, body' 
2. Use `d3.select` to select the body and print to console 'D3, body'
3. Use the 'inspect' tab in your browser after running your app on localhost to see the results in the 'console' tab


NOTE: You'll see solution in `app.js` but you should try it yourself before you peak at the solution. If you do try to do it for 10 minutes but it does not work, use the solution to complete your exercise then try it again from scratch until you 'get' it!

* I should make a branch for each step so I can practice each step by copying the original branch name and add the word 'practice' to it!


### How to understand d3 selection objects?
- In the object returned from `d3.select` API, We have 2 props: `_groups` and `_parents`
- `_groups` is an array that holds a list of elements found by d3's `select` API. 
- `_groups` array will hold at least 1 item if found or 0 if nothing was found. 
- In case, `select` find many elements that match the select criteria
it will return the first match
- `_parents` is also an array that holds list of parent elements of the selected element(s)


### How to select multiple elements with D3? [Set time for 5 minutes and try to read documentation to find answer]
- `select` API above only returns the first element that matches the element with put in the function which is not a good idea if we need many items
- We use the `selectAll` API from D3 

Exercise: 
1. select all paragragh elements from HTML doc via d3
2. print the result to console and read it from inspector in browser

NOTE: You'll see solution in `app.js` but you should try it yourself before you peak at the solution. If you do try to do it for 10 minutes but it does not work, use the solution to complete your exercise then try it again from scratch until you 'get' it!


#### What is a node? (tangent)

- Node = technical term for elements, attributes, and content in the HTML doc
- Elements = nodes, attributes = nodes, content = nodes
- Content can be text or anything within a node. 
- A node list = an HTML element list


### What is the D3 selection package?
- Remember we learned that D3 is very modular (split into many packages we can pick and choose)
- The functions that let us use selections and modify them are found in the `D3 Selction` package [here](https://github.com/d3/d3-selection)
- The `D3 Selection` package does the following besides just picking HTML elements: 
    1. Alter elements
    2. Join data
    3. Merge other elements

note: We are using the CDN so we have all the packages/modules already so let's move along
