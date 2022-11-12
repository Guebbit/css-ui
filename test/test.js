const stylelint = require('stylelint');
const styleLintFormatter = require('stylelint-config-standard-scss');
const assert = require('assert');
const path = require('path');

const util = require('util')
const sass = require('sass');



let lintResults = {};

describe('Test (test/test.js)', function () {

	it("It compiles in CSS", () => {
		const sassRender = util.promisify(sass.render);
		return sassRender({
			includePaths: ['./scss'],
			file: path.join(__dirname, '../library.scss')
		});
	});

	it('Linting', async () => {
		return stylelint.lint({
			configFile: path.join(__dirname, '../.stylelintrc.json'),
			ignorePath: path.join(__dirname, '../.stylelintignore'),
			formatter: styleLintFormatter,
			files: [
				// path.join(__dirname, '../global/index.scss'),
				path.join(__dirname, '../library.scss'),
			],
		}).then(function (lintResults) {
			return assert.equal(lintResults.errored, false);
		}).catch(function (error) {
			// do things with err e.g.
			console.error(error.stack);
			return false;
		});
	});
});
