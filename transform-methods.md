Goal: Learn how to modify elements using transformation APIs of D3

### What are transformation methods?
- On D3 selection docs, there is a section called [*Modifying Elements*](https://github.com/d3/d3-selection#modifying-elements)
- This methods allow us to change the content our HTML doc
- We technically already know a transformation method (`append()`)
b/c it changed the selection into a new one 
- Here is a trick to know if a D3 method is a transformation method,
It returns a new selection and it will be the old selection but with new changes

### What are attributes?
- `attr()` is another transformation method that focuses on the attribute of that selection
- example: ```const el = d3.select("body").append("p").attr("class", "foo");```
- We select the body element then add a new p tag to the body and select the new p tag and change its class attribute to "foo"
- `attr()` has 2 arguments: Name of the attribtue and the value for the attribute (optional)
- if 2nd arg is omitted then the attribute's value will be it's current value 

### How do we modify text?
- `text()` API can be used to add text content to an HTML element or selection
- This API has only 1 optional argument and if it is not provided, will return the current text within the element. 

```
const el = d3.select('body').append('p').attr('class','foo').text('Hello World')

console.log(el);
```

### How to format D3 code?
- You need to indent each function/method on a new line to increase readibility 
```
const el = d3.select('body')
  .append('p')
  .attr('class', 'foo')
  .text('Hello World')
```

### What are caveats for transformation methods in D3?
- They require a selection to exist before we can use it (`select()`) else we get an error
- Each transformation method returns a old selection with update nodes