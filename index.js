var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.route('/me').get(function(req, res){

res.sendFile(__dirname+'/public/html/contacts.html')


})

app.use(function(req, res, next){

res.type('txt').send('Not found');
res.status(404);


});



var server = app.listen(8000, function(){

console.log("Server is happening %s", server.address().port);

});