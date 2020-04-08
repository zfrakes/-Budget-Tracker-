const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://<zfrakes>:<zrf081193>@ds117846.mlab.com:17846/heroku_1d61kk56r", {
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

db.BudgetTracker.deleteMany({})
  .then(() => db.BudgetTracker.collection.insertMany(transactionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });