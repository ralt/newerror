'use strict';

module.exports = function(type, message) {
	var newError = function(instantiatedMessage) {
		this.name = type;
		this.message = instantiatedMessage || message;
		this.stack = (new Error()).stack;
	};

	newError.prototype = new Error();

	return newError;
};
