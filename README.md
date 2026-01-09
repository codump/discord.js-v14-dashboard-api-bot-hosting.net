# Codumpus
A dashboard bot with website and API on Bot-Hosting.net

> [!CAUTION]
> Still in development.

## Full installation guide
Will follow later.

## Know what I'm doing installation

| CMD        | <samp>`git clone https://github.com/codump/codumpus . && npm install`</samp>           |
| ------------- |:-------------:|
| **PowerShell**     | **<samp>`git clone https://github.com/codump/codumpus . ; npm install`</samp>** |

Rename empty-config.json to config.json and fill in the details.

## Dependencies
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
