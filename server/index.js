let express = require('express');
let bodyParser = require('body-parser');
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
  console.log(req.body);
  let food = req.body.query;
  console.log(food);

  let data = [
    {
      received: 'you sent us ' + food,
    }
  ];

  res.json(data);


// A unique identifier to represent the end-user who is accessing the Nutritionix API
    // If in development mode, set this to 0.
    // This is used for billing purposes to determine the number of active users your app has.
    // Please note, when authenticating with the API, you must send the 
    // x-app-id and x-app-key params as headers, and not as query string parameters.
    // $.ajax({
    //   url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    //   method: 'POST',
    //   data: { "query": 'broccoli' },
    //   headers: {
    //     "x-app-id": config.APP_ID,
    //     "x-app-key": config.API_KEY,
    //     "x-remote-user-id": 0,
    //   },
    //   success: (data) => {
    //     console.log('client got data!')
    //     console.log(data);
    //     this.setState({
    //       nutritionData: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err ', err);
    //   }
    // });
  

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

