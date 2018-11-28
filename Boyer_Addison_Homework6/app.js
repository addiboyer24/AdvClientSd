var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Require the module
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jadtazr4',
    database:'class'
});

connection.connect(function(err){
    if(err)
        throw err;
    console.log("connected");
});
var urlEncodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});

app.post('/display', urlEncodedParser, function(req, res){
    var string = "Thanks for reaching out " + req.body.name + " your name has been added to the database";
    var query = "INSERT INTO person VALUES(NULL,'"+req.body.name+"')";
    
    connection.query(query, function(error,rows,fields){
        if(error)
            throw error;
        console.log("Successfully added");
    });
    
    res.render('display', {title: 'After Posting', message: string})
});

app.get('/data', function(req, res){
    var outputString = "";
    connection.query("SELECT * FROM person", function(error,rows,fields){
        
        
        if(error)
            throw error;
        rows.forEach(function(row){
            outputString+=row.person_id+", "+row.name+"  |  "; 
        });
        res.render('display', {title: 'Hey', message: outputString})
    });
    
});


app.listen(3000,function(){
    console.log("the app is running");
});