const version = require('../sql_file/migration/_log');

exports.up = async (knex) => {
	await knex.raw(version.up);
};

exports.down = async (knex) => {
	await knex.raw(version.down);
};
