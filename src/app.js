const express = require('express');

const app = express();

// app.use("/user", [rH, rH2, rH3, rH4, rH5]); //wrapping route hanlders in an array
// app.use("/user", rH, [rH2, rH3], rH4, rH5);

app.use("/user", (req, res, next) => {
    console.log("Handling the route user!");
    // res.send("Response!!")
    next();
},
(req, res, next) => {
    console.log("Handling the route user 2!");
    // res.send("2nd Response!!")
    next();
},
(req, res, next) => {
    console.log("Handling the route user 3!");
    // res.send("3rd Response!!");
    next();
},
(req, res, next) => {
    console.log("Handling the route user 4!");
    // res.send("4th Response!!")
    next();
},
(req, res, next) => {
    console.log("Handling the route user 4!");
    res.send("5th Response!!")
}

)

app.listen(7777,  () => {
    console.log("Server is successfully listening on port 7777...")
});