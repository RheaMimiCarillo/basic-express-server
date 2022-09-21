'use strict';


const express = require('express');
const app = express();

const logger = require('/middleware/logger.js');
const validator = require('/middleware/validator.js');


// declare the use of the logger first, so that hits to the server always pass through the logger,
// make sure not the run logger as `logger()`
// that'd throw an error
app.use(logger);

// app.get() is a whole function
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
      console.log('App is running on port :: ' + port);
    });
  },
  app,
};
