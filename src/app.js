const App = function App (twitterClient) {
  console.log('initialising...')
  this._checkClient(twitterClient);
  this.client = twitterClient
}

App.prototype = {
  _checkClient: function _checkClient (twitterClient) {
    const twitterClientOptions = twitterClient.options;

    if (!twitterClientOptions.access_token_key ||
        !twitterClientOptions.access_token_secret ||
        !twitterClientOptions.consumer_key ||
        !twitterClientOptions.consumer_secret
    ) {
      throw new Error('Please set up API access in your environment variables')
    }
  },
  postTweet: function postTweet (tweet) {
    this.client.post('statuses/update', {status: tweet}).
    then((response) => console.log(response)).
    catch((error) => console.error(error))
  }
}

module.exports = App
