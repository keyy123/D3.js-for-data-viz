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

    dimensions.ctrWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right;
    dimensions.ctrHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height);
    
    const ctr = svg
        .append("g")
        .attr("transform",
        `translate(${dimensions.margin.left}, ${dimensions.margin.top})`    
    )

    const xScales = d3.scaleLinear()
        .domain(d3.extent(dataset, xAccessor))
        .range([0, dimensions.ctrWidth])

    const yScales = d3.scaleLinear()
        .domain(d3.extent(dataset, yAccessor))
        .range([0, dimensions.ctrHeight])
    
    
    ctr.selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr("cx", d => xScales(xAccessor(d)))
        .attr("cy", d => yScales(yAccessor(d)))
        .attr("r", 5)
        .attr("fill", "red")

}

// currently -> humidity + apparentTemperature

draw();