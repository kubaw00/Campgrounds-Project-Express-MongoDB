# ProShop eCommerce Platform
 [Link to App](https://serene-citadel-76532.herokuapp.com//)

> Campgrounds Website

![screenshot](https://github.com/bradtraversy/proshop_mern/blob/master/uploads/Screen%20Shot%202020-09-29%20at%205.50.52%20PM.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)



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
