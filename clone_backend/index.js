// 1
const express = require("express");

// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose")

// 2
// creating app 
const app = express();

// 3
// API : GET type : / : return text "Hello World!!";
app.get('/', (requset, response) => {
    response.send('Hello World!!')
})

// this takes two arguments 
// a) to which db to connect to (db url) ?
// b) Connection options
// SECURITY ISSUE MAY ARISE DUE TO PASSWORD WRITTEN
require("dotenv").config();
// console.log(process.env);

const cloudUrl = "mongodb+srv://" + process.env.MONGO_USER + ":" + process.env.MONGO_PASS + "@clustermongonk.rpmoi3o.mongodb.net/?retryWrites=true&w=majority"
// const cloudUrl = `mongodb+srv://naveenkumar:${process.env.MONGO_PASS}@clustermongonk.rpmoi3o.mongodb.net/?retryWrites=true&w=majority`

console.log(process.env.MONGO_USER);
console.log(process.env.MONGO_PASS);
console.log(cloudUrl);

mongoose.connect(cloudUrl, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then((x) => {
    console.log("Connected to mongo-cloud!!")
}).catch((e) => {
    console.log("Error while connecting to cloud!!")
    console.log(e)
})
// to check if this connection is working or not
// we may add 


// 4
// now tell server, to run on port 8000
const port = 8000
app.listen(port, function() {
    console.log("app running on port : " + port)
})

