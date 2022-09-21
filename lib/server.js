'use strict';


const express = require('express');
const app = express();

// app.get() is a whole function
// inside app.get, we have 
app.get('/person', (req, res) =>
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
