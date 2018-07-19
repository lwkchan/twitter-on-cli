/* eslint-disable max-len */
module.exports = {
  blankTweet: 'Can\'t tweet blank entry. Please provide a string in quotation marks if you are typing multiple words (\'\')',
  confirmTweet: function confirmTweet (tweet) {
    return [
      {
        message: `Are you sure you want to Tweet:  ${tweet}?`,
        name: 'confirm',
        type: 'confirm'
      }
    ]
  },
  incorrectFormat: 'Incorrectly formatted tweet. Please provide a string in quotation marks if you are typing multiple words (\'\')'
}
