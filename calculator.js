const express = require("express"); 
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.get("/about", function (req, res) {
    res.send("<h1>About Myself</h1><p>Some of my favorite hobbies include hunting and fishing.</p><p> I am also an inspiring web developer. Look out!!!</p>")
});

app.listen(3000, function () {
    console.log("Server Started on port 3000");
});