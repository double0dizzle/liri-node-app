require("dotenv").config();

var spotify = require("/keys.js");





var fs = require("fs");
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
    return console.log(error);
}
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});