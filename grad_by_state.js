const height = 610,
  width = 975;

const svg = d3.select("#choropleth")
  .append("svg")
  .attr("viewBox", [0, 0, width, height]);

d3.json("libs/united_states.json").then(us => {

  const nation = topojson.feature(us, us.objects.nation); // Map simple geometries

  const path = d3.geoPath();

  svg.append("g")
    .selectAll("path")
    .data(nation.features)
    .join("path")
    .attr("stroke", "#999")
    .attr("fill", "white")
    // .attr("fill", d => (d.id in dataById) ? color(dataById[d.id].rate) : '#ccc')
    .attr("d", path);

});