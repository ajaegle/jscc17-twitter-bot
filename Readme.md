# twitter-bot

Create a twitter bot for #jscc17 tweets.

1. We will be using a module by popular vote "twit".
2. We need a Twitter account. Andreas has one and will create the Bot.
   * Go to apps.twitter.com to create a new app.
   * Copy the tokens into config
   * In our example, the bot is called @twtbot8
3. Make a small `console.log` with the stream API of `twit`.
4. With theBot.post() we can send a status
   * Be aware that duplications of statusses are not allowed :)

How to run?

1. Set your twitter credentials as environment variables
   - TWITTER_CONSUMER_KEY=
   - TWITTER_CONSUMER_SECRET=
   - TWITTER_ACCESS_TOKEN=
   - TWITTER_ACCESS_TOKEN_SECRET=
2. set the name of your twitter bot (user handle)
   - TWITTER_BOT_USER=
3. npm start or docker run
