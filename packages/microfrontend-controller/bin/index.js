#!/usr/bin/env node

const { promiseExec } = require('../utils/process');
const { getAppFile, fileExistsSync } = require('../utils/fs');

const package = getAppFile('package.json');

const args = process.argv.slice(2);
const script = args[0];

({
	build: async () => {
		const build = require('../scripts/build');
		await build();
	},
	start: async () => {
		const start = require('../scripts/start');
		await start();
	},
	"build-all": async() => {
		const buildAll = require('../scripts/build-all');
		await buildAll();
	},
	"start-all": async() => {
		const startAll = require('../scripts/start-all');
		await startAll();
	},
	"start-mock": async() => {
		const startMock = require('../scripts/start-mock');
		const baseUrl = args[1];
		await startMock(baseUrl);
	},
	"start-with-repo": async() => {
		const startWithRepo = require('../scripts/start-with-repo');
		await startWithRepo();
	}
}[script])();
