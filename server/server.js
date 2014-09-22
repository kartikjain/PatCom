var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type');
  next();
});

app.listen(4004);

DATABASE_HOST = 'localhost';
DATABASE_NAME = 'doctorProfile';
DATABASE_USERNAME = 'root';
DATABASE_PASSWORD = 'kart';

var connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
});

app.get('/getComment', function(request, response) {
// console.log(request.body.doctorName);

       var doctorName=request.query.doctorName;
           doctorName = doctorName.toLowerCase();
       var sqlQuery = 'SELECT * FROM doctorProfile.doctorComment where doctorName="'+doctorName+'"' ;

      // console.log(sqlQuery);
      
       connection.query(sqlQuery, function(err, rows){
        if(err)
        {
           	throw err;
            response.json("Error");
		} else
		{
			var myJSONObject = {"root":rows};
      response.json(myJSONObject);
            //response.json(JSON.stringify(rows));
        }
    });

});


app.get('/createComment', function(request, response) {
// console.log(request.body.doctorName);

       
       var doctorName=request.query.doctorName;
       var user=request.query.user;
       var comment=request.query.comment;
  
           doctorName = doctorName.toLowerCase();
           user = user.toLowerCase();           
       var sqlQuery = 'insert into doctorProfile.doctorComment(doctorName,user,comment) values ("'+doctorName+'","'+user+'","'+comment+'")'
    
          connection.query( sqlQuery, function(err, rows){
        if(err)
        {
           	throw err;
            response.json("Error");
		} else
		{
			 
        response.json("success");
           
    }
  });

});

app.get('/searchDoctor', function(request, response) {
// console.log(request.body.doctorName);

       var doctorName=request.query.doctorName;
       
  //console.log(doctorName);
  
           doctorName = doctorName.toLowerCase();
           var sqlQuery = 'SELECT DISTINCT doctorName FROM doctorProfile.doctorComment where doctorName like \''+'%'+doctorName+'%\'';
      
       
       connection.query(sqlQuery, function(err, rows){
        if(err)
        {
           	throw err;
            response.json("Error");
		} else
		{
			     //console.log(JSON.stringify(rows));
                   var myJSONObject = {"root":rows};
                   response.json(myJSONObject);
        }
    });


	})
