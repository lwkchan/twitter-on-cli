const App = function App (twitterClient) {
  this._checkClient(twitterClient);
  this.client = twitterClient
}

App.prototype = {
  postTweet: function (tweet) {
    this.client.post('statuses/update', {status: tweet}).
      then((response) => {
        console.log(response);
      }).
      catch((error) => {
        console.error(error)
      })
  },

  _checkClient: function (twitterClient) {
    if(!(twitterClient.access_token_key &&
         twitterClient.access_token_secret &&
         twitterClient.consumer_key &&
         twitterClient.consumer_secret
    )){
      throw 'Please set up API access in your environment variables'
    }
  }
}

module.exports = App
