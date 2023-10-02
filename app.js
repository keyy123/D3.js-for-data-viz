async function draw() {
    const dataset = await d3.json('./data.json');

    xAccessor = (d) => d.currently.humidity
    yAccessor = (d) => d.currently.apparentTemperature

    let dimensions = {
        width: 800,
        height: 800,
        margin: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        }
    }
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height);
    
    const ctr = svg
        .append("g")
        .attr("transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`    
    )

    ctr.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr("cx", xAccessor)
        .attr("cy", yAccessor)
        .attr("r", 5)
        .attr("fill", "red")

}

// currently -> humidity + apparentTemperature

draw();