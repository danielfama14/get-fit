const mongoose = require('mongoose');
const dbConfig = require('../db.config.js');


// Connect to MongoDB
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Example data
const User = require('../../models/User'); // Adjusted path
const exampleUsers = [
  { username: 'JohnDoe', email: 'john@example.com', password: 'password123', goal: 'your goal here' }, //add a goal for each user
  // ... more users
];

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connected to MongoDB.");
  // You can place a simple query here to test the connection
}).catch(err => {
  console.error("Connection error", err);
  process.exit();
});

// Insert data into the database
async function seedDatabase() {
  try {
    await User.insertMany(exampleUsers, { writeConcern: { wtimeout: 30000 } });
    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
