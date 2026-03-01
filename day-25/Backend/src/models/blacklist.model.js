const mongoose = require('mongoose')

const blacklistSchema = new mongoose.Schema({
  token:{
    type:String,
    require:[true, 'token is required for blacklisting'],
  }
},{
  timestamps:true
})

const blacklistingModel = mongoose.model('blacklist', blacklistSchema)

module.exports = blacklistingModel