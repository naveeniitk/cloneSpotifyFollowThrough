const express = require("express");
const passport = require("passport");
const PlaylistModel = require("../models/Playlist");
const Playlist = require("../models/Playlist")
const User = require("../models/User")
const Song = require("../models/Song")

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

// 013
// creating a route for returning playlist with req containing playlist id
// a new concept here for a specific element (here playlistId)
// here :playlistId is kindof acting as a variable
// so if we call /playlist/get/xxxxxxxxx
// this will surely call this api and 
router.get(
    "/get/playlist/:plalistId",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        // this concept here is called req.params
        const playlistId = req.params.plalistId
        // need to check if the playlist with playlistId exists or not
        // only one playlist may exist as _id is unique
        const playlist = await Playlist.findOne({_id: playlistId})
        if(!playlist){
            return res.status(304).json({err:"Invalid PlaylistId"})
        }

        return res.status(200).json(playlistData)
    }
)

// 014
// all the playlist of an artist
router.get(
    '/get/artist/:artistId',
    passport.authenticate("jwt",{session: false}),
    async(req, res) => {
        const artistId = req.params.artistId

        // now we need to get all the playlists of an artist using its artistId
        // here there are two scenerio(s)
        // a) if artist exits and has no playlists
        // b) artist doesn't exist
        // in both the cases : we will get a same empty array
        const artist = await User.findOne({_id: artistId})
        if(!artist){
            return res.status(304).json({err:"artist does not exits"})
        }

        const palylists = await Playlist.find({owner: artistId})
        return res.status(200).json({data: palylists})
    }
)

// 014
// add a song to a playlist
router.post(
    '/add/song',
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        const currentUser = req.user
        const {plalistId, songId} = req.body
        // step 0:
        // checking if the playlist exists or not
        const playlist = await Playlist.findOne({_id: playlistId})
        if(!playlist){
            return res.status(304).json({err:"Playlist does not exits"})
        }

        // step 1:
        // check if this current user is owner/collaborator of this playlist or not
        if(!(playlist.owner === currentUser._id || palylist.collaborator.includes(currentUser._id))){
            return res.status(400).json({err: "This playlist is not yours."})
        }

        // step 2:
        // check if the song is a valid song or not
        const song = await Song.findOne({_id:songId})
        if(!song){
            return res.status(304).json({err:"Song doesn't exists"})
        }

        // step 3:
        // now we can simply add the song
        palylists.songs.push(songId)
        // saving the data into the database as till above the data is only stored locally
        await playlist.save();

        return res.status(200).json(palylist)
    }
)

module.exports = router;