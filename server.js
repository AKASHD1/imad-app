var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var counter=0;
var Pool=require('pg').Pool;

var confiq= {
user:'u222dutta',
database: 'u222dutta',
host: 'db.imad.hasura-app.io' ,
port: '54321',
password: 'process.env.DB_PASSWORD',
};

var pool=new Pool(confiq);
app.get('/counter', function (req, res) {
 counter+=1;
 res.send(counter.toString());
});

app.get('/test-db',function(reg,res) {
  //making a select request
  //then returning a response with the results
  pool.query('SELECT * FROM article',function(err,result){
      if(err) {
          res.status(500).send(err.toString());
      } else{
          res.send(JSON.stringify(result));
      }
  });
});

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article1', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article1.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/profile.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
