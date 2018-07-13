class Logic {
  constructor (twitterClient) {
    this.client = twitterClient
  }

  postTweet (tweet) {
    this.client.post('statuses/update', {status: tweet})
  }
}

export default Logic;
