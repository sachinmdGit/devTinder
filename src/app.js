const express = require('express');

const app = express();

// app.get('/getUserData', (req, res) => {
//     //Logic of DB call and get user Data

//     throw new Error("dsvsr")
//     res.send("User Data sent!");
// });

app.get('/getUserData', (req, res) => {

    try {
    //Logic of DB call and get user Data
    throw new Error("dsvsr")
    res.send("User Data sent!");
    } catch(err) {
        res.status(500).send("Some error contact support team")
    }

});

//you should always keep it at the end, so that if anything breaks it will be caught over here
app.use("/", (err, req, res, next) => {
    if(err) {
        res.status(500).send("Something went wrong")
    }
})


app.listen(7777,  () => {
    console.log("Server is successfully listening on port 7777...")
});