var map = new Datamap({
  element: document.getElementById('us-map'),
  done: function(datamap) {
    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
      var data = JSON.parse(this.getAttribute("data-info"));
      if (data.fillKey == "VISITED") {
        window.open('/us/' + geography.id, '_self');
      }
    })
  },
  fills: {
    VISITED: '#ffb511',
    defaultFill: '#1295d8'
  },
  data: {
    "AL": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "AK": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "AZ": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "AR": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "CA": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "CO": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "CT": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "DE": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "FL": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "GA": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "HI": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "ID": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "IL": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "IN": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "IA": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "KS": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "KY": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "LA": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "ME": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "MD": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "MA": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "MI": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "MN": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "MS": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "MO": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "MT": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "NE": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "NV": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "NH": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "NJ": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "NM": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "NY": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "NC": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "ND": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "OH": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "OK": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "OR": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "PA": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "RI": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "SC": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "SD": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "TN": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "TX": {
      "fillKey": "VISITED",
      "current": true
    }, 
    "UT": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "VT": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "VA": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "WA": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "WV": {
      "fillKey": "VISITED",
      "current": false
    }, 
    "WI": {
      "fillKey": "defaultFill",
      "current": false
    }, 
    "WY": {
      "fillKey": "VISITED",
      "current": false
    }
  },
  responsive: true,
  scope: 'usa',
  geographyConfig: {
    popupTemplate: function(geo, data) {
      console.log(geo);
      if (data.current) {
        return "<div><img id='current' src='/images/kite.png'></img></div>"
      } else {
        return "<div class='hoverinfo'><strong>" + geo.properties.name + "</strong></div>";
      }
    }
  }
});
// responsive
var margin = {top: 10, left: 10, bottom: 10, right: 10}
  , width = parseInt(d3.select('#map').style('width'))
  , width = width - margin.left - margin.right
  , mapRatio = .5
  , height = width * mapRatio;

var projection = d3.geo.albersUsa()
  .scale(width)
  .translate([width / 2, height / 2]);

var path = d3.geo.path()
  .projection(projection);

d3.select(window).on('resize', resize);

function resize() {
  // adjust things when the window size changes
  width = parseInt(d3.select('#us-map').style('width'));
  width = width - margin.left - margin.right;
  height = width * mapRatio;

  // update projection
  projection
    .translate([width / 2, height / 2])
    .scale(width);

  // resize the map container
  map
    .style('width', width + 'px')
    .style('height', height + 'px');

  // resize the map
  map.select('.land').attr('d', path);
  map.selectAll('.state').attr('d', path);
}