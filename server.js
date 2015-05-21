var express = require('express');
var app = express();
var  ObjectManager= require('./modules/objectmanager.js')

var obj= new ObjectManager();

app.get('/test', function (req, res) {
	
  console.log("I am sending data to client")	;
    obj.amIincluded();
  res.send('Hello World!'); 
    
  
});



app.use('/static', express.static('static'));

app.listen(4000);