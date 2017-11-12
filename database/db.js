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
    calcium: Number,
    iron: Number,
    vit_a: Number,
    vit_b_6: Number,
    vit_c: Number,
    vit_d: Number,
    vit_e: Number,
    proteins: Number,
    fats: Number,
    sugars: Number,
    img: String
});

let Food = mongoose.model('Food', foodSchema);

let retrieve = (foodName, callback) => {
  console.log('trying to retrieve');
  Food.findOne({name: foodName}, (err, foodEntry) => {
    console.log(foodEntry);
    callback(err, foodEntry);
  });
}

let save = (foodData, callback) => {
  console.log('successfully get to db save function');

  let nutrients = foodData.full_nutrients;

  let foodEntry = new Food({ 
    name: foodData.food_name,
    calcium: nutrients[21].value,
    iron: nutrients[22].value,
    vit_a: nutrients[32].value,
    vit_b_6: nutrients[53].value,
    vit_c: nutrients[48].value,
    vit_d: nutrients[38].value,
    vit_e: nutrients[37].value,
    proteins: nutrients[1].value,
    fats: nutrients[2].value,
    sugars: nutrients[18].value,
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
exports.retrieve = retrieve;

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

// Kitten.find({ name: /^fluff/ }, callback);



