# discord.js-v14-dashboard-api-bot-hosting.net
A basic bot with a dashboard website and API on Bot-Hosting.net

> [!CAUTION]
> Still in development.

## Installation

| CMD        | <samp>`git clone https://github.com/codump/discord.js-v14-dashboard-api-bot-hosting.net && cd discord.js-v14-dashboard-api-bot-hosting.net && npm install`</samp>           |
| ------------- |:-------------:|
| **PowerShell**     | **<samp>`git clone https://github.com/codump/discord.js-v14-dashboard-api-bot-hosting.net ; cd discord.js-v14-dashboard-api-bot-hosting.net ; npm install`</samp>** |

Rename empty-config.json to config.json and fill in the details.

Slash command on discord `/botserver` -> action

Returning Error: 401 means the botServerId and/or botServerApiKey in the config are incorrect.

## Dependancies
- Discord.js v14
- Express
- Nodemon (for local start)