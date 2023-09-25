const data = [10, 20, 30, 40, 50];

// exercise 1 - using join API
// const el = d3.selectAll('li')
//     .data(data)
//     .join('li');

//exercise 2 - using select + selectAll

const el = d3.select('ul')
    .selectAll('li')
    .data(data)
    .join('li')
    .text("Hello")
    // exercise 3 - add text

console.log(el);