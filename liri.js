require("dotenv").config();
 
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var request = require("request");
fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
    return console.log(error);
}
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});
 

function getSong(song){
  console.log("function working");
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    
    }
    var songs = data.tracks.items
    for (var i = 0; i < songs.length; i++){
      console.log("=============================================");
      // console.log(songs[i]);
      console.log(songs[i].artists[0].name);
    }
  
  });
}


// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });

// var nodeArgs = process.argv;
// var movieName = "";
// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {
// movieName = movieName + "+" + nodeArgs[i];
// }
// else {
// movieName += nodeArgs[i];
// }
// }

function getMovie(movieName){
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body) 

request(queryUrl, function(error, response, body){
      
    if (!error && response.statusCode === 200) {
      var responseBody = JSON.parse(body);

    console.log("The movie's rating is: ", responseBody);
  }
});
};

var commands = process.argv[2];
var parameter = process.argv.slice(3).join(" ");
console.log(parameter);
if(commands === "spotify-this-song") {
  getSong(parameter);
}
if(commands === "movie-this") {
  getMovie(parameter);
}
