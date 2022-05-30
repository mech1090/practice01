const { model } = require('mongoose')
const User = require('../model/user')
const bcrypt = require('bcrypt')
const config = require('config')
const userService = require('../services/user.service')

const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    //const findUser = await User.findOne({email})
    const findUser = await userService.find({email})
    if(!findUser){
        return res.render('signup/layout',{message:"Sign Up Please"})
    }
    const matchPassword = await bcrypt.compare(password,findUser.password)
    if(!matchPassword){
        return res.render('login/layout',{message:'Email or Password wrong'})
    }
    return res.render('user/layout')
}
const getSignupForm = (req,res)=>{
    res.render('signup/layout')
}
const signup = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
 //   const findUser = await User.findOne({email})
     const findUser = await userService.find({email})
    if(findUser){
        return res.render('login/layout',{message:'Email Exists Login'})
    }
    const hatchedPassword = await bcrypt.hash(password,config.get('hashed.salt'))
    const newFields = {email,hatchedPassword}
//    const createUser = await User.create({email,password:hatchedPassword})
    const createUser = await userService.createUser({email,password:hatchedPassword})
    return res.render('signup/layout',{message:"User Created"})
}

module.exports ={getLoginForm,login,getSignupForm,signup}