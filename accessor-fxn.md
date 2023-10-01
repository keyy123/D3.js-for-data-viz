Goal: learn how to use accessor fxns to get data

- Accessor Fxn = fxn that returns an object's property
- Our next step in this project is to draw some shapes

### What is the next step?
- We will draw some circles since scatterplot data look like dots
- We want to draw only the amount of circles needed no more or less so we'll make a selection of circles that should be empty since no circles exist. 
- second, we will join the data from dataset with the empty selection
- third, force dataset into enter selection
- last, draw circles for each item in enter selection

exercise 1 - draw the dots
1. make an enter selection for all circle elements within the g element 
2. link data from dataset to the selection from step 1 
3. join/link data from dataset to circle elements and create one for 
each data point in enter selection or remove excess circles for each item in exit selection


### How to change the position and size of each circle?
- We want to change the `cx` BUT we want the `cx` for each point to 
change based on the datapoint instead of being the same value
- Accessor fxns solve the issue of how to get data linked to a specific circle
- Accessor fxns AKA accessors are fxns that access an object property (hence accessor)
- If we have data joined to an element, it (the data) will be passed into our accessor function which D3 does in the background. 

exercise 2 - make accessors to access specific props
1. Make an accessor that takes in data and returns a prop `currently` and it's nested prop `humidity`
2. Make an accessor that takes in data and returns a prop `currently` and it's nested prop `apparentTemperature`
3. Change the `cx` attribute to use the Accessor function as the value
4. Repeat step 3 for the `cy` attribute for each circle

### What is some theory to consider for scatterplots?
- 2 axes in scatterplot: x (humidity in this case) and y (temp)
- Purpose of scatterplot = show link between 2 sets of data 
- Usually the goal is to see if one set of data affects the other
(here, we think humidity could affect the temp so humidity (x-axis) is the *CAUSE* and apparent temp (y-axis) is the *EFFECT*). 
- The general rule of thumb is the cause should be drawn on the x-axis and the effect, y-axis. 

#### Why is it a good idea to have accessor functions around?
- We will be able to use accessor anywhere and as often as we want
- We abstract the process of finding the right property to work with 
which is great for productivity


#### Caveats and Wrap up
- We'll add `r` and `fill` attributes to the circles within the `svg`
- We'll set `r` to value `5` and `fill` and value to `red`
- Unfortunately, Our plot looks like a straight line due to the fact that the circle are not properly spread out to make the visual meaningful. This will be solved in the next lesson when we learn about `scales!`