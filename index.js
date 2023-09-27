//this script sends a tweet from the @podclipsapp twitter account  

const { TwitterApi } = require("twitter-api-v2"); //https://github.com/PLhery/node-twitter-api-v2

require('dotenv').config();

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET_KEY,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const textTweet = async () => {
  try {
    await client.v2.tweet(
      "Test tweet 3"
    );
    console.log("successfully sent tweet");
  } catch (error) {
    console.error('Error sending tweet', error);
  }
};

textTweet();
