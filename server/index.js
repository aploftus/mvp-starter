let config = require('../config.js');
let express = require('express');
let bodyParser = require('body-parser');
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

  let options = {
    // x-remote-user-id: A unique identifier to represent the end-user who 
    // is accessing the Nutritionix API. If in development mode, set this to 0.
    // This is used for billing purposes to determine the number of active users 
    // your app has. Please note, when authenticating with the API, you must send the 
    // x-app-id and x-app-key params as headers, and not as query string parameters.
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    method: 'POST',
    body: JSON.stringify({ "query": food }),
    headers: {
      "x-app-id": config.APP_ID,
      "x-app-key": config.API_KEY,
      "x-remote-user-id": 0,
    }
  }

  request(options, (err, response, body) => {
    if (err) {
      console.log('error with npm request');
      console.log(err);
    }
    if (response) {
      console.log('got data from api');
      res.json(body);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

