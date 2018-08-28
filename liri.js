require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);





var fs = require("fs");
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
    return console.log(error);
}
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});


spotify.search({ type: 'track', query: 'I Want It That Way' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });