var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  rating: Number,
  date: Number,
  comment: String,
});

var Movie = mongoose.model('Movie', movieSchema);
