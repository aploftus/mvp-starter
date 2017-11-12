let mongoose = require('mongoose');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foods');

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

let save = (foodData) => {
  let nutrients = foodData.full_nutrients;

  let foodEntry = new Food({ 
    name: 'foodData.food_name',
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

  foodEntry.save(function (err, foodEntry) {
    if (err) { 
      return console.error(err)
    } else {
      console.log(foodEntry.name, ' was saved');
    }
  });


};

exports.save = save;

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

// Kitten.find({ name: /^fluff/ }, callback);



