const slices = [100, 200, 300, 400, 500]

const scale = d3.scaleLinear()
    .domain([100, 500])
    .range([10, 200]);

console.log(scale(475));