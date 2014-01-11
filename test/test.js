'use strict';

var assert = require('assert');
var newError = require('../index.js');


describe('newError', function() {
	it('should have the passed name', function() {
		var StuffError = newError('StuffError');
		assert.equal((new StuffError()).name, 'StuffError');
	});

	it('should be instanceof Error', function() {
		var StuffError = newError('StuffError');
		assert.equal((new StuffError()) instanceof Error, true);
	});

	it('should be instanceof StuffError', function() {
		var StuffError = newError('StuffError');
		assert.equal((new StuffError()) instanceof StuffError, true);
	});

	it('should have the specified message', function() {
		var StuffError = newError('StuffError', 'test');
		assert.equal((new StuffError()).message, 'test');
	});

	it('should have the instantiated message', function() {
		var StuffError = newError('StuffError');
		assert.equal((new StuffError('test')).message, 'test');
	});

	it('should override the base message with the instantiated message', function() {
		var StuffError = newError('StuffError', 'test');
		assert.equal((new StuffError('test2')).message, 'test2');
	});
});
