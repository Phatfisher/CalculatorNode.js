const express = require("express"); 
const bodyparser = require("body-parser"); 
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    res.send("Thanks for posting");
});

app.listen(3000, function () {
    console.log("Server Started on port 3000");
});