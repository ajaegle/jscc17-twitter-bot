const Twit = require("twit");
const config = require("./config.json");

const theBot = new Twit({
  ...config
});

const stream = theBot.stream('statuses/filter', { track: 'unicorn jscc17' });

stream.on("tweet", handleTweet);

function handleTweet(tweet) {
  const status = "I saw a unicorn at #jscc17";
  theBot.post('statuses/update', { status: status }, console.log);
}
