const mangoose = require('mongoose')
const User = require('../model/user')

const find = async(field)=>{
    const findUser = User.findOne(field)
    return findUser
}

const createUser = async(fields)=>{
    const createUser = User.create(fields)
    return createUser
}

module.exports = {find, createUser}