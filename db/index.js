const config = require('config')
const mongoose = require('mongoose')
const uri = config.get('database.uri') + '/' + config.get('database.name')
const options = {useNewUrlParser:true,useUnifiedTopology:true}
module.exports = mongoose.connect(uri,options).catch(error=>console.log(error))