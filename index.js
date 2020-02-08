const { Ender: { plugin } } = require('../..');

module.exports = {
	[plugin]() {
		this.commands.registerCoreDirectory(`${__dirname}/`);
		this.languages.registerCoreDirectory(`${__dirname}/`);
	}
};
