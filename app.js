var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, 'css')));

app.get('/', function (req, res) {
	res.render('home')
  //res.send('Hello World!');
});

app.get('/vista1', function (req, res) {
	res.render('example2')
  
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});