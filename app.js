const data = [10, 20, 30, 40, 50];

// exercise 1
/*
const el = d3.select('ul')
    .selectAll('li')
    .data(data) 
    .join(
        enter => {
            // answer: enter.append('li');
            return enter.append('li');
        }
    )
    .text(d => d)
*/

// exercise 2 
const el = d3.select('ul')
    .selectAll('li')
    .data(data)
    .join(
        enter => {
            return enter.append('li')
                .style('color', 'pink');
        },
        update => {
            console.log(update);
            return update.style('color', 'green');
        }
    )
    .text(d => d)

console.log(el);