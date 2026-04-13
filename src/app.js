const express = require('express');

const connectDB = require("./config/database")

const app = express();

const User = require('./models/user')

app.post("/signUp", async (req, res) => {

    // Creating a new instance of the user model
    const user = new User({
        firstName: "Rohit",
        lastName: "Sharma",
        emailId: "Rohit@45.com",
        password: "Rohit@45"
    });

    try {
        await user.save();
        res.send("User Added Successfully")
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message)
    }
})

connectDB()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(7777,  () => {
    console.log("Server is successfully listening on port 7777...")
});
  })
  .catch((err) => {
    console.error("DB cannot be connected");
  });


