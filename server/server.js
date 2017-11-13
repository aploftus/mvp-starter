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
  db.retrieveAll((menu) => {
    res.json(menu);
  })

})

app.post('/food', (req, res) => {
  let food = req.body.query;

  db.retrieveOne(food, (foodEntry) => {
    if (!foodEntry) {
      getNutritionInfo(food, (foodData) => {
        db.save(foodData, (foodEntry) => {
          res.json(foodEntry);
        })
      })
    } else {
      res.json(foodEntry);
    }
  });   
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

