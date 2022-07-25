const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    name:{type:String,required:true},
    URL:{type:String,required:true},
})

module.exports = mongoose.model('link',linkSchema)