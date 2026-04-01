const express = require('express');

const app = express();

app.use("/hello", (req, res) => {
    res.end("Hello Hello Hello!")
})

app.use("/test", (req, res) => {
    res.end("Hello from the Server!")
})

app.use("/", (req, res) => {
    res.end("Namaste from the dashboard!")
})

app.listen(7777,  () => {
    console.log("Server is successfully listening on port 7777...")
});