var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.route('/weather').get(function(req, res){

res.sendFile(__dirname+'/public/weather/index.html');


});

app.route('/weatherReport').get(function(req, res){

res.sendFile(__dirname+'/public/weatherReport/index.html');


});

app.use(function(req, res, next){

// res.type('txt').send('Not found');
// res.status(404).end('error');

  // if (req.accepts('html')) {
  //   res.render('404', { url: req.url });
  //   return;
  // }

res.sendFile(__dirname+'/public/404/index.html');

});





var server = app.listen(8000, function(){

console.log("Server is happening %s", server.address().port);

});