Goal: Add space to charts

- Margins add breathing room for a chart and other text content
- Margins also stop shapes from being cut off

### What is the problem margin solves?
- After creating a circle (by appending it to svg element with radius of 15), we see it starts at point (0, 0) where it's not fully visible b/c it's out of bounds of the image (svg) === bad
- Margins can fix this issue specifically
- We will add a `margin` prop within our dimensions object and we will have a `top`, `right`, `bottom`, and `left` prop with value of 50 
```
margin: {
    top: 50
    right: 50
    bottom: 50
    left: 50
}
```

### How does an inner container affect our chart?
- Our image size is 800x800
- We can't change image size with margins alone so we need to make another container
- We need to draw a container in the svg image
- The container needs to be smaller than the svg and centered 
- Inner container size = svg dimensions - margins (both sides)
- Our container size should be 700x700 (800 width - 50 + 50 left + right margin(s))
- By making a container, if we draw a shape in the inner container, the shapes will stay within the bounds of the svg unless it is exceptionally large and goes beyond svg boundaries despite margin. 


### How to start drawing a container?
- In html, There is an element called `g` that is abbreviation for group
- It is not a shape itself like other svg elements BUT it groups other shapes like a div for normal html elements
- `g` has a unique ability to apply properties given to it directly to it's children as well. 
```
<svg>
    <g>
        ...
    </g>
</svg>
```


exercise 1 

1. append a `g` element to the svg 

2. apply a transformation that moves the appended element to the center of the screen (Look up CSS transform)

3. append a circle to the previous appended element 

4. set an `r` attribute to a value of 15 for the circle