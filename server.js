var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(reg, res){
	res.render('pages/index');
});

app.get('/blog', function(reg, res){
	res.render('pages/blog');
});

app.listen(8000);
console.log('server terbuka di port 8000');