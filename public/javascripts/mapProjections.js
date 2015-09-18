var europeProjection = function(element) {
  var projection = d3.geo.mercator()
    .center([23, 57])
    .rotate([4.4, 0])
    .scale(400)
    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
  var path = d3.geo.path()
    .projection(projection);
  return {path: path, projection: projection};
};