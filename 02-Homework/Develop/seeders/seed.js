const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/transaction", {
  useNewUrlParser: true
});

const transactionSeed = [
  {
    name:{
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  
    value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
}
];

db.Icon.deleteMany({})
  .then(() => db.Image.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });