const { Language } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);

		this.language = {
			COMMAND_PING: 'Ping?',
			COMMAND_PING_DESCRIPTION: 'Pong!',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip: ${diff}ms. Heartbeat: ${ping}ms.)`,
		};
	}

	async init() {
		await super.init();
	}

};
