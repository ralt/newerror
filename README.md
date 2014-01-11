# newError

![Travis build](https://api.travis-ci.org/Ralt/newError.png)

Create Error subclasses without sweating it!

## How?

```javascript
var newError = require('newError');

var StuffError = newError('StuffError');

// [...]
try {
    throw new StuffError();
} catch (e) {
    console.log(e instanceof StuffError); // true
}
```

## Why?

Creating a new Error subclass is quite easy, but there are some things you shouldn't forget:

- The stack has to be re-created or the stack trace is lost.
- The prototype has to be correctly set.
- The `name` property has to be correctly set.

So this module is just to ease the creation of Error subclasses, and never get it wrong.

## API

The `newError` function takes 2 arguments:

- `type`: the name of the new Error subclass.
- `message`: the default message when an error is thrown.

To use this function:

```javascript
var newError = require('newError');

var StuffError = newError('StuffError', 'test');
throw new StuffError(); // "StuffError: test"
throw new StuffError('another test'); // "StuffError: another test"
```

## Contributors

- [Florian Margaine](http://margaine.com)

## License

MIT License.
