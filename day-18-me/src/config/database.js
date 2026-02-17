const mongoose = require("mongoose");

async function connectT0Db() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to DB");
  });
}

module.exports = connectT0Db