#!/usr/bin/env node
const App = require('./app');
const {prompt} = require('inquirer')
const program = require('commander');
const Twitter = require('twitter');
const client = new Twitter({
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET
});

const app = new App(client)

program.version('0.1.0')

program
  .command('tweet')
  .alias('t')
  .description('Tweet')
  .action((tweet) => prompt([
      {
        message: `Are you sure you want to Tweet:  ${tweet}?`,
        name: 'confirm',
        type: 'confirm'
      }
    ]).then(({confirm}) => {
      if (confirm) {
        app.postTweet(tweet)
      }
    }))

program.parse(process.argv)
