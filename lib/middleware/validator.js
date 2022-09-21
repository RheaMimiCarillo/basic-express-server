'use strict';

// here's where we'll check for our error conditions before getting back to our CRUD functions.

// we'll check for `404 bad route`, `404 bad method`, and `500 no name in the query string` and then run the appropriate error handler for each



function validator(req, res, next)
{
  // if the query has a `name` property
  if (req.query.name)
  {
    // we're good, go to the next thing
    next();
  }
  // if the query hasn't a name attached
  else
  {
    // get mad (throw an error in express)
    
    next('No \'name\' on request');
  } 
}

module.exports = validator;
