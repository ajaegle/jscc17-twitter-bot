const Twit = require("twit");

const botUser = process.env.TWITTER_BOT_USER || "twbot8";

const config = {
  "consumer_key": process.env.TWITTER_CONSUMER_KEY,
  "consumer_secret": process.env.TWITTER_CONSUMER_SECRET,
  "access_token": process.env.TWITTER_ACCESS_TOKEN,
  "access_token_secret": process.env.TWITTER_ACCESS_TOKEN_SECRET
};

const theBot = new Twit({
  ...config
});

const stream = theBot.stream('statuses/filter', { track: 'jscc17' });

stream.on("tweet", handleTweet);

function handleTweet(tweet) {
  const sender = tweet.user.screen_name;
  const status = `@${sender} thanks for tweeting to #jscc17. Balls galore!`;

  if(sender !== botUser) {
    console.log("tweeting:", status)
    theBot.post('statuses/update', { status, in_reply_to_status_id: tweet.id_str });
  } else {
    console.log("found my own tweet...");
  }
}
