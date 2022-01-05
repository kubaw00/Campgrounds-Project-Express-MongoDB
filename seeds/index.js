import mongoose from 'mongoose';
import Campground from '../models/campground.js';
import { places, descriptors } from './seedHelpers.js';
import cities from './cities.js';

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
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
      author: '607af41492472c20dcc80b93',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)}  ${sample(places)}`,
      image: 'https://source.unsplash.com/collection/483251',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam error adipisci veniam? Harum facere illum aut, blanditiis quaerat saepe reprehenderit voluptatum alias ut accusamus quod doloremque dicta incidunt voluptatem assumenda!',
      price: price,
    });

    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
