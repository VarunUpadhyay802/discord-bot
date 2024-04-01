# Discord Bot

This repository contains code for a Discord bot built with Discord.js.

## Setup

1. **Environment Variables**: Before running the bot, make sure to create a `.env` file in the root directory of the project and set the following environment variables:


Replace `your_client_id_here` with your Discord bot's client ID and `your_discord_bot_token_here` with your Discord bot token. Make sure to keep this information confidential and never share it publicly.
CLIENT_ID=your_client_id_here
TOKEN=your_discord_bot_token_here


2. **Installation**: Run `npm install` to install the necessary dependencies.

3. **Running the Bot**: Start the bot by running `node index.js`.

## Bot Functionality

The bot listens for messages and responds with "Hi from bot" to any non-bot messages. Additionally, it generates short IDs for URLs when a message starts with "create". It also responds to slash commands with "Pong!".

## Files

- `index.js`: Contains the main code for setting up the Discord bot client and handling message events.
- `command.js`: Contains code for refreshing slash commands in the Discord application.
- `.env`: Stores sensitive information like the bot token and client ID. Make sure to keep this file secure and never share it publicly.

## Dependencies

- [discord.js](https://discord.js.org/): A powerful JavaScript library for interacting with the Discord API.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file into `process.env`.

Feel free to explore and modify the code to suit your needs!
