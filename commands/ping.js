const { Command } = require('../../..');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: (language) => language.get(`COMMAND_${this.name.toUpperCase()}_DESCRIPTION`)
		});
	}

	async run(message) {
		const msg = await message.send(`${message.guild.language.get('COMMAND_PING')}`);
		return message.send(`${message.guild.language.get('COMMAND_PINGPONG', (msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp), Math.round(this.client.ws.ping))}`);
	}

};
