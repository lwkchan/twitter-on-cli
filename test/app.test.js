const App = require('../src/app')

describe('App', () => {
  let app;
  let mockTwitterClient;

  beforeEach(() => {
    mockTwitterClient = {
      options: {
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET
      },
      post () {
        return Promise.resolve('Success')
      }
    };
    app = new App(mockTwitterClient);
  });

  describe('when initialised', () => {
    it('is initialised with the right client property', () => {
      expect(app.client).toEqual(mockTwitterClient);
    });
    it('throws an error if no access keys are set', () => {
      const keylessClient = {
        options: {
          access_token_key: null,
          access_token_secret: null,
          consumer_key: null,
          consumer_secret: null
        }
      };
      // eslint-disable-next-line max-len
      const expectedError = 'Please set up API access in your environment variables'

      try {
        new App(keylessClient);
      } catch (error) {
        expect(error).toEqual(Error(expectedError))
      }
    });
  });

  describe('postTweet', () => {
    it('calls post on the twitterClient with the correct parameters', () => {
      const spy = jest.spyOn(mockTwitterClient, 'post');
      const tweet = 'Hello World'
      const expectedArguments = ['statuses/update', {status: tweet}];

      app.postTweet(tweet);

      expect(spy).toHaveBeenCalledWith(...expectedArguments);
      })
  });
});
