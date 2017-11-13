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
  let nutrientCodes = {
    301: 'Calcium',
    303: 'Iron',
    318: 'Vitamin A',
    323: 'Vitamin E',
    324: 'Vitamin D',
    401: 'Vitamin C',
    415: 'Vitamin B-6'
  }

  let filterdNutrients = [];

  nutrients.forEach((nutrient) => {
    if (nutrientCodes[nutrient.attr_id]) {
      console.log(nutrient.attr_id);
      filterdNutrients.push(nutrient.value);
    }
  });

  console.log(filterdNutrients);

  let foodEntry = new Food({ 
    name: foodData.food_name,
    Calcium: filterdNutrients[1] || 0,
    Iron: filterdNutrients[2] || 0,
    "Vitamin A": filterdNutrients[3] || 0,
    "Vitamin B-6": filterdNutrients[7] || 0,
    "Vitamin C": filterdNutrients[6] || 0,
    "Vitamin D": filterdNutrients[5] || 0,
    "Vitamin E": filterdNutrients[4] || 0,
    Proteins: foodData.nf_protein || 0,
    Fats: foodData.nf_total_fat || 0,
    Sugars: foodData.nf_sugars || 0,
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



