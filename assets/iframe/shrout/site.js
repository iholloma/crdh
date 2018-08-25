var m = [30, 10, 10, 10],
    w = 775 - m[1] - m[3],
    h = 700 - m[0] - m[2];

var x = d3.scale.ordinal().rangePoints([0, w], 1),
    y = {},
    dragging = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg = d3.select("body").append("svg:svg")
    .attr("width", w + m[1] + m[3])
    .attr("height", h + m[0] + m[2])
  .append("svg:g")
    .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

var color = d3.scale.category20();
    
d3.json("Bellevue.json", function(error, bellevue) {
  if (error) {return console.log(error)};

  x.domain(dimensions = d3.keys(bellevue[0]).filter(function(d) {
  	return y[d] = d3.scale.ordinal()
            .domain(bellevue.map(function(p) { return p[d]; }))
            .rangePoints([0, h]);
 
      }));
 
  line.interpolate("monotone");

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(bellevue)
    .enter().append("path")
      .attr("d", path);


  // Add colored foreground lines for focus.
  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(bellevue)
    .enter().append("path")
      .attr("d", path)
      .attr({'style': function(d) {
         return "stroke: " + color(d.site)
         }})
    .style("opacity", .25);
    
      
  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; });

  // Add an axis and title.
  g.append("svg:g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
    .append("svg:text")
      .attr("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; });

});


// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
}