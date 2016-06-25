var express = require('express');
var router = express.Router();
var Twitter = require('twitter');



var client = new Twitter({
  consumer_key: 'FNq1RWoqbM0hR615sMB4ekdl7',
  consumer_secret: 'IwRtz0QJRF0zyw4rD2oBuKnMOS08YoYAJ5DGJ45omzcEuC9zIX',
  access_token_key: '3229498855-tDLVcrSr91gliRTbswuRabUEMvbpi9eyipvVTdZ',
  access_token_secret: '3v9bjgRY5OpKn3XZJEE4srkb3z9FOb0CawjQfdOt7f08E'
});


// client.stream('statuses/filter', {track: 'deadmau5'},  function(stream) {
//   stream.on('data', function(tweet) {
//     console.log(tweet.text);
//   });

//   stream.on('error', function(error) {
//     console.log(error);
//   });
// });


router.get('/', function(req, res, next) {
  client.get('statuses/user_timeline', {screen_name: 'deadmau5'},function(error, tweets, response){
    if(error) throw error;
    res.send(tweets);  // The favorites. 
  });
});

module.exports = router;
