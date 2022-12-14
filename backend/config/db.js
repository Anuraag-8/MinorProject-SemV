const mongoose = require('mongoose');
const config = require('config');
const db = config.util.getEnv('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://employee:8rBaFx6PVJ7XAUQW@cluster0.meuwrew.mongodb.net/freshbnb?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
