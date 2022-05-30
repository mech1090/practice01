const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
    },
    {
        collection:"user"
    })

    const User = mongoose.model('User',userSchema)

    module.exports = User