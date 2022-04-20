/*global describe, before, it, after, require*/
'use strict';

const stylelint = require('stylelint');
const styleLintFormatter = require('stylelint-config-standard-scss');
const assert = require('assert');
const path = require('path');

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
		// TODO assert.equal(lintResults.errored, false);
	});
	/*
	after(function () {
		if (lintResults.errored) {
			console.log(lintResults.output);
		}
	});
	*/
});
