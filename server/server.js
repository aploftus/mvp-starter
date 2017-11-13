let bodyParser = require('body-parser');

let db = require('../database/db.js');
let express = require('express');
let getNutritionInfo = require('../helpers/nutritionix.js').getNutritionInfo;

let app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/food', (req, res) => {
  console.log('got to server to get menu');
  db.retrieveAll((menu) => {
    console.log(menu);
    // res.json('yippee');
    res.json(menu);
  })

})

app.post('/food', (req, res) => {
  console.log('got to server!');
  let food = req.body.query;

  db.retrieveOne(food, (foodEntry) => {
    if (!foodEntry) {
      console.log(food, 'not found in db');
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

