var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/projects', function (req, res) {

  let data = [
    {
      title: 'title1',
      city: 'city1',
      state: 'state1',
      costToComplete: 'costToComplete1',
      expirationDate: 'expirationDate1'
    },
    {
      title: 'title2',
      city: 'city2',
      state: 'state2',
      costToComplete: 'costToComplete2',
      expirationDate: 'expirationDate2'
    },
    {
      title: 'title3',
      city: 'city3',
      state: 'state3',
      costToComplete: 'costToComplete3',
      expirationDate: 'expirationDate3'
    }
  ];

  res.json(data);

  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

