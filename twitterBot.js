
var Twit = require('twit');
var T = new Twit({
    consumer_key:         'JBJUBMi6uBz1j4587RHoWVWX9' // Your Consumer Key
  , consumer_secret:      'ChwkS3eXX0obPAGPaw5thpRt8bMr4nbNa7fK3Vc4M8Bieeegr0' // Your Consumer Secret
  , access_token:         '150020683-nztFnojPcUyxUVXllWXFJ9p99JAaTA6MFE6tr5Wx' // Your Access Token
  , access_token_secret:  'jzQMrFnAFjyqMEC7aIDI5hymElWf329Y1dysj0vOAiEGu' // Your Access Token Secret
});
T.post('statuses/update', { status: "I'm posting a tweet!" }, function(err, data, response) {
if(err) {
console.log("There was a problem tweeting the message.", err);
  }
});