const express = require("express")
const User = require("../models/User")

// 007 : router creation
const router = express.Router()
// this will also work but it is app type with un-necessary details which a router 
// doesn't require
// const router = express()
// might affect the performance 


// The POST will register an user
router.post("/register", async function(req, res) {
    // This code will run when the register api is called as a POST request

    // step 1
    // the body of request here will be of the form 
    // {email, password, firstName, lastName, username }
    // req.body will bring us this kindof data
    const { email, password, firstName, lastName, username } = req.body

    // step 2
    // want to check if this user already exist or not?
    // const user = User.findOne(); This will bring a user, but for a specific user 
    // we need to pass some info
    const user = await User.findOne({email: email})
    if(user){
        // status code by default is 200
        // console.log("executed till this...")
        return res
            .status(403)
            .json({error:"A user alreaday exist with this email!"})   
    }
    // if control flow is here then user doen't exist and should create one

    // step 3
    // This possess a very high risk security flaw 
    const bcrypt = require("bcrypt")
    // we should never store passwords in plain text format
    // should convert password atleast to a hash number 
    const hashedPassword = bcrypt.hash(password, 10);
    const newUserData = {
        email,
        hashedPassword, 
        firstName, 
        lastName, 
        username
    }
    const newUser = await User.create(newUserData)
    // console.log("exec?")
    // step 4
    // we need a corresponding token regarding this user
    // which is needed to identify the user (its unique identity)
    // This getToken function we need to create ourselves
    const {getToken, getToken} = require("../utils/helpers")
    const token = await getToken(email, newUser)

    // step 5
    // returning the user result
    const userToReturn = {...newUser.toJSON(), token}

    // step 6
    // will not store the password of the user anywhere 
    // will only use hashedPassword in the database
    delete userToReturn.password

    // returning the status
    return res.status(200).json(userToReturn)
})

// 009
// implementing login functionality
router.post("/login", async function(req, res) {
    // various steps involved are :
    // a) getting email and password sent by user from req.body
    const {email, password} = req.body

    // b) check if a user with given email exists or not
    const user = await User.findOne({email: email})
    if(!user){
        return res.status.json({err:"Invalid Credentials"})
    }

    // c) if user exists, check if the password is correct.
    const isPasswordValid = await bcrypt.compare(password, user.password)
    // This will ofcourse be boolean
    if(!isPasswordValid){
        return res.status(403).json({err:"Invalid Credentials"})
    }

    // d) if credentials are correct, return a token to user.
    const token = await getToken(user.email, user)
 
    // step 5
    // returning the user result
    const userToReturn = {...newUser.toJSON(), token}

    // step 6
    // will not store the password of the user anywhere 
    // will only use hashedPassword in the database
    delete userToReturn.password

    // returning the status
    return res.status(200).json(userToReturn)
})


module.exports = router