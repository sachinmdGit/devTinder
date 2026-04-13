const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sachinkumar1:vK4cyzg3bI0HGvC3@namastenode1.msmrwbs.mongodb.net/devTinder",
  );
};

module.exports = connectDB;

//vK4cyzg3bI0HGvC3