// 1
const express = require("express")

// 2
// creating app 
const app = express();

// 3
// API : GET type : / : return text "Hello World!!";
app.get('/', (requset, response) => {
    response.send('Hello World!!')
})

// 4
// now tell server, to run on port 8000
const port = 8000
app.listen(port, function() {
    console.log("app running on port : " + port)
})

