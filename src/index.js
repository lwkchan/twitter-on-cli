#!/usr/bin/env node
const App = require('./app');
const {prompt} = require('inquirer')
const message = require('./promptMessages')
const program = require('commander');
const Twitter = require('twitter');
const client = new Twitter({
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET
});

const app = new App(client)

program
  .version('0.1.0')

program
  .command('tweet')
  .alias('t')
  .description('Tweet')
  .action((tweet) => {
    /* eslint-disable no-magic-numbers */
    if (process.argv.length > 4) {
      // If there is more than one object following `tweet` command
      console.log(message.incorrectFormat)
      process.exit()
    } else if (tweet.commands) {
      // If the object is the command object
      console.log(message.blankTweet)
      process.exit()
    } else {
      return tweet
    }
  })
  .action((tweet) => prompt(message.confirmTweet(tweet))
  .then(({confirm}) => {
      confirm
        ? app.postTweet(tweet)
        : console.log('Aborted');
    }))

program.parse(process.argv)
