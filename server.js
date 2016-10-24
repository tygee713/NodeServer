var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

var compliments = ["You have nice hair", "You're very creative", "You're super smart"];
var insults = ["Your breath stinks", "You have a bad sense of humor", "No one likes you"];

function goodRequests(request, response) {
  response.end(compliments[Math.floor(Math.random()*compliments.length)]);
  // if (request.port == 7000) {
  //   response.end('You rock');
  // }
  // else if (request.port == 7500) {
  //   response.end('You suck');
  // }
}

function badRequests(request, response) {
  response.end(insults[Math.floor(Math.random()*insults.length)]);
}

var server1 = http.createServer(goodRequests);
var server2 = http.createServer(badRequests);

server1.listen(PORT1, function() {
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT1);
});

server2.listen(PORT2, function() {
  console.log("SERVER LISTENING ON: http://localhost:%s", PORT2)
});