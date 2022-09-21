'use strict';

require('dotenv').config();
const server = require('./lib/server.js');

// set the PORT to be either the one in the .env file, or 3002
const PORT = process.env.PORT || 3002;

// start the server on the specified PORT
server.start(PORT);
