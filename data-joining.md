Goal: Learn to attach data to the shapes and elements drawn with D3

### What is data in D3?
- Data = # and text 
- Data alone does nothing BUT if shown to a reader in a certain way becomes very useful 
- D3's job is to show data (data visualization) in a helpful and engaging way and make it easier for devs
- 2 parts of data visualization: 1. Data, 2. Visuals (HTML and CSS)


### How do we join data?
- Joining data = linking a datum with an element
- D3 makes this easy to do even with large amount of data
- Heres an example [picture here](link)
- With 5 elements (p tags) and 5 data points (10 - 50), we notice that they are not connected
- We use D3 to join data with the HTML elements so 1st p tag is linked with 10 to 5th p tag linked to 50
- After joining data, we can alter the element based on the data linked to it (i.e., If data < 30, make it's text color blue)

### What is the `data()` method?
- `data()` API takes in 1 argument: data to join to a selection
- It will add that data to the selection within a  `__data__` property
- data is a transformation method that returns a new selection 
- It adds 2 new properties: `_enter` and `_exit`
- This is all that is needed to join data to elements

exercise: 
1. make a selection on the page
2. make a list of data points 
3. use data API to join the data with the element
4. look for the __data__ property in the devTools console tab

