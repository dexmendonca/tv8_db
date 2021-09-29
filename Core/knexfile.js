require('dotenv-safe').config();

// const { FsMigrations } = require('knex/lib/migrate/sources/fs-migrations');

module.exports = {
	development: {
		client: process.env.DEV_DATABASE_CLIENT,
		connection: {
			host: process.env.DEV_DATABASE_HOST,
			port: process.env.DEV_DATABASE_PORT,
			database: process.env.DEV_DATABASE_NAME,
			user: process.env.DEV_DATABASE_USER,
			password: process.env.DEV_DATABASE_PASSWORD
		},
		pool: {
			min: parseInt(process.env.DEV_DATABASE_POOL_MIN),
			max: parseInt(process.env.DEV_DATABASE_POOL_MAX)
		},
		migrations: {
			tableName: 'migrations'
		},
		seeds: {
			directory: './seeds/development'
		}
	},
	staging: {
		client: process.env.STA_DATABASE_CLIENT,
		connection: {
			host: process.env.STA_DATABASE_HOST,
			port: process.env.STA_DATABASE_PORT,
			database: process.env.STA_DATABASE_NAME,
			user: process.env.STA_DATABASE_USER,
			password: process.env.STA_DATABASE_PASSWORD
		},
		pool: {
			min: parseInt(process.env.STA_DATABASE_POOL_MIN),
			max: parseInt(process.env.STA_DATABASE_POOL_MAX)
		},
		migrations: {
			tableName: 'migrations'
		},
		seeds: {
			directory: './seeds/staging'
		}
	},
	production: {
		client: process.env.PRD_DATABASE_CLIENT,
		connection: {
			host: process.env.PRD_DATABASE_HOST,
			port: process.env.PRD_DATABASE_PORT,
			database: process.env.PRD_DATABASE_NAME,
			user: process.env.PRD_DATABASE_USER,
			password: process.env.PRD_DATABASE_PASSWORD
		},
		pool: {
			min: parseInt(process.env.PRD_DATABASE_POOL_MIN),
			max: parseInt(process.env.PRD_DATABASE_POOL_MAX)
		},
		migrations: {
			tableName: 'migrations'
		},
		seeds: {
			directory: './seeds/production'
		}
	}
};
