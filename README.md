# Campgrounds Project Ejs & MongoDB
 [Link to App](https://serene-citadel-76532.herokuapp.com//)

> Campgrounds Website

![screenshot](https://github.com/kubaw00/Campgrounds-Project-Express-MongoDB/blob/main/screenshots/homeCampground.jpg)
![screenshot](https://github.com/kubaw00/Campgrounds-Project-Express-MongoDB/blob/main/screenshots/indexCampground.jpg)
![screenshot](https://github.com/kubaw00/Campgrounds-Project-Express-MongoDB/blob/main/screenshots/showCampground.jpg)

## Features





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
npm install

```

### Run

```
npm start
```

## Build & Deploy

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku
