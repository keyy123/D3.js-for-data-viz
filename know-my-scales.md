Goal: learn how scales help us alter data into values we can use for 
drawing charts

### What is the problem that scales solves?
- Data is not always well made for drawing shapes 
- Adapting the dataset we have for our chart, math equations, and algo is tougher as the chart used becomes more advanced which makes managing it tough
- This issue gets worse as we try to support mobile phones as well since we would need the chart(s) and data points to be responsively designed as well
- For instance, a dataset with only 3 data points would not look like much on a chart since it would look too small so we would need to increase the scale of the numbers to make it easily visible without too much manipulation 
```
  10 20 30
    x10
100 200 300 

10 20 30 
   x100
1000 2000 3000
```
- Unfortunately, this means that some ppl will not be able to see the data points based on their device and the screen size and even worse other number need to be decreased which make a complicated issue worse 

### What is the solution?
- Scale = a fxn that given data can changes your dataset to redraw cahrt
- Scales takes an `input`, apply a transformation to each data point and output a `scale`
- scales can make numbers, dates, colors, and other data types 
- D3 takes a more balanced approach to as many data viz scenarios as possible
- Scales are just fxns BUT they don't draw anything on the DOM that is our job. Scales just give us data we can use to draw our shapes


### What are Domain and range?
- We need to know `domains` and `ranges` before we can start with scales
- Say we track the # of pizza slices we sell with the following data: 100 - 500 (5 points in 100 increments) and we need to draw a chart based on this data
- Although we have a dataset, we may still need to adjust the data to fit on the chart on the DOM so we need to pass an `input domain` to a scale
- `Input domain (domain)` = a range of possible values within our data. 
```
Our array 

const slices = [100, 200, 300, 400, 500]
```
- The domain is the `min` and `max` values in the array so our domain is 100 and 500. 
- This means our chart's possible values are between 100 and 500. 
- Now D3 needs to know what the possible output can be
-`output range (range)` = the range of possible output values
- For instance, our domain is 100 - 500 and our output range is from 10 - 350. D3 will change the data to be values within the output (range) to be within the viewing area size. 
- Min: 100 (domain) is linked with 10 (range)
- Max: 500 (domain) is linked with 350 (range)
- Any numbers in between will be scaled properly which is why scales are important. They change the data to match our charts without making a crazy algo. 
- We just need to focus on the chart size and data 