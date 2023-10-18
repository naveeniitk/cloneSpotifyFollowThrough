const mongoose = require("mongoose")

// 5
// creating a user model 
// steps to create model
// a) require mongoose
// b) creat a mongoose schema ( structure of a user)
// c) create a model
// basically this tells the json data anytime in this project will follow this format
const User = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    likedSongs:{
        // This should be an array [ will change later ]
        type: String,
        default: "",
    },
    likedPlaylists:{
        // This should be an array [ will change later ]
        type: String,
        default: "",
    },
    subscribedArtist:{
        type: String,
        default: "",
    }
});

const UserModel = mongoose.model("User", User)


module.exports = UserModel