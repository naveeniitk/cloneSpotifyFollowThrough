const express = require("express")
const router = express.Router()
const passport = require("passport")
const Song = require("../models/Song")
const User = require("../models/User")

// will add a middleware inside this post reqeuest
// the authenticate will identify whether the user is valid or not using the token
router.post(
    '/create', 
    passport.authenticate("jwt", {session: false}), 
    async (req, res) => {
        // req.user gest the user because of the passport authentication
        print("got a post request (/create)")
        const {name, thumbnail, track} = req.body
        if(!name || !thumbnail || !track){
            return res
                .status(301)
                .json({err:"Insufficient details to create song"})
        }
        const artist = req.user._id
        const songDetails = {name, thumbnail, track, artist}
        const createdSong = await Song.create(songDetails)
        return res.status(200).json(createdSong)
    }
)

// 011
// get route to all songs i have published
router.get(
    "/get/mysongs", 
    passport.authenticate("jwt", {session: false}), 
    async (req, res) => {
        print("got a get request (/get/mysongs)")
        // const currentUser = req.user
        // we need to get all the songs where artist ID is currentUser._id
        // const sample = {"hola":"nothing"}
        // return res.status(200).json({data: sample})
        const songs = await Song.find({artist: req.user._id})
        return res.status(200).json({data: songs})
    }
)

// 012
// api for getting all the songs by an artist [ published songs by artist ]
// need the artist id to send as a get request as i need data as response
router.get(
    "/get/artist",
    passport.authenticate("jwt", {session: false}),
    async (req, res) => {
        print("got a get req for /get/artist")
        const {artistId} = req.body
        // we can check if artist exists or not
        const artist = req.User.find({_id: artistId})
        if(!artist){
            return res.status(301).json({err:"Artist does not exist"})
        }

        const artistSongs = await Song.find({artist: artistId})
        print("sending artist-songs")
        return res.status(200).json({data: artistSongs})
    }
)

// 012
// the issue here is for a song we need specific name to search for it 
// it doesn't match the pattern for the song of for any other
router.get(
    "/get/songname", 
    passport.authenticate("jwt", {session: false}), 
    async (req, res) => {
        print("got a get req for /get/songname")
        const {songName} = req.body

        const songs = await Song.find({name: songName})
        print("sending the song")
        return res.status(200).json({data: songs})        
    }
)

module.exports = router
