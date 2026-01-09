# discord.js-v14-dashboard-api-bot-hosting.net
A basic bot with a dashboard website and API on Bot-Hosting.net

> [!CAUTION]
> Still in development.

## Full installation guide
Will follow later.

## Know what I'm doing installation

| CMD        | <samp>`git clone https://github.com/codump/discord.js-v14-dashboard-api-bot-hosting.net && cd discord.js-v14-dashboard-api-bot-hosting.net && npm install`</samp>           |
| ------------- |:-------------:|
| **PowerShell**     | **<samp>`git clone https://github.com/codump/discord.js-v14-dashboard-api-bot-hosting.net ; cd discord.js-v14-dashboard-api-bot-hosting.net ; npm install`</samp>** |

Rename empty-config.json to config.json and fill in the details.

## Dependancies
- Discord.js v14
- Express
- Nodemon (for local start)

## Knowledge base
- Slash command on discord `/botserver` -> action
  - Action `info` gives server information.
  - Action `start` starts the bot server.
  - Action `restart` restarts the bot server.
  - Action `stop` stops the bot server.
  - Returning Error: 401 means the botServerId and/or botServerApiKey in the config are incorrect.
