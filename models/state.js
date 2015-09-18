var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stateSchema = new Schema({
  fillKey: String,
  current: Boolean //,
  // entries: [{year: int, month: int, day: int, link: String}]
});

module.exports = mongoose.model('State', stateSchema);