const express = require("express")
const router = express.Router()
const passport = require("passport")
const Song = require("../models/Song")

// will add a middleware inside this post reqeuest
// the authenticate will identify whether the user is valid or not using the token
router.post(
    '/create', 
    passport.authenticate("jwt", {session: false}), 
    async (req, res) => {
        // req.user gest the user because of the passport authentication
        console.log("got a post request (/create)")
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
        console.log("got a get request (/get/mysongs)")
        // const currentUser = req.user
        // we need to get all the songs where artist ID is currentUser._id
        // const sample = {"hola":"nothing"}
        // return res.status(200).json({data: sample})
        const songs = await Song.find({artist: req.user._id})
        return res.status(200).json({data: songs})
    }
)

module.exports = router
/*
{
    "email": "navin011@gamil.com",
    "password": "SweetLassan",
    "username": "LdLsn",
    "firstName": "adoL",
    "lastName": "nassaL"
}
{
    "firstName": "adoL",
    "lastName": "nassaL",
    "email": "navin011@gamil.com",
    "username": "LdLsn",
    "likedSongs": "",
    "likedPlaylists": "",
    "subscribedArtist": "",
    "_id": "65310947e2db564233463e0c",
    "__v": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTc3MTI0NTZ9.v31SEpSMJ_8Yof6_jgbOiZrw8_FHXets1eBcsSe36b4"
}
*/