import Logic from '../src/logic'

describe('Logic', () => {

  let logic;
  let mockTwitterClient;

  beforeEach(() => {
    mockTwitterClient = { post () {} };
    logic = new Logic(mockTwitterClient);
  });

  describe('when initialised', () => {
    it('is initialised with the right client property', () => {
      expect(logic.client).toEqual(mockTwitterClient);
    });
  });

  describe('postTweet', () => {
    it('calls post on the mockTwitterClient with the necessary parameters', () => {
      const spy = jest.spyOn(mockTwitterClient, 'post');
      logic.postTweet('Hello World');

      expect(spy).toHaveBeenCalledWith('statuses/update', {status: 'Hello World'});
    })
  });
});
