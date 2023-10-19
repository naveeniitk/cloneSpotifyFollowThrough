const express = require("express")
const router = express.Router()
const passport = require("passport")

/*
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
*/ 

// will add a middleware inside this post reqeuest
// the authenticate will identify whether the user is valid or not using the token
router.post('/create', passport.authenticate("user"), async function(req, res) {
    // req.user gest the user because of the passport authentication
    const {name, thumbnail, track} = req.body
    if(!name || !thumbnail || !track){
        return res
            .status(301)
            .json({err:"Insufficient details to create song"})
    }
    const artist = req.user._id
    const songDetails = {name, thumbnail, track, artist}
    const createdSong = await SongModel.create(songDetails)
    return res.status(200).json(createdSong)
})


module.exports = router