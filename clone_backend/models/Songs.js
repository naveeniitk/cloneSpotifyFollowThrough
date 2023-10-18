const mongoose = require("mongoose")

// 5
// creating a user model 
// steps to create model
// a) require mongoose
// b) creat a mongoose schema ( structure of a user)
// c) create a model
// basically this tells the json data anytime in this project will follow this format
const Song = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
    track:{
        type: String,
        required: true,
    },
    artist:{
        type: mongoose.Types.ObjectId,
        ref: "user",
    }
})

const SongModel = mongoose.model("Song", Song)

module.exports = SongModel