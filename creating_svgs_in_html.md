Q: How do we make a rectangle shaped SVG?
E:
1. Place shape within an SVG HTML element
    - We use the '<rect>' tag within the '<svg>' element
    - The browser won't draw the shape unless it's within the <svg> 
    - This is the same for the other shapes

2. Make a self-closing tag within an SVG HTML element


## Here are a list of attribute that work on SVG shapes

| Attribute | Description | 
| :--------: | :---------: |
| *width*    | The width of the shape. Measurement in pixels. |
| *height* | The height of the shape. Measurement in pixels. |
| *fill* | Color of the shape. Supports any valid CSS color value. (Named, Hex RGB, RGBa, HSL, HSLa)|
| *stroke* | Color for the border of the shape, if any. Supports any valid CSS color value. |
| *stroke-width* | The width of the stroke. Measurement in pixels |
| *x* | x-coordinate |
| *y* | y-coordinate |


## Q: How to change the color of an SVG shape?

E: 
- Newbies use wrong CSS props to change shape's lool
- SVG Shapes don't use ```background-color``` or ```border``` css props
- To use a color on a SVG shape,  use the ```fill``` property. 
- To change the border of an SVG shape, use ```stroke``` property not ```border```
- The width of the stroke can be changed using ```stroke-width``` prop


C: Use the right CSS props for SVGs or worst case nothing happens


## Q: How to change the coordinates of an SVG shape? 

E: 
- SVGs uses coordinates to move on the screen 
- There are only 2 axes for SVGs: x-axis (horizontal) and y-axis (vertical)
- Positive x (move to the right), Negative x (move to the left)
- Positive y (move to the bottom), Negative y (move to the top)
- If no coordinates given, The shape will be positioned on the top-left most spot on the screen.
- Negative coordinates can change shapes to leave the container and be invisible to the user (overflow) and it's not recommended (why?)

C: 


## Q: How to create a circle SVG within HTML?

E: 
- Use the <pre><circle></pre> within an <pre><svg></pre> 
- ```<circle r="#" cx="#" cy="#" fill="#" stroke="#" stroke-width="#"></circle>```
- setting r (radius) sets the width and height to 2r 
- example: r = 100, 2r = 200 (width, height)
- cx - changes the circles coordinates on the x-axis, cy - changes the circles coordinates on the y-axis

C:


## Q: How to create a line SVG within HTML?

E: 
- Use the <pre><line></pre> element. 
- Lines has the first 4 coordinates or 2 sets of points: (x1, y1), (x2, y2)
- each individual point is a property for a line (x1, y1, x2, y2)  
- ```<line x1="#" y1="#" x2="#" y2="#" stroke-width="10" stroke="blue"></line>```
- (x1, y1) = starting point of line segment
- (x2, y2) = ending point of line segment
- `stroke` and `stroke-width` props are required to make the line visible on the browser
- Lines have no `fill`

C: 

