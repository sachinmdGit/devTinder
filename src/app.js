const express = require('express');

const app = express();

// app.get("/user", (req, res) => {
//     console.log(req.query)
//     res.send({firstName: "Sachinkumar", lastName: "Doddamani"})
// });

app.get("/user/:userId/:password", (req, res) => {
    console.log(req.params)
    res.send({firstName: "Sachinkumar", lastName: "Doddamani"})
});

app.listen(7777,  () => {
    console.log("Server is successfully listening on port 7777...")
});