// Exercise 1: Classes
const d3Body = d3.select('body')
    .append("p")
    .classed("food", true)
    .classed("sleep", true)
    .style("color", "black")
    .text("bar");

console.log(d3Body);