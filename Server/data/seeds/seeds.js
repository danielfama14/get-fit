const mongoose = require('mongoose');
const dbConfig = require('./db.config.js');

// Connect to MongoDB
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Example data
const User = require('./models.js'); // Adjust path as necessary
const exampleUsers = [
  { username: 'JohnDoe', email: 'john@example.com', password: 'password123' },
  // ... more users
];

// Insert data into the database
async function seedDatabase() {
  try {
    await User.insertMany(exampleUsers);
    console.log('Database seeded!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
