const express = require("express");
const passport = require("passport");
const PlaylistModel = require("../models/Playlist");
const Playlist = require("../models/Playlist")

const router = express.Router()

/*
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
*/

// 013
// creating a route for creating a playlist
router.post(
    '/create',
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // the current user will be the owner of this playlist
        // so need to update the owner for the playlist
        const currentUser = req.user
        const {
            name, 
            thumbnail,
            songs
        } = req.body
        if(!name || !thumbnail || !songs){
            return res.status(200).json({err:"Insufficient data"})
        }
        const playlistData = {
            name,
            thumbnail,
            owner:currentUser._id,
            collaborator: []
        }
        const playlist = await Playlist.create(playlistData)
        return res.status(200).json(playlist)
    }
)

// 014
// creating a route for returning playlist with req containing playlist id
// a new concept here for a specific element (here playlistId)
// here :playlistId is kindof acting as a variable
// so if we call /playlist/get/xxxxxxxxx
// this will surely call this api and 
router.get(
    "/get/:plalistId",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // this concept here is called req.params
        const playlistId = req.params.plalistId
        // need to check if the playlist with playlistId exists or not
        // only one playlist may exist as _id is unique
        const playlist = await Playlist.findOne({_id: playlistId})
        if(!playlist){
            return res.status(301).json({err:"Invalid PlaylistId"})
        }

        return res.status(200).json(playlistData)
    }
)

module.exports = router;