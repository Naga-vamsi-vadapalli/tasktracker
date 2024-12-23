require('dotenv').config();
const mongoose = require('mongoose');

// Task Model
const Task = require('./models/Task'); // Ensure the path matches your Task model file

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample Data
const tasks = [
  {
    name: "Complete Frontend Assignment",
    description: "Build the frontend interface for the task tracker.",
    dueDate: new Date('2024-12-25'),
    status: "Pending",
    priority: "High"
  },
  {
    name: "Setup Backend API",
    description: "Implement CRUD operations for tasks.",
    dueDate: new Date('2024-12-24'),
    status: "In Progress",
    priority: "Medium"
  },
  {
    name: "Test Application",
    description: "Perform end-to-end testing of the application.",
    dueDate: new Date('2024-12-28'),
    status: "Completed",
    priority: "Low"
  }
];

// Seed Function
const seedData = async () => {
  try {
    await Task.deleteMany(); // Clears existing data
    await Task.insertMany(tasks); // Inserts sample data
    console.log('Data seeded successfully');
    mongoose.disconnect(); // Disconnect after seeding
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// Run Seeding
seedData();
