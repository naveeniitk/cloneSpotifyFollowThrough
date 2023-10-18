# cloneSpotify

## Commit : 000 [2023-10-18 12:27:23]
1: Added starter files. <br>

### 🟢 FrontEnd : react js
 command : npx create-react-app app_name<br>

## Commit : 001 [2023-10-18 13:04:00]
1: setup for frontEnd using [ npx create-react-app name ] <br>
2: setup for backEnd using [ npm inti -y ] <br>


### 🟢 npm i express : installs package locally [ i: install ]
### 🟢 will be using cloud for keeping data
### 🟢 database will be made using mongodb on cloud

### 🟢 will use mongodb atlas service provided by mongodb

### 🟢 setting up mongodb cloud using atlas
1: check if overview is visible or not<br>
2: this database on cloud is not linked with us yet<br>

## Commit : 002 [2023-10-18 14:01:28]
1: setup cloud-based database using mongodb-atlas <br>

### 🟢 User Model is part of the backEnd
### 🟢 Database is not linked with the backEnd right now..
### 🟢 mongodb is noSQL database
### 🟢 now index.js doesn't know which database to use and from where
### 🟢 Will use mongoose [ this links NodeJs and mongodb ] package
### 🟢 > Using mongoose to define how will the data look like within the backEnd env

### 🟢 Defined User Model
1: defined user model schema inside backend/models<br>
2: exported the model, so that it's available to index.js and others as a package<br>

## Commit : 003 [2023-10-18 14:30:25]
1: Added User model, schema and export <br>
### 🟢 While creating the song model we do not need to take care in which playlist it is [later]

### 🟢 Regarding model making
1: for song model, artist might not be necessary to be in the model/schema as artist is a user also, so rather than creating the artist in song model we may map id of user(artist) to its songs<br>
2: playlist will have owner not artist, which can also be handled by the object id of user [ mongoose.Types.ObjectId ]<br>
3: While creating the Playlist it make sense that we store songs with id not again with [names, thumbnails etc.]<br>
4: In Playlist model/schema collaborators are also users so will store them by with their id<br>

## Commit : 004 [2023-10-18 14:56:28]
1: Added model for a Song and Playlist <br>
2: created seperate files under models inside backend <br>
