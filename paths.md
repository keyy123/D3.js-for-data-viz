#Paths

They are hard to master but are needed to make the most unique and interesting shapes. Remember, You don't need to be a god of SVG paths, we're here to learn what they are in general.

Q: How to create a path?

E: 
- Create a `<path></path>` within an `<svg></svg>` element 
- Example: `<path fill="none" stroke="#000" stroke-width="10"></path>`
- paths have unlimited # of side and can be straight edges or curved. 
- stroke, fill and stroke-width are the same properties
- Paths uses many coordinates and lines then it creates them by the order you placed them in. 
- What makes paths uniques is the command you need to place for each coordinates.
-`<path d="M 100, 100 L 300, 150"></path>` 
- d (data) attribute which is where you put the coordinates for the shape
- Within d attribute, a set of points starting with M means move thte pen to that point *it does not draw anything...*
- a set of point starting with L means line as in move the line from point M to point L *this one actually draws something*
-exercise: Have fun making a  custom shape