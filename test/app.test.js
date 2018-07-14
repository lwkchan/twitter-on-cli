const App = require('../src/app')

describe('App', () => {

  let app;
  let mockTwitterClient;

  beforeEach(() => {
    mockTwitterClient = {post () { return Promise.resolve('Success')}};
    app = new App(mockTwitterClient);
  });

  describe('when initialised', () => {
    it('is initialised with the right client property', () => {
      expect(app.client).toEqual(mockTwitterClient);
    });
  });

  describe('postTweet', () => {
    it('calls post on the mockTwitterClient with the correct parameters', () => {
      const spy = jest.spyOn(mockTwitterClient, 'post');
      const tweet = 'Hello World'
      const expectedArguments = [
                                  'statuses/update',
                                  {status: tweet}
                                ];

      app.postTweet(tweet);

      expect(spy).toHaveBeenCalledWith(...expectedArguments);
    })
  });
});
