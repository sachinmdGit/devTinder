const express = require('express');

const app = express();

app.get("/user", (req, res) => {
    res.send({firstName: "Sachinkumar", lastName: "Doddamani"})
});

app.post("/user", (req, res) => {
    console.log("Save data to the database"); //assume saving data to DB
    res.send("Data successfully saved to the database");
});

app.delete("/user", (req, res) => {
    res.send("Data successfully deleted");
});


//this will match with all HTTP methods API calls to /test
app.use("/test", (req, res) => {
    res.end("Hello from the Server!")
})

app.listen(7777,  () => {
    console.log("Server is successfully listening on port 7777...")
});