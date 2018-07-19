# Tweep - Use Twitter on CLI
A Command Line Interface (CLI) app which interacts with Twitter API

At the moment, this app is *very* basic - it can only write Tweets to your Twitter feed. If I fancy later on, I'll look to expand functionality. My own ideas include:

- ~~Checking whether the user is sure to post a tweet before posting it~~ --Completed
- ~~Handle errors when not passing in the right parameter~~ --Completed
- Searching for the last few tweets of a particular user
- Retweeting
- Liking Tweets

## Setup

You'll first of all need to get some access tokens from Twitter to set up your app. You can get these here: https://apps.twitter.com/. You'll need Read and Write access for this app. Once you've applied and got the keys, set them up as environment variables in your ```~/.zshrc``` or ```~/.bshrc``` file (depending on the terminal shell you use).

You'll need the following environment variables:
```
TWITTER_ACCESS_TOKEN_KEY,
TWITTER_ACCESS_TOKEN_SECRET,
TWITTER_CONSUMER_KEY,
TWITTER_CONSUMER_SECRET
```
See more on environment variables here: https://scotch.io/tutorials/how-to-use-environment-variables.

Then to setup the actual use of the app:

```
git clone https://github.com/lwkchan/twitter-on-cli.git
cd twitter-on-cli
npm i
```

Either, run the app local to the file.
```
src/index.js tweet 'this is what i want to Tweet to the world!'
```

Or, to run as a global command, you'll need to run ```yarn link``` to make a symbolic link between the project directory and the ```tweep``` command. Then, once it's linked, you can tweet with:
```
tweep tweet 'this is what i want to Tweet to the world!'
```

## Testing

* Unit testing is done through Jest - to run these tests just run ```npm run test``` - this command watches for any changes made to the codebase as well.
* Feature testing is done through Cucumber and Aruba - these are Ruby gems, so make sure you have Ruby installed to run these.
  * When you have Ruby installed, run ```gem install bundler``` to install the handy Gem installer, then run ```bundle install``` to install the gems in this repo's Gemfile. The tests assume that you have environment variables and the global ```tweep``` command set up (see above in the Setup section if you haven't done so yet).
  * Run ```cucumber``` to run all the tests. Be warned though, that some tests will actually send out real tweets to your linked account. To avoid doing this too much, I've included tags in the Cucumber feature tests. To run a test with a specific tag, just use the command ```cucumber --tag @tagname``` replacing 'tagname' with the relevant feature test tag. The tag @notweet does not tweet, but the tag @tweet does.
