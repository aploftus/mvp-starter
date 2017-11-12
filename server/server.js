let bodyParser = require('body-parser');
let config = require('../config.js');
let db = require('../database/db.js');
let express = require('express');
let getNutritionInfo = require('../helpers/nutritionix.js').getNutritionInfo;
let request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// let items = require('../database-mysql');
// let items = require('../database-mongo');

let app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/food', function (req, res) {
  console.log('got to server!');
  let food = req.body.query;

  db.retrieve(food, (err, foodEntry) => {
    if (err) {
      console.log(food, 'not found in db');
      console.log(err);
      // complete a fetch from api,
      getNutritionInfo(food, (foodData) => {
        // save to db
        db.save(foodData, (foodEntry) => {
          console.log('successful save from server');
          // send data back to client
          res.json(foodEntry);
        })
      })
    } else {
      // send data back to client
      console.log('got some data from db!');
      res.json(foodEntry);
    }
  });   
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

