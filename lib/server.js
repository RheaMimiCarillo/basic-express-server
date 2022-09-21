'use strict';

// 'require' express
const express = require('express');
// make in instance of express`called `app`
const app = express();

// require the thing from logger.js
const logger = require('/middleware/logger.js');

// require the use of the thing from validator.js
// the thing from validator.js will make sure we have whatever conditions all good before proceeding to the next part of the call stack
const validator = require('/middleware/validator.js');


// declare the use of the logger first, so that hits to the server always pass through the logger,
// make sure not the run logger as `logger()`
// that'd throw an error
app.use(logger);

// note to me: app.get() itself is a function, and it has functions inside of it
// run the validator function before running the body of the app.get expression
app.get('/person', validator, (req, res) =>
{
  // respond with a JSON object
  res.json({
    // give this JSON a name key
    // with the value as the name in the request query
    name: req.query.name,
  });
});



module.exports =
{
  start: (port) =>
  {
    app.listen(port, () =>
    {
      // log the
      console.log('App is running on port :: ' + port);
    });
  },
  app,
};
