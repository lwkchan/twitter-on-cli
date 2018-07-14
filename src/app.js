const App = function (twitterClient) {
  this.client = twitterClient
}

App.prototype.postTweet = function (tweet) {
  this.client.post('statuses/update', {status: tweet})
    .then(function (tweet) {
      console.log(tweet);
    })
    .catch(function (error) {
      console.error(error)
    })
};

module.exports = App
