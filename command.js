const { REST, Routes } = require("discord.js");
const dotenv = require("dotenv")
//load environments variables from .env file
const clientID = process.env.CLIENT_ID
const token = process.env.TOKEN
const commands = [
	{
		name: "ping",
		description: "Replies with pong",
	},
];

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
	try {
		console.log("Started refreshing application (/) commands.");

		await rest.put(Routes.applicationCommands(clientID), {
			body: commands,
		});

		console.log("Successfully reloaded application (/) commands.");
	} catch (error) {
		console.error(error);
	}
})();
