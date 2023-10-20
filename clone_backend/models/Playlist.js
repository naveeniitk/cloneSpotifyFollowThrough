const mongoose = require("mongoose")

// 5
// creating a user model 
// steps to create model
// a) require mongoose
// b) creat a mongoose schema ( structure of a user)
// c) create a model
// basically this tells the json data anytime in this project will follow this format
const Playlist = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    thumbnail:{
        type: String,
        required: true,
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    songs: [{ 
        type: mongoose.Types.ObjectId,
        ref: "song",
    }],
    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref: "user",
    }],
})

const PlaylistModel = mongoose.model("Playlist", Playlist)

module.exports = PlaylistModel