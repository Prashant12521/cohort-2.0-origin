const mongoose = require('mongoose');

async function connectToDb() {
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log('Connected to DB')
  })
}

module.exports = connectToDb