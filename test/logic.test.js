import Logic from '../src/logic'

describe('Logic', () => {
  it('is initialised with a Twitter property', () => {
    const mockTwitter = {};
    const logic = new Logic(mockTwitter);

    expect(logic.client).toEqual(mockTwitter);
  });
});
