### What are the step to review?

1. Get data from external source
2. Set chart's dimensions
3. Draw the image 

- no matter what viz you're making this will always be the steps for 
drawing a chart. 
- We already have step one done in app.js. Lucky for us, Step 1 is the most important step b/c we can't draw the chart without the data. 
- The chart's dimensions (size and position) affects those of our shapes. If the shape is too big or outside our canvas, it won't appear on screen which is bad. 

exercise 1 - set dimensions for chart & draw the image

1. In app.js within the draw fxn body, create an object that has the dimensions for the chart (it's a 2d chart)

2. select the element with the id "chart" using d3

3. append and svg element to our selection with attributes of width and height with values from dimension object in step 1