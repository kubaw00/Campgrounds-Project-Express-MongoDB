const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '61dbe82db19a12621c6ff0cb',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
      price,
      geometry: {
        type: 'Point',
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: 'https://res.cloudinary.com/kuba94/image/upload/v1619012611/YelpCamp/uso65z4iiml6ijntomky.jpg',
          filename: 'YelpCamp/uso65z4iiml6ijntomky',
        },
        {
          url: 'https://res.cloudinary.com/kuba94/image/upload/v1619012612/YelpCamp/m8yxp32jjwwpbbgarnqd.jpg',
          filename: 'YelpCamp/m8yxp32jjwwpbbgarnqd',
        },
        {
          url: 'https://res.cloudinary.com/kuba94/image/upload/v1619012612/YelpCamp/tubb1oc3jm4svzvb2ku2.jpg',
          filename: 'YelpCamp/tubb1oc3jm4svzvb2ku2',
        },
      ],
    });
    await camp.save();
  }
  ``;
};

seedDB().then(() => {
  mongoose.connection.close();
});
