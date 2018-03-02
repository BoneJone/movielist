var express = require('express'),
mongoose    = require('mongoose'),
bodyParser  = require('body-parser'),
app         = express();

var index = require('./routes/index');
var newlist = require('./routes/new');
var show = require('./routes/show');
var edit = require('./routes/edit');

var mongoDB = 'mongodb://localhost/movie_list';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//APP CONFIG
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);
app.use('/new', newlist); // newlist = new.js
app.use('/show', show);
app.use('/edit', edit);


// app.get('/', function(req, res){
//   res.send('Hello World!');
// });

app.listen(3000, function(){
  console.log('Server has started!');
});
