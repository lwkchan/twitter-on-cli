module.exports = {
  confirmTweet: function confirmTweet (tweet) {
    return [
      {
        message: `Are you sure you want to Tweet:  ${tweet}?`,
        name: 'confirm',
        type: 'confirm'
      }
    ]
  }
}
