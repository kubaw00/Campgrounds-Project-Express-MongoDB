# Campgrounds Project Ejs & MongoDB
 ## [Link to App](https://serene-citadel-76532.herokuapp.com/)

> Campgrounds Website

![screenshot](https://github.com/kubaw00/Campgrounds-Project-Express-MongoDB/blob/main/screenshots/homeCampground.jpg)
![screenshot](https://github.com/kubaw00/Campgrounds-Project-Express-MongoDB/blob/main/screenshots/indexCampground.jpg)
![screenshot](https://github.com/kubaw00/Campgrounds-Project-Express-MongoDB/blob/main/screenshots/showCampground.jpg)

## Features

- Bootstrap 5
- Express
- Mongo DB
- Mongoose
- Authentication
- Authorization
- Cookies & Sessions
- Geocoding & Maps



### Env Variables

Create a .env file in then root and add the following

```
CLOUDINARY_CLOUD_NAME = your cloud name
CLOUDINARY_KEY = your cloud key
CLOUDINARY_SECRET = your cloudinary secret

MAPBOX_TOKEN = your token from mapbox

DB_URL = mongodb+srv://... - your url to connect Mongo Atlas

SECRET = something, ex. 23423412341234

PORT =  ex. 3000
```

### Install Dependencies 

```
First you need to install dependencies.
npm install

```

### Run

```
Then type:
npm start
```

## Deploy

If you push to Heroku, need to login to Heroku, create git repository in main project folder, then type 'git heroku master'. Insert environment variables in Heroku. 
