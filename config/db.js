const mongoose = require('mongoose');

const connection = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/NewCrud", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
    return conn;
  } catch (err) {
    console.log(`MongoDB connection error: ${err}`);
    return null;
  }
};

module.exports = connection;
