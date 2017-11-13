let config = require('../config.js');
let request = require('request');

let getNutritionInfo = (food, callback) => {
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
      let foodData = JSON.parse(body).foods[0];
      callback(foodData);
    }
  });
}

exports.getNutritionInfo = getNutritionInfo;