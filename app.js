const data = [10,20,30,40,50]

const el = d3.select('ul')
    .selectAll('li')
    .data(data)
    .text(d => d)

// exercise 1
el.enter()
    .append('li')
    .text(d => d)

// exercise 2 
el.exit()
    .remove()

console.log(el)