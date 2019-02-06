const express = require("express"); 
const bodyParser = require("body-parser"); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function (req, res) {
    var height = Number(req.body.Height);
    var weight = Number(req.body.Weight);
    var bmiTotal = height / weight;
    res.send("Your BMI total is " + bmiTotal +"<p>Disclaimer this is not real values.</p>" + "<p>This was only an example to work more with node,express, and javascript.</p>");
});
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var total = num1 + num2;
    res.send("Total = " + total);
});

app.listen(3000, function () {
    console.log("Server Started on port 3000");
});