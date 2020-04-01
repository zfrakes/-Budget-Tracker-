var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

var iconSeed = [
  {
    description: "small notebook",
    image: "/public/icons/icon",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "large notebook",
    image: "/assets/images/2.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  
];

db.Icon.deleteMany({})
  .then(() => db.Image.collection.insertMany(iconSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });