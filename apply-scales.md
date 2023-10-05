Goal: Use `scaleLinear` to change data into coordinates for scatterplots

### What do we transform?
- What do we change x, y coords to?
- We want the coords to show up so that means x should be from 0 to the container width and same with y but w/ height

### How to create the scales?
- We will make scales before drawing circles in `draw`


#### What are the 2 arguments for `extent` d3 array fxn?
- `extent(data: any, accessorfxn)`
- accessor fxn is the 2nd argument to help tell d3 `extent` where to get data from non-array data types 


### How to set container width and height?
- Define dimensions.ctrWidth prop in dimensions object

`
dimensions.ctrWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
repeat for height
`
- By removing width of margin from image's width, we get the container's width and we repeat a similar process witht the height

### How to use the scale?
- We will update circles to use scale by changing function for `cx` attribute to the following snippet:
`.attr("cx", d => xScale(xAccessor(d)))`
- `d` == data joined to elements which we pass to xAccessor function that xScale function uses

### How to update the y-coord?
- Create a 2nd scale for y-axis. Scale should be within limits of the container like x-axis that we did together
