const stylelint = require('stylelint');
const styleLintFormatter = require('stylelint-config-standard-scss');
const assert = require('assert');

let lintResults = {};

describe('Test (test/test.js)', function () {
	before(function (done) {
		stylelint.lint({
			configFile: './.stylelintrc.json',
			ignorePath: './.stylelintignore',
			formatter: styleLintFormatter,
			files: ["*.scss", "**/*.scss"] // path.join(__dirname, '../**/*.scss')
		}).then(function (data) {
			lintResults = data;
			done();
		}).catch(function (err) {
			// do things with err e.g.
			console.error(err.stack);
			done();
		});
	});

	it('Linting', function () {
		assert.equal(lintResults.errored, false);
	});

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
});
