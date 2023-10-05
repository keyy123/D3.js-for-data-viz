Goal: Observe the linear scale for changing continuous data and learn to write a scale. 

Let's assume we still have an array 
`
const slices = [100, 200, 300, 400, 500]
`

### How to define a scale? 
- First, we need to save a scale in a variable for later use
- D3 creates scales but we need to tell D3 to do so and each scale is made for specific contexts. 
- `scaleLinear` API will take in 2 optional arguments: domain and range
- If nothing besides a number is passed to `scaleLinear` that same value will be returned since no scaling has been apploed

exercise 1: create a scale
- In scales.js, create a variable called `scale`
- use a function called `d3.scaleLinear()`
- log it to the console (It should return a minified function )
- Pass another argument into the callback `scale`


### How to add a domain and range?
- To change the numbers (scaling), we use `domain()` method and pass in the domain for the scale (min and max within in array)
-`const scale = d3.scaleLinear().domain([100, 500])` 
- `domain` method is called on a scale object from `scaleLinear` method
- `domain` tells scale function about the range of possible values in our data
- `range` scales the domain to values that we need to work with 
- `const scale = d3.scaleLinear().domain([100, 500]).range([10, 350])`
- The argument for `range` = data to scale domain up/down to
- Ranges will usually be the svg width or height at most (max) and 0 at least 
- The issue with using `0` as low end of range is 0 means `null`. This means that shapes may not appea which is confusing so it's better to give a value. 


### How to use scales?
- make a fake dataset in an array of 5 values
- create a linear scale using d3 
- pass in a domain based on the dataset in first step
- create a range to scale the domain to 
- log it in the console


### What are D3 array functions?
- If we have data that changes, we would have to change the hard coded domain each time which is bad
- If we let d3 use `array functions`, d3 will handle that for us (updating the domain)
- read more about d3 array [here](https://github.com/d3/d3-array)
- D3 Array has 3 methods: `min`, `max`, and `extent`
-`d3.scaleLinear().domain([d3.min(slices), d3.max(slices)])`
- `extent()` = shorthand for both `max` and `min` fxn for domain

### Update code to be dynamic and scalable
- Use `extent` to make domain flexible

