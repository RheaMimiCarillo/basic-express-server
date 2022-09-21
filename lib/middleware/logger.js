'use strict';


// this function logs each hit to our server, then goes to the `next` function
function logger(req, res, next)
{
  // log something
  console.log();

  // then go to the next middleware
  next();
}

module.exports = logger;
