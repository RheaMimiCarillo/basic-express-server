'use strict';

function fiveHundred(error, req, res, next)
{
  console.log(error);
  res.status(500);
  res.send('500: internal server error');
}

module.exports = fiveHundred;
