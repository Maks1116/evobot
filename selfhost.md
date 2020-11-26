If you don't want to self-host this bot you can add it to your server using this link: https://discord.com/oauth2/authorize?client_id=668783690674995210&scope=bot&permissions=3345416

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID **[Guide](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
3. Node.js v12.0.0 or newer

## 🚀 Getting Started

If deploying to Heroku make sure to create config variables

![heroku](https://i.imgur.com/iaoUePg.png?1)

```
git clone https://github.com/maks1116/coderdojo.git
cd coderdojo
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## ⚙️ Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "comment": "Don't change NASA_API_KEY unless you have one. If you don't that one will work",
  "NASA_API_KEY": "DEMO_KEY",
  "TENOR_API_KEY": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "/",
  "PRUNING": false,
  "STAY_TIME": 30,
  "activities_list": [
    "Hello",
    "Type here custom bot status",
    "You can also add that much as you want"
  ],
  "MEME_SUBREDDITS": ["dank_memes", "meme", "funny"]
}

```