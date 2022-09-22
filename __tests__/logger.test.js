'use strict';

// import the logger into this tester
const logger = require('../lib/middleware/logger');

describe('testing logger middleware', () =>
{
  // what are we telling jest?
  // "was the console.log() function called, when we invoked the `logger` function?"
  test('should log something when invoked', () =>
  {
    // looking at the global environment, is there a console object with a log method to track?
    jest.spyOn(console, 'log');

    // define req as an object with a method and path
    const req = {
      method: 'TEST',
      path: 'TEST',
    };

    // empty response
    const res = {};

    // mock function
    // just tracks whatever is passed into it
    const next = jest.fn();

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('REQUEST METHOD: ' + req.method, 'REQUEST PATH: ' + req.path);
  });
});
