'use strict';

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
