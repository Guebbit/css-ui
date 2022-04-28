const stylelint = require('stylelint');
const styleLintFormatter = require('stylelint-config-standard-scss');
const assert = require('assert');
const path = require('path');

let lintResults = {};

describe('Test (test/test.js)', function () {
	/* TODO
	before(function (done) {
		stylelint.lint({
			configFile: path.join(__dirname, '../.stylelintrc.json'),
			ignorePath: path.join(__dirname, '../.stylelintignore'),
			formatter: styleLintFormatter,
			files: [
				path.join(__dirname, '../global/index.scss')
			],
		}).then(function (data) {
			lintResults = data;
			done();
		}).catch(function (err) {
			// do things with err e.g.
			console.error(err.stack);
			done();
		});
	});
	*/

	it('Linting', function () {
		// assert.equal(lintResults.errored, false);
	});

	/*
	after(function () {
		if (lintResults.errored) {
			const lintArray = JSON.parse(lintResults.output);
			for(let i = lintArray.length; i--; ){
				const { errored = false, source = '', deprecations = [], invalidOptionWarnings = [], parseErrors = [], warnings = [] } = lintArray[i];
				console.log(errored, source)
				// console.log("---------- ERRORS ----------")
				for(let k = parseErrors.length; k--; )
					console.log(parseErrors[k]);
				// console.log("---------- WARNINGS ----------")
				for(let k = warnings.length; k--; )
					console.log(warnings[k]);
				// console.log("---------- DEPRECATIONS ----------")
				for(let k = deprecations.length; k--; )
					console.log(deprecations[k]);
				// console.log("---------- INVALID OPTIONS ----------")
				for(let k = invalidOptionWarnings.length; k--; )
					console.log(invalidOptionWarnings[k]);
			}
		}
	});
	*/
});
