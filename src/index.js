#!/usr/bin/env node
require('babel-register');
const App = require('./app')
const program = require('commander');
const Twitter = require('twitter');
/* eslint-disable camelcase */
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
  .action((tweet) => { app.postTweet(tweet)});

program
  .command('test')
  .action(() => {console.log(client)})

program.parse(process.argv)
