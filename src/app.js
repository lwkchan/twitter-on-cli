const App = function App (twitterClient) {
  this._checkClient(twitterClient);
  this.client = twitterClient
}

App.prototype = {
  _checkClient: function _checkClient (twitterClient) {
    const {options} = twitterClient;

    if (!options.access_token_key ||
        !options.access_token_secret ||
        !options.consumer_key ||
        !options.consumer_secret
    ) {
      throw new Error('Please set up API access in your environment variables')
    }
  },
  postTweet: function postTweet (tweet) {
    this.client.post('statuses/update', {status: tweet})
    .then((response) => console.log(response))
    .catch((error) => console.error(error))
  }
}

module.exports = App
