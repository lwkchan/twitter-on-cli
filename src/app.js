const App = function App (twitterClient) {
  this.client = twitterClient
}

App.prototype.postTweet = function postTweet (tweet) {
  this.client.post('statuses/update', {status: tweet}).
    then((response) => {
      console.log(response);
    }).
    catch((error) => {
      console.error(error)
    })
};

module.exports = App
