let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foods', {
  useMongoClient: true
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connection is open');
});

let foodSchema = mongoose.Schema({
    name: String,
    Calcium: Number,
    Iron: Number,
    "Vitamin A": Number,
    "Vitamin B-6": Number,
    "Vitamin C": Number,
    "Vitamin D": Number,
    "Vitamin E": Number,
    Proteins: Number,
    Fats: Number,
    Sugars: Number,
    img: String
});

let Food = mongoose.model('Food', foodSchema);

let retrieveAll = (callback) => {
  Food
    .find()
    .select({name: 1, img: 1})
    .exec((err, menu) => {
      if (err) {
        console.log('err ', err)
      } else {
        callback(menu)
      }
    });
}

let retrieveOne = (foodName, callback) => {
  console.log('trying to retrieve');
  Food.findOne({name: foodName}, (err, foodEntry) => {
    if (err) {
        console.log('err ', err)
    } else {
      console.log(foodEntry);
      callback(foodEntry);
    }
  });
}

let save = (foodData, callback) => {
  console.log('successfully get to db save function');

  let nutrients = foodData.full_nutrients;

  let foodEntry = new Food({ 
    name: foodData.food_name,
    Calcium: nutrients[21].value,
    Iron: nutrients[22].value,
    "Vitamin A": nutrients[32].value,
    "Vitamin B-6": nutrients[53].value,
    "Vitamin C": nutrients[48].value,
    "Vitamin D": nutrients[38].value,
    "Vitamin E": nutrients[37].value,
    Proteins: nutrients[1].value,
    Fats: nutrients[2].value,
    Sugars: nutrients[18].value,
    img: foodData.photo.thumb

  });

  foodEntry.save((err, foodEntry) => {
    if (err) { 
      return console.error(err)
    } else {
      console.log(foodEntry.name, ' was saved');
      callback(foodEntry);
    }
  });

};

exports.save = save;
exports.retrieveOne = retrieveOne;
exports.retrieveAll = retrieveAll;



