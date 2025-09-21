var express = require('express')
var ejs = require('ejs')


var app = express();

app.use(express.static('public')); //To render html pages
app.set('view engine', 'ejs');  //Set ejs to our view engine


app.listen(8080); //To determine the port to run our app

app.get('/', function(req, res){ //request and the response
   
    res.render('pages/index');


});

app.get('/business', function(req, res){
    res.render('pages/business')
});


app.get('/motivation', function(req, res){
    res.render('pages/motivation')
});


app.get('/about', function(req, res){
    res.render('pages/about')
});

app.get('/contact', function(req, res){
    res.render('pages/contact')
});