Goal: Learn how to add new elements into existing element in DOM with D3

### How to add new elements to old element in DOM with D3?
- `append` API lets us do that in D3
- To use `append`, we need to make a selection (`select` API) first so D3 know where to add a new element 
- `append` takes in 1 argument: 'name of the element to add' 
- Example: Let's add a p tag the body which is empty at the moment

Exercise: 
1. Select the body using select API from D3 then add a new p element to it 
2. Go to the devTools and see the results in the console what is the first element within the _group prop

```
const d3Selection  = d3.select("body").append('p')

console.log(d3Selection)
```
note: need to use the inspector to see the result here


### What is going on when we use the ```append()``` method?
- Since the tag does not have content (text, images, etc), we can't see anything on the page but using devTools we can see the new tag
- The append() method does 2 things in 1, It creates a new element first, then it adds it into the selection 
- `append()` returns a selection which you should see in devTools console tab (The object is labeled 'Selection')
- The selection object from the `append()` API will be of the new element (p tag in this case) 
- If you try to modify a D3 selection after an append operation happens, you'll end up changing the newly appended element (p) rather than the first selection (body)


NOTE: You can chain D3 methods like normal JS APIs if you want to there is no preference but make sure if you are on a team you follow its style conventions closely.  

```
const reverseStr = "welcome".split().reverse().join();
```